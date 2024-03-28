"use client";
import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

interface serviceParams {
  service: string;
}

type ServiceData = {
  [key: string]: {
    name: string;
    imgsrc: string[];
    about: string;
  }[];
};

const providedservices = ["Architecture", "3D Modelling", "Decor Plan", "Interior Design", "Planning", "Urban Design"];

const page: React.FC<{ params: serviceParams }> = ({ params }) => {
  const { service } = params;

  function getServiceData(service: string): { name: string; imgsrc: string[]; about: string }[] | undefined {
    const serviceData: ServiceData = {
      architecture: [
        {
          name: "Architecture",
          imgsrc: ["architecture/1.jpg", "architecture/2.jpg", "architecture/3.jpg"],
          about:
            "Architectural services include an initial consultation to understand clients' vision and requirements. Site analysis and feasibility studies are conducted to evaluate design options and construction approaches. Functional and sustainable structures are designed, meeting building code compliance. Detailed drawings, specifications, and construction documents serve as blueprints. Diligent administration and oversight are provided during the construction phase, and post-occupancy evaluations gather feedback.",
        },
      ],

      "3dmodelling": [
        {
          name: "3D Modelling",
          imgsrc: ["3dmodelling/1.jpg", "3dmodelling/2.jpg", "3dmodelling/3.jpg"],
          about:
            "At our company, we possess expertise in 3D modeling, which enables us to create visual representations of design concepts using cutting-edge technology. This skill allows us to refine designs, collaborate with stakeholders, and develop immersive virtual experiences. Through 3D modeling, we can bring designs to life, allowing clients to explore and interact with their projects in a virtual environment before construction begins.",
        },
      ],

      decorplan: [
        {
          name: "Decor Plan",
          imgsrc: ["decorplan/1.jpg", "decorplan/2.jpg", "decorplan/3.jpg"],
          about:
            "As architects, we leverage our keen design sensibility and meticulous attention to detail to curate personalized decor plans that embody the unique style preferences and lifestyle needs of our clients. Our process involves assessing personal style preferences, developing a cohesive color palette, selecting high-quality materials, and carefully selecting accessories. By coordinating every element of the decor, we aim to create a harmonious and inviting environment that truly reflects our clients' distinct sensibilities.",
        },
      ],

      interiordesign: [
        {
          name: "Interior Design",
          imgsrc: ["interiordesign/1.jpg", "interiordesign/2.jpg", "interiordesign/3.jpg"],
          about:
            "Our expertise in the field of interior design lies in our ability to excel in space planning, material selection, lighting design, color coordination, and FF&E procurement. We take great care in crafting interior spaces that optimize functionality while also emanating a harmonious blend of aesthetics and practicality. We manage every element of the interior design process, from the initial conceptualization to the final execution, ensuring that the end result not only meets but exceeds our clients' expectations, and enhances their living or working environments",
        },
      ],

      planning: [
        {
          name: "Planning",
          imgsrc: ["planning/1.jpg"],
          about:
            "At our architecture firm, planning is crucial to the success of projects. We collaborate with clients to understand their vision, requirements, and constraints, which helps us develop a clear project brief. We assess site characteristics, conceptualize design, produce technical documentation, and develop contingency plans to mitigate risks. Planning is the foundation for project success, guiding design, construction, and project management.",
        },
      ],

      urbandesign: [
        {
          name: "Urban Design",
          imgsrc: ["urbandesign/1.jpg", "urbandesign/2.jpg", "urbandesign/3.jpg"],
          about:
            "At our firm, we specialize in urban design, with a focus on various aspects such as master planning, public space design, transit-oriented development, sustainable design strategies, and community engagement. Our team conceptualizes and implements urban projects that foster connectivity, sustainability, and community well-being. By integrating thoughtful design principles and engaging stakeholders throughout the process, we strive to create vibrant and resilient urban environments that enrich the lives of residents and visitors alike. Our approach to urban design is unique, and we take pride in delivering exceptional results that meet the needs of our clients and the wider community.",
        },
      ],
    };

    return serviceData[service];
  }
  const serviceData = getServiceData(service);
  const serviceItem = serviceData?.[0];

  return (
    <div className="flex flex-col tracking-widest leading-normal font-thin pb-24 px-2 sm:px-16 md:px-32  text-white">
      <div className="text-4xl font-extralight uppercase text-third brightness-150 pb-10">
        {serviceItem?.name}
        </div>
      <div className="flex flex-col lg:flex-row">
        <div className="basis-[250%]">
          <div className="py-8">
            {serviceItem?.about}
            </div>
          <div className="grid grid-cols-2 gap-5 ">
            {serviceItem?.imgsrc.map((imgSrc, index) => (
              <img key={index} src={`/Images/services/${imgSrc}`} alt={`${serviceItem.name} Image ${index}`} className={` w-full h-max bg-cover bg-center ${(index==0)?'col-span-2':''}` } />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 p-5 my-8 lg:ml-4  w-full h-max bg-fourth ">
          <h1 className="text-3xl ">ALL SERVICES</h1>
          {providedservices.map((s, index) => (
            <Link key={index} href={`/services/${s.toLowerCase().replace(/\s+/g, "")}`} className={`hover:bg-third ${`/services/${service}` === `/services/${s.toLowerCase().replace(/\s+/g, "")}` ? "bg-third" : ""}   py-4 px-3 transition-all duration-300 flex justify-between items-center`}>
               <p>{s}</p> <p><MdOutlineKeyboardArrowRight /></p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
// ${serviceItem.name.toLowerCase().replace(/\s+/g, '')}
