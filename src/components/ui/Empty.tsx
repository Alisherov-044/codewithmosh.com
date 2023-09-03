import { EmptyInterface } from "@/interface";

export function Empty({ children, isEmpty, title = "Empty" }: EmptyInterface) {
  return isEmpty ? (
    <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-3xl text-white">
      {title}
    </h1>
  ) : (
    children
  );
}
