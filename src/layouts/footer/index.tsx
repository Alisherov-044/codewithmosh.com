import Link from "next/link";
import { socialLinks } from "@/data";

export function Footer() {
  return (
    <footer className="relative min-h-[170px] md:min-h-[120px] overflow-hidden border-t-blue-600 mt-20">
      <div className="absolute top-0 h-[1px] w-full bg-blue-300 dark:bg-blue-950"></div>
      <div className="relative -z-50">
        <div className="flex flex-row justify-center">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-100 to-transparent"></div>
          <div className="w-[300px] h-[300px] bg-blue-600 rounded-full absolute -top-[150px] filter blur-3xl  opacity-20"></div>
        </div>
      </div>
      <div className="2xl:max-w-7xl mx-auto px-3 lg:px-6 py-10">
        <div className="flex flex-col space-y-5 md:flex-row justify-between items-center">
          <h4 className="text-gray-700 dark:text-gray-100">© Code with Mosh</h4>
          <div className="flex flex-row space-x-5">
            {socialLinks.map(({ id, ariaLabel, icon, link }) => (
              <Link href={link} key={id} aria-label={ariaLabel}>
                {icon("text-violet-500 dark:text-white")}
              </Link>
            ))}
          </div>
          <div className="text-sm flex space-x-5">
            <Link href="/term" className="no-underline">
              Terms of Use
            </Link>
            <Link href="/term" className="no-underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
