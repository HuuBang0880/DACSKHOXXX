import React from "react";

import images from "../../access/Images";

export default function PostItem({ data }) {
  return (
    <div className="group relative mb-2.5 overflow-hidden bg-white">
      <div className="px-5">
        <div className="relative overflow-hidden shadow-lg rounded-md">
          <a href="">
            <img src={images.picAct1} alt="pic 1" className="invisible" />
            <img
              src={images.picAct1}
              alt="pic 1"
              className="absolute top-0 duration-500 group-hover:scale-105 h-full object-contain"
            />
          </a>
        </div>
        <div className="mt-5 w-full text-left">
          <h3 className="relative mb-1.5 min-h-[18px] text-base font-bold hover:text-primary">
            {data.shortDescription}
          </h3>
        </div>
      </div>
    </div>
  );
}