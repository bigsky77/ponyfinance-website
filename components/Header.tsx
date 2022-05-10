import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className="absolute flex flex-row justify-evenly md:justify-between items-center max-w-[348px] md:max-w-7xl w-full h-12 md:h-16 md:px-10 my-8 md:my-16 bg-black bg-opacity-50 border-[0.5px] border-[#4A4A4A] rounded-2xl z-10">
      <div className="hidden md:flex justify-center items-center">
        <Link href="/">
          <Image
            src="/pony-logo.png"
            alt="pony finance"
            width="200px"
            height="40.82px"
          />
        </Link>
      </div>
      <div className="flex flex-row justify-center items-center gap-14 text-base md:text-lg text-white">
        <a>Blog</a>
        <a>Gitbook</a>
        <a>Socials</a>
      </div>
    </div>
  );
};

export default Header;
