"use client";
import React from "react";
import Reviews from "./Reviews";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Autoplay } from "swiper/modules";
import Facebook from "./Facebook";
import Instagram from "./Instagram";
import Twitter from "./Twitter";

const Footer: React.FC = () => {
  const services = [`/client/1.png`, `/client/2.png`, `/client/3.png`, `/client/4.png`, `/client/5.png`, `/client/6.png`];
  return (
    <div>
      <div className="relative mt-24 bg-cover bg-primary bg-opacity-55 bg-blend-overlay sm:bg-left as w-screen tracking-widest leading-normal font-thin lg:bg-fixed lg:h-[500px]" style={{ backgroundImage: `url(/Images/2.jpg)` }}>
        <div className=" pt-28 pb-10  flex w-screen flex-col md:flex-row items-center md:items-start lg:justify-between pr-14">
          <div className=" mb-8 px-4 w-96 ">
            <div>
              <img src="/Images/play.png" alt="" className="opacity-90 h-32 " />
            </div>
            <p className="text-2xl text-white uppercase brightness-200">View promo demo</p>
          </div>
          <Reviews />
        </div>
        <div className="w-screen bg-[#423329] h-max lg:relative lg:bottom-28 flex lg:pl-10">
          <Swiper
            spaceBetween={50}
            slidesPerView={5}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper w-screen lg:w-[640px] h-max py-7"
            style={{ margin: 0 }}
          >
            {services.map((p: string, index: number) => {
              return (
                <SwiperSlide key={index} style={{ minHeight: "60px" }}>
                  <img src={p} alt="services logo" className=" h-20 max-w-40" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="w-screen sm:px-16 md:px-32 lg:mt-32">
        <div className="w-full flex flex-col gap-1 md:grid md:grid-cols-3">
          <div className="border-2 border-opacity-20 border-third text-second hover:text-white w-full flex flex-col gap-2 px-3 py-10">
            <p className="text-third">Phone</p>
            <p>+91 8385024024</p>
          </div>
          <div className="border-2 border-opacity-20 border-third text-second hover:text-white w-full flex flex-col gap-2 px-3 py-10">
            <p className="text-third">Email</p>
            <p>gskumawat21@gmail.com</p>
          </div>
          <div className="border-2 border-opacity-20 border-third text-second hover:text-white w-full flex flex-col gap-2 px-3 py-10">
            <p className="text-third">Our Address</p>
            <p>B-88, Agrasen, Nagar, Kalwar Road, Jaipur, Rajasthan</p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-1 text-second hover:text-white md:grid md:grid-cols-3">
          <div className="border-2 border-opacity-20 text-second hover:text-white border-third w-full flex flex-col gap-2 px-3 py-10">
            <p>© 2024 Bauen. All right reserved.</p>
          </div>
          <div className="border-2 border-opacity-20 border-third w-full flex flex-col gap-2 px-3 py-10">
            <ul className="flex md:justify-center md:items-center gap-2 ">
              <Facebook />
              <Instagram />
              <Twitter />
            </ul>
          </div>
          <div className="border-2 border-opacity-20 text-second hover:text-white border-third w-full flex flex-col gap-2 px-3 py-10 md:text-end">
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
