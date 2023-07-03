import React from "react";
import CampusDLU from "../components/About/CampusDLU";
import HistoryDLU from "../components/About/HistoryDLU";
import ActivityDLU from "../components/About/ActivityDLU";

const About = () => {
  return (
    <div className="mt-16">
      <HistoryDLU />
      <ActivityDLU />
      <CampusDLU />
    </div>
  );
};

export default About;
