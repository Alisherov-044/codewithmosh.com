import { FormInterface } from "@/interface";

export function Form({ children, onSubmit }: FormInterface) {
  return <form onSubmit={onSubmit}>{children}</form>;
}
