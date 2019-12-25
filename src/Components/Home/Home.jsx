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
        <h2>Hi, I am Matt Wellman</h2>
        <h3>The Man Behind The Legend. Manager, Dad, React Enthusiest</h3>
      </div>
    </div>
  );
};

export default Home;
