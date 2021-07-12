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
import {
    BillingPeriods,
    EBillingPackageType,
    IPackage,
    packagesFilter as packages,
} from '../../constants';
import { createTransactionCode } from '../../api';
import { Loading } from '../../component/loading';
import { useStore } from '../store';
import { initialState, IState, reducer } from './reducer';
import * as types from './types';

interface IContext {
    state: IState;
    dispatch: React.Dispatch<any>;
}

const initialContext = {
    state: initialState,
    dispatch: () => {},
};

const PackageContext = createContext<IContext>(initialContext);

interface Props {
    children: ReactNode;
}

export const PackageProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        async function getPackages() {
            const search = queryString.parse(window.location.search);

            if (!search.packages) {
                dispatch({
                    type: types.LOAD_PACKAGES_DONE,
                    payload: [],
                });
                return;
            }

            const packageIds = (search.packages as string).split(',');

            let packageIdsExist: string[] = [];
            let packagesSelect: IPackage[] = [];

            packageIds.forEach((code: string) => {
                const packageExist = state.packages.find((item: IPackage) => item.type === code);

                if (packageExist) {
                    packagesSelect.push(packageExist);
                    packageIdsExist.push(code);
                }
            });

            if (packageIdsExist.length !== packageIds.length) {
                const url = `${window.location.origin}/error?packages=${search}`;
                window.location.href = url;
            }

            if (packageIdsExist.length === 2) {
                const packageOmni = packages.filter((item) => item.type === 'all');
                dispatch({
                    type: types.LOAD_PACKAGES_DONE,
                    payload: packageOmni,
                });
            } else {
                dispatch({
                    type: types.LOAD_PACKAGES_DONE,
                    payload: packagesSelect,
                });
            }

            const periodParam =
                search.period === 'year' ? BillingPeriods.OneYear : BillingPeriods.OneMonth;
            dispatch({
                type: types.SET_PERIODS,
                payload: periodParam,
            });
        }

        getPackages();
    }, []);

    const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

    if (state.loading) {
        return <Loading />;
    }

    return <PackageContext.Provider value={value}>{children}</PackageContext.Provider>;
};

export const usePackages = () => {
    const { store } = useStore();
    const { state, dispatch } = useContext(PackageContext);

    const genTransationCode = async () => {
        try {
            if (!store._id) return;

            const transactionCode = await createTransactionCode(store._id, null);

            dispatch({
                type: types.SET_TRANSACTION_CODE,
                payload: transactionCode,
            });
        } catch (error) {
            console.error(error);
        }
    };

    const removePackage = (code: EBillingPackageType) => {
        const newPackges = state.packages.filter((item) => item.code !== code);

        dispatch({
            type: types.REMOVE_PACKAGE,
            payload: newPackges,
        });
    };

    const addPackage = (code: EBillingPackageType) => {
        const packageExist = packages.find((item) => item.code === code);

        if (!packageExist) {
            return;
        }

        const newPackges = [...state.packages, packageExist];

        dispatch({
            type: types.ADD_PACKAGE,
            payload: newPackges,
        });
    };

    const addPackages = (items: IPackage[]) => {
        let omniPackage = items.find((item) => item.code === EBillingPackageType.Omni);

        if (!!omniPackage) {
            return dispatch({
                type: types.LOAD_PACKAGES_DONE,
                payload: [omniPackage],
            });
        }

        const newPackges = state.packages.filter((item) => item.code !== EBillingPackageType.Omni);

        if ([...newPackges, ...items].length === packages.length - 1) {
            omniPackage = packages.find((item) => item.code === EBillingPackageType.Omni);

            return dispatch({
                type: types.LOAD_PACKAGES_DONE,
                payload: [omniPackage],
            });
        }

        dispatch({
            type: types.LOAD_PACKAGES_DONE,
            payload: [...newPackges, ...items],
        });
    };

    const setPeriods = (period: number) => {
        dispatch({
            type: types.SET_PERIODS,
            payload: period,
        });
    };

    const changeSuccess = (value: boolean) => {
        dispatch({
            type: types.CHANGE_SUCCESS,
            payload: value,
        });
    };

    return {
        ...state,
        genTransationCode,
        addPackage,
        removePackage,
        addPackages,
        setPeriods,
        changeSuccess,
    };
};
