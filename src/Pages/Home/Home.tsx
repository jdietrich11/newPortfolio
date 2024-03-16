import React from "react";

import "./Home.styles.scss";

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
      <div className="makeBigger">Hello World</div>
    </div>
  );
};

export default Home;
