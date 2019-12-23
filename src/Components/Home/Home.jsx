import React from "react";
import "./Home.scss";
import Main from "./Home_Main";

const Home = () => {
  return (
    <div className="Wrapper">
      <div className="sp-container">
        <div className="sp-content">
          <div className="sp-globe"></div>
          <h2 className="frame-1">3 Years Area Management Experience</h2>
          <h2 className="frame-2">
            6.5 Years Operations Management Experience
          </h2>
          <h2 className="frame-3">Full Stack MERN Developer</h2>
          <h2 className="frame-4"> I AM</h2>
          <h2 className="frame-5">
            <span>COMPASSION, </span>
            <span>CHANGE, </span>
            <span>EXPERIENCE. </span>
          </h2>
        </div>
      </div>

      <main className="main">
        <Main />
      </main>
    </div>
  );
};

export default Home;
