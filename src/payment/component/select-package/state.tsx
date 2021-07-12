import { differenceBy } from 'lodash';
import React, {
    createContext,
    FC,
    useMemo,
    useReducer,
    ReactNode,
    useContext,
    useEffect,
} from 'react';

import { EBillingPackageType, packagesFilter as packagesContents, IPackage } from '../../constants';
import { usePackages } from '../../state';

interface IState {
    loading: boolean;
    packages: IPackage[];
}

interface IAction {
    type: string;
    payload?: any;
}

const initialState = {
    loading: true,
    packages: [],
};

const types = {
    LOADING: 'SELECT_PACKAGE/LOADING',
    SELECT_PACKAGE_DONE: 'SELECT_PACKAGE/SELECT_PACKAGE_DONE',
};

const reducer = (state: IState, action: IAction) => {
    switch (action.type) {
        case types.LOADING:
            return {
                ...state,
                loading: true,
            };

        case types.SELECT_PACKAGE_DONE:
            return {
                ...state,
                packages: action.payload,
                loading: false,
            };

        default:
            return state;
    }
};

const initialContext = {
    state: initialState,
    dispatch: () => {},
    toggle: () => {},
};

interface IContext {
    state: IState;
    dispatch: React.Dispatch<any>;
    toggle: () => void;
}

const SelectPackageContext = createContext<IContext>(initialContext);

interface Props {
    children: ReactNode;
    toggle: () => void;
}

export const getPackagesFilter = (packages: IPackage[]): IPackage[] => {
    const packagesFilter = differenceBy(
        packagesContents.filter((item) => item.code !== EBillingPackageType.Omni),
        packages,
        (item) => item.code,
    );

    return packagesFilter;
};
export const SelectPackageProvider: FC<Props> = ({ children, toggle }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { packages } = usePackages();

    useEffect(() => {
        const packagesFilter = getPackagesFilter(packages);

        dispatch({
            type: types.SELECT_PACKAGE_DONE,
            payload: packagesFilter,
        });
    }, [packages]);

    const value = useMemo(() => ({ state, dispatch, toggle }), [state, dispatch, toggle]);
    return <SelectPackageContext.Provider value={value}>{children}</SelectPackageContext.Provider>;
};

export const useSelectPackage = () => {
    const { state, dispatch, toggle } = useContext(SelectPackageContext);
    const { packages } = usePackages();

    const packagesFilter = getPackagesFilter(packages);

    const selectAllPackage = () => {
        const omniPackage = packagesContents.filter(
            (item) => item.code !== EBillingPackageType.Omni,
        );

        dispatch({
            type: types.SELECT_PACKAGE_DONE,
            payload: omniPackage,
        });
    };

    const selectPackage = (code: EBillingPackageType) => {
        const packagesExist = packagesFilter.filter((item) => item.code === code);

        dispatch({
            type: types.SELECT_PACKAGE_DONE,
            payload: packagesExist,
        });
    };

    return { ...state, selectAllPackage, selectPackage, toggle };
};
