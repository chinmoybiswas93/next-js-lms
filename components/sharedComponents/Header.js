import { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function Header() {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSticky(window.pageYOffset > 150)
      );
    }
  }, []);
  return (
    <header
      className={`header w-full z-[998] ${sticky ? "sticky top-0 shadow-md border-b" : ""}`}
    >
      <Navbar></Navbar>
    </header>
  );
}
