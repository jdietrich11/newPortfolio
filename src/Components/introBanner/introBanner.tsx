import React from "react";

import "./introBanner.styles.scss";

const IntroBanner: React.FC = () => {
  return (
    <div className="introBannerContainer">
      <div className="introTextContainer">
        <div className="introText">
          Hello there, I was born and raised in the shadow of the rocky
          mountains with a love of technology in a cowboy town. I have been
          working as a graveshift security guard for the past 3 years, using my
          free time there to learn web development skills. I'm currently
          enrolled at UVU working towards my computer science degree.
        </div>
      </div>
      <div className="imgContainer">
        <img
          className="img"
          src={require("../../Assets/Photos/introPhoto.jpg")}
          alt="Josh with nephew on motorcyle"
        />
      </div>
    </div>
  );
};

export default IntroBanner;
