import React from "react";
import GallerlySection from "./GallerlySection";

export default function ActivityDLU() {
  return (
    <>
      <div className="uppercase flex justify-center ">
        <div className=" w-fit border-b-2 border-primary">
          <h1 className="justify-center text-4xl font-bold text-primary inline-block  my-4">
            Hoạt động & phong trào
          </h1>
        </div>
      </div>
      <div>
        <GallerlySection/>
      </div>
    </>
  );
}
