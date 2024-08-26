"use client";

import Image from "next/image";
import { barlowCondensed, bellefair } from "@/fonts";
import DotsMenu, { activeDot } from "./dotsMenu";
import { useSignals } from "@preact/signals-react/runtime";
import Data from "@/app/api/data.json";

export default function Main() {
  useSignals();

  const data = Data.crew[activeDot.value];
  const { name, images, role, bio } = data;

  return (
    <main className="h-[888px] w-full flex justify-center items-center overflow-hidden max-xl:h-[928px]">
      <div className="w-[1110px] h-[792px] flex flex-col gap-6 max-xl:w-[688px] max-xl:h-[848px] max-xl:items-center max-md:w-[327px] max-md:h-[744px]">
        <div className="w-full h-full gap-6 max-md:w-auto max-md:justify-center">
          <h1
            className={`${barlowCondensed.className} text-white text-3xl uppercase flex gap-6 tracking-widest max-xl:text-xl max-md:text-base`}
          >
            <span className="text-figma-gray font-bold">02</span>
            meet your crew
          </h1>
        </div>
        <div className="w-full h-full flex gap-8 max-xl:flex-col max-xl:items-center">
          <div className="w-1/2 h-full flex flex-col gap-10 max-xl:w-full max-xl:items-center">
            <div className="w-full h-full flex flex-col justify-center text-white max-xl:text-center max-xl:w-[512px] max-md:w-[327px]">
              <h2
                className={`${bellefair.className} opacity-50 text-[2rem] uppercase max-xl:text-2xl max-md:text-lg`}
              >
                {role}
              </h2>
              <h3
                className={`${bellefair.className} text-[3.5rem] uppercase max-xl:text-[2.5rem] max-md:text-2xl`}
              >
                {name}
              </h3>
              <p className="text-figma-blue-300 text-lg leading-[1.8] max-xl:text-base max-xl:leading-[1.8]">
                {bio}
              </p>
            </div>
            <div className="w-full h-16 flex gap-10 justify-center">
              <DotsMenu />
            </div>
          </div>
          <div className="w-1/2 h-full grid place-items-center max-xl:w-[446px] max-md:w-[327px]">
            <Image
              src={images.webp || images.png}
              alt={name}
              width={539}
              height={676}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
