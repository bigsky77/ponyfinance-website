import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full bg-footer bg-cover pt-32">
      <div className="flex flex-row justify-between items-center max-w-[348px] md:max-w-2xl lg:max-w-6xl w-full">
        <div className="flex flex-col justify-center items-start gap-8">
          <div className="relative w-[200px] h-[40px]">
            <Image layout="fill" src="/pony-logo.png" alt="pony finance" />
          </div>
          <div className="flex flex-col justify-center items-start gap-4 text-lg text-[#CECECE] md:mb-16">
            <a>Gitbook</a>
            <a
              href="https://medium.com/ponyfinance"
              target="_blank"
              rel="noreferrer"
            >
              Blog
            </a>
          </div>
          <div className="hidden md:block self-start text-sm text-[#CECECE] mb-4">
            Copyright © 2022 Pony Finance. All rights reserved.
          </div>
        </div>
        <div className="self-start mt-20 md:mt-16 flex flex-row gap-8">
          <a
            href="https://discord.gg/UfpsZUFuDu"
            target="_blank"
            rel="noreferrer"
            className="relative w-6 md:w-[30px] h-6 md:h-[30px]"
          >
            <Image layout="fill" src="/discord.svg" alt="discord" />
          </a>
          <a
            href="https://twitter.com/ponyfinance"
            target="_blank"
            rel="noreferrer"
            className="relative w-6 md:w-[30px] h-6 md:h-[30px]"
          >
            <Image layout="fill" src="/twitter.svg" alt="twitter" />
          </a>
          <a
            href="https://t.me/+Afmfij2i31g4OGJh"
            target="_blank"
            rel="noreferrer"
            className="relative w-6 md:w-[30px] h-6 md:h-[30px]"
          >
            <Image layout="fill" src="/telegram.svg" alt="telegram" />
          </a>
        </div>
      </div>
      <div className="flex md:hidden justify-center items-center text-center text-xs text-[#CECECE] my-8">
        Copyright © 2022 Pony Finance. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
