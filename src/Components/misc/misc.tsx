import React from "react";

import "./misc.styles.scss";

import { miscQA } from "../../Assets/information/QA";

const intro =
  "I have always enjoyed solving problems. From fixing cars, learning carpentry skills, electrical work, and software. I am the kind of person who likes to learn whatever skills neccessary to do something. Below are a few highlights of the things I've worked on and the status of them. As well as one project i've got in the works.";

const Misc: React.FC = () => {
  return (
    <div className="miscContainer">
      <div className="intro">{intro}</div>
      {miscQA.map((item) => {
        return (
          <div className="miscItemContainer">
            <div className="descContainer">
              <div className="descHeader">{item.question}</div>
              <div className="description">{item.answer}</div>
            </div>
            <div className="imgContainer">
              {item.mov ? (
                <video
                  autoPlay
                  loop
                  muted
                  className="video"
                  src={item.mov}
                ></video>
              ) : (
                <img src={item.img} alt={item.question} className="img" />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Misc;
