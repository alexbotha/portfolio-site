import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ReactElement } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): ReactElement {
  return (
    <html lang="en">
      <body
        className={`mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-48 py-4 ${inter.className}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
