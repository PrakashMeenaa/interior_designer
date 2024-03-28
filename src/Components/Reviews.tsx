import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Mousewheel, Pagination } from "swiper/modules";

const Reviews = () => {
  type reviewstype = {
    review: string;
    name: string;
    position: string;
    imagepath: string;
  };
  const reviews: reviewstype[] = [
    { imagepath: "/Images/team1.jpeg", review: "This interior design company exceeded my expectations, transforming my space into a stylish and functional masterpiece.", name: "Prakash Meena", position: "Taj Mahal Owner" },
    { imagepath: "/Images/team2.jpeg", review: "Incredible eye for design, they effortlessly brought my vision to life. Made my dream come true", name: "Narendra Modi", position: "PM of India" },
    { imagepath: "/Images/team3.jpeg", review: "Transformed my space into a luxurious oasis, exceeding all expectations with their attention to detail and timeless elegance.", name: "Amit Shah", position: "Home Minister" },
    { imagepath: "/Images/team4.jpeg", review: "Their innovative approach seamlessly blends comfort and style, creating an ambiance that feels both inviting and sophisticated.", name: "Yogi Adtiya Nath", position: "CM of UP" },
  ];
  return (
    <div className="bg-primary text-white z-10 p-10 mx-4 h-96 w-96">
      <p className="pb-2 uppercase brightness-200">what client's says</p>
      <hr />
      <div className="h-full">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          mousewheel={true}
          modules={[Pagination, Mousewheel]}
          className="mySwiper w-full relative "
        >
          {reviews.map((r, index: number) => {
  return (
    <SwiperSlide key={index}>
                <div className="h-max">
                  <div className="h-36">
                    <p className="text-sm py-5 w-full">{r.review}</p>
                  </div>
                  <div className="flex flex-row gap-5">
                    <img src={r.imagepath} alt="photo" className="h-16 w-16 rounded-full object-cover object-top" />
                    <div className="flex flex-col justify-end">
                      <p className="text-third">{r.name}</p>
                      <p className="text-xs">{r.position}</p>
                    </div>
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

export default Reviews;
