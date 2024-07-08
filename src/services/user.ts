import { AxiosResponse } from "axios";

import { IStep, IFeedback, IProjectMini, IServiceRedux, IProject } from "../ts/interfaces/types";
import apiClient from "../configs/axios";

interface ServiceById {
  serviceTitle: string;
  serviceImage: string;
  miniDescription: string;
  benefits: string[];
  steps: IStep[];
  projects: IProjectMini;
  feedback: IFeedback;
}

// Services functions
export const getServiceById = async (serviceId: string | undefined): Promise<AxiosResponse<ServiceById>> =>
  apiClient.get(`/user/get-service/${serviceId}`);
export const getAllServices = async (): Promise<AxiosResponse<IServiceRedux[]>> =>
  apiClient.get('/user/get-all-services');

// Projects functions
export const getAllProjects = async (): Promise<AxiosResponse<IProject[]>> =>
  apiClient.get('/user/get-all-projects');
