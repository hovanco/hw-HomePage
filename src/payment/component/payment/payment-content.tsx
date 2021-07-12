import React, { FC } from 'react';
import { useAuth, useStore } from '../../state';
import { CreateStore } from '../create-store';
import { FormAuth } from '../form-auth';
import { FormProvider } from '../form-auth/state';
import { PaymentForm } from '../payment-form';

const PaymentContent: FC = () => {
    const { user } = useAuth();
    const { store } = useStore();

    if (!user) {
        return (
            <FormProvider>
                <FormAuth />
            </FormProvider>
        );
    }
    if (!store) {
        return <CreateStore />;
    }

    return <PaymentForm />;
};

export { PaymentContent };
