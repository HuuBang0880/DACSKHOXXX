import React from "react";
import SectionHeader, { SectionTittle } from "../components/Home/SectionHeader";
import Slider, { SliderCoop } from "../components/Slider/Slider";
import images from "../access/Images";
import ImageTitle, {
  HomeButtons,
  ImageTuyenSinh,
} from "../components/Home/ImageTitle";
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
                <h1 className="font-sans text-6xl">"Lựa chọn đúng,</h1>
                <h1 className="font-sans text-6xl pl-16">thành công gần"</h1>
                <p className="mt-6 font-sans tracking-wider text-justify italic">
                  Trường Đại học Đà Lạt (Dalat University) là một trường đại học
                  công lập tại Việt Nam, đào tạo đa ngành, đa lĩnh vực, cung cấp
                  nguồn nhân lực trình độ cao về Khoa học tự nhiên và Công nghệ,
                  Khoa học xã hội và Nhân văn, và Kinh tế.
                </p>
                <HomeButtons title={"Read More"} />
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
      <div className="  h-[654px]">
        <div className="container mx-auto px-16 ">
          <div>
            <h1></h1>
          </div>
          <div className="grid grid-cols-4 my-auto ">
            <div className="group shadow-2xl mx-4 mt-16  rounded-lg h-[440px] border-l-2 border-b-2 border-solid border-primary bg-bgcontent">
              <ImageTitle source={images.picAct1} />
              <a href="/" className="inline-block">
                <h1>
                  Khoa Ngữ văn và Lịch sử, Trường Đại học Đà Lạt kỷ niệm 40 năm
                  thành lập
                </h1>
              </a>
            </div>

            <div>
              <div className="group shadow-2xl mx-4 mt-16  rounded-lg h-[440px] border-l-2 border-b-2 border-solid border-primary bg-bgcontent">
                <ImageTitle source={images.picAct1} />
                <a href="/" className="inline-block">
                  <h1>
                    Thầy Phạm Tiến Sơn trở thành giáo sư đầu tiên của Trường Đại
                    học Đà Lạt
                  </h1>
                </a>
              </div>
            </div>
            <div>
              <div className="group shadow-2xl mx-4 mt-16  rounded-lg h-[440px] border-l-2 border-b-2 border-solid border-primary bg-bgcontent">
                <ImageTitle source={images.picAct1} />
                <a href="/" className="inline-block">
                  <h1>
                    Đại học Đà Lạt là một trong nhưng trường đại học đầu tiên ở
                    Việt Nam được kiểm định chất lượng giáo dục đại học.
                  </h1>
                </a>
              </div>
            </div>
            <div>
              <div className="group shadow-2xl mx-4 mt-16  rounded-lg h-[440px] border-l-2 border-b-2 border-solid border-primary bg-bgcontent">
                <ImageTitle source={images.picAct1} />
                <a href="/" className="inline-block">
                  <h1>
                    Trường Đại học Đà Lạt tổ chức thành công Hội nghị Đại biểu
                    nhà giáo, cán bộ quản lý giáo dục và người lao động năm học
                    2022 – 2023
                  </h1>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
