import apiClient from "../configs/axios";

export const getServiceById = async (serviceId: string | undefined) => apiClient.get(`/user/get-service/${serviceId}`);
export const getAllServices = async () => apiClient.get('/user/get-all-services');
