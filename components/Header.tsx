import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "@headlessui/react";

const Header: React.FC = () => {
  return (
    <div className="absolute flex flex-row justify-evenly md:justify-between items-center max-w-[348px] md:max-w-2xl lg:max-w-6xl w-full h-12 md:h-16 md:px-10 my-8 md:my-16 bg-black bg-opacity-50 border-[0.5px] border-[#4A4A4A] rounded-2xl z-10">
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
        <a
          href="https://medium.com/ponyfinance"
          target="_blank"
          rel="noreferrer"
        >
          Blog
        </a>
        <a>Gitbook</a>
        <div>
          <Menu>
            <Menu.Button>Socials</Menu.Button>
            <Menu.Items
              as="div"
              className="absolute flex flex-col justify-center items-start gap-4 p-4 top-14 md:top-[72px] bg-black md:bg-opacity-50 border-[0.5px] border-[#4A4A4A] rounded-xl transform -translate-x-4"
            >
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`p-1 w-full ${
                      active && "bg-blue-500 rounded-md"
                    }`}
                    href="https://twitter.com/ponyfinance"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Twitter
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`p-1 w-full ${
                      active && "bg-blue-500 rounded-md"
                    }`}
                    href="https://discord.gg/UfpsZUFuDu"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Discord
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`p-1 w-full ${
                      active && "bg-blue-500 rounded-md"
                    }`}
                    href="https://t.me/+Afmfij2i31g4OGJh"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Telegram
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;
