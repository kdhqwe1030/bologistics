import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer";
import HashScroll from "./components/HashScroll";
import Header from "./components/Header";
import IntroSplash from "./components/IntroSplash";
import SmoothScroll from "./components/SmoothScroll";

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
  weight: "45 920",
});

export const metadata: Metadata = {
  title: "비오 로지스틱스(주)",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <IntroSplash />
        <SmoothScroll />
        <HashScroll />
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
