import { IPackage, packagesFilter as packages, BillingPeriods } from '../../constants';
import * as types from './types';
export interface IState {
    loading: boolean;
    packages: IPackage[];
    transactionCode?: string;
    period?: number;
    success: boolean;
}

export interface IAction {
    type: string;
    payload?: any;
}

export const initialState: IState = {
    loading: true,
    packages: packages,
    transactionCode: undefined,
    period: BillingPeriods.OneMonth,
    success: false,
};

export const reducer = (state: IState, action: IAction) => {
    switch (action.type) {
        case types.LOADING:
            return {
                ...state,
                loading: true,
            };

        case types.LOAD_PACKAGES_DONE:
            return {
                ...state,
                packages: action.payload,
                loading: false,
            };

        case types.SET_TRANSACTION_CODE:
            return {
                ...state,
                transactionCode: action.payload,
            };

        case types.ADD_PACKAGE:
            return {
                ...state,
                packages: action.payload,
            };

        case types.ADD_PACKAGES:
            return {
                ...state,
                packages: [...state.packages, ...action.payload],
            };

        case types.REMOVE_PACKAGE:
            return {
                ...state,
                packages: action.payload,
            };

        case types.SET_PERIODS:
            return {
                ...state,
                period: action.payload,
            };

        case types.CHANGE_SUCCESS:
            return {
                ...state,
                success: action.payload,
            };

        default:
            return state;
    }
};
