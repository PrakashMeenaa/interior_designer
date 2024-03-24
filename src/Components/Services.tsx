import React from "react";

const Services = () => {
  return (
    <div className="bg-primary tracking-widest leading-normal font-thin pt-24 pb-24  sm:px-16 md:px-32  ">
      <h1 className="uppercase  text-5xl font-normal mb-8">
        Our <span className="text-third">services</span>
      </h1>
      <div className="flex flex-col sm:grid sm:grid-flow-col sm:grid-cols-3 gap-4">
        <div className="group hover:bg-fourth transition-all duration-300 ease-in cursor-pointer flex flex-col gap-8 py-14 px-8 border-2 border-opacity-20 border-third relative">
          <div className="">
            <img src="/Images/architect.png" alt="" className="h-14 w-14 mb-3 opacity-80" />
            <p className="text-xl md:text-base uppercase">Architecture</p>
            <hr className="child w-12 mt-2 opacity-20 group-hover:w-full transition-all duration-500 ease-in" />
          </div>
          <p className=" text-sm text-white">Jaipur's architectural innovators, fusing heritage with modernity, shaping vibrant landscapes.</p>
          <div className="text-white text-4xl font-semibold font-oswald absolute bottom-8 right-8 opacity-10">01</div>
        </div>
        <div className="group hover:bg-fourth transition-all duration-300 ease-in cursor-pointer flex flex-col gap-8 py-14 px-8 border-2 border-opacity-20 border-third relative">
          <div className="">
            <img src="/Images/interior.png" alt="" className="h-14 w-14 mb-3 opacity-80 " />
            <p className="text-xl md:text-base uppercase">Interior Design</p>
            <hr className="child w-12 mt-2 opacity-20 group-hover:w-full transition-all duration-500 ease-in " />
          </div>
          <p className=" text-sm text-white">Transforming spaces with elegance, blending comfort, and style effortlessly.</p>
          <div className="text-white text-4xl font-semibold font-oswald absolute bottom-8 right-8 opacity-10">02</div>
        </div>
        <div className="group hover:bg-fourth transition-all duration-300 ease-in cursor-pointer flex flex-col gap-8 py-14 px-8 border-2 border-opacity-20 border-third relative">
          <div className="">
            <img src="/Images/architect.png" alt="" className="h-14 w-14 mb-3 opacity-80 " />
            <p className="text-xl md:text-base uppercase">Urban Design</p>
            <hr className="child w-12 mt-2 opacity-20 group-hover:w-full transition-all duration-500 ease-in " />
          </div>
          <p className=" text-sm text-white">Shaping cities with visionary urban design, balancing functionality and beauty.</p>
          <div className="text-white text-4xl font-semibold font-oswald absolute bottom-8 right-8 opacity-10">03</div>
        </div>
      </div>
    </div>
  );
};

export default Services;
