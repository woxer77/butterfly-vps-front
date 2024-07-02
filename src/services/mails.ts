import apiClient from '../configs/axios';
import { IUser } from "../ts/interfaces/types";

export const sendMail = async (data: IUser) => apiClient.post('/mails', data);
