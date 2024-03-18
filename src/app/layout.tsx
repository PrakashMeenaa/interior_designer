import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Header from "../Components/Header";
import Footer from "@/Components/Footer";
import BackToTopButton from '@/Components/BackToTopButton';


const oswald = Oswald({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Chaar Diwari",
  description: "Designing Dreams, Building Realities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oswald.className}>
      <BackToTopButton/>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
