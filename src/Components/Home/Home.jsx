import React from "react";
import "./Home.scss";

const Home = () => {
  const matt = require("../../Assets/mattHead.png");

  return (
    <section className="section">
      <div className="container">
        <div className="left">
          <img src={matt} alt={""} className="bobblehead" />
        </div>
        <div className="right">
          <h1 className="siteTitle1">COMPASSION, CHANGE, EXPERIENCE.</h1>
          <h1 className="subTitle2">Hi, I am Matt Wellman</h1>
          <h3 className="subTitle3">Manager, Dad, JavaScript Enthusiest</h3>
        </div>
      </div>
    </section>
  );
};

export default Home;
