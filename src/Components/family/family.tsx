import React from "react";

import "./family.styles.scss";

import AboutItem from "../aboutItem/aboutItem";

import { familyQA } from "../../Assets/information/QA";

const gamingCarousel = [
  {
    id: 1,
    imgUrl: require("../../Assets/Misc/Family.jpg"),
    imgTitle: "Bloodborne",
  },
];

const intro =
  'I grew up as the forgotten child. 8/9 the 2nd youngest, or as I like to say the "almost" golden child. with 1 younger brother, 2 older sisters, and 3 older brothers. 4/6 siblings are now married with kids. My better family are my closest friends. Loyal, Honest, and dependable they have been the ones I rely on and spend most of my time with. I love to say "Friends are just the family you actually get to choose"';

const Family: React.FC = () => {
  return (
    <div className="gamingContainer">
      <AboutItem
        key={gamingCarousel[0].id}
        intro={intro}
        qa={familyQA}
        carousel={gamingCarousel}
      />
    </div>
  );
};

export default Family;
