import React from "react";
import images from "../../access/Images";
import PostItem from "./PostItem";

const data = [
  {
    id: 1,

    shortDescription:
      "Đào tạo kỹ năng AI cho học sinh, sinh viên, giáo viên, giảng viên.",
  },
  {
    id: 2,

    shortDescription:
      "Bồi dưỡng kiến thức cập nhật AI cho giảng viên, giáo viên, sinh viên, học sinh.",
  },
  {
    id: 3,

    shortDescription:
      "Phối hợp với các Sở giáo dục và Đào tạo, các trường phổ thông tổ chức các buổi học ngoại khóa/tham quan/trải nghiệm về AI theo phương pháp tiếp cận STEM",
  },
  {
    id: 4,

    shortDescription:
      "Tổ chức tập huấn, phổ cập các kiến thức về AI và chuyển đổi số (như AI, Robotics, Data Science, Internet of Things (IoT), Cloud computing, 3D printing và ứng dụng) cho cán bộ, sinh viên toàn trường và cho cộng đồng để hoà nhập vào lực lượng lao động trong bối cảnh CMCN 4.0 hiện nay",
  },
  {
    id: 5,

    shortDescription:
      "Tổ chức các buổi seminar, hội thảo về các chủ đề trong AI như: chuyển đổi số, lớp học thông minh, thành phố thông minh, ứng dụng AI trong nông nghiệp, công nghệ sinh học, công nghệ sau thu hoạch",
  },
  {
    id: 6,

    shortDescription:
      "Nghiên cứu, hợp tác và phát triển ứng dụng AI thực tế, đặc biệt là các ứng dụng mang tính đặc thù của thành phố Đà Lạt nói riêng và tỉnh Lâm Đồng nói chung",
  },
  {
    id: 7,

    shortDescription:
      "Tư vấn về giải pháp về triển khai ứng dụng dựa trên nền tảng AI cho cơ quan, doanh nghiệp; tư vấn, hỗ trợ khởi nghiệp về AI",
  },
  {
    id: 8,

    shortDescription:
      "Tạo môi trường kết nối cộng đồng AI trong khu vực",
  },
];

export default function PostSection() {
  return (
    <>
      <div className=" mx-auto mt-12 mb-5">
        <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-x-4 gap-y-2 my-auto">
          {data.map((item) => {
            return <PostItem key={item.id} data={item} />;
          })}
        </div>
      </div>
    </>
  );
}
