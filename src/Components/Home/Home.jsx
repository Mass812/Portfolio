import React from "react";
import "./Home.scss";
import FontAwesome from "../FontAwesome/FontAwesome";
import Footer from "../Footer/Footer";

const matt = require("../../Assets/mattHead.png");

const Home = () => {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="left">
            <img src={matt} alt={""} className="bobblehead" />
          </div>
          <div className="right">
            <h1 className="subTitle2">Matt Wellman</h1>
            {/* <h3 className="subTitle3"> Dad, Manager, JavaScript Enthusiest</h3> */}
            <blockquote>
              <h3 className="subTitle3">
                {" "}
                Dad, Manager, JavaScript Enthusiest
              </h3>
            </blockquote>
          </div>
        </div>
        <FontAwesome />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
