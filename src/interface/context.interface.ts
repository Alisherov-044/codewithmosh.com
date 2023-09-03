import { ReactNode } from "react";
import {
  CourseCardScheme,
  FeatureCardScheme,
  StatisticsCardScheme,
} from "./scheme.interface";

export interface ProviderInterface {
  children: ReactNode;
}

export interface LoadingContextInterface {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

export interface LoadingProviderInterface extends ProviderInterface {}

export interface StatisticsContextInterface {
  statistics: StatisticsCardScheme[] | [];
}

export interface StatisticsProviderInterface extends ProviderInterface {}

export interface FeaturesContextInterface {
  features: FeatureCardScheme[] | [];
}

export interface FeaturesProviderInterface extends ProviderInterface {}

export interface CoursesContextInterface {
  courses: CourseCardScheme[] | [];
}

export interface CoursesProviderInterface extends ProviderInterface {}
