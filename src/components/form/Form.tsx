import { FormInterface } from "@/interface";

export function Form({ onSubmit, children }: FormInterface) {
  return <form onSubmit={onSubmit}>{children}</form>;
}
