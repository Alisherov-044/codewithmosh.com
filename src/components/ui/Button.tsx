import Link from "next/link";
import { ButtonInterface } from "@/interface";

export function Button({
  className,
  children,
  text,
  link,
  onClick,
  type = "button",
}: ButtonInterface) {
  const defaultClassName = `${className} group inline-block px-6 py-3 text-sm no-underline uppercase text-center text-white tracking-wider font-medium md:font-semibold rounded-full bg-violet-600 hover:bg-violet-700 transition-all min-w-[100px] duration-200 ease-out hover:text-white hover:no-underline undefined`;
  const content = children ? children : text;

  return link ? (
    <Link href={link} className={defaultClassName}>
      {content}
    </Link>
  ) : (
    <button className={defaultClassName} type={type} onClick={onClick}>
      {content}
    </button>
  );
}
