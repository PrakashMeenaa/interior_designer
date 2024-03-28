"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Keyboard, Navigation, Pagination } from "swiper/modules";

interface Projects {
  url: string;
  title?: string;
  description?: string;
}

const Projects: React.FC = () => {
  const Projects: Projects[] = [
    {
      url: "/Images/1.jpeg",
      title: "First ImageSlate Horizon Retreat: A Modern Cement Haven",
      description: "Description for the first imageA sleek cement-colored modern masterpiece, blending minimalist design with natural elegance, offering serene luxury amidst panoramic vistas.",
    },
    {
      url: "/Images/2.jpeg",
      title: "Urban Oasis: Industrial Loft Living",
      description: "In the heart of the city, a modern industrial loft with exposed brick walls and expansive windows invites urban dwellers to embrace contemporary living amidst metropolitan charm.",
    },
    {
      url: "/Images/3.jpeg",
      title: "Third Image",
      description: "Description for the third image",
    },
    {
      url: "/Images/4.jpg",
      title: "Fourth Image",
      description: "Description for the fourth image",
    },
  ];
  return (
    <div className="bg-primary tracking-widest leading-normal font-thin pt-24 pb-24 mx-2 sm:px-16 md:px-32  ">
      <h1 className="uppercase  text-5xl font-normal">
        {" "}
        Our <span className="text-third">projects</span>
      </h1>
      <div className="max-w-[1400px] h-[780px] w-full m-auto py-10 px-4 relative group ">
        <div className="hidden md:group-hover:block">
          <div className="swiper-button-prev " style={{ color: "white" }}></div>
          <div className="swiper-button-next " style={{ color: "white" }}></div>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          keyboard={{
            enabled: true,
          }}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          modules={[Pagination, Keyboard, Navigation]}
          className="mySwiper w-full relative "
        >
          {Projects.map((r: Projects, index: number) => {
  return (
    <SwiperSlide key={index}>
                <div style={{ backgroundImage: `url(${r.url})`, opacity: "55%" }} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
                <div className="flex top-4 justify-center py-2">
                  <div className="absolute bottom-28 left-0 right-0 text-center text-white px-16">
                    <h2 className="text-xl uppercase font-normal ">{r.title}</h2>
                    <p className="text-sm ">{r.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
