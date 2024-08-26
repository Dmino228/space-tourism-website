"use client";

import Image from "next/image";
import { signal } from "@preact/signals-react";
import { useSignals } from "@preact/signals-react/runtime";
import { barlowCondensed } from "@/fonts";
import NavElements from "./navElements";
import MobileMenu from "./mobileMenu";

export const mobileMenuActive = signal(false);

type Props = {
  activeElement: string;
};

export default function Navbar({ activeElement }: Props) {
  useSignals();

  return (
    <nav
      className={`${barlowCondensed.className} h-[136px] w-full flex items-end max-xl:h-24 max-md:h-[88px] max-md:relative`}
    >
      <div className="h-24 w-full flex items-center relative max-xl:static">
        <div className="w-[736px] h-12 flex items-center absolute z-10 max-xl:min-w-32 max-xl:justify-center max-xl:w-32 max-xl:static max-md:w-1/2 max-md:justify-start max-md:pl-6">
          <Image
            src="/assets/shared/logo.svg"
            alt="logo"
            width={48}
            height={48}
            className="ml-16 mr-16 max-xl:ml-0 max-xl:mr-0"
          />
          <hr className="h-0 w-full border-[1px] border-figma-gray max-xl:hidden" />
        </div>
        <div className="h-full w-[736px] flex items-center justify-end gap-12 pl-24 pr-12 bg-white bg-opacity-5 backdrop-blur-lg absolute right-0 max-xl:static max-xl:w-full max-xl:pl-0 max-xl:pr-6 max-md:bg-transparent max-md:w-1/2">
          <NavElements activeElement={activeElement} />
          <button
            className="md:hidden"
            onClick={() => {
              mobileMenuActive.value = !mobileMenuActive.value;
            }}
          >
            <Image
              src="/assets/shared/icon-hamburger.svg"
              alt="menu"
              width={24}
              height={21}
            />
          </button>
        </div>
      </div>
      {mobileMenuActive.value && <MobileMenu activeElement={activeElement} />}
    </nav>
  );
}
