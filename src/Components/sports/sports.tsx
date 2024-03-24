import React from "react";

import "./sports.styles.scss";

import AboutItem from "../aboutItem/aboutItem";

import { sportsQA } from "../../Assets/information/QA";

const gamingCarousel = [
  {
    id: 1,
    imgUrl: require("../../Assets/Photos/Basketball.jpg"),
    imgTitle: "Basketball",
  },
  {
    id: 2,
    imgUrl: require("../../Assets/Photos/Football.jpg"),
    imgTitle: "Football",
  },
  {
    id: 3,
    imgUrl: require("../../Assets/Photos/Golf.jpg"),
    imgTitle: "Golf",
  },
  {
    id: 4,
    imgUrl: require("../../Assets/Photos/f1.jpg"),
    imgTitle: "f1",
  },
];

const intro =
  "Sports have always been something important to me. Something to be competitive at or something to root for. Sometiems it is just something to be active without the suckyness of just going for a run or going on a hike. While my favorites have changed and adapted over the years I have usually always followed at least one at a time. Basketball, Football, Golf, and racing being my current favorites.";

const Sports: React.FC = () => {
  return (
    <div className="gamingContainer">
      <AboutItem
        key={gamingCarousel[0].id}
        intro={intro}
        qa={sportsQA}
        carousel={gamingCarousel}
      />
    </div>
  );
};

export default Sports;
