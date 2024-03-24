import React from "react";

import "./cars.styles.scss";

import AboutItem from "../aboutItem/aboutItem";

import { carsQA } from "../../Assets/information/QA";

const gamingCarousel = [
  {
    id: 1,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo-AicSkcWWF0R5FLG9cZZx65Djn_5uyCIMezUN3pKKw&s",
    imgTitle: "1969 Chevelle",
  },
  {
    id: 2,
    imgUrl: require("../../Assets/Photos/Audi.JPG"),
    imgTitle: "2001 Audi S4",
  },
  {
    id: 3,
    imgUrl: require("../../Assets/Photos/Camaro.JPG"),
    imgTitle: "2013 Camaro",
  },
  {
    id: 4,
    imgUrl:
      "https://hips.hearstapps.com/hmg-prod/images/2025-audi-rs6-avant-gt-motion-103-65bbc522aae10.jpg?crop=0.488xw:0.366xh;0.158xw,0.395xh&resize=1200:*",
    imgTitle: "2024 Audi RS6 Avant GT",
  },
  {
    id: 5,
    imgUrl: require("../../Assets/Photos/Apollo.jpg"),
    imgTitle: "Apollo Intensa Emozione",
  },
  {
    id: 5,
    imgUrl: require("../../Assets/Photos/FerrariF1.jpg"),
    imgTitle: "Charles Leclerc and Carlos Sainz with 2024 Ferrari F1 car",
  },
];

const intro =
  "My love of cars really came into place due to my friendship with Andrew Aagard. It amazed me how he would be able to identify a car from a few streets over that we could not see but could hear. We had many an argument over different cars. We try to go to the Utah Auto Expo each year and have yet to hear a good opinion from him as of late. We often discuss in depth what we liked and did not like from the show. We would talk about Top Gear, what they did well and what I think they could have done better. For example, I think they never took an audi on any of their adventures because it would make their trips too east ;).";

const Cars: React.FC = () => {
  return (
    <div className="gamingContainer">
      <AboutItem
        key={gamingCarousel[0].id}
        intro={intro}
        qa={carsQA}
        carousel={gamingCarousel}
      />
    </div>
  );
};

export default Cars;
