import axios from 'axios';
import queryString from 'query-string';
import { URL_AUTH } from '../constants';
import { refreshAccessToken } from './auth';
import { checkToken, getToken, getTokenLocal, removeToken, setToken } from './token';

let isRefreshed = false;

const axiosClient = axios.create({
    baseURL: URL_AUTH,
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use((config) => {
    const accessToken = getToken('accessToken');

    if (accessToken) {
        config.headers['Authorization'] = 'Bearer ' + accessToken;
    }
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        if (response.data) {
            return response.data;
        }
        return response;
    },

    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !isRefreshed) {
            isRefreshed = true;
            const refreshToken = getToken('refreshToken');

            if (refreshToken) {
                const isValidRefreshToken = checkToken(refreshToken);

                if (!isValidRefreshToken) {
                    return Promise.reject(error);
                }

                try {
                    const response = await refreshAccessToken(refreshToken);
                    const tokenLocal = getTokenLocal();
                    const { accessToken } = response;

                    setToken({
                        token: {
                            ...(tokenLocal as any),
                            accessToken,
                        },
                        remember: true,
                    });

                    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

                    return axiosClient(originalRequest);
                } catch (err) {
                    if (err.response.status === 401) {
                        removeToken();
                    }

                    return Promise.reject(err);
                }
            }

            return Promise.reject(error);
        }

        return Promise.reject(error);
    },
);

export { axiosClient };
