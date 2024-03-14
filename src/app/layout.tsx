import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Header from "../Components/Header";


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
        <Header/>
        {children}
        </body>
    </html>
  );
}
