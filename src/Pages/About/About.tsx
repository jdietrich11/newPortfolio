import React, { useState } from "react";

import "./About.styles.scss";

import personalInterests from "../../Assets/information/interests";

const About: React.FC = () => {
  const [activeItem, setActiveItem] = useState("programming");
  const handleClick = (item: string) => {
    setActiveItem(item);
  };
  return (
    <div className="aboutContainer">
      <div className="subHeaderContainer">
        {personalInterests.map((item) => {
          return (
            <div
              onClick={() => handleClick(item.name)}
              className={
                activeItem === item.name
                  ? "subheaderItem-active"
                  : "subheaderItem"
              }
            >
              {item.name}
            </div>
          );
        })}
      </div>
      <div className="itemContainer">
        {personalInterests.map((item) => {
          return <>{activeItem === item.name ? item.object : null}</>;
        })}
      </div>
    </div>
  );
};

export default About;
