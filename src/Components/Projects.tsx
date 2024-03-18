import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

interface Slide {
  url: string;
  title?: string;
  description?: string;
}

const Projects: React.FC = () => {
  const slides: Slide[] = [
    {
      url: '/Images/1.jpeg',
      title: 'First ImageSlate Horizon Retreat: A Modern Cement Haven',
      description: 'Description for the first imageA sleek cement-colored modern masterpiece, blending minimalist design with natural elegance, offering serene luxury amidst panoramic vistas.',
    },
    {
      url: '/Images/2.jpeg',
      title: 'Urban Oasis: Industrial Loft Living',
      description: 'In the heart of the city, a modern industrial loft with exposed brick walls and expansive windows invites urban dwellers to embrace contemporary living amidst metropolitan charm.',
    },
    {
      url: '/Images/3.jpeg',
      title: 'Third Image',
      description: 'Description for the third image',
    },
    {
      url: '/Images/4.jpg',
      title: 'Fourth Image',
      description: 'Description for the fourth image',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='bg-primary tracking-widest leading-normal font-thin pt-24 pb-24 mx-2 sm:px-16 md:px-32  '>
    <h1 className='uppercase  text-5xl font-normal'> Our <span className='text-third'>projects</span></h1>
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-10 px-4 relative group ">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` , opacity:'55%' }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((_, slideIndex) => (
            <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${
                currentIndex === slideIndex ? 'text-black' : 'text-gray-300'
            }`}
            >
            <RxDotFilled />
          </div>
        ))}
      </div>
      <div className="absolute bottom-28 left-0 right-0 text-center text-white px-16">
        <h2 className="text-xl uppercase font-normal ">{slides[currentIndex].title}</h2>
        <p className="text-sm ">{slides[currentIndex].description}</p>
      </div>
    </div>
        </div>
  );
};

export default Projects;
