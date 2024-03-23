import React from "react";

import "./sports.styles.scss";

import AboutItem from "../aboutItem/aboutItem";

import { sportsQA } from "../../Assets/information/QA";

const gamingCarousel = [
  {
    id: 1,
    imgUrl: require("../../Assets/Photos/bloodborne.jpg"),
    imgTitle: "Bloodborne",
  },
  {
    id: 2,
    imgUrl: require("../../Assets/Photos/ghostsOfTsushima.jfif"),
    imgTitle: "Ghosts of Tsushima",
  },
  {
    id: 3,
    imgUrl: require("../../Assets/Photos/KnightsOfTheOldRepublic.jpg"),
    imgTitle: "Knights of the old Republic",
  },
  {
    id: 4,
    imgUrl: require("../../Assets/Photos/ZeldaTearsOfTheKingdom.avif"),
    imgTitle: "Zelda Tears of the Kingdom",
  },
  {
    id: 5,
    imgUrl: require("../../Assets/Photos/Legend-of-Zelda-Ocarina-of-Time.jpg"),
    imgTitle: "Zelda Ocarina of Time",
  },
];

const intro =
  'I have had a love for gaming pretty much my whole life. From Xbox system link parties with my extended family and I playing Halo CE and Halo 2 on the OG xbox on new years when they had just been released.Hosting Age of Empires 2 lan parties with my neighborhood group (stillgoes on to this day), we even had "skyrim days." When the legendaryedition was released we all got together and played it at the sametime for 4 days straight surviving on Dominos pizza and mt dew. Newgames have come out and I have loved many of them, some of those olderones I still hold close. There something amazing about being immersedin these crazy worlds with intriguing stories.';

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
