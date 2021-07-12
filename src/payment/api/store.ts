import { EBillingPackageType } from '../../constants';
import { axiosClient } from './axiosClient';

const basePath = '/store/v1/stores';

export const getStore = async () => {
    const response = await axiosClient({
        method: 'GET',
        url: basePath,
    });

    return response;
};

export const createStore = async (data: {
    name: string;
    address: string;
    province: string;
    district: string;
    ward: string;
    phoneNo: string;
}): Promise<any> => {
    const response = await axiosClient({
        method: 'POST',
        url: basePath,
        data,
    });

    return response;
};

export const updateUserStorePreference = async ({
    storeId,
    hideNewUserGuide,
}: {
    storeId: string;
    hideNewUserGuide: boolean;
}): Promise<any> => {
    const url = `${basePath}/${storeId}/user-preferences`;

    const response = await axiosClient({
        url,
        method: 'POST',
        data: {
            hideNewUserGuide,
        },
    });

    return response;
};

export async function createTransactionCode(idStore: string, data: any): Promise<any> {
    const response = await axiosClient({
        method: 'POST',
        url: `${basePath}/${idStore}/billing-stores/generate-transaction-code`,
        data,
    });

    return response;
}

export interface FormBuy {
    period: number;
    packageType: EBillingPackageType;
    transactionCode: string;
    paymentType: number;
}

export async function createBuyOrder(idStore: string, data: FormBuy): Promise<any> {
    const response = await axiosClient({
        method: 'POST',
        url: `/store/v1/stores/${idStore}/billing-stores`,
        data,
    });

    return response.data;
}
