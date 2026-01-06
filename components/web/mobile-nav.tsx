import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";

export function MobileNavMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuGroup>
          <Link prefetch={true} href={"/latest"}>
            <DropdownMenuItem>Latest</DropdownMenuItem>
          </Link>
          <Link prefetch={true} href={"/toplist"}>
            <DropdownMenuItem>Toplist</DropdownMenuItem>
          </Link>
          <Link prefetch={true} href={"/random"}>
            <DropdownMenuItem>Random</DropdownMenuItem>
          </Link>
          <Link prefetch={true} href={"/hot"}>
            <DropdownMenuItem>Hot</DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
