import { features } from "@/data";
import { FeatureCard } from "@/components";
import { Section, SectionTitle } from "@/layouts";

export function FeaturesSection() {
  return (
    <Section className="relative overflow-hidden border-t-blue-950">
      <div className="absolute top-0 h-[1px] w-full bg-blue-950"></div>
      <div className="relative -z-50">
        <div className="flex flex-row justify-center">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-100 to-transparent"></div>
          <div className="w-[300px] h-[300px] bg-violet-600 rounded-full absolute -top-[150px] filter blur-3xl  opacity-20"></div>
        </div>
      </div>
      <div className="flex flex-col mb-10 my-5">
        <SectionTitle
          subTitle="Features"
          title="Why Code with Mosh?"
          className="my-12"
        />
        <div className="container">
          {features.map((feature, index) => (
            <FeatureCard feature={feature} index={index} key={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}
