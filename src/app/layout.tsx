import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { ScrollFeatures } from "@/components/layout/scroll-features";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "ICRACS 2027 - International Conference on Recent Advances in AI, Computer Vision & Smart Systems",
  description:
    "4th International Conference on Recent Advances in Artificial Intelligence, Computer Vision & Smart Systems organized by Poornima Institute of Engineering & Technology, Jaipur on August 27-28, 2027",
  keywords:
    "ICRACS, AI, Computer Vision, Smart Systems, Conference, PIET, Jaipur, Artificial Intelligence, Machine Learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-slate-50 min-h-screen flex flex-col`}
      >
        <LenisProvider>
          <ScrollFeatures />
          <Navbar />
          {/*
           * No global pt-* here — the Hero page has its own full-screen
           * section that accounts for the transparent navbar overlay.
           * All other pages use PageHeader or their own top padding.
           */}
          <main className="flex-1 flex flex-col relative">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
