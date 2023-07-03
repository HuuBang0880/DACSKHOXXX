import React from "react";
import images from "../../access/Images";
import PostSection from "./PostSection";


export default function Content() {
    
  return (
    <div className="">
      <div>
        <img src={images.picAI} alt="" />
      </div>
      <div className="container mx-auto h-[440px] justify-center flex ">
        <div className=" grid grid-cols-2">
          <div className="self-center">
            <div className=" w-fit border-b-2 border-primary ">
              <div className=" text-4xl mb-2 font-bold font-sans uppercase text-center animate-fade-in-left-0.5 ">
                <h1>Dẫn đầu xu thế mới với </h1>
              </div>
            </div>

            <div className=" w-fit border-b-2 border-primary ">
              <div className=" mt-6 mb-2  text-6xl font-bold font-sans uppercase animate-fade-in-left-2  ">
                <h1> trí tuệ nhân tạo</h1>
              </div>
            </div>
          </div>

          <div className="self-center animate-fade-in-left-1.5">
            <div className=" tracking-wider text-justify italic ">
              <p className="">
                Trung tâm ra đời với sứ mệnh đưa Trí tuệ nhân tạo trở nên gần
                gũi, thiết thực với cộng đồng, nhất là đối với học sinh, sinh
                viên, thông qua đó góp phần đào tạo nguồn nhân lực, nhân tài về
                AI có thể thích nghi với thời đại bùng nổ công nghệ thông tin,
                với cuộc cách mạng công nghiệp 4.0 đang diễn ra.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContentAbout() {
  return (
    <div className="bg-content">
      <div className="container mx-auto h-[840px] animate-fade-in-left-0.5">
        <div className=" font-sans font-bold text-4xl text-center text-primary uppercase">
          <h1 className="pt-4">chức năng, nhiệm vụ của trung tâm</h1>
        </div>
        <div className="px-16">
          <PostSection />
        </div>
      </div>
    </div>
  );
}

export function ContentB() {
  return (
    <div className="">
      <div className="container mx-auto h-[640px] justify-center flex">
        <div className="grid grid-cols-2">
        
        <div className="self-center">
            <div className=" w-fit border-b-2 border-primary ">
              <div className=" text-6xl mb-2 font-bold font-sans uppercase text-center ">
                <h1>Vì sao phải chọn </h1>
              </div>
            </div>

            <div className=" w-fit border-b-2 border-primary ">
              <div className=" mt-6 mb-2  text-4xl font-bold font-sans uppercase  ">
                <h1>trung tâm AI của trường ? </h1>
              </div>
            </div>
          </div>

          <div className="self-center ">
            <ul>
              <li className="mt-4 font-sans italic tracking-wider">
                <p>
                  Chủ trương, chính sách của nhà nước: “Trí tuệ nhân tạo là một
                  lĩnh vực công nghệ nền tảng của Cách mạng công nghiệp lần thứ
                  tư, góp phần quan trọng tạo bước phát triển đột phá về năng
                  lực sản xuất, nâng cao năng lực cạnh tranh quốc gia, thúc đẩy
                  phát triển kinh tế tăng trưởng bền vững” .
                </p>
              </li>
              <li className="mt-4 font-sans italic tracking-wider">
                <p>
                  Nhu cầu của xã hội: “Theo Google Brain, nhu cầu nhân lực phục
                  vụ AI là 1 triệu người, nhưng chỉ có khoảng 10.000 nhân lực
                  chất lượng cao đáp ứng” .
                </p>
              </li>
              <li className="mt-4 font-sans italic tracking-wider">
                <p>
                  Mức lương cao: “Một nhân viên lập trình có 3 năm kinh nghiệm
                  trong mảng AI/máy học có mức lương cơ bản từ 1.290 - 1.703
                  USD/tháng” .
                </p>
              </li>
              <li className="mt-4 italic tracking-wider font-sans">
                <p>
                  Chương trình đào tạo chính của Trung tâm là bộ giáo trình quốc
                  tế AI Future Intelligent Manufacture (gọi tắt là chương trình
                  K12) đã được thẩm định bởi Đại học Quốc gia Tp.HCM và do Tập
                  đoàn Liên Thái Bình Dương (gọi tắt là IPPG) chuyển giao.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


