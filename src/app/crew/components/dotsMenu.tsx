"use client";

import { signal } from "@preact/signals-react";
import { useSignals } from "@preact/signals-react/runtime";
import Data from "@/app/api/data.json";

export const activeDot = signal(0);

export default function DotsMenu() {
  useSignals();

  const menuItems = [];
  for (let i = 0; i < Data.crew.length; i++) {
    menuItems.push(
      <button
        key={i}
        className={`w-3 h-3 rounded-full bg-white hover:bg-opacity-50 transition ${
          activeDot.value === i ? "bg-opacity-100" : "bg-opacity-15"
        }`}
        onClick={() => (activeDot.value = i)}
      ></button>
    );
  }

  return menuItems;
}
