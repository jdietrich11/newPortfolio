import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header: React.FC = () => {
  return (
    <div className="headerContainer">
      <Link to="/" className="nameContainer">
        <div className="name">Josh Dietrich</div>
        <div className="titleContainer">
          <div className="title">Web Developer</div>
        </div>
      </Link>
    </div>
  );
};

export default Header;
