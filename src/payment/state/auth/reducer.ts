import * as types from './types';

export interface IState {
    loading: boolean;
    user: any;
}

interface IAction {
    type: string;
    payload?: any;
}

export const initialState: IState = {
    loading: true,
    user: undefined,
};

export const reducer = (state: IState, action: IAction) => {
    switch (action.type) {
        case types.LOADING:
            return {
                ...state,
                loading: true,
            };
        case types.LOAD_USER_DONE:
            return {
                ...state,
                user: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};
