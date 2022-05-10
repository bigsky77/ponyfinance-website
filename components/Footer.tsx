import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full bg-footer bg-cover pt-32">
      <div className="flex flex-row justify-between items-center max-w-[348px] md:max-w-6xl w-full">
        <div className="flex flex-col justify-center items-start gap-8">
          <img src="/pony-logo.png" />
          <div className="flex flex-col justify-center items-start gap-4 text-lg text-[#CECECE]">
            <a>Gitbook</a>
            <a>Blog</a>
          </div>
          <div className="hidden md:block self-start text-lg text-[#CECECE] mb-20">
            Copyright © 2022 Pony Finance. All rights reserved.
          </div>
        </div>
        <div className="self-start mt-20 md:mt-16 flex flex-row gap-8">
          <a>
            <img className="w-6 md:w-[30px]" src="/discord.svg" />
          </a>
          <a>
            <img className="w-6 md:w-[30px]" src="/twitter.svg" />
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
