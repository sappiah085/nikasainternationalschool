"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/images/logo.svg";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { Icons } from "@/components/icons/icons";
import { usePathname } from "next/navigation";
const links = [
  {
    url: "/",
    label: "Home",
  },
  {
    url: "/about-us",
    label: "About Us",
  },
  {
    url: "/gallery",
    label: "Gallery",
  },
  {
    url: "/admission",
    label: "Admission",
  },
  {
    url: "/newsletter",
    label: "Newsletter",
  },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="h-[60px] w-full max-w-7xl mx-auto">
      <nav className="flex justify-between items-center px-9 py-5 relative bg-white">
        <div className="h-[15px] relative small:h-[21px]">
          <Image alt="logo" src={logo} className=" h-full object-contain" />
        </div>
        <button
          onClick={() => setOpen((pre) => !pre)}
          aria-label="menu toggler"
          className="lg:hidden bg-white p-2 h-[50px] w-[50px] flex justify-center items-center rounded-full text-lg z-30 fixed right-[5%] top-[1%]"
        >
          <AiOutlineMenu />
        </button>
        <ul
          className={`${
            open ? "flex" : "hidden"
          } lg:flex items-center gap-4 lg:flex-row flex-col fixed lg:static top-0  w-full h-screen lg:h-auto lg:w-auto bg-white z-10 left-0 justify-center`}
        >
          {links.map(({ label, url }) => (
            <Link
              className="transition-all duration-150"
              href={url}
              key={label}
              onClick={() => setOpen(false)}
            >
              {" "}
              <li className={`text-base ${pathname === url && "font-bold"}`}>{label}</li>
            </Link>
          ))}
          <li className="flex items-center">
            <input
              placeholder="Search"
              className="focus-within:border-[0.2px] focus:border-[0.2px] transition-all duration-200 focus-within:p-2 focus:p-2 peer w-0 p-0 outline-none  rounded-sm focus:w-full focus-within:w-full"
              id="search-input"
              type="text"
            />
            <label
              className="peer-focus-within:hidden focus:hidden"
              htmlFor="search-input"
            >
              <Icons.search />
            </label>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
