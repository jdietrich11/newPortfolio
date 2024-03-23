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
      <Carousel CarouselDetails={gamingCarousel} />
      <div className="intro">
        I started Gaming because back in January 2021 I changed jobs. I became a
        graveyard shift Security Guard. In between patrolling I was allowed to
        fill my time with Movies, TV-shows, YouTube, etc... As this was getting
        old after awhile I began to wonder how YouTuber B is for Build started
        his channel and having a desire to also work on a project car. I started
        doing research as to what he did professionaly. He was a Software
        Engineer. I started digging deeper and found it did not require a
        degree. I spoke with my mentor Jeremy Robertson who is a front-end web
        developer as well. He recommended I get my feet wet and try it out. I
        fell in love with it from there! C
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
