import { StatisticsCard } from "@/components";
import { Section, SectionTitle } from "@/layouts";
import { useStatisticsContext } from "@/context";

export function AboutSection() {
  const { statistics } = useStatisticsContext();

  return (
    <Section className="container">
      <div className="flex flex-col mb-10 my-5">
        <SectionTitle
          subTitle="Hello,"
          title="I'm Mosh Hamedani."
          description="Are you feeling stuck or overwhelmed in your coding journey? Don't worry, I've got your back! Together, we'll work to level up your skills, increase your earning potential, and build a brighter future."
          className="my-12"
        />
        <div className="flex flex-col items-center">
          <div className="max-w-[725px] mx-auto px-3 w-full">
            <video
              controls={true}
              src="https://res.cloudinary.com/codewithmosh/video/upload/v1685377456/promo-videos/website-intro.mp4"
              poster="https://res.cloudinary.com/codewithmosh/image/upload/v1684540564/promo-videos/poster-mosh.webp"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 justify-center mx-auto my-20 ">
            {statistics.map((statistic) => (
              <StatisticsCard statistic={statistic} key={statistic.id} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
