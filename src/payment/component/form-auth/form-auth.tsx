import React, { FC } from 'react';
import { Login } from './login';
import { Signup } from './signup';
import { ForgotPassword } from './forgot-password';
import { useFormAuth, ITypeFormAuth } from './state';

const FormAuth: FC = () => {
    const { type } = useFormAuth();

    const renderForm = () => {
        if (type === ITypeFormAuth.LOGIN) {
            return <Login />;
        }

        if (type === ITypeFormAuth.FORGOT) {
            return <ForgotPassword />;
        }

        return <Signup />;
    };

    return <div className='flex justify-center'>{renderForm()}</div>;
};

export { FormAuth };
