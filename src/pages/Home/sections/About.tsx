import { StatisticsCard } from "@/components";
import { statistics } from "@/data";

export function AboutSection() {
  return (
    <div className="container">
      <section className="flex flex-col mb-10 my-5">
        <div className="my-12 mb-6 text-center">
          <p className="font-medium my-4 text-violet-500 dark:text-violet-75 text-sm tracking-widest uppercase">
            Hello,
          </p>
          <h2 className="text-3xl font-bold">I'm Mosh Hamedani.</h2>
        </div>
        <div className="flex flex-col items-center">
          <p className="mb-10 text-center max-w-[50ch] text-lg lg:text-xl lg:leading-8">
            Are you feeling stuck or overwhelmed in your coding journey? Don't
            worry, I've got your back! Together, we'll work to level up your
            skills, increase your earning potential, and build a brighter
            future.
          </p>
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
      </section>
    </div>
  );
}
