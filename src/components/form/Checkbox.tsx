import { CheckboxInterface } from "@/interface";

export function Checkbox({ id, label, register }: CheckboxInterface) {
  return (
    <div className="w-[45%] flex gap-4">
      <label htmlFor={id} className="text-violet-500 cursor-pointer">
        {label}
      </label>
      <input
        className="cursor-pointer"
        type="checkbox"
        defaultChecked={false}
        id={id}
        {...register}
      />
    </div>
  );
}
