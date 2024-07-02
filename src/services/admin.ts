import apiClient from '../configs/axios';
import { IService } from "../ts/interfaces/types";

export const login = async (email: string, password: string) => apiClient.post('/admin/login', { email, password });
export const logout = async () => apiClient.post('/admin/logout');
export const uploadImage = async (data: FormData) => apiClient.post('/admin/upload', data, {
  headers: { 'Content-Type': 'multipart/form-data' }
});

export const addService = async (data: FormData) => apiClient.post('/admin/add-service', data, {
  headers: { 'Content-Type': 'multipart/form-data' }});
export const deleteService = async (serviceId: string | undefined) => apiClient.post('/admin/delete-service', { serviceId });
