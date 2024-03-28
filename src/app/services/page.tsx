'use client'
import Link from "next/link";
import React from "react";

const page = () => {
  const services = [
    {
      imgbg: "1.jpeg",
      imgsrc: "architect.png",
      name: "Architecture",
      description: "Jaipur's architectural innovators, fusing heritage with modernity, shaping vibrant landscapes.",
    },
    { imgbg: "2.jpeg", imgsrc: "interior.png", name: "Interior Design", description: "Transforming spaces with elegance, blending comfort, and style effortlessly." },
    { imgbg: "3.jpeg", imgsrc: "urbandesign.png", name: "Urban Design", description: "Shaping cities with visionary urban design, balancing functionality and beauty." },
    { imgbg: "4.jpeg", imgsrc: "planning.png", name: "planning", description: "Crafting precise blueprints, harmonizing form and function to inspire enduring environments." },
    {
      imgbg: "5.jpeg",
      imgsrc: "3Dmodelling.png",
      name: "3D modelling",
      description: "Using digital tools to craft immersive virtual worlds, blending imagination and reality for architectural creativity.",
    },
    { imgbg: "6.jpeg", imgsrc: "decorplan.png", name: "Decor plan", description: "Crafting refined design schemes to elevate interiors with personality and harmony, expressing individuality and taste." },
  ];
  return (
    <div className="bg-primary tracking-widest leading-normal font-thin pt-24 pb-24  sm:px-16 md:px-32  ">
      <h1 className="uppercase  text-5xl font-normal mb-8">
        Our <span className="text-third">services</span>
      </h1>
      <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s, index) => {
          return (
            <Link href={`/services/${s.name.toLowerCase().replace(/\s+/g, "")}`} key={index}>
            <div
                  className="group bg-cover bg-center bg-primary bg-blend-overlay bg-opacity-80 transition-all ease-in-out cursor-pointer flex flex-col gap-8 py-14 px-8 border-2 border-opacity-20  border-third relative h-96"
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundImage = `url(/Images/services/background/${s.imgbg})`)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundImage = "")}
                >
                  <div className="">
                    <img src={`/Images/services/${s.imgsrc}`} alt="" className="h-14 w-14 mb-3 opacity-80" />
                    <p className="text-xl md:text-base uppercase">{s.name}</p>
                    <hr className="child w-12 mt-2 opacity-20 group-hover:w-full transition-all duration-500 ease-in" />
                  </div>
                  <p className=" text-sm text-white">{s.description}</p>
                  <div className="text-white text-4xl group-hover:brightness-150 font-semibold font-oswald absolute bottom-8 right-8 opacity-10">0{index + 1}</div>
                </div>
                </Link>
          );
        })}
      </div>
    </div>
  );
};

export default page;
