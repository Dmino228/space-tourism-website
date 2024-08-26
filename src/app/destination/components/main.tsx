"use client";

import Image from "next/image";
import { barlowCondensed, bellefair } from "@/fonts";
import TabsMenu, { activeTab } from "./tabsMenu";
import { useSignals } from "@preact/signals-react/runtime";
import Data from "@/app/api/data.json";

export default function Main() {
  useSignals();

  const data = Data.destinations[activeTab.value];
  const { name, description, images, distance, travel } = data;

  return (
    <main className="h-[888px] w-full flex justify-center items-center max-xl:h-[928px]">
      <div className="w-[1110px] h-[792px] flex flex-col gap-6 max-xl:w-[688px] max-xl:h-[848px] max-xl:items-center max-md:w-[327px] max-md:h-[744px]">
        <div className="w-full h-full gap-6 max-md:w-auto max-md:justify-center">
          <h1
            className={`${barlowCondensed.className} text-white text-3xl uppercase flex gap-6 tracking-widest max-xl:text-xl max-md:text-base`}
          >
            <span className="text-figma-gray font-bold">01</span>
            pick your destination
          </h1>
        </div>
        <div className="w-full h-full flex gap-8 max-xl:flex-col">
          <div className="w-1/2 h-full grid place-items-center max-xl:w-full max-xl:min-h-[384px] max-md:min-h-[203px]">
            <div className="max-xl:w-[300px] max-xl:h-[300px] max-md:w-[150px] max-md:h-[150px]">
              <Image
                src={images.webp || images.png}
                alt={name}
                width={480}
                height={480}
              />
            </div>
          </div>
          <div className="w-1/2 h-full grid place-items-center max-xl:w-full">
            <div className="w-[445px] h-[468px] flex flex-col gap-10 max-xl:gap-6 max-xl:h-full max-md:w-full">
              <div
                className={`${barlowCondensed.className} text-figma-blue-300 w-full h-8 flex gap-8 max-xl:justify-center`}
              >
                <TabsMenu />
              </div>
              <div className="flex flex-col gap-4 max-xl:items-center max-xl:text-center">
                <h2
                  className={`${bellefair.className} text-white text-8xl uppercase max-xl:text-[5rem] max-md:text-[3.5rem]`}
                >
                  {name}
                </h2>
                <p className="text-figma-blue-300 text-lg leading-[1.8] max-xl:text-base max-xl:leading-[1.8]">
                  {description}
                </p>
              </div>
              <hr className="w-full h-0 border-[1px] border-figma-gray" />
              <div className="w-full flex gap-6 uppercase tracking-widest max-xl:text-center max-md:flex-col">
                <div className="w-full flex flex-col gap-3">
                  <p
                    className={`${barlowCondensed.className} text-figma-blue-300 text-sm`}
                  >
                    avg. distance
                  </p>
                  <p className={`${bellefair.className} text-white text-3xl`}>
                    {distance}
                  </p>
                </div>
                <div className="w-full flex flex-col gap-3">
                  <p
                    className={`${barlowCondensed.className} text-figma-blue-300 text-sm`}
                  >
                    est. travel time
                  </p>
                  <p className={`${bellefair.className} text-white text-3xl`}>
                    {travel}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
