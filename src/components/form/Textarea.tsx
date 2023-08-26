import { TextareaInterface } from "@/interface";

export function Textarea({
  className,
  placeholder,
  register,
  onChange,
  cols = 30,
  rows = 5,
}: TextareaInterface) {
  return (
    <textarea
      className={`border-[1px] border-blue-950 p-3 w-1/3 rounded-sm bg-transparent text-violet-500 outline-none placeholder:text-violet-500 resize-none ${className}`}
      placeholder={placeholder}
      cols={cols}
      rows={rows}
      onChange={onChange}
      {...register}
    />
  );
}
