import React from "react";
import images from "../../access/Images";
import PostItem from "./PostItem";

const data = [
  {
    id: 1,
    image: images.picAct1,
    shortDescription:
      "Khoa Ngữ văn và Lịch sử, Trường Đại học Đà Lạt kỷ niệm 40 năm thành lập",
    url:""
  },
  {
    id: 2,
    image: images.picAct7,
    shortDescription:
      "Đại học Đà Lạt là một trong những ngôi trường đẹp nhất Đông Nam Á",
    url:"https://dalatreview.vn/su-that-ve-dai-hoc-da-lat.html"
  },
  {
    id: 3,
    image: "http://",
    shortDescription:
      "Khoa Ngữ văn và Lịch sử, Trường Đại học Đà Lạt kỷ niệm 40 năm thành lập",
  },
  {
    id: 4,
    image: "http://",
    shortDescription:
      "Khoa Ngữ văn và Lịch sử, Trường Đại học Đà Lạt kỷ niệm 40 năm thành lập",
  },
  {
    id: 54,
    image: "http://",
    shortDescription:
      "Khoa Ngữ văn và Lịch sử, Trường Đại học Đà Lạt kỷ niệm 40 năm thành lập",
  },
  {
    id: 6,
    image: "http://",
    shortDescription:
      "Khoa Ngữ văn và Lịch sử, Trường Đại học Đà Lạt kỷ niệm 40 năm thành lập",
  },
  {
    id: 7,
    image: "http://",
    shortDescription:
      "Khoa Ngữ văn và Lịch sử, Trường Đại học Đà Lạt kỷ niệm 40 năm thành lập",
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
