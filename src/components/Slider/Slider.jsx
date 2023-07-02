import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { RxDotFilled, RxDot } from "react-icons/rx";
import images from "../../access/Images";
import imageCoop from "../../access/SlideCoop/SlideCoop";

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

const slidercoop = [
  {
    url: imageCoop.slideCoop1,
  },
  {
    url: imageCoop.slideCoop2,
  },
  {
    url: imageCoop.slideCoop3,
  },
  {
    url: imageCoop.slideCoop4,
  },
  {
    url: imageCoop.slideCoop5,
  },
  {
    url: imageCoop.slideCoop6,
  },
  {
    url: imageCoop.slideCoop7,
  },
  {
    url: imageCoop.slideCoop8,
  },
  {
    url: imageCoop.slideCoop9,
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
  );
}

export function SliderCoop() {
  /**
   * UseState function
   */
  const [currentIndex, setCurrentIndex] = useState(0);

  /**
   * Handle function
   */

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slidercoop.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slidercoop.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (sliderIndex) => {
    setCurrentIndex(sliderIndex);
  };
  function hadleIndexRight(currentIndex) {
    let tmp = currentIndex + 1;
    const isLastSlide = tmp === slidercoop.length;
    const newIndex = isLastSlide ? 0 : tmp;
    return newIndex;
  }

  function hadleIndexLeft(currentIndex) {
    let tmp = currentIndex - 1;
    const isFirstSlide = tmp === -1;
    const newIndex = isFirstSlide ? slidercoop.length - 1 : tmp;
    return newIndex;
  }

  return (
    <div className="container">
      <div className="group relative m-auto h-[100px] w-full max-w-full py-16 lg:h-[180px] xl:h-[300px]  ">
        <div className="h-full w-[50%] translate-x-[60%] justify-center overflow-hidden rounded-lg">
          <div className="h-[148px] w-[180px] inline-block transition-transform ">
            <img
              src={slidercoop[hadleIndexLeft(currentIndex)].url}
              alt=""
              className="w-full h-full p-2"
            />
          </div>
          <div className="h-[148px] w-[180px] duration-700 group-hover:scale-110 inline-block p-2 ">
            <img
              src={slidercoop[currentIndex].url}
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="h-[148px] w-[180px] inline-block transition-transform ">
            <img
              src={slidercoop[hadleIndexRight(currentIndex)].url}
              alt=""
              className="w-full h-full p-2"
            />
          </div>
        </div>

        <div className="top-4 flex justify-center py-2">
          {slidercoop.map((slider, sliderIndex) => (
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
