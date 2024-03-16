import React from "react";
import IcomoonReact from "icomoon-react";

import iconSet from "../../Assets/selection.json";

import "./icon.styles.scss";

interface IconProps {
  icon: string;
  classname: string;
}

const Icon: React.FC<IconProps> = (props) => {
  const { icon, classname } = props;
  let real: string = "";

  if (icon === "html") {
    real = "html-five2";
  } else if (icon === "react native") {
    real = "nativescript";
  } else if (icon === "scss" || icon === "sass") {
    real = "sass";
  } else if (icon === "css") {
    real = "css3";
  } else {
    real = icon;
  }
  console.log(icon);
  return (
    <div className={classname}>
      <IcomoonReact
        iconSet={iconSet}
        icon={real}
        color="white"
        className="icon"
      />
      <div className="name">{icon}</div>
    </div>
  );
};

export default Icon;
