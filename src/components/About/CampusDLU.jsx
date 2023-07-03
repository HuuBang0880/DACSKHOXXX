import React from 'react'
import { SliderCampus } from '../Layout/Slider/Slider'

export default function CampusDLU() {
  return (
    <div >
        <div className="uppercase flex justify-center ">
        <div className=" w-fit border-b-2 border-primary">
          <h1 className="justify-center text-4xl font-bold text-primary inline-block  my-4">
            Hình ảnh khuôn viên trường
          </h1>
        </div>
        </div>
        <SliderCampus/>
      </div>
  )
}
