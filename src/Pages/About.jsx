import React from 'react';
import Timeline from "../components/Layout/Timeline/Timeline";
import GallerlySection from '../components/About/GallerlySection';


const About = () => {
  return (
    <div className='mt-16'>
      <div className="uppercase flex justify-center ">
        <div className=" w-fit border-b-2 border-primary">
          <h1 className="justify-center text-4xl font-bold text-primary inline-block  my-4">
            Lịch sử và thành tựu
          </h1>
        </div>
      </div>
      {/* <h1 className="Intro">Giới thiệu</h1> */}
      <div className="Timelinee"><Timeline /></div>
  
      <div className="uppercase flex justify-center ">
        <div className=" w-fit border-b-2 border-primary">
          <h1 className="justify-center text-4xl font-bold text-primary inline-block  my-4">
            Hoạt động & phong trào
          </h1>
          <GallerlySection></GallerlySection>
        </div>
      </div>

    </div>
  );
};

export default About;


