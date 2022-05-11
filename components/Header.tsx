import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "@headlessui/react";

const Header: React.FC = () => {
  return (
    <div className="absolute flex flex-row justify-evenly md:justify-between items-center max-w-[348px] md:max-w-2xl lg:max-w-5xl w-full h-16 md:h-24 md:px-10 my-10 md:my-12 bg-black bg-opacity-50 border-[0.5px] border-[#4A4A4A] rounded-2xl z-10">
      <div className="hidden md:flex justify-center items-center cursor-pointer">
        <Link href="/">
          <Image
            src="/pony-logo.png"
            alt="pony finance"
            width="200px"
            height="40.82px"
          />
        </Link>
      </div>
      <div className="flex flex-row justify-evenly md:justify-center items-center gap-14 md:gap-14 text-base md:text-xl text-white">
        <a
          href="https://medium.com/ponyfinance"
          target="_blank"
          rel="noreferrer"
        >
          <div className="group flex flex-row justify-center items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-none group-hover:bg-[#847CFF] transform -translate-y-[2px]"></div>
            <div className="flex justify-center items-center h-4">Blog</div>
          </div>
        </a>
        <a href="https://docs.ponyfinance.xyz" target="_blank" rel="noreferrer">
          <div className="group flex flex-row justify-center items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-none group-hover:bg-[#847CFF] transform -translate-y-[2px]"></div>
            <div className="flex justify-center items-center h-4">Docs</div>
          </div>
        </a>
        <div>
          <Menu>
            <Menu.Button>
              <div className="group flex flex-row justify-center items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-none group-hover:bg-[#847CFF] transform -translate-y-[2px]"></div>
                <div className="flex justify-center items-center h-4">
                  Socials
                </div>
              </div>
            </Menu.Button>
            <Menu.Items
              as="div"
              className="absolute flex flex-col justify-center items-start gap-6 p-4 top-[68px] md:top-[104px] bg-black md:bg-opacity-50 border-[0.5px] border-[#4A4A4A] rounded-xl transform -translate-x-2"
            >
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="https://twitter.com/ponyfinance"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="group flex flex-row justify-start items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full bg-none ${
                          active && "bg-[#847CFF]"
                        } transform -translate-y-[2px]`}
                      ></div>
                      <div className="flex justify-center items-center h-4">
                        Twitter
                      </div>
                    </div>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="https://discord.gg/UfpsZUFuDu"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="group flex flex-row justify-start items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full bg-none ${
                          active && "bg-[#847CFF]"
                        } transform -translate-y-[2px]`}
                      ></div>
                      <div className="flex justify-center items-center h-4">
                        Discord
                      </div>
                    </div>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="https://t.me/+Afmfij2i31g4OGJh"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="group flex flex-row justify-start items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full bg-none ${
                          active && "bg-[#847CFF]"
                        } transform -translate-y-[2px]`}
                      ></div>
                      <div className="flex justify-center items-center h-4">
                        Telegram
                      </div>
                    </div>
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
