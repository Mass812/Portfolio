import React from "react";
import "./Home.scss";
import FontAwesome from "../FontAwesome/FontAwesome";

const matt = require("../../Assets/mattHead.png");

const Home = () => {
  return (
    <section className="section">
      <FontAwesome />
      <div className="container">
        <div className="left">
          <img src={matt} alt={""} className="bobblehead" />
        </div>
        <div className="right">
          <h1 className="subTitle2">Hi, I am Matt Wellman</h1>
          <h3 className="subTitle3">Manager, Dad, JavaScript Enthusiest</h3>
        </div>
      </div>
    </section>
  );
};

export default Home;
