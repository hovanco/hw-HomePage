import axios from 'axios';
import queryString from 'query-string';
import { INSA_GOOGLE_SHEET_API } from '../constants';

const axiosClient = axios.create({
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use((config) => {
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        if (response.data) {
            return response.data;
        }
        return response;
    },

    async (error) => {
        return Promise.reject(error);
    },
);

export { axiosClient };
