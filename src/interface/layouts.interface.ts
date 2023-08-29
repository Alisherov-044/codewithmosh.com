import { ReactNode } from "react";

export interface LayoutInterface {
  children: ReactNode;
}

export interface SectionInterface {
  children: ReactNode;
  className?: string;
}

export interface SectionTitleInterface {
  subTitle: string;
  title: string;
  description?: string;
  className?: string;
}

export interface LoadingWrapperInterface {
  loading: boolean;
  children: ReactNode;
}
