import About from "@/Components/About";
import Team from "@/Components/Team";
import React from "react";

const page = () => {
  return (
    <div>
      <About />
      <div className=" flex flex-col gap-20 tracking-widest leading-normal font-thin pt-24 pb-24  sm:px-16 md:px-32 ">
        <div className=" flex gap-3 uppercase  text-4xl font-normal">
          <p>
            our <span className="text-third">Team</span>
          </p>
        </div>
        <div className=" flex  flex-col sm:grid sm:grid-flow-col sm:grid-cols-2 sm:px-16 md:px-32 gap-20 text-center tracking-wider">
          <Team name="Ghanshyam Kumawat" occupation="Architect" imgsrc="/Images/team2.jpeg" />
          <Team name="Meenu Kumawat" occupation="3D planning" imgsrc="/Images/team4.jpeg" />
        </div>
      </div>
    </div>
  );
};

export default page;
