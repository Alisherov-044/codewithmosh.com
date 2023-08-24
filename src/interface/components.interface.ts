import { FeatureCardScheme, StatisticsCardScheme } from "./scheme.interface";

export interface StatisticsCardInterface {
  statistic: StatisticsCardScheme;
}

export interface FeatureCardInterface {
  index: number;
  feature: FeatureCardScheme;
}
