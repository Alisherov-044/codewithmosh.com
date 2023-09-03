import Link from "next/link";
import Image from "next/image";
import { CourseCardInterface } from "@/interface";
import { formatCurrency, getAbsolutePrice } from "@/utils";

export function CourseCard({ course }: CourseCardInterface) {
  const {
    name,
    description,
    link,
    image,
    price,
    discount,
    forMonth,
    duration,
  } = course;

  return (
    <div className="border border-gray-800 hover:border-gray-700 transition-colors duration-200 ease-in-out overflow-hidden rounded-lg bg-[#12172A] relative max-w-[350px] min-h-[395px]">
      <div className="h-[196px] relative">
        <Link href={link} className="relative w-full h-full inline-block">
          <Image
            src={image}
            width={332}
            height={196}
            alt="course image"
            className="object-cover absolute h-full w-full left-0 top-0 text-transparent"
          />
        </Link>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <Link href={link}>
            <h3 className="leading-6 font-bold text-xl transition-all hover:text-[#A679FF]">
              {name}
            </h3>
          </Link>
          <div className="ml-1">
            <div className="bg-[#262B42] font-medium md:font-bold inline px-3 py-1 rounded-2xl text-sm text-pink-500 dark:text-pink-530">
              {duration}
            </div>
          </div>
        </div>
        <p className="leading-5 mb-10">{description}</p>
        <p className="font-bold text-white absolute bottom-6 left-6">
          {formatCurrency(getAbsolutePrice(price, discount))}
          {forMonth ? "/m" : null}
          {discount ? (
            <span className="ml-2 line-through font-normal text-gray-350 text-sm">
              {price}
            </span>
          ) : null}
        </p>
      </div>
    </div>
  );
}
