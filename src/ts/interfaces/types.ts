import { CSSProperties } from "react";

export interface SvgSelector {
  iconId: string;
  className?: string;
  id?: string;
  style?: CSSProperties;
}

export interface Image {
  webp: string;
  jpg: string;
  title: string;
}

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  // phone: string;
  text: string;
}

export interface IAdmin {
  adminId: number | null;
  isAuth: boolean;
}

export interface IStep {
  title: string;
  description: string;
}

export interface IProject {
  title: string;
  description: string;
  works: string[];
}

export interface IFeedback {
  starsCount: number;
  author: string;
  text: string;
}

export interface IService {
  serviceTitle: string;
  serviceImage: string;
  miniDescription: string;
  benefits: string[];
  steps: IStep[];
  projects: IProject;
  feedback: IFeedback;
}

export interface IServiceShortInfo {
  serviceId: string;
  serviceImage: string;
}
