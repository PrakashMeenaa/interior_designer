"use client";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import { usePathname } from "next/navigation";

const Banner = () => {
  const [opacity, setOpacity] = useState<number>(0.2);

  useEffect(() => {
    const handleScroll = () => {
      setOpacity(0.2 - window.scrollY / 1200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const location = usePathname();
  const isHomepage = location === "/";

  return (
    <div>
      <Header />
      {isHomepage ? null : (
        <section
          className={`banner-img bg-[url(/Images/Banner.jpg)] h-[40vh] md:h-[50vh]   bg-fixed bg-primary bg-cover bg-center `}
          style={{
            backgroundImage: "url(/Images/Banner.jpg)",
            opacity,
          }}
        >
          <div className="bg-primary hidden md:block w-24 h-[50vh]"></div>
        </section>
      )}
    </div>
  );
};

export default Banner;
