import React from "react";
import Slider from "../components/Layout/Slider/Slider";
import PostSection from "../components/Home/PostSection";
import ContentSection, { ContentAICSection, ContentSectionB } from "../components/Home/ContentSection";

export default function Home() {
  return (
    <div className="mt-14">
      
      <Slider />
      <ContentSection />
      <PostSection />
      <ContentAICSection />
      

    </div>
  );
}
