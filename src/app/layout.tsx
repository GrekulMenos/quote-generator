import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ImageContainer from "@/components/ImageContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quote generator",
  description: "make qoutes in one click",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
