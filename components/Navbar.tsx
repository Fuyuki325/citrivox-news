"use client";
import React, { useState } from "react";
import CitriVoxNews from "@/public/CitriVox_News.png";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/navbar/navItems";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const pathname = usePathname();
  const [hamburger, openHamburger] = useState(false);
  const handleHamburger = () => {
    openHamburger(!hamburger);
  };
  return (
    <>
      <div className="w-full h-12 bg-primary flex items-center font-merriweather">
        <div className="w-[80%] mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="/">
              <Image src={CitriVoxNews} className="w-56" alt="CitriVox News" />
            </a>
            <ul className="hidden md:flex items-center space-x-6 text-center">
              {navItems.map((item) => (
                <li key={item.path}>
                  <a href={item.path} className=" text-white">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <CgProfile className="hidden md:flex text-white text-3xl" />

          <button className="md:hidden" onClick={handleHamburger}>
            <RxHamburgerMenu className="text-white text-2xl" />
          </button>
        </div>
      </div>
      {hamburger && (
        <div className="w-full bg-primary md:hidden flex-col px-20 py-4 font-merriweather">
          <div className="bg-white w-full rounded-lg flex flex-col px-14 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                href={item.path}
                key={item.path}
                className={`${
                  pathname == item.path ? "bg-highlight text-white" : ""
                } rounded-xl`}
              >
                <div className="px-3 py-3">{item.text}</div>
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
