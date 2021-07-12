import axios from 'axios';
import { NextFunction, Request, Response } from 'express';
import jwtDecode from 'jwt-decode';
import { get } from 'lodash';
import queryString from 'query-string';

function checkToken(token?: string): boolean {
    if (!token) {
        return false;
    }
    const tokenDecode = jwtDecode(token);

    const expToken = get(tokenDecode, 'exp');

    if (!expToken) {
        return false;
    }

    const dateNow = Math.floor(Date.now() / 1000);

    return expToken - dateNow > 0;
}

async function getUser(token: string): Promise<string> {
    const response = await axios({
        method: 'GET',
        url: 'https://dev.insa.app/api/authentication/v1/users/info',

        headers: {
            'content-type': 'application/json',
            Authorization: 'Bearer ' + token,
        },
    });

    return response.data;
}

async function requestAccessToken(refreshToken: string): Promise<{ accessToken: string }> {
    const response = await axios({
        method: 'POST',
        url: `https://dev.insa.app/api/authentication/v1/auth/refresh-token`,
        data: {
            refreshToken,
        },
    });

    return response.data;
}

async function requestUser(accessToken: string, refreshToken: string, res: Response) {
    try {
        const user = await getUser(accessToken);

        return {
            user,
            accessToken,
        };
    } catch (error) {
        const isValidRefreshToken = checkToken(refreshToken);
        if (!isValidRefreshToken) {
            res.clearCookie('tokens');
            return {
                user: undefined,
                accessToken: undefined,
            };
        }

        try {
            const response = await requestAccessToken(refreshToken);
            const user = await getUser(get(response, 'accessToken'));

            return {
                user,
                accessToken: get(response, 'accessToken'),
            };
        } catch (error) {
            res.clearCookie('tokens');
            return {
                user: undefined,
                accessToken: undefined,
            };
        }
    }
}

interface ITokens {
    accessToken?: string;
    refreshToken?: string;
}

function getTokens(req: Request): ITokens {
    const accessToken = get(req.query, 'accessToken') as string;
    const refreshToken = get(req.query, 'refreshToken') as string;

    return {
        accessToken,
        refreshToken,
    };
}

export async function saveTokenMiddleware(req: Request, res: Response, next: NextFunction) {
    next();
}

export async function authMiddleware(req: any, res: Response, next: NextFunction) {
    const { accessToken, refreshToken } = getTokens(req);

    if (accessToken && refreshToken) {
        try {
            res.cookie('tokens', queryString.stringify({ accessToken, refreshToken }));
            const user = await getUser(accessToken);
            req.user = user;

            next();
        } catch (error) {
            try {
                const newAccessToken = await requestAccessToken(refreshToken);

                const user = await getUser(newAccessToken.accessToken);
                req.user = user;

                next();
            } catch (error) {
                res.clearCookie('tokens');
                next();
            }
        }
    } else {
        const tokens = req.cookies.tokens;

        if (tokens) {
            const { accessToken, refreshToken } = queryString.parse(tokens);
            const response = await requestUser(accessToken as string, refreshToken as string, res);
            req.user = response.user;

            res.cookie(
                'tokens',
                queryString.stringify({ ...tokens, accessToken: response.accessToken }),
            );
            next();
        } else {
            next();
        }
    }
}
