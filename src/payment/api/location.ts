import { axiosClient } from './axiosClient';

export const getProvinces = async (): Promise<any> => {
    const url = `/store/v1/locations`;
    const response = await axiosClient({
        method: 'GET',
        url,
    });

    return response;
};

export const getDistricts = async (provinceId: string): Promise<any> => {
    const url = `/store/v1/locations/provinces/${provinceId}/districts`;

    const response = await axiosClient({
        method: 'GET',
        url,
    });

    return response;
};

export const getWards = async ({
    provinceId,
    districtId,
}: {
    provinceId?: string | null;
    districtId?: string | null;
}): Promise<any> => {
    const url = `/store/v1/locations/provinces/${provinceId}/districts/${districtId}/wards`;

    const response = await axiosClient({
        method: 'GET',
        url,
    });

    return response;
};
