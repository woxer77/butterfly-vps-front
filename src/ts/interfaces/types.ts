import { CSSProperties } from "react";

// Interface for SVG elements
export interface SvgSelector {
  iconId: string;
  className?: string;
  id?: string;
  style?: CSSProperties;
}

// Interface for sending emails
export interface IMailSender {
  firstName: string;
  lastName: string;
  email: string;
  text: string;
}

// Interface for admin users
export interface IAdmin {
  adminId: number | null;
  isAuth: boolean;
}

// Interface for steps in a process
export interface IStep {
  title: string;
  description: string;
}

// Interface for mini project overview
export interface IProjectMini {
  title: string;
  description: string;
  works: string[];
}

// Interface for user feedback
export interface IFeedback {
  starsCount: number;
  author: string;
  text: string;
}

// Interface for services
export interface IService {
  serviceTitle: string;
  serviceImage: string;
  miniDescription: string;
  benefits: string[];
  steps: IStep[];
  projects: IProjectMini;
  feedback: IFeedback;
}

// Interface for Redux state management of services
export interface IServiceRedux {
  serviceId: string;
  serviceImage: string;
}

// Interface for projects
export interface IProject {
  title: string;
  description: string;
  serviceSection: string;
  date: string;
  location: string;
  image: string;
}

// Interface for server response messages
export interface IMessageResponse {
  message: string;
}

interface AdminPayload {
  adminId: number;
}

// Interface for admin response from server
export interface AdminResponse {
  accessToken: string;
  refreshToken: string;
  admin: AdminPayload;
}
