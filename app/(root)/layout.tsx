import { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default function layout({ children }: { children: ReactNode }) {
  
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
