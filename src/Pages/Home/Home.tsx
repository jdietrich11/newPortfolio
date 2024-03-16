import React from "react";

import "./Home.styles.scss";

import IntroBanner from "../../Components/introBanner/introBanner";

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
    </div>
  );
};

export default Home;

// background video and header
// Hi I'm (breif about) Intro Banner
// projects
// footer
