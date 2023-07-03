import React from 'react'
import Timeline from '../Layout/Timeline/Timeline'

export default function HistoryDLU() {
  return (
    <>
    <div className="uppercase flex justify-center ">
        <div className=" w-fit border-b-2 border-primary">
          <h1 className="justify-center text-4xl font-bold text-primary inline-block  my-4">
            Lịch sử và thành tựu
          </h1>
        </div>
      </div>
      {/* <h1 className="Intro">Giới thiệu</h1> */}
      <div className="Timelinee"><Timeline /></div>
    </>
  )
}
