import React from "react";

import "./gaming.styles.scss";

import Accordion from "../accordion/accordion";
import Carousel from "../carousel/carousel";

import { gamingQA } from "../../Assets/information/QA";

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

const Gaming: React.FC = () => {
  console.log(gamingCarousel);
  return (
    <div className="gamingContainer">
      <div className="introContainer">
        <Carousel CarouselDetails={gamingCarousel} />
        <div className="intro">
          I have had a love for gaming pretty much my whole life. From Xbox
          system link parties with my extended family and I playing Halo CE and
          Halo 2 on the OG xbox on new years when they had just been released.
          To playing Age of Empires 2 lan parties with my neighborhood group
          (still goes on to this day), we even had "skyrim days." When the
          legendary edition was released we all got together and played it at
          the same time for 4 days straight surviving on Dominos pizza and mt
          dew. New games have come out and I have loved many of them, some of
          those older ones I still hold close. There something amazing about
          being immersed in these crazy worlds with intriguing stories.
        </div>
      </div>
      <div className="accordionContainer">
        {gamingQA.map((item) => {
          return (
            <div key={item.id}>
              <Accordion
                key={item.id}
                id={item.id}
                question={item.question}
                answer={item.answer}
                answers={item.answers}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gaming;
