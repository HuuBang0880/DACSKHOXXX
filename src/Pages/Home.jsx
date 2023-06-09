import React from "react";
import SectionHeader, { SectionTittle } from "../components/Home/SectionHeader";
import Slider, { SliderCoop } from "../components/Slider/Slider";
import images from "../access/Images";
import ImageTitle, { HomeButtons, ImageTuyenSinh } from "../components/Home/ImageTitle";
import Videos from "../access/Videos";

export default function Home() {
  return (
    <>
      <div className="">
        <div className="container  mx-auto px-16 relative drop-shadow-lg  ">
          <Slider />
        </div>
      </div>
      <div className="bg-content h-[440px] ">
        <div className=" container flex mx-auto drop-shadow-lg  ">
          <div className="  mx-auto px-16 ">
            <div className=" grid grid-cols-2 my-8 ">
              <div className=" ">
                <h1 className="font-sans text-6xl">
                  "Lựa chọn đúng, 
                </h1>
                <h1 className="font-sans text-6xl pl-16">
                  thành công gần"
                </h1>
                <p className="mt-6 font-sans tracking-wider text-justify italic">
                  Trường Đại học Đà Lạt (Dalat University) là một trường đại học
                  công lập tại Việt Nam, đào tạo đa ngành, đa lĩnh vực, cung cấp
                  nguồn nhân lực trình độ cao về Khoa học tự nhiên và Công nghệ,
                  Khoa học xã hội và Nhân văn, và Kinh tế.
                </p>
                <HomeButtons title ={"Read More"}/>
              </div>
              <img
                src={images.introimg}
                alt="Img"
                className=" px-3 mt-5 ml-4 max-w-full  min-w-[300px] h-[300px] rounded-3xl  "
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" ">
        <div className="container mx-auto px-16 relative">
          <div className="   bg-white">
            <Videos src="https://www.youtube.com/embed/40maIPlMqWU?controls=0&rel=0&disablekb=1&showinfo=0&modestbranding=0&html5=1&iv_load_policy=3&autoplay=0&end=0&loop=0&playsinline=0&start=0&nocookie=false&enablejsapi=1&origin=https%3A%2F%2Fdlu.edu.vn&widgetid=1"></Videos>
            <div className=" flex bg-content">
              <div className="group ">
                <ImageTitle source={images.picAct1} />
                <p className="ml-6 mt-2">Activity 1</p>
              </div>
              <div className="group ">
                <ImageTitle source={images.picAct3} />
                <p className="ml-6 mt-2">Activity 2</p>
              </div>
              <div className="group ">
                <ImageTitle source={images.picAct4} />
                <p className="ml-6 mt-2">Activity a 3</p>
              </div>
              <div className="group ">
                <ImageTitle source={images.picAct5} />
                <p className="ml-6 mt-2">Activity 4</p>
              </div>
              <div className="group ">
                <ImageTitle source={images.picAct6} />
                <p className="ml-6 mt-2">Activity 5</p>
              </div>
            </div>
          </div>
          <div />

          <div className="mt-4 md:mt-8 xl:mt-12 "></div>
          <div className="mt-4 md:mt-8 xl:mt-12 ">
            <SliderCoop />
          </div>
        </div>
      </div>
    </>
  );
}
