import Link from "next/link";
import { Logo, BurgerIcon } from "@/icons";
import { adminNavbarLinks, navbarLinks } from "@/data";
import { useAdminRouter, useNavbarDropdown } from "@/hooks";

export function Header() {
  const { isOpen, toggle } = useNavbarDropdown();
  const { isAdmin } = useAdminRouter();

  const links = isAdmin ? adminNavbarLinks : navbarLinks;

  return (
    <header>
      <nav className="2xl:max-w-7xl mx-auto px-3 lg:px-6 py-3">
        <div className="flex flex-row flex-wrap items-center justify-between">
          <div className="flex-shrink-0 flex items-center mr-14">
            <Link href="/" aria-label="Code with Mosh" hrefLang="/">
              <Logo className="h-6 w-auto" />
            </Link>
          </div>
          <button
            onClick={toggle}
            className="inline-flex items-center p-2 ml-3 text-sm rounded-lg nav-md:hidden focus:outline-none  focus:bg-blue-750 text-gray-400 hover:bg-gray-800"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Expand main menu</span>
            <BurgerIcon />
          </button>
          <ul
            id="navbar-default"
            className={`${
              isOpen
                ? "max-h-screen opacity-100 bg-[#0D1224]"
                : "max-h-0 opacity-0"
            } flex flex-col items-start mt-4 text-sm nav-md:flex-row nav-md:space-x-1 nav-md:mt-0 nav-md:border-0 w-full nav-md:max-h-screen h-screen nav-md:h-auto nav-md:opacity-100 nav-md:w-auto`}
          >
            {links.map(({ id, text, link }, index) => (
              <Link
                href={link}
                key={id}
                className={`block px-4 py-2 outline-none no-underline hover:no-underline ${
                  index + 1 === links.length
                    ? "bg-violet-500 hover:bg-violet-600 transition-all duration-300 rounded-3xl"
                    : ""
                }`}
              >
                <span
                  className={`text-sm transition-colors duration-300 ${
                    index + 1 === links.length
                      ? "text-white"
                      : "hover:text-gray-400 dark:text-gray-350 dark:hover:text-white focus:text-white"
                  }`}
                >
                  {text}
                </span>
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
