import { ReactNode } from "react";

export interface StatisticsCardScheme {
  id?: number;
  title: string;
  description: string;
  color: {
    via: string;
    text: string;
  };
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
