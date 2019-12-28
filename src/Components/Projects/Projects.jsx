import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Projects.scss";
//import "../../Assets/bhm.png";

const Projects = () => {
  const iconImage = require("../../Assets/512px.png");
  return (
    <div className="parent">
      <img src={iconImage} alt={"icon"} styles={{ size: "contain" }} />
      Projects
    </div>
  );
};

export default Projects;
