'use client'
import { useState, useEffect } from 'react';
import SideBar from "@/Components/SideBar";
import About from '@/Components/About';
import Projects from '@/Components/Projects';
import Services from '@/Components/Services';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ['/Images/1.jpeg', '/Images/2.jpeg', '/Images/3.jpeg','/Images/3.jpg','/Images/4.jpg'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 4000); // Change image every 2 seconds

    return () => clearInterval(intervalId); // Cleanup interval
  }, [currentIndex]); // Re-run effect when currentIndex changes

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (<>
    <div className="relative bg-cover sm:bg-left w-screen h-screen uppercase tracking-widest leading-normal font-thin" style={{ backgroundImage: `url(${images[currentIndex]})`, transition: 'background-image 2s ease' }}>
    <div className=" hidden md:flex absolute w-24 h-24 z-20 border-r-2 border-b-2 border-white border-opacity-20 bottom-[5%] right-[5%]"></div>
    <div className="hidden md:flex absolute w-24 h-24 z-20 border-t-2 border-r-2 border-white border-opacity-20 top-[5%] right-[5%]"></div>

      <div className="flex flex-row relative h-screen w-screen bg-primary bg-opacity-55">
        <SideBar />
        <div className='hidden md:flex absolute bottom-11 left-[12%] gap-2'>
          <button className="border-[0.5px] w-10 h-10 rounded-full " onClick={prevSlide}>&lsaquo;</button>
          <button className="border-[0.5px] w-10 h-10 rounded-full" onClick={nextSlide}>&rsaquo;</button>
        </div>
        <div className="flex flex-col items-end absolute top-1/4 right-[5%] text-end gap-5">
          <div className="text-2xl  sm:text-3xl md:text-5xl font-normal ">
            <p>Designing Tomorrow's</p>
            <p>Landscapes Today</p>
          </div>
          <h2 className="text-base  sm:text-lg md:text-xl min-w-[60%] max-w-[60%]">Integrating sustainable practices and cutting-edge design to shape environments that harmonize with nature and inspire future generations.</h2>
          
          <button className="border-2 px-4 py-2 text-xl ">Contact Us</button>
        </div>
      </div>
    </div>
    <About/>
    <Projects/>
    <Services/>
  </>
  );
}


