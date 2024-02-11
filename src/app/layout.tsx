import type { Metadata } from "next";
import { NextFont } from "next/dist/compiled/@next/font";
import { Shadows_Into_Light } from "next/font/google";

import "./globals.css";

const shadows: NextFont = Shadows_Into_Light({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Valentines <3",
  description: "Will you be my valentines? <3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={shadows.className}>{children}</body>
    </html>
  );
}
