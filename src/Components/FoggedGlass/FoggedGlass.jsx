import React from "react";
import "./FoggedGlass.scss";

const FoggedGlass = props => {
  return <div className="fogged-glass" onClick={props.unFogGlass} />;
};

export default FoggedGlass;
