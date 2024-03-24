import React from "react";

import "./shows.styles.scss";

import AboutItem from "../aboutItem/aboutItem";

import showsCarousel from "../../Assets/information/shows";
import { showsQA } from "../../Assets/information/QA";

const intro =
  "TV shows have always been something I liked but only more recently became something I loved. There is so many great shows out there, even so, it is difficult to find them because there is also so much garbage. Adding to that is a mixture of differing opinions and longevitiy. I grew up watching: Scooby-doo, Hannah Montana, ICarly, Phineas and Ferb, Top Gear, and so many more. It wasnt until I watched Psych when I was 15 ish, Avatar the last airbender (18ish) and How I Met Your Mother that I truly fell in love with TV shows. So many start well and fail or start rough and get better I found it difficult to invest in any shows.";

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
