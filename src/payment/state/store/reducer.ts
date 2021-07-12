import * as types from './types';

export interface IState {
    loading: boolean;
    store: any;
}

export interface IAction {
    type: string;
    payload?: any;
}

export const initialState: IState = {
    loading: true,
    store: undefined,
};

export const reducer = (state: IState, action: IAction) => {
    switch (action.type) {
        case types.LOADING:
            return {
                ...state,
                loading: true,
            };

        case types.LOAD_STORE_DONE:
            return {
                ...state,
                store: action.payload,
                loading: false,
            };

        default:
            return state;
    }
};
