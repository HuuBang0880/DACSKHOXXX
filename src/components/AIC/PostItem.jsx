import React from "react";

export default function PostItem({ data }) {
  return (
    <div className="group m-4 relative flex justify-center mb-2.5 overflow-hidden bg-white hover:bg-primary delay-200 transition-transform rounded-2xl border-b-4 border-primary border-l-2 ">
      <div className="mt-5 w-[80%]  text-left h-44 ">
          <p className="relative mb-1.5 min-h-[18px]  text-base text-center font-bold group-hover:scale-110 transition-all  group-hover:text-white">
            {data.shortDescription}
          </p>
      </div>
    </div>
  );
}
