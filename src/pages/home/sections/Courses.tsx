import Link from "next/link";
import { courses } from "@/data";
import { Button, CourseCard } from "@/components";
import { Section, SectionTitle } from "@/layouts";

export function CoursesSection() {
  return (
    <Section className="container">
      <div className="flex flex-col mb-10 my-5">
        <SectionTitle
          subTitle="Top-selling Courses"
          title="Level Up Your Coding Skills"
          description="Whether you're looking to switch to a career in tech or to advance in your current role, my courses give you the knowledge and experience you need to succeed."
          className="my-12"
        />
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {courses.map((course) => (
              <CourseCard course={course} key={course.id} />
            ))}
          </div>
          <div className="mt-14 text-center">
            <Button link="/courses/all">view all courses</Button>
            <p className="my-6 text-base">
              Not sure where to start? Check out our
              <Link
                href="/learning-path"
                className="relative font-semibold ml-2 after:absolute after:-bottom-[2px] after:left-0 after:w-full after:h-[1px] after:bg-pink-600 transition-none hover:after:opacity-0"
              >
                learning paths.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
