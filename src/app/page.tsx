"use client";
import SideBar from "@/Components/SideBar";
import About from "@/Components/About";
import Projects from "@/Components/Projects";
import Services from "@/Components/Services";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Autoplay, EffectFade, Keyboard, Navigation, Pagination } from "swiper/modules";

export default function Home() {
  const images = ["/Images/1.jpeg", "/Images/2.jpeg", "/Images/3.jpeg", "/Images/3.jpg", "/Images/4.jpg"];

  return (
    <>
      <div className="relative  uppercase tracking-widest leading-normal font-thin ">
        <SideBar />
        <div className="hidden md:flex bg-primary absolute flex-row bottom-11 left-[12%] gap-2">
          <button className="swiper-button-next border-[0.5px] w-10 h-10 rounded-full p-5" style={{ right: "-100px" }}></button>
          <button className="swiper-button-prev border-[0.5px] w-10 h-10 rounded-full p-5"></button>
        </div>
        <div className=" hidden md:flex absolute w-24 h-24 z-20 border-r-2 border-b-2 border-white border-opacity-20 bottom-[5%] right-[5%]"></div>
        <div className="hidden md:flex absolute w-24 h-24 z-20 border-t-2 border-r-2 border-white border-opacity-20 top-[5%] right-[5%]"></div>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          effect={"fade"}
          keyboard={{
            enabled: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          modules={[Keyboard, Navigation, Autoplay, EffectFade]}
          className="mySwiper w-full relative "
        >
          {images.map((r) => {
            return (
              <SwiperSlide style={{ height: "100vh" }}>
                <div className="bg-cover z-50 absolute sm:bg-left w-screen bg-primary bg-blend-overlay bg-opacity-55 h-screen  " style={{ backgroundImage: `url(${r})` }}>
                  <div className="flex flex-col items-end absolute top-1/4 right-[5%] text-end gap-5">
                    <div className="text-2xl  sm:text-3xl md:text-5xl font-normal ">
                      <p>Designing Tomorrow's</p>
                      <p>Landscapes Today</p>
                    </div>
                    <h2 className="text-base  sm:text-lg md:text-xl min-w-[60%] max-w-[60%]">Integrating sustainable practices and cutting-edge design to shape environments that harmonize with nature and inspire future generations.</h2>

                    <button className="border-2 px-4 py-2 text-xl ">Contact Us</button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <About />
      <Projects />
      <Services />
    </>
  );
}
