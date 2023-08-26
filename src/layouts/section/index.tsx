import { SectionTitle } from "./SectionTitle";
import { SectionInterface } from "@/interface";

export function Section({ children, className }: SectionInterface) {
  return <section className={className}>{children}</section>;
}

export { SectionTitle };
