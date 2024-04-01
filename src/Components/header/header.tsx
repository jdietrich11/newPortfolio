import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "./header.styles.scss";

const Header: React.FC = () => {
  const [path, setPath] = useState("headerContainer");
  let location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setPath("headerContainer");
    } else {
      setPath("otherHeaderContainer");
    }
  }, [location]);

  return (
    <div className={path}>
      <Link
        to={location.pathname === "/resume" ? "/" : "/resume"}
        className="linkContainerResume"
      >
        <div>{location.pathname === "/resume" ? "Home" : "Resume"}</div>
      </Link>
      <Link to="/" className="nameContainer">
        <div className="name">Josh Dietrich</div>
        <div className="titleContainer">
          <div className="title">Web Developer</div>
        </div>
      </Link>
      <Link
        to={location.pathname === "/about" ? "/" : "/about"}
        className="linkContainerAbout"
      >
        <div>{location.pathname === "/about" ? "Home" : "About"}</div>
      </Link>
    </div>
  );
};

export default Header;
