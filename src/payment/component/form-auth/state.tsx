import React, { createContext, FC, ReactNode, useContext, useMemo, useState } from 'react';

export enum ITypeFormAuth {
    LOGIN = 'login',
    SIGNUP = 'signup',
    FORGOT = 'forgot',
}

interface IContext {
    type: ITypeFormAuth;
    setType: React.Dispatch<any>;
}

const FormContext = createContext<IContext>({
    type: ITypeFormAuth.SIGNUP,
    setType: () => {},
});

interface Props {
    children: ReactNode;
}

export const FormProvider: FC<Props> = ({ children }) => {
    const [type, setType] = useState<ITypeFormAuth>(ITypeFormAuth.LOGIN);

    const value = useMemo(() => ({ type, setType }), [type, setType]);

    return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export const useFormAuth = () => {
    const { type, setType } = useContext(FormContext);
    return {
        type,
        setType,
    };
};
