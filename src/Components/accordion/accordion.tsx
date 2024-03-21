import React, { useState } from "react";

import "./accordion.styles.scss";

interface AccorionProps {
  key: number;
  id: number;
  question: string;
  answers: any;
  answer: any;
}

const Accordion: React.FC<AccorionProps> = (props) => {
  const { question, answer, answers, id } = props;
  const [activeIndex, setActiveIndex]: any[] = useState([]);

  const onTitleClick = (id: number) => {
    if (activeIndex.includes(id)) {
      const tempArr = activeIndex.filter((item: number) => item !== id);
      setActiveIndex(tempArr);
    } else {
      setActiveIndex([...activeIndex, id]);
    }
  };

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div key={id} onClick={() => onTitleClick(id)} className="dropdown">
      <div className={activeIndex.includes(id) ? `selected` : "question"}>
        <div className="questionText">{question}?</div>
      </div>
      <div className={activeIndex.includes(id) ? `answer-active` : "answer"}>
        {answers
          ? answers.map((item: any) => {
              return (
                <div
                  onClick={() => openInNewTab(item.link)}
                  className="answerItem"
                >
                  {item.name}
                </div>
              );
            })
          : answer}
      </div>
    </div>
  );
};

export default Accordion;
