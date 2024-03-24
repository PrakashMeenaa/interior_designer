"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 100);
    };

    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <nav className="uppercase fixed md:absolute z-20 tracking-widest transition-all duration-1000 font-thin bg-primary ">
      <div className="md:hidden h-max w-screen flex justify-between pr-4">
        <img src="/Logo2.png" alt="LOGO" className="h-20" />
        <button onClick={toggleMenu}>
          <img src="/icons/menu.png" alt="" className="h-8" />
        </button>
      </div>
      {isMenuOpen && (
        <div ref={menuRef} className="flex flex-col justify-between w-full text-lg gap-2 p-4 duration-300">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <p>Pages</p>
          <Link href="/contact">Contact</Link>
        </div>
      )}
      {scrolled ? (
        <div className=" hidden md:flex fixed -top-10 left-0 right-0 flex-row items-center w-screen z-20 bg-primary translate-y-10 transition-all duration-200">
          <img src="/Logo2.png" alt="LOGO" className="h-20 " />
          <div className="flex flex-row justify-between w-full px-[5%] md:px-[10%]">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <p>Pages</p>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      ) : (
        <div className="hidden md:flex absolute flex-row items-center w-screen z-20">
          <img src="/Logo.png" alt="LOGO" className="h-48" />
          <div className="flex flex-row justify-between w-full px-[5%] md:px-[10%]">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <p>Pages</p>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
