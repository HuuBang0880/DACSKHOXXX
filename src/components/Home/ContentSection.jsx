import React from "react";
import images from "../../access/Images";
import MainButtons from "./Buttons";

export default function ContentSection() {

  return (
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
              <MainButtons title={"Read More"} path={"/about"} />
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
  );
}

export function ContentAICSection() {
  return (
    <div className="bg-content h-[440px] ">
      <div className=" container flex mx-auto drop-shadow-lg  ">
        <div className="  mx-auto px-16 ">
          <div className=" grid grid-cols-2 my-8 ">
            <div>
              <img
                src={images.introimg2}
                alt="Img"
                className=" px-3 mt-5 ml-4 max-w-full  min-w-[300px] h-[300px] rounded-3xl  "
              />
            </div>
            <div className=" ">
              <h1 className="font-sans text-6xl">Trí tuệ nhân tạo </h1>
              <h1 className="font-sans text-6xl pl-16">
                là tương lai công nghệ
              </h1>
              <p className="mt-6 font-sans tracking-wider text-justify italic">
                Trung tâm Giáo dục Đào tạo Trí tuệ nhân tạo đươc thành lập ngày
                06/09/2021 theo Quyết định số 612/QĐ-ĐHĐL của Hiệu Trưởng trường
                Đại học Đà Lạt, với sự hợp tác tài trợ của tập đoàn Liên Thái
                Bình Dương (IPPG).
              </p>
              <MainButtons title={"Read More"} path={"/aicabout"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
