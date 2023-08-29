import { ComponentProps, ReactNode } from "react";
import {
  CourseCardScheme,
  FeatureCardScheme,
  StatisticsCardScheme,
} from "./scheme.interface";

export interface StatisticsCardInterface {
  statistic: StatisticsCardScheme;
}

export interface FeatureCardInterface {
  index: number;
  feature: FeatureCardScheme;
}

export interface CourseCardInterface {
  course: CourseCardScheme;
}

export interface InputInterface
  extends Omit<ComponentProps<"input">, "placeholder"> {
  placeholder: string;
  register?: any;
}

export interface TextareaInterface
  extends Omit<ComponentProps<"textarea">, "placeholder"> {
  placeholder: string;
  register?: any;
}

export interface FormInterface
  extends Omit<ComponentProps<"form">, "onSubmit" | "children"> {
  onSubmit: () => void;
  children: ReactNode;
}

export interface ButtonInterface extends ComponentProps<"button"> {
  children?: ReactNode;
  text?: ReactNode;
  variant?: "primary" | "secondary";
  link?: string;
}

export interface ModalInterface {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

export interface MessageInterface {
  message?: string;
  variant: "success" | "warning" | "error";
  isActive: boolean;
}
