import React from "react";
import Logo from "@/public/CitriVox_News.png";
import Image from "next/image";
import { IoLogoInstagram } from "react-icons/io5";
import { IoMailSharp } from "react-icons/io5";
import { navItems } from "@/data/navbar/navItems";
const Footer = () => {
  return (
    <div className="bg-primary flex flex-col items-center space-y-3 py-4">
      <a href="/">
        <Image width={400} src={Logo} alt="CitriVox News" />
      </a>
      <div className="flex space-x-4">
        {navItems.map((item) => (
          <a
            href={item.path}
            key={item.path}
            className="font-merriweather text-background"
          >
            {item.text}
          </a>
        ))}
      </div>
      <div className="flex space-x-3">
        <IoLogoInstagram className="text-background" />
        <IoMailSharp className="text-background" />
      </div>
    </div>
  );
};

export default Footer;
