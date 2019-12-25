import React from "react";
import "./Home.scss";

const Home = () => {
  const pro = require("../../Assets/bp.jpg");
  const matt = require("../../Assets/mattHead.png");

  return (
    <div className="Wrapper">
      <div className="sp-container">
        <img src={pro} alt={""} className="pro" />
        <h1 className="siteTitle">
          <span>COMPASSION, CHANGE, EXPERIENCE.</span>
        </h1>
      </div>
      <div className="under">
        <img src={matt} alt={""} className="bobblehead" />
        <div className='rightContainer'>
          <h1>Hi, I am Matt Wellman</h1>
          <h3>Manager, Dad, React Enthusiest</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
