import { get } from 'lodash';
import queryString from 'query-string';
import React, {
    createContext,
    FC,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useReducer,
} from 'react';
import { getUser } from '../../api';
import { getTokenLocal, IToken, setToken } from '../../api/token';
import { Loading } from '../../component/loading';
import { initialState, IState, reducer } from './reducer';
import * as types from './types';

const initialContext = {
    state: initialState,
    dispatch: () => {},
};

interface IContext {
    state: IState;
    dispatch: React.Dispatch<any>;
}

const AuthContext = createContext<IContext>(initialContext);

interface Props {
    children: ReactNode;
}

export const AuthProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const tokens = document.cookie.replace('tokens=', '');
        const tokensObj = queryString.parse(decodeURIComponent(tokens));

        const accessToken = get(tokensObj, 'accessToken');
        const refreshToken = get(tokensObj, 'refreshToken');

        if (accessToken && refreshToken) {
            const token = {
                ...getTokenLocal(),
                accessToken: accessToken as string,
                refreshToken: refreshToken as string,
            };

            setToken({
                token: token as IToken,
                remember: true,
            });
        }
    }, []);

    useEffect(() => {
        async function loadUser() {
            try {
                const user = await getUser();
                dispatch({
                    type: types.LOAD_USER_DONE,
                    payload: user,
                });
            } catch (error) {
                dispatch({
                    type: types.LOAD_USER_DONE,
                });
            }
        }

        loadUser();
    }, []);

    const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

    if (state.loading) {
        return <Loading />;
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const { state, dispatch } = useContext(AuthContext);

    const loadUserDone = (user: any) => {
        dispatch({
            type: types.LOAD_USER_DONE,
            payload: user,
        });
    };

    return { ...state, loadUserDone };
};
