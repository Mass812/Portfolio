import React from "react";
import "./Projects.scss";

//import "../../Assets/bhm.png";

const Projects = () => {
  const greenLantern = require("../../Assets/greenLanternMWlogo.PNG");
  const handleGreenLantern = (e) => {
    window.open("https://matt-wellman-imbd.netlify.com/");
    e.target.blur();
  };
  return (
    <div className="project-wrapper">
      <div className="project-parent">
        <div className="project-title-area">
          <div className="project-main-title">Project Bio</div>
        </div>
        <div className="project-card">
          <div className='project-name'>
          IMBD using TMDB API
          </div>
          <img
            src={greenLantern}
            className="movie-thumb"
            alt="movie search"
            onClick={handleGreenLantern}
          />
            <h4><i>Under Construction</i></h4>
          <span>
          <br/>
        "This product uses the TMDb API but is not endorsed or certified by
        TMDb."
      </span>
        </div>
        <div></div>
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
