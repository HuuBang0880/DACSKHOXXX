import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { RxDotFilled, RxDot } from "react-icons/rx";
import images from "../../../access/Images";



const sliders = [
  {
    url: images.slide1,
  },
  {
    url: images.slide2,
  },
  {
    url: images.slide3,
  },
  {
    url: images.slide4,
  },
];

const slidersCampus = [
  {
    url: images.picCampus1,
  },
  {
    url: images.picCampus2,
  },
  {
    url: images.picCampus3,
  },
  {
    url: images.picCampus4,
  },
 
];


export default function Slider() {
  /**
   * UseState function
   */
  const [currentIndex, setCurrentIndex] = useState(0);

  /**
   * Handle function
   */

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === sliders.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (sliderIndex) => {
    setCurrentIndex(sliderIndex);
  };

  return (
    <div className="container mx-auto px-16 relative drop-shadow-lg  ">
      <div className="group relative h-[240px] w-full max-w-full py-16 lg:h-[480px] xl:h-[600px]  ">
        <div className="h-full w-full overflow-hidden bg-center rounded-lg">
          <div
            style={{
              backgroundImage: `url(${sliders[currentIndex].url})`,
              backgroundRepeat: "no-repeat",
            }}
            className="h-full w-full bg-contain bg-center duration-700 group-hover:scale-105"
          ></div>
        </div>
        <div
          className="absolute top-[50%] left-6 hidden -translate-x-0 -translate-y-[50%] cursor-pointer rounded-full p-2 text-2xl hover:bg-black/20 hover:text-white group-hover:block"
          onClick={prevSlide}
        >
          <BsChevronLeft size={30} />
        </div>
        <div
          className="absolute top-[50%] right-6 hidden -translate-x-0 -translate-y-[50%] cursor-pointer rounded-full p-2 text-2xl hover:bg-black/20 hover:text-white group-hover:block"
          onClick={nextSlide}
        >
          <BsChevronRight size={30} />
        </div>
        <div className="top-4 flex justify-center py-2">
          {sliders.map((slider, sliderIndex) => (
            <div
              key={sliderIndex}
              className="cursor-pointer text-2xl"
              onClick={() => goToSlide(sliderIndex)}
            >
              {sliderIndex === currentIndex ? <RxDotFilled /> : <RxDot />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export function SliderCampus() {
  /**
   * UseState function
   */
  const [currentIndex, setCurrentIndex] = useState(0);

  /**
   * Handle function
   */

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === sliders.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (sliderIndex) => {
    setCurrentIndex(sliderIndex);
  };

  return (
    <div className="container mx-auto px-16 relative drop-shadow-lg  ">
      <div className="group relative h-[240px] w-full max-w-full py-16 lg:h-[480px] xl:h-[600px]  ">
        <div className="h-full w-full overflow-hidden bg-center rounded-lg">
          <div
            style={{
              backgroundImage: `url(${slidersCampus[currentIndex].url})`,
              backgroundRepeat: "no-repeat",
            }}
            className="h-full w-full bg-contain bg-center duration-700 group-hover:scale-105"
          ></div>
        </div>
        <div
          className="absolute top-[50%] left-6 hidden -translate-x-0 -translate-y-[50%] cursor-pointer rounded-full p-2 text-2xl hover:bg-black/20 hover:text-white group-hover:block"
          onClick={prevSlide}
        >
          <BsChevronLeft size={30} />
        </div>
        <div
          className="absolute top-[50%] right-6 hidden -translate-x-0 -translate-y-[50%] cursor-pointer rounded-full p-2 text-2xl hover:bg-black/20 hover:text-white group-hover:block"
          onClick={nextSlide}
        >
          <BsChevronRight size={30} />
        </div>
        <div className="top-4 flex justify-center py-2">
          {slidersCampus.map((slidercampus, sliderIndex) => (
            <div
              key={sliderIndex}
              className="cursor-pointer text-2xl"
              onClick={() => goToSlide(sliderIndex)}
            >
              {sliderIndex === currentIndex ? <RxDotFilled /> : <RxDot />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}