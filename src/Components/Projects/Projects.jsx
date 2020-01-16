import React from "react";
import "./Projects.scss";

//import "../../Assets/bhm.png";

const Projects = () => {
  const rambo = require("../../Assets/movieThumbNail.PNG");
  const handleRambo = () => {
    window.open("https://matt-wellman-imbd.netlify.com/");
  };
  return (
    <div className="project-wrapper">
      <div className="project-parent">
        <div className="project-title-area">
          <div className="project-main-title">Project Bio</div>
        </div>
        <div>
          IMBD Mimic ...in progress
          <img
            src={rambo}
            className="movie-thumb"
            alt="movie search"
            onClick={handleRambo}
          />
        </div>
        <br />
        <div>Amazon Mimic</div>
        <br />
        <div>Air BnB Mimic</div>
        <br />
      </div>
    </div>
  );
};

export default Projects;
