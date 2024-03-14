import Layout from "@/Components/Layout";
import SideBar from "@/Components/SideBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-row bg-banner-bg">
     <SideBar/>
    <div className="fixed top-1/3 right-24 ">
     <h1 className="text-4xl uppercase">Designing Tomorrow's Landscapes Today</h1>
    </div>
    </div>
    
  );
}
