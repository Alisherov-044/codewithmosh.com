import { ComponentProps } from "react";

export function BurgerIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="27"
      width="27"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
    </svg>
  );
}
