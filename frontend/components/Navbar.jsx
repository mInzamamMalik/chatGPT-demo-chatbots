"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { usePathname } from "next/navigation";

const navLinks = [
  { title: "home", link: "/", id: "1" },
  { title: "Chat", link: "/chat", id: "2" },
  // { title: "Apple Store", link: "/apple-store", id: "3" },
  // { title: "Grove Store", link: "/grove-store", id: "4" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky  top-0 z-50 w-full bg-white shadow-xl drop-shadow-md">
      <div className="mx-auto max-w-5xl">
        <div
          className={`desktop-nav-bar fixed left-0 top-0 z-40 ${
            !open && "hidden"
          } h-full w-full`}
        >
          <div className="absolute right-5 top-6">
            <RxCross1
              className="text-primary"
              size={25}
              onClick={() => setOpen(false)}
            />
          </div>
          <div className="m-auto mx-4 mt-16 flex flex-col bg-[#ffffffc9] text-base font-normal text-secondary backdrop-blur-lg">
            {navLinks.map((item) => (
              <Link
                className={`border-b border-primary py-5 text-lg capitalize ${
                  pathname === item.link ? "text-primary" : ""
                } text-center`}
                href={item.link}
                key={item.id}
                onClick={() => setOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="nav-bar z-30 w-full rounded-sm bg-white px-4 md:px-8">
          <div className="m-auto flex h-16 items-center justify-between rounded-sm">
            <Link className="flex items-center justify-self-start" href="/">
              <Image
                className="h-12 w-12"
                src={logo}
                alt="logo"
                width={50}
                height={50}
              />
              <h1 className="justify-self-center pl-2 text-2xl font-extrabold text-slate-700">
                Depression counselor
              </h1>
            </Link>
            <div className="hidden items-center gap-5 text-secondary md:flex lg:gap-10">
              {navLinks.map((item) => (
                <Link
                  className={` inline-block px-4 py-2 capitalize ${
                    pathname === item.link
                      ? "text-primary after:bg-primary"
                      : "after:bg-secondary"
                  } hover:after:left-3 hover:after:w-[72%]`}
                  href={item.link}
                  key={item.id}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div
              className={`block justify-self-end md:hidden ${
                open && "opacity-0"
              }`}
            >
              <FiMenu
                size={24}
                className={`h-8 w-8 text-primary`}
                onClick={() => setOpen(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
