import { SectionTitleInterface } from "@/interface";

export function SectionTitle({
  subTitle,
  title,
  description,
  className,
}: SectionTitleInterface) {
  return (
    <div className={`flex flex-col items-center mb-6 text-center ${className}`}>
      <p className="font-medium my-4 text-violet-500 dark:text-violet-75 text-sm tracking-widest uppercase">
        {subTitle}
      </p>
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="mt-10 text-center max-w-[50ch] text-lg lg:text-xl lg:leading-8">
        {description}
      </p>
    </div>
  );
}
