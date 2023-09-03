import Image from "next/image";
import parse from "html-react-parser";
import { FeatureCardInterface } from "@/interface";

export function FeatureCard({ feature, index }: FeatureCardInterface) {
  const { title, slug, description, icon, image, color } = feature;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
      <div className="md:mx-4">
        <div className="grid place-items-center w-12 h-12 rounded-full my-3 bg-[#181737]">
          <div style={{ color }}>{parse(icon)}</div>
        </div>
        <span
          style={{ color }}
          className={`mb-3 inline-block font-medium md:font-semibold`}
        >
          {slug}
        </span>
        <h2 className="text-3xl font-bold pb-5">{title}</h2>
        <p>{description}</p>
      </div>
      <div
        className={`flex justify-center ${
          index % 2 !== 0 ? "md:order-first" : ""
        }`}
      >
        <Image
          src={image}
          width={1180}
          height={873}
          className="w-5/6 md:w-full lg:pt-4 xl:w-5/6"
          alt="feature image"
        />
      </div>
    </div>
  );
}
