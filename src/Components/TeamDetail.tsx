import Link from "next/link";
import React from "react";
import Facebook from "./Facebook";
import Instagram from "./Instagram";
import Twitter from "./Twitter";

type props = {
  name: string;
  occupation: string;
  imgsrc: string;
};
const TeamDetail = (props: props) => {
  return (
    <div className=" flex flex-col gap-20 tracking-widest leading-normal font-thin pt-24 pb-24  sm:px-16 md:px-32 ">
      <div className=" flex gap-3 uppercase  text-4xl font-normal">
        <p>
          our <span className="text-third">Team</span>
        </p>
      </div>
      <div className=" flex  flex-col sm:grid sm:grid-flow-col sm:grid-cols-2 sm:px-16 md:px-32 gap-20 text-center tracking-wider">
        <div className="group cursor-pointer relative flex flex-col gap-1 w-max ">
          <Link href={`/about/${props.name}`}>
            <img src={props.imgsrc} alt="" className="aspect-square w-screen sm:w-64 lg:w-80 xl:w-96 object-cover object-top mb-5" />
          </Link>
          <div>
            <div className="py-5">
              <p className="text-white uppercase">{props.name}</p>
              <p className="text-second">{props.occupation}</p>
            </div>
            <div className="invisible absolute border-2 bg-fourth border-opacity-20 border-third w-full flex flex-col gap-2 py-5 group-hover:visible -translate-y-full transition duration-300 ">
              <ul className="flex md:justify-center md:items-center gap-2 ">
                <Facebook />
                <Instagram />
                <Twitter />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetail;
