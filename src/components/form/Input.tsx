import { InputInterface } from "@/interface";

export function Input({
  className,
  onChange,
  placeholder,
  register,
  type = "text",
}: InputInterface) {
  return (
    <input
      type={type}
      className={`border-[1px] appearance-none border-blue-950 p-3 w-[45%] rounded-sm bg-transparent text-violet-500 outline-none placeholder:text-violet-500 ${className}`}
      placeholder={placeholder}
      onChange={onChange}
      {...register}
    />
  );
}
