import { ReactNode } from "react";
import { StatisticsCardScheme } from "./scheme.interface";

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
