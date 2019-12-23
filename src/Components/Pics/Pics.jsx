import React from "react";
import "./Pics.scss";

const Pics = (props, file, describe) => {
  return <img id={props} src={file} alt={describe} />;
};

export default Pics;

export const Disney = () => {
  const disney = require("../../Assets/sunRing.jpg");
  return Pics("expPic", disney, "This was Disney World!");
};

export const Face = props => {
  const face = require("../../Assets/sunRing.jpg");
  return Pics(props, face, "This was Disney World!");
};
