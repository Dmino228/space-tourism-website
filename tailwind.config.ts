import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "figma-blue-300": "#d0d6f9",
        "figma-gray": "#4e5059",
        "figma-hover-gray": "#85868b",
      },
      backgroundImage: {
        "home-desktop": "url('/assets/home/background-home-desktop.jpg')",
        "home-mobile": "url('/assets/home/background-home-mobile.jpg')",
        "home-tablet": "url('/assets/home/background-home-tablet.jpg')",
        "destination-desktop":
          "url('/assets/destination/background-destination-desktop.jpg')",
        "destination-mobile":
          "url('/assets/destination/background-destination-mobile.jpg')",
        "destination-tablet":
          "url('/assets/destination/background-destination-tablet.jpg')",
        "technology-desktop":
          "url('/assets/technology/background-technology-desktop.jpg')",
        "technology-mobile":
          "url('/assets/technology/background-technology-mobile.jpg')",
        "technology-tablet":
          "url('/assets/technology/background-technology-tablet.jpg')",
        "crew-desktop": "url('/assets/crew/background-crew-desktop.jpg')",
        "crew-mobile": "url('/assets/crew/background-crew-mobile.jpg')",
        "crew-tablet": "url('/assets/crew/background-crew-tablet.jpg')",
      },
      keyframes: {
        "slide-in-from-right": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        "slide-in-from-right": "slide-in-from-right .3s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
