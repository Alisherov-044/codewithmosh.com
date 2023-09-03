import parse from "html-react-parser";
import { EditIcon, TrashIcon } from "@/icons";
import { FeatureCardInterface } from "@/interface";
import {
  ActionsInterface,
  FeatureCardScheme,
} from "@/interface/scheme.interface";
import Image from "next/image";

export function FeatureCard({
  feature,
  onEdit,
  onDelete,
}: Omit<FeatureCardInterface, "index"> & ActionsInterface<FeatureCardScheme>) {
  const { id, title, description, slug, color, icon, image } = feature;

  return (
    <div
      className={`grid grid-cols-4 grid-rows-2 items-center w-full px-6 pb-2 border-[1px] border-blue-950 rounded-sm text-[${color}]`}
    >
      <span title="id">{id}</span>
      <span
        title="color"
        className="w-[20px] h-[20px] rounded-sm"
        style={{ background: color }}
      ></span>
      <div title="icon" className={`fill-[${color}]`}>
        {parse(icon)}
      </div>
      <span title="title">{title}</span>
      <span title="slug">{slug}</span>
      <p title="description" className="text-sm">
        {description}
      </p>
      <div className="">
        <Image src={image} width={200} height={200} alt="feature image" />
      </div>
      <div
        title="actions"
        className="flex items-center justify-center gap-6 flex-shrink"
      >
        <EditIcon
          className="w-[30px] h-[30px] fill-yellow-600 cursor-pointer"
          onClick={() => onEdit(feature)}
        />
        <TrashIcon
          className="w-[20px] h-[20px] fill-red-600 cursor-pointer"
          onClick={() => onDelete(id)}
        />
      </div>
    </div>
  );
}
