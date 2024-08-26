"use client";

import { bellefair } from "@/fonts";
import { signal } from "@preact/signals-react";
import { useSignals } from "@preact/signals-react/runtime";
import Data from "@/app/api/data.json";

export const activeOption = signal(0);

export default function Menu() {
  useSignals();

  const menuOptions = [];
  for (let i = 0; i < Data.technology.length; i++) {
    menuOptions.push(
      <button
        key={i}
        className={`${
          bellefair.className
        } w-20 h-20 rounded-full text-4xl grid place-items-center transition hover:border-opacity-100 max-xl:w-14 max-xl:h-14 max-xl:text-2xl max-md:w-10 max-md:h-10 max-md:text-lg ${
          activeOption.value === i
            ? "text-black bg-white"
            : "text-white bg-transparent border-white border-opacity-25 border-2"
        }`}
        onClick={() => (activeOption.value = i)}
      >
        {i + 1}
      </button>
    );
  }

  return menuOptions;
}
