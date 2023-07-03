import React from 'react'
import PostItem from '../Home/PostItem';
import images from '../../access/Images';
const data = [
    { id: 1, image: images.picHD01, shortDescription: "Description 1" },
    { id: 2, image: images.picHD02, shortDescription: "Description 2" },
    { id: 3, image: images.picHD03, shortDescription: "Description 3" },
    { id: 4, image: images.picHD08, shortDescription: "Description 4" },
    { id: 5, image: images.picHD05, shortDescription: "Description 5" },
    { id: 6, image: images.picHD06, shortDescription: "Description 6" },
  ];
export default function GallerlySection() {
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
  )
}
