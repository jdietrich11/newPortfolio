import React from "react";

import Icon from "../icon/icon";

import "./projectCard.styless.scss";

interface ProjectProps {
  data: {
    id: number;
    name: string;
    description: string;
    gitLink: string;
    liveLink: string;
    projectImg: any;
    logo: any;
    languagesUsed: string[];
  };
}

const ProjectCard: React.FC<ProjectProps> = (props) => {
  const {
    id,
    name,
    description,
    gitLink,
    liveLink,
    projectImg,
    languagesUsed,
  } = props.data;

  const redirectToLive = () => {
    const newWindow = window.open(liveLink, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  const redirectToCode = () => {
    const newWindow = window.open(gitLink, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div
      className={
        id % 2 === 0 ? "projectCardContainer even" : "projectCardContainer odd"
      }
    >
      <div className="imgContainer" onClick={redirectToLive}>
        <img className="img" src={projectImg} alt={name} />
      </div>
      <div className="infoContainer">
        <div className="siteName">{name}</div>
        <div className="description">{description}</div>
        <div className="languagesContainer" onClick={redirectToCode}>
          {languagesUsed.map((item) => {
            return <Icon icon={item} classname="projectIcon" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
