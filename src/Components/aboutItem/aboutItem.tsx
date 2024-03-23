import React from "react";

import "./aboutItem.styles.scss";

import Accordion from "../accordion/accordion";
import Carousel from "../carousel/carousel";

interface AboutItemProps {
  carousel: any[];
  qa: any[];
  intro: string;
  key: any;
}

const AboutItem: React.FC<AboutItemProps> = (props) => {
  const { carousel, qa, intro, key } = props;

  return (
    <div className="aboutItemContainer" key={key}>
      <div className="introContainer">
        <Carousel CarouselDetails={carousel} />
        <div className="intro">{intro}</div>
      </div>
      <div className="accordionContainer">
        {qa.map((item) => {
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

export default AboutItem;
