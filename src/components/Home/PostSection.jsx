import React from "react";
import images from "../../access/Images";
import PostItem from "./PostItem";

const data = [
  {
    id: 1,
    image: images.picAct1,
    shortDescription:
      "Khoa Ngữ văn và Lịch sử, Trường Đại học Đà Lạt kỷ niệm 40 năm thành lập",
    url: "",
  },
  {
    id: 2,
    image: images.picAct7,
    shortDescription:
      "Đại học Đà Lạt là một trong những ngôi trường đẹp nhất Đông Nam Á",
    url: "https://dalatreview.vn/su-that-ve-dai-hoc-da-lat.html",
  },
  {
    id: 3,
    image: images.picAct2,
    shortDescription:
      "Thầy Phạm Tiến Sơn trở thành giáo sư đầu tiên của Trường Đại học Đà Lạt",
  },
  {
    id: 4,
    image: images.picAct3,
    shortDescription:
      "Đại học Đà Lạt Tọa đàm về thơ thiền trong dòng chảy văn hóa dân tộc",
  },
  {
    id: 5,
    image: images.picAct4,
    shortDescription:
      "Trường đại học Đà Lạt: 600 vận động viên tham gia hội thao sinh viên",
  },
  {
    id: 6,
    image: images.picAct5,
    shortDescription:
      "Khoa Luật học Trường Đại học Đà Lạt: 20 năm hình thành và phát triển",
  },

  {
    id: 7,
    image: images.picAct6,
    shortDescription:
      "Trường Đại học Đà Lạt đạt kiểm định chất lượng chương trình đào tạo 5 ngành mới",
  },
  {
    id: 8,
    image: images.picAct8,
    shortDescription:
      "Các trường đại học Hàn Quốc tìm hiểu hợp tác với Trường Đại học Đà Lạt",
  },
  {
    id: 9,
    image: images.picAct9,
    shortDescription:
      "Trường Đại học Đà Lạt có thêm một Phó Hiệu trưởng",
  },
  {
    id: 10,
    image: images.picAct10,
    shortDescription:
      "Tọa đàm đổi mới sáng tạo thời kỳ công nghiệp 4.0",
  },
];

export default function PostSection() {
  return (
    <div className="container mx-auto mt-16 mb-5">
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-4 gap-y-2 my-auto">
        {data.map((item) => {
          return <PostItem key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
}
