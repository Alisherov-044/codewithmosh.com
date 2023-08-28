import { ReactNode } from "react";

export interface StatisticsCardScheme {
  id?: number;
  title: string;
  description: string;
  color: string;
}

export interface FeatureCardScheme {
  id?: number;
  icon: ReactNode;
  slug: string;
  title: string;
  description: string;
  image: string;
  color: string;
}

export interface CourseCardScheme {
  id?: number;
  name: string;
  description: string;
  image: string;
  price: number;
  forMonth?: boolean;
  discount?: number;
  link: string;
  duration: string;
}
