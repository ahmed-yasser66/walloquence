import Wrapper from "@/components/web/wrapper";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center pt-20 pb-2">
      <Wrapper className="text-center">
        <ul className="*:hover:text-primary mb-6 flex flex-wrap items-center justify-center gap-6 text-lg text-gray-600 transition-all *:cursor-pointer *:items-center sm:flex dark:text-gray-300 *:dark:hover:text-white">
          <li>
            <Link prefetch href={"/"}>Home</Link>
          </li>
          <li>
            <Link prefetch href={"/latest"}>Recently Added</Link>
          </li>
          <li>
            <Link prefetch href={"hot"}>Best Wallpapers</Link>
          </li>
          <li>
            <Link prefetch href={"random"}>Random</Link>
          </li>
        </ul>
        <p>Designed and developed by Ahmed Yasser. &copy; 2025.</p>
      </Wrapper>
    </footer>
  );
}
