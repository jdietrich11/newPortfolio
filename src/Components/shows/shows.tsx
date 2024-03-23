import React from "react";

import "./shows.styles.scss";

import AboutItem from "../aboutItem/aboutItem";

import showsCarousel from "../../Assets/information/shows";
import { showsQA } from "../../Assets/information/QA";

const intro =
  'I have had a love for Movies pretty much my whole life. From Xbox system link parties with my extended family and I playing Halo CE and Halo 2 on the OG xbox on new years when they had just been released. To playing Age of Empires 2 lan parties with my neighborhood group (still goes on to this day), we even had "skyrim days." When the legendary edition was released we all got together and played it at the same time for 4 days straight surviving on Dominos pizza and mt dew. New games have come out and I have loved many of them, some of those older ones I still hold close. There something amazing about being immersed in these crazy worlds with intriguing stories.';

const Shows: React.FC = () => {
  return (
    <div className="moviesContainer">
      <AboutItem
        key={showsCarousel[0].id}
        intro={intro}
        qa={showsQA}
        carousel={showsCarousel}
      />
    </div>
  );
};

export default Shows;
