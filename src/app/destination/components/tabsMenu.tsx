"use client";

import { signal } from "@preact/signals-react";
import { useSignals } from "@preact/signals-react/runtime";
import Data from "@/app/api/data.json";

export const activeTab = signal(0);

export default function TabsMenu() {
  useSignals();

  const tabItems = [];
  for (let i = 0; i < Data.destinations.length; i++) {
    tabItems.push(
      <button
        key={i}
        className={`flex items-center h-full text-figma-blue-300 tracking-[0.2em] border-white transition duration-300 relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-white after:bg-opacity-50 after:scale-x-0 after:transition after:duration-300 hover:text-white max-md:text-sm ${
          activeTab.value === i
            ? "border-b-[3px] text-white"
            : "hover:after:scale-x-100"
        }`}
        onClick={() => (activeTab.value = i)}
      >
        {Data.destinations[i].name.toUpperCase()}
      </button>
    );
  }

  return tabItems;
}
