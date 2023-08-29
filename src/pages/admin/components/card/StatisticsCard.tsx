import { EditIcon, TrashIcon } from "@/icons";
import { ActionsInterface, StatisticsCardInterface } from "@/interface";
import { StatisticsCardScheme } from "@/interface/scheme.interface";

export function StatisticsCard({
  statistic,
  onDelete,
  onEdit,
}: StatisticsCardInterface & ActionsInterface<StatisticsCardScheme>) {
  const { id, title, description, color } = statistic;

  return (
    <div
      className={`grid grid-cols-5 items-center w-full h-[70px] px-6 border-[1px] border-blue-950 rounded-sm text-[${color}]`}
    >
      <p title="id">{id}</p>
      <p title="title">{title}</p>
      <span
        title="color"
        className="w-[20px] h-[20px] rounded-sm"
        style={{ background: color }}
      ></span>
      <p title="description" className="min-w-[500px]">
        {description}
      </p>
      <div title="actions" className="flex items-center justify-center gap-6">
        <EditIcon className="w-[30px] h-[30px] fill-yellow-600 cursor-pointer" />
        <TrashIcon
          className="w-[20px] h-[20px] fill-red-600 cursor-pointer"
          onClick={() => onDelete(id)}
        />
      </div>
    </div>
  );
}
