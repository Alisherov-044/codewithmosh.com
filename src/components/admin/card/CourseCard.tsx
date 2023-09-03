import Image from "next/image";
import { ActionsInterface, CourseCardInterface } from "@/interface";
import { CourseCardScheme } from "@/interface/scheme.interface";
import { EditIcon, TrashIcon } from "@/icons";

export function CourseCard({
  course,
  onEdit,
  onDelete,
}: CourseCardInterface & ActionsInterface<CourseCardScheme>) {
  const {
    id,
    description,
    duration,
    image,
    link,
    name,
    price,
    discount,
    forMonth,
  } = course;

  return (
    <div
      className={`grid grid-cols-5 grid-rows-2 items-center w-full px-6 pb-2 border-[1px] border-blue-950 rounded-sm`}
    >
      <span title="id">{id}</span>
      <span title="for month?">{forMonth ? "true" : "false"}</span>
      <span title="discount">{discount ? discount : "-"}</span>
      <span title="name">{name}</span>
      <p title="description" className="text-sm">
        {description}
      </p>
      <span title="link">{link}</span>
      <span title="price">{price}</span>
      <span title="duration">{duration}</span>
      <div>
        <Image src={image} width={200} height={200} alt="course image" />
      </div>
      <div
        title="actions"
        className="flex items-center justify-center gap-6 flex-shrink"
      >
        <EditIcon
          className="w-[30px] h-[30px] fill-yellow-600 cursor-pointer"
          onClick={() => onEdit(course)}
        />
        <TrashIcon
          className="w-[20px] h-[20px] fill-red-600 cursor-pointer"
          onClick={() => onDelete(id)}
        />
      </div>
    </div>
  );
}
