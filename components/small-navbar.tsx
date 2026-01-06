import Wrapper from "./web/wrapper";
import { MobileNavMenu } from "./web/mobile-nav";
import { ThemeToggler } from "./theme-toggle";
import Link from "next/link";
import { SearchIcon } from "lucide-react";
import { handleSearch } from "@/lib/actions";

export default function SmallNavbar() {
  return (
    <nav className="bg-surface-light dark:bg-surface-dark shadow-s">
      <Wrapper className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link prefetch={true} href={"/"} className="mr-4 text-2xl font-bold">
            Walloquence
          </Link>
          <ul className="dark:*:border-background *:border-background-light hidden h-full leading-16 *:cursor-pointer *:border-r *:border-l *:px-4 *:duration-300 lg:flex">
            <Link
              prefetch={true}
              href={"/latest"}
              className="hover:bg-[#ad3]/10"
            >
              Latest
            </Link>
            <Link
              prefetch={true}
              href={"/toplist"}
              className="hover:bg-[#b760f0]/10"
            >
              Toplist
            </Link>
            <Link
              prefetch={true}
              href={"/random"}
              className="hover:bg-[#e73]/10"
            >
              Random
            </Link>
            <Link prefetch={true} href={"/hot"} className="hover:bg-[#f43]/10">
              Hot
            </Link>
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <form
            action={handleSearch}
            className="group relative mx-auto hidden max-w-3xl lg:flex"
          >
            <div className="dark:bg-surface-dark/80 focus-within:ring-primary/50 focus-within:border-primary relative flex items-center overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl backdrop-blur-xl transition-all focus-within:ring-2 dark:border-gray-700/50">
              <div className="px-6 text-gray-400">
                <SearchIcon />
              </div>
              <input
                className="w-full border-none bg-transparent py-2 pr-32 text-lg font-medium text-gray-900 placeholder-gray-400 outline-0 focus:ring-0 dark:text-white dark:placeholder-gray-500"
                placeholder="Search keywords..."
                type="text"
                name="input"
              />
              <div className="absolute right-2">
                <button className="bg-primary hover:bg-primary-dark rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors">
                  Search
                </button>
              </div>
            </div>
          </form>
          <span className="flex lg:hidden">
            <MobileNavMenu />
          </span>
          <ThemeToggler />
        </div>
      </Wrapper>
    </nav>
  );
}
