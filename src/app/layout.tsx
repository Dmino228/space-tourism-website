import type { Metadata } from "next";
import { barlow } from "@/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frontend Mentor | Space tourism website",
  description: "Space tourism website created by Dmino",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={barlow.className}>{children}</body>
    </html>
  );
}
