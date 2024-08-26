"use client";

import Image from "next/image";
import { barlowCondensed, bellefair } from "@/fonts";
import Menu, { activeOption } from "./menu";
import { useSignals } from "@preact/signals-react/runtime";
import Data from "@/app/api/data.json";

export default function Main() {
  useSignals();

  const data = Data.technology[activeOption.value];
  const { name, images, description } = data;

  return (
    <main className="h-[888px] w-full flex items-center max-xl:justify-center max-xl:h-[928px]">
      <div className="w-full h-[792px] flex flex-col gap-6 xl:ml-44 max-xl:w-[688px] max-xl:h-[848px] max-xl:items-center">
        <div className="w-full h-full gap-6 max-md:w-auto max-md:justify-center">
          <h1
            className={`${barlowCondensed.className} text-white text-3xl uppercase flex gap-6 tracking-widest max-xl:text-xl max-md:text-base`}
          >
            <span className="text-figma-gray font-bold">03</span>
            space launch 101
          </h1>
        </div>
        <div className="w-full h-full flex gap-8 justify-between max-xl:flex-col-reverse max-xl:items-center max-xl:justify-center">
          <div className="w-1/2 h-304 flex gap-10 max-xl:w-full max-xl:items-center max-xl:flex-col">
            <div className="w-20 h-full flex flex-col justify-center gap-8 max-xl:flex-row max-xl:w-auto">
              <Menu />
            </div>
            <div className="w-full h-full flex flex-col gap-6 justify-center text-white max-xl:text-center max-xl:w-[512px] max-xl:gap-4 max-md:w-[327px]">
              <div className="flex flex-col gap-4">
                <h2
                  className={`${bellefair.className} opacity-50 text-[2rem] uppercase max-xl:text-2xl max-md:text-lg`}
                >
                  the terminology...
                </h2>
                <h3
                  className={`${bellefair.className} text-[3.5rem] uppercase max-xl:text-[2.5rem] max-md:text-2xl`}
                >
                  {name}
                </h3>
              </div>
              <p className="text-figma-blue-300 text-lg leading-[1.8] max-xl:text-base max-xl:leading-[1.8]">
                {description}
              </p>
            </div>
          </div>
          <div className="w-[608px] h-full flex justify-end items-center md:max-xl:hidden max-md:w-screen max-md:grid max-md:place-items-center">
            <Image
              src={images.portrait}
              alt="rocket launch"
              width={608}
              height={734}
            />
          </div>
          <div className="w-screen h-full grid place-items-center xl:hidden max-md:hidden">
            <Image
              src={images.landscape}
              alt="rocket launch"
              width={768}
              height={245}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
