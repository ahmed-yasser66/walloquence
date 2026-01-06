import { ReactNode } from "react";

import Footer from "../(root)/footer";
import SmallNavbar from "@/components/small-navbar";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <SmallNavbar />
      {children}
      <Footer />
    </>
  );
}
