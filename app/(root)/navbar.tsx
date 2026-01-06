import Link from "next/link";
import { Clock, Gem, Shuffle } from "lucide-react";

import Wrapper from "@/components/web/wrapper";
import { MobileNavMenu } from "@/components/web/mobile-nav";
import { ThemeToggler } from "@/components/theme-toggle";

export default function Navbar() {
  return (
    <nav className="bg-surface-light dark:bg-surface-dark shadow-m relative z-10 flex h-20 items-center">
      <Wrapper className="flex w-full items-center justify-between">
        <Link
          prefetch={true}
          href={"/"}
          className="flex items-center gap-2 text-2xl font-extrabold"
        >
          <span className="shadow-l bg-primary rounded-xs p-1 px-2">W</span>
          <span>Walloquence</span>
        </Link>
        <ul className="*:hover:text-primary hidden items-center gap-5 text-gray-600 transition-all *:flex *:cursor-pointer *:items-center *:gap-2 *:text-xl sm:flex dark:text-gray-300 *:dark:hover:text-white -translate-x-10 ">
          <li>
            <Link
              prefetch={true}
              href={"/latest"}
              className="flex items-center gap-2"
            >
              <Clock />
              <span>Latest</span>
            </Link>
          </li>
          <li>
            <Link
              prefetch={true}
              href={"/toplist"}
              className="flex items-center gap-2"
            >
              <Gem />
              <span>Toplist</span>
            </Link>
          </li>
          <li>
            <Link
              href={"/random"}
              prefetch={true}
              className="flex items-center gap-2"
            >
              <Shuffle />
              <span>Random</span>
            </Link>
          </li>
        </ul>
        <span className="relative">
          <span className="absolute -left-3 h-full w-px bg-gray-600 dark:bg-gray-300"></span>
          <div className="flex gap-2">
            <ThemeToggler />
            <ul className="flex sm:hidden">
              <li>
                <MobileNavMenu />
              </li>
            </ul>
          </div>
        </span>
      </Wrapper>
    </nav>
  );
}
