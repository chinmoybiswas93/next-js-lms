import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../../styles/Navbar.module.css";

const menuItems = [
  { text: "হোম", to: "/" },
  { text: "আমাদের সম্পর্কে", to: "/about" },
  { text: "সাফল্যের গল্প", to: "/success-stories" },
  { text: "যোগাযোগ", to: "/contact" },
  { text: "সাপোর্ট", to: "/support" },
  { text: "ব্লগ", to: "/blog" },
];

function NavLink({ to, children }) {
  return <a href={to}>{children}</a>;
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white transform z-[999] ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter`}
    >
      <div className="drop-shadow-md flex items-center justify-start filter bg-white">
        <div className="w-5/12 flex items-center py-4 pl-4">
          <a href="/">
            <div className="relative w-full max-w-[120px] h-10">
              <Image
                src="/images/Logo.svg"
                alt="Logo"
                width="680"
                height={"80"}
              />
            </div>
          </a>
        </div>
      </div>
      <div className="drop-shadow-md flex flex-col mx-4 mt-3">
        {menuItems.map((item, index) => {
          return (
            <a
              key={index}
              href={item.to}
              className="text-base my-1 py-2 hover:bg-primary hover:text-white hover:pl-4 rounded hover:cursor-pointer"
              onClick={() =>
                setTimeout(() => {
                  setOpen(!open);
                }, 100)
              }
            >
              {item.text}
            </a>
          );
        })}
        <a
          className="text-base my-1 py-2 bg-primary hover:bg-secondary text-white pl-4 rounded hover:cursor-pointer"
          href="/courses"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          কোর্স সমূহ
        </a>
        <a
          className="text-base my-1 py-2 hover:bg-primary hover:text-white hover:pl-4 rounded hover:cursor-pointer"
          href="/login"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          লগইন
        </a>
      </div>
    </div>
  );
}

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white h-full">
      <div className="navbar-container lg:container mx-auto px-4 lg:px-0 flex filter py-4 items-center ">
        <MobileNav open={open} setOpen={setOpen} />

        <div className="w-4/12 flex items-center">
          <a href="/">
            <div className="relative w-full max-w-[160px] h-12">
              <Image
                className="logo"
                src="/images/Logo.svg"
                alt="logo"
                width={"200"}
                height={"80"}
                priority
              />
            </div>
          </a>
        </div>

        <div className="w-8/12 flex justify-end items-center">
          <div
            className="hamburger-button z-50 flex relative w-6 h-6 flex-col justify-between items-center lg:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {/* hamburger button */}
            <span
              className={`h-1 w-full bg-primary rounded-lg transform transition duration-300 ease-in-out ${
                open ? "rotate-45 translate-y-2.5" : ""
              }`}
            />
            <span
              className={`h-1 w-full bg-primary rounded-lg transition-all duration-300 ease-in-out  ${
                open ? "w-0 hidden" : "w-full"
              }`}
            />
            <span
              className={`h-1 w-full bg-primary rounded-lg transform transition duration-300 ease-in-out ${
                open ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            />
          </div>

          <div className="hidden lg:flex">
            <ul className={styles.navlink}>
              {menuItems.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={
                      router.pathname == `${item.to}` ? `${styles.active}` : ""
                    }
                  >
                    <NavLink to={item.to}>{item.text}</NavLink>
                  </li>
                );
              })}
              <li className={styles.active}>
                <NavLink to={"/courses"}>কোর্স সমূহ</NavLink>
              </li>
              <li>
                <NavLink to={"/login"}>লগইন</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
