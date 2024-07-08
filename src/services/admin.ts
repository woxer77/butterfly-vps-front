import { AxiosResponse } from "axios";

import { AdminResponse, IMessageResponse } from "../ts/interfaces/types";
import apiClient from '../configs/axios';

interface DeleteServiceResponse extends IMessageResponse {
  redirectToService: string;
}

// Admin authorization functions
export const login = async (email: string, password: string): Promise<AxiosResponse<AdminResponse>> =>
  apiClient.post('/admin/login', { email, password });
export const logout = async () =>
  apiClient.post('/admin/logout');

// Service management functions
export const addService = async (data: FormData): Promise<AxiosResponse<IMessageResponse>> =>
  apiClient.post('/admin/add-service', data, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
export const deleteService = async (serviceId: string | undefined): Promise<AxiosResponse<DeleteServiceResponse>> =>
  apiClient.post('/admin/delete-service', { serviceId });
// Project management functions
export const addProject = async (data: FormData): Promise<AxiosResponse<IMessageResponse>> =>
  apiClient.post('/admin/add-project', data, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
export const deleteProject = async (projectId: string | undefined): Promise<AxiosResponse<IMessageResponse>> =>
  apiClient.post('/admin/delete-project', { projectId });
