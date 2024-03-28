"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { SlArrowDown } from "react-icons/sl";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const providedservices = ["Architecture", "3D Modelling", "Decor Plan", "Interior Design", "Planning", "Urban Design"];

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 100);
    };

    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target?.closest("#menu") && target?.id !== "menu-btn") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <nav className="uppercase fixed top-0 md:absolute z-20 tracking-widest transition-all duration-1000 font-thin bg-primary ">
      <div className="md:hidden h-max w-screen flex justify-between pr-4">
        <img src="/Logo2.png" alt="LOGO" className="h-20" />
        <button onClick={toggleMenu}>
          <img src="/icons/menu.png" alt="" id="menu-btn" className="h-8" />
        </button>
      </div>
      <div ref={menuRef} id="menu" className={`md:hidden ${isMenuOpen ? "flex" : "hidden"} flex-col justify-between w-full text-lg gap-2 p-4 `}>
        <Link href="/" className={`hover:text-third ${pathname == "/" ? "text-third" : ""}  brightness-200 flex items-center transition-all duration-200`} onClick={toggleMenu}>
          Home
        </Link>
        <Link href="/about" className={`hover:text-third ${pathname == "/about" ? "text-third" : ""}  brightness-200 flex items-center transition-all duration-200`} onClick={toggleMenu}>
          About
        </Link>
        <Link href="/services" className={`hover:text-third ${pathname.startsWith("/services") ? "text-third" : ""}  brightness-200 flex items-center transition-all duration-200`} onClick={toggleMenu}>
          Services
        </Link>
        <Link href="/projects" className={`hover:text-third ${pathname.startsWith("/projects") ? "text-third" : ""}  brightness-200 flex items-center transition-all duration-200`} onClick={toggleMenu}>
          Projects
        </Link>
        <Link href="/contact" className={`hover:text-third ${pathname == "/contact" ? "text-third" : ""}  brightness-200 flex items-center transition-all duration-200`} onClick={toggleMenu}>
          Contact
        </Link>
      </div>

      {scrolled ? (
        <div className=" hidden md:flex fixed -top-10 left-0 right-0 flex-row items-center w-screen z-20 bg-primary translate-y-10 transition-all duration-200">
          <img src="/Logo2.png" alt="LOGO" className="h-20 " />
          <div className="flex flex-row justify-between w-full px-[5%] md:px-[10%]">
            <Link href="/" className={`hover:text-third ${pathname == "/" ? "text-third" : ""}  brightness-200 flex items-center `}>
              Home
            </Link>
            <Link href="/about" className={`hover:text-third ${pathname == "/about" ? "text-third" : ""}  brightness-200 flex items-center transition-all duration-200`}>
              About
            </Link>
            <div className="group relative">
              <Link href="/services" className={`hover:text-third ${pathname.startsWith("/services") ? "text-third" : ""}  brightness-200 flex items-center transition-all duration-200`} onClick={toggleMenu}>
                Services <SlArrowDown className="text-xs hidden xl:block" />
              </Link>
              <div className=" hidden group-hover:flex flex-col  gap-4 absolute top-full left-0 bg-primary text-xs w-[14vw] py-6 px-2 shadow-lg">
                {providedservices.map((s, index) => (
                  <Link key={index} href={`/services/${s.toLowerCase().replace(/\s+/g, "")}`} className={`hover:text-third ${pathname === `/services/${s.toLowerCase().replace(/\s+/g, "")}` ? "text-third" : ""} brightness-200 transition-all duration-200`}>
                    {s}
                  </Link>
                ))}
              </div>
            </div>
            <div className="group relative">
              <Link href="/projects" className={`hover:text-third ${pathname.startsWith("/projects") ? "text-third" : ""}  brightness-200 flex items-center transition-all duration-200 `}>
                Projects <SlArrowDown className="text-xs hidden xl:block" />
              </Link>

              <div className=" hidden group-hover:flex flex-col  gap-4 absolute top-full left-0 bg-primary  text-xs w-[14vw] py-6 px-2 shadow-lg">
                <Link href="/projects/project1" className={`hover:text-third ${pathname == "/projects/project1" ? "text-third" : ""} brightness-200 transition-all duration-200`}>
                  Project 1
                </Link>
                <Link href="/projects/project2" className={`hover:text-third ${pathname == "/projects/project2" ? "text-third" : ""} brightness-200 transition-all duration-200`}>
                  Project 2
                </Link>
                <Link href="/projects/project3" className={`hover:text-third ${pathname == "/projects/project3" ? "text-third" : ""} brightness-200 transition-all duration-200`}>
                  Project 3
                </Link>
                <Link href="/projects/project4" className={`hover:text-third ${pathname == "/projects/project4" ? "text-third" : ""} brightness-200 transition-all duration-200`}>
                  Project 4
                </Link>
              </div>
            </div>
            <Link href="/contact" className={`hover:text-third ${pathname == "/contact" ? "text-third" : ""}  brightness-200 flex items-center transition-all duration-200`}>
              Contact
            </Link>
          </div>
        </div>
      ) : (
        <div className="hidden md:flex absolute flex-row items-center w-screen z-20">
          <img src="/Logo.png" alt="LOGO" className="h-48" />
          <div className="flex flex-row gpa-3 justify-between w-full px-[5%] md:px-[10%]">
            <Link href="/" className={`hover:text-third ${pathname == "/" ? "text-third" : ""}  brightness-200 flex items-center transition-all duration-200`}>
              Home
            </Link>
            <Link href="/about" className={`hover:text-third ${pathname == "/about" ? "text-third" : ""}  brightness-200 flex items-center transition-all duration-200 `}>
              About
            </Link>
            <div className="group relative">
              <Link href="/services" className={`hover:text-third ${pathname.startsWith("/services") ? "text-third" : ""}  brightness-200 flex items-center transition-all duration-200`} onClick={toggleMenu}>
                Services <SlArrowDown className="text-xs hidden xl:block" />
              </Link>
              <div className=" hidden group-hover:flex flex-col  gap-4 absolute top-full left-0 bg-primary text-xs w-[14vw] py-6 px-2 shadow-lg">
                {providedservices.map((s, index) => (
                  <Link key={index} href={`/services/${s.toLowerCase().replace(/\s+/g, "")}`} className={`hover:text-third ${pathname === `/services/${s.toLowerCase().replace(/\s+/g, "")}` ? "text-third" : ""} brightness-200 transition-all duration-200`}>
                    {s}
                  </Link>
                ))}
              </div>
            </div>
            <div className="group relative">
              <Link href="/projects" className={`hover:text-third ${pathname.startsWith("/projects") ? "text-third" : ""}  brightness-200 flex items-center transition-all duration-200 `}>
                Projects <SlArrowDown className="text-xs hidden xl:block" />
              </Link>

              <div className=" hidden group-hover:flex flex-col  gap-4 absolute top-full left-0 bg-primary  text-xs w-[14vw] py-6 px-2 shadow-lg">
                <Link href="/projects/project1" className={`hover:text-third ${pathname == "/projects/project1" ? "text-third" : ""} brightness-200 transition-all duration-200`}>
                  Project 1
                </Link>
                <Link href="/projects/project2" className={`hover:text-third ${pathname == "/projects/project2" ? "text-third" : ""} brightness-200 transition-all duration-200`}>
                  Project 2
                </Link>
                <Link href="/projects/project3" className={`hover:text-third ${pathname == "/projects/project3" ? "text-third" : ""} brightness-200 transition-all duration-200`}>
                  Project 3
                </Link>
                <Link href="/projects/project4" className={`hover:text-third ${pathname == "/projects/project4" ? "text-third" : ""} brightness-200 transition-all duration-200`}>
                  Project 4
                </Link>
              </div>
            </div>
            <Link href="/contact" className={`hover:text-third ${pathname == "/contact" ? "text-third" : ""}  brightness-200 flex items-center transition-all duration-200 `}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
