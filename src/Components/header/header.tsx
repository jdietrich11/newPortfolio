import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header: React.FC = () => {
  return (
    <div className="headerContainer">
      <Link to="/resume" className="linkContainerResume">
        <div>Resume</div>
      </Link>
      <Link to="/" className="nameContainer">
        <div className="name">Josh Dietrich</div>
        <div className="titleContainer">
          <div className="title">Web Developer</div>
        </div>
      </Link>
      <Link to="/about" className="linkContainerAbout">
        <div>About</div>
      </Link>
    </div>
  );
};

export default Header;
