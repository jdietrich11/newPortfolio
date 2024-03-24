import React from "react";

import "./outdoors.styles.scss";

import AboutItem from "../aboutItem/aboutItem";

import { outdoorsQA } from "../../Assets/information/QA";

const gamingCarousel = [
  {
    id: 1,
    imgUrl: require("../../Assets/Photos/BearLakeRide.jpg"),
    imgTitle: "Ride with Brother and Father to Bear Lake",
  },
  {
    id: 2,
    imgUrl: require("../../Assets/Photos/Heber.jpg"),
    imgTitle: "Fall ride to Heber up AF canyon",
  },
  {
    id: 3,
    imgUrl: require("../../Assets/Photos/Motorcycle.jpg"),
    imgTitle: "2020 Yamaha R3",
  },
  {
    id: 4,
    imgUrl: require("../../Assets/Photos/PottersPond.jpg"),
    imgTitle: "Potters Ponds Joes Valley Utah",
  },
];

const intro =
  "Growing up when I was not inside playing games you could often find me outside. Playing Basketball, going camping, riding ATVs, Airsoft wars, backyard football with all the neighborhood kids, etc... Many of those things have long since past but I still love many of them. Though to be honest, I havent been the best at doing them as often as I should. I still love Camping and go on a trip with all of my closest friends every year in August. I get out and play basketball when I can. Riding my motorcycle up the canyon to Heber and back is one of my favorite trips I take with my older brother each year.";

const Outdoors: React.FC = () => {
  return (
    <div className="gamingContainer">
      <AboutItem
        key={gamingCarousel[0].id}
        intro={intro}
        qa={outdoorsQA}
        carousel={gamingCarousel}
      />
    </div>
  );
};

export default Outdoors;
