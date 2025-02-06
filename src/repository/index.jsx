import { api } from "./create-axios";

export const getData = async (endpoint, params = {}) => {
    try {
        const response = await api.get(endpoint, { params });
        return response.data;
    } catch (error) {
        throw error;
    }
};

