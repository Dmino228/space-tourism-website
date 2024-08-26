"use client";

import Image from "next/image";
import { barlowCondensed } from "@/fonts";
import NavElements from "./navElements";
import { mobileMenuActive } from "./navbar";
import { useSignals } from "@preact/signals-react/runtime";

type Props = {
  activeElement: string;
};

export default function MobileMenu({ activeElement }: Props) {
  useSignals();

  return (
    <div
      className={`${barlowCondensed.className} absolute w-[254px] h-screen bg-[#0B0D17] bg-opacity-15 backdrop-blur-xl top-0 right-0 flex flex-col items-end gap-12 md:hidden animate-slide-in-from-right`}
    >
      <div className="w-[222px] h-[85px] flex items-center">
        <div className="w-full flex justify-end pr-6">
          <button
            onClick={() => (mobileMenuActive.value = !mobileMenuActive.value)}
          >
            <Image
              src="/assets/shared/icon-close.svg"
              alt="close"
              width={24}
              height={21}
            />
          </button>
        </div>
      </div>
      <div
        className="w-[222px] h-[172px] flex flex-col gap-8"
        onClick={() => (mobileMenuActive.value = !mobileMenuActive.value)}
      >
        <NavElements activeElement={activeElement} mobile />
      </div>
    </div>
  );
}
