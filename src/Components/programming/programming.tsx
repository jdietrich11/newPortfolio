import React from "react";

import "./programming.styles.scss";

import Accordion from "../accordion/accordion";

import { programmingQA } from "../../Assets/information/QA";

const Programming: React.FC = () => {
  return (
    <div className="programmingContainer">
      <div className="intro">
        I started programming because back in January 2021 I changed jobs. I
        became a graveyard shift Security Guard. In between patrolling I was
        allowed to fill my time with Movies, TV-shows, YouTube, etc... As this
        was getting old after awhile I began to wonder how YouTuber B is for
        Build started his channel and having a desire to also work on a project
        car. I started doing research as to what he did professionaly. He was a
        Software Engineer. I started digging deeper and found it did not require
        a degree. I spoke with my mentor Jeremy Robertson who is a front-end web
        developer as well. He recommended I get my feet wet and try it out. I
        fell in love with it from there!
      </div>
      <div className="accordionContainer">
        {programmingQA.map((item) => {
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

export default Programming;
