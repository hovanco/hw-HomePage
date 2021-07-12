import React, {
    createContext,
    FC,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useReducer,
} from 'react';
import { getStore } from '../../api/store';
import { useAuth } from '../auth';
import * as types from './types';

import { initialState, IState, reducer } from './reducer';
import { Loading } from '../../component/loading';
import { get } from 'lodash';

interface IContext {
    state: IState;
    dispatch: React.Dispatch<any>;
}

const initialContext = {
    state: initialState,
    dispatch: () => {},
};

const StoreContext = createContext<IContext>(initialContext);

interface Props {
    children: ReactNode;
}

export const StoreProvider: FC<Props> = ({ children }) => {
    const { user } = useAuth();
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        async function loadStore() {
            try {
                dispatch({ type: types.LOADING });
                const store = await getStore();

                const idStore = get(store, '_id');

                if (idStore) {
                    dispatch({ type: types.LOAD_STORE_DONE, payload: store });
                } else {
                    dispatch({ type: types.LOAD_STORE_DONE });
                }
            } catch (error) {
                dispatch({ type: types.LOAD_STORE_DONE });
            }
        }
        if (user) {
            loadStore();
        } else {
            dispatch({ type: types.LOAD_STORE_DONE });
        }
    }, [user]);

    const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

    if (state.loading) {
        return <Loading />;
    }

    return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};

export const useStore = () => {
    const { state, dispatch } = useContext(StoreContext);

    const loadStoreDone = (store: any) => {
        dispatch({ type: types.LOAD_STORE_DONE, payload: store });
    };

    return {
        ...state,
        loadStoreDone,
    };
};
