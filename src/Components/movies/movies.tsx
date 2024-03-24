import React from "react";

import "./movies.styles.scss";

import AboutItem from "../aboutItem/aboutItem";

import moviesCarousel from "../../Assets/information/movies";
import { moviesQA } from "../../Assets/information/QA";

const intro =
  'Movies have always been a big part of my life. I have always loved them. They were a way to bond with my siblings. Watching my first rate "R" movie happened with my older brother. Who convinced my mother to allow us to watch Defiance. A movie about the jews hidding in the forests of Poland during WW2. Using the historical aspect for the reason we be allowed to watch. I have fond memories of setting up a projector and screen on camping trips and sitting around the fire to watch a movie on family reunion trips with my extended family. I grew up enjoying and watching chick-flicks like 10 things I hate About you with my sisters. Movies are a way we all connect, we build relationships based on agreeing or disagreeing on movies.';

const Movies: React.FC = () => {
  return (
    <div className="moviesContainer">
      <AboutItem
        key={moviesCarousel[0].id}
        intro={intro}
        qa={moviesQA}
        carousel={moviesCarousel}
      />
    </div>
  );
};

export default Movies;
