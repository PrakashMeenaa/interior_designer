import React from "react";

const About = () => {
  return (
    <div className="tracking-widest leading-normal font-thin pt-24 pb-24 mx-2 ">
      <div className=" flex flex-col sm:grid sm:grid-flow-col sm:grid-cols-2 sm:px-16 md:px-32 gap-20">
        <div className="flex flex-col text-white gap-4 py-4">
      <div className=" flex gap-3 uppercase  text-4xl font-normal">
        <p>About <span className="text-third">Chaar Diwari</span></p>
        
      </div>
          <p className=" text-lg">"Jaipur's Premier Interior Design & Architecture Firm: Where Tradition Meets Modernity"</p>
          <p>Nestled in the vibrant heart of Rajasthan, our firm seamlessly blends the rich heritage of Jaipur with contemporary design. Specializing in bespoke interiors and architectural marvels, we craft spaces that honor tradition while embracing innovation.</p>
          <p>From luxurious residences to chic urban retreats, each project reflects our commitment to timeless elegance and cultural authenticity.
            </p> 
          <p>Welcome to a world where the past inspires the future, and every space tells a story of Jaipur's enduring charm.
          </p>
            
        </div>
        <div className="bg-primary  relative w-full h-max flex flex-col items-end ">
          <img src="/Images/office.webp" alt="office" className="h-56 w-80 sm:h-72 sm:w-full opacity-55 object-cover mr-2" />
          <p className=" absolute -bottom-5 right-6 uppercase bg-third py-3 px-4">Jaipur Office</p>
        </div>
      </div>
    </div>
  );
};

export default About;
