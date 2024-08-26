import { Bellefair, Barlow, Barlow_Condensed } from "next/font/google";

export const barlow = Barlow({
    subsets: ["latin"],
    weight: ["400", "600", "700"],

});

export const bellefair = Bellefair({
    subsets: ["latin"],
    weight: ["400"],
});

export const barlowCondensed = Barlow_Condensed({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});