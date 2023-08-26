import Link from "next/link";
import Image from "next/image";
import { Section } from "@/layouts";
import { ArrowRightIcon } from "@/icons";

export function HeroSection() {
  return (
    <Section className="pt-10 pb-12 relative">
      <Image
        className="absolute -top-28 -z-10"
        src="/bg-grid-lighter.svg"
        width={1572}
        height={795}
        alt="bg grid lighter"
      />
      <div className="mx-auto px-2 md:px-5 lg:px-8 2xl:max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 items-start">
          <div className="p-2 pb-20 md:pb-10 flex flex-col justify-center items-start lg:pt-10 xl:max-w-xl">
            <h1 className="text-4xl lg:text-[2.6rem] md:font-extrabold lg:leading-[2.9rem] font-bold text-white leading-10">
              Become the
              <span className="text-green-400 mx-2">
                software engineer
              </span>{" "}
              that companies{" "}
              <span className="text-pink-500 mx-2">love to hire</span>
            </h1>
            <p className="leading-relaxed text-gray-300 text-lg my-5 md:my-7 md:text-xl">
              All the{" "}
              <strong className="text-white mx-1">coding courses</strong> you
              need to excel{" "}
              <strong className="text-white mx-1">in one place.</strong>
            </p>
            <Link
              href="/courses"
              className="group inline-block px-6 py-3 text-sm no-underline uppercase text-center text-white tracking-wider font-medium md:font-semibold rounded-full bg-gradient-to-r from-pink-500 to-violet-600  transition-all duration-200 ease-out hover:text-white hover:no-underline undefined"
            >
              View Courses
              <ArrowRightIcon className="w-6 h-4 inline-block transition-all duration-200 ease-out group-hover:ml-3" />
            </Link>
          </div>
          <div className="bg-gradient-to-r from-[#11152C] to-[#0A0D38] rounded-lg select-none border border-blue-950 relative">
            <div className="flex flex-row">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-pink-600 to-violet-600 w-full"></div>
              <div className="h-[1px] bg-gradient-to-r from-violet-600 to-transparent w-full"></div>
            </div>
            <div className="px-8 py-5">
              <div className="flex flex-row space-x-2">
                <div className="rounded-full bg-red-400 w-3 h-3"></div>
                <div className="rounded-full bg-orange-400 w-3 h-3"></div>
                <div className="rounded-full bg-green-200 w-3 h-3"></div>
              </div>
            </div>
            <div className="px-8 py-8 border-t-[2px] border-[#11152C] overflow-hidden">
              <div className="font-mono">
                <div className="blink">
                  <span className="text-pink-500 mr-2">const</span>
                  <span className="text-white mr-2">coder</span>
                  <span className="text-pink-500 mr-2">=</span>
                  <span className="text-gray-400">{"{"}</span>
                </div>
                <div>
                  <span className="text-white ml-8 mr-2">name:</span>
                  <span className="text-gray-400">'</span>
                  <span className="text-amber-300">Master Coder</span>
                  <span className="text-gray-400">',</span>
                </div>
                <div>
                  <span className="text-white ml-8 mr-2">skills:</span>
                  <span className="text-gray-400">{"['"}</span>
                  <span className="text-amber-300">React</span>
                  <span className="text-gray-400">', '</span>
                  <span className="text-amber-300">Node</span>
                  <span className="text-gray-400">{"']"}</span>
                </div>
                <div>
                  <span className="text-white ml-8 mr-2">hardWorker:</span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="text-white ml-8 mr-2">problemSolver:</span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="text-green-400 ml-8 mr-2">hireable:</span>
                  <span className="text-orange-400">function</span>
                  <span className="text-gray-400">{"() {"}</span>
                </div>
                <div>
                  <span className="text-orange-400 ml-16 mr-2">return</span>
                  <span className="text-gray-400">{"("}</span>
                </div>
                <div>
                  <span className="text-cyan-400 ml-24">this.</span>
                  <span className="text-white mr-2">hardWorker</span>
                  <span className="text-amber-300">&&</span>
                </div>
                <div>
                  <span className="text-cyan-400 ml-24">this.</span>
                  <span className="text-white mr-2">problemSolver</span>
                  <span className="text-amber-300">&&</span>
                </div>
                <div>
                  <span className="text-cyan-400 ml-24">this.</span>
                  <span className="text-white mr-2">skills.length</span>
                  <span className="text-amber-300 mr-2">{">="}</span>
                  <span className="text-orange-400">5</span>
                </div>
                <div>
                  <span className="text-gray-400 ml-16 mr-2">{");"}</span>
                </div>
                <div>
                  <span className="text-gray-400 ml-8">{"}"}</span>
                </div>
                <div>
                  <span className="text-gray-400">{"}"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
