import React from "react";

import Icon from "../icon/icon";
import PersonalLinks from "../../Assets/information/personalLinks";

import "./footer.styles.scss";

const Footer: React.FC = () => {
  const redirectTo = (liveLink: string) => {
    const newWindow = window.open(liveLink, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="footerContainer">
      <div className="linksContainer">
        {PersonalLinks.map((item) => {
          return (
            <div onClick={() => redirectTo(item.link)}>
              <Icon icon={item.icon} classname="footerIcon" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
