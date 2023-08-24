import { FeatureCard } from "@/components";
import { features } from "@/data";

export function FeaturesSection() {
  return (
    <div className="relative overflow-hidden border-t-blue-950">
      <div className="absolute top-0 h-[1px] w-full bg-blue-950"></div>
      <div className="relative -z-50">
        <div className="flex flex-row justify-center">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-100 to-transparent"></div>
          <div className="w-[300px] h-[300px] bg-violet-600 rounded-full absolute -top-[150px] filter blur-3xl  opacity-20"></div>
        </div>
      </div>
      <div className="flex flex-col mb-10 my-5">
        <div className="my-12 mb-6 text-center">
          <p className="font-medium my-4 text-violet-500 dark:text-violet-75 text-sm tracking-widest uppercase">
            Features
          </p>
          <h2 className="text-3xl font-bold">Why Code with Mosh?</h2>
        </div>
        <div className="container">
          {features.map((feature, index) => (
            <FeatureCard feature={feature} index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
