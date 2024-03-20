import React from "react";

import "./Home.styles.scss";

import IntroBanner from "../../Components/introBanner/introBanner";
import ProjectCard from "../../Components/projectCards/projectCard";

import ProjectData from "../../Assets/information/projects";
import Icon from "../../Components/icon/icon";

const experienceList = [
  "html",
  "css",
  "scss",
  "javascript",
  "react",
  "redux",
  "react native",
  "typescript",
];

const Home: React.FC = () => {
  return (
    <div className="homeContainer">
      <div className="videoContainer">
        <video
          autoPlay
          loop
          muted
          className="videoTag"
          src={require("../../Assets/Video/video.mp4")}
        ></video>
      </div>
      <IntroBanner />
      <div className="experienceContainer">
        <div>
          <div className="experienceHeader">Skills</div>
        </div>
        <div className="experienceIconContainer">
          {experienceList.map((item) => {
            return <Icon icon={item} classname="experienceIcon" />;
          })}
        </div>
      </div>
      {ProjectData.map((item) => {
        return <ProjectCard key={item.id} data={item} />;
      })}
      <div className="manyMore">With many more to come!</div>
    </div>
  );
};

export default Home;

// background video and header
// Hi I'm (breif about) Intro Banner
// projects
// footer
