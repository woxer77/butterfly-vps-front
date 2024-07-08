import apiClient from '../configs/axios';

import { IMailSender } from "../ts/interfaces/types";

// Function for sending mail
export const sendMail = async (data: IMailSender) => apiClient.post('/mails', data);
