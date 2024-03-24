import Facebook from "@/Components/Facebook";
import Instagram from "@/Components/Instagram";
import Team from "@/Components/Team";
import Twitter from "@/Components/Twitter";
import React from "react";

interface TeamParams {
  team: string;
}

const page: React.FC<{ params: TeamParams }> = ({ params }) => {
  let memberData;
  const { team } = params;

  if (team == "Ghanshyam%20Kumawat") {
    memberData = {
      name: "Ghanshyam Kumawat",
      imgsrc: "/Images/team2.jpeg",
      occupation: "Architect",
      Contact: "+91 8385024024",
      about:
        "Embarking on my architectural journey, I delved into a realm where creativity intertwines with functionality. With each blueprint and structure erected, I strive to weave narratives of innovation and harmony. My passion fuels a relentless pursuit of excellence, shaping spaces that stand as testaments to my vision. As I navigate the intricate landscape of design, I am driven by a profound commitment to leaving an indelible mark on the world.",
      email: "sonuk@gmail.com",
    };
  } else if (team == "Meenu%20Kumawat") {
    memberData = {
      name: "Meenu Kumawat",
      imgsrc: "/Images/team4.jpeg",
      occupation: "3D planning",
      Contact: "+91 8385024024",
      about:
        "With an unwavering commitment to precision, I meticulously sculpt digital realms, each design a fusion of creativity and technical finesse. My passion for 3D planning fuels an unyielding pursuit of excellence, as I strive to push the boundaries of architectural innovation. Guided by a relentless dedication to craft, I craft immersive environments that captivate and inspire, shaping the future of spatial design with every stroke.",
      email: "sonuk@gmail.com",
    };
  } else {
    memberData = {
      name: "",
      imgsrc: "",
      occupation: "",
      Contact: "",
      about: "",
      email: "",
    };
  }

  return (
    <>
      <div className="flex flex-col gap-20 tracking-widest leading-normal font-thin pt-24 pb-24 sm:px-16 md:px-32 ">
        <div className="flex gap-3 uppercase text-4xl font-normal">
          <p>
            Team <span className="text-third">Details</span>
          </p>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-6 text-white tracking-wider bg-fourth">
          <div>
            <img src={memberData.imgsrc} alt="" className="aspect-square w-full xl:w-full object-cover object-top" />
          </div>
          <div className="flex flex-col gap-9 px-3 py-10">
            <div>
              <h1 className="text-2xl brightness-200 tracking-widest font-medium">{memberData.name}</h1>
              <h2>{memberData.occupation}</h2>
            </div>

            <p>{memberData.about}</p>
            <div className="lg:grid lg:grid-cols-2">
              <p>
                <span className="text-third brightness-150">Contact Me: </span>
                {memberData.Contact}
              </p>
              <p>
                <span className="text-third brightness-150">Email: </span>
                {memberData.email}
              </p>
            </div>
            <div className=" w-full flex flex-col gap-2 py-5">
              <ul className="flex gap-2 ">
                <Facebook />
                <Instagram />
                <Twitter />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-20 tracking-widest leading-normal font-thin pt-24 pb-24  sm:px-16 md:px-32 ">
        <div className=" flex gap-3 uppercase  text-4xl font-normal">
          <p>
            Other <span className="text-third">Member</span>
          </p>
        </div>
        <div className="text-center tracking-wider">{team == "Meenu%20Kumawat" ? <Team name="Ghanshyam Kumawat" occupation="Architect" imgsrc="/Images/team2.jpeg" /> : <Team name="Meenu Kumawat" occupation="3D planning" imgsrc="/Images/team4.jpeg" />}</div>
      </div>
    </>
  );
};

export default page;
