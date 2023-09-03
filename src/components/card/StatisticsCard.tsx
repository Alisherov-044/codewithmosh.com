import { StatisticsCardInterface } from "@/interface";

export function StatisticsCard({ statistic }: StatisticsCardInterface) {
  const { title, description, color } = statistic;

  return (
    <div className="shadow-2xl dark:shadow-none border border-blue-950 bg-[#11152C] rounded-md relative">
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div
            style={{ color }}
            className={`h-[1px] bg-gradient-to-r from-transparent to-transparent w-full via-[${color}]`}
          ></div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center p-8">
        <h2
          style={{ color }}
          className={`font-bold mb-2 text-2xl md:text-3xl lg:text-4xl`}
        >
          {title}
        </h2>
        <p className="mb-0 leading-5 text-sm lg:text-base">{description}</p>
      </div>
    </div>
  );
}
