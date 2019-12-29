import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Background from "../Background/Background";

import "./Projects.scss";
//import "../../Assets/bhm.png";

const Projects = () => {
  const iconImage = require("../../Assets/192px.png");
  return (
    <div className="parent">
      <Background />
      <img src={iconImage} alt={"icon"} />
      <br />
      <q>Projects Coming Soon . . . </q>
    </div>
  );
};

export default Projects;
