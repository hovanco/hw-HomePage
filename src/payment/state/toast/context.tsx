import React, { createContext, FC, ReactNode, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';

interface IContext {
    toast: any;
}

const initialContext = {
    toast,
};

const ToastContext = createContext<IContext>(initialContext);

interface Props {
    children: ReactNode;
}

export const ToastProvider: FC<Props> = ({ children }) => {
    return (
        <ToastContext.Provider value={{ toast }}>
            {children}
            <ToastContainer />
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const value = useContext(ToastContext);
    return {
        ...value,
    };
};
