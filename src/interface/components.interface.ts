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

export interface CheckboxInterface extends Omit<InputInterface, "placeholder"> {
  id: string;
  label: string;
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
  className?: string;
}

export interface MessageInterface {
  message?: string;
  variant: "success" | "warning" | "error";
  isActive: boolean;
}

export interface ConfirmInterface extends Omit<ModalInterface, "children"> {
  title: string;
  onConfirm: () => void;
}

export interface EmptyInterface {
  children: ReactNode;
  isEmpty: boolean;
  title?: string;
}
