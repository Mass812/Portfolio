import React, { useRef, useEffect } from "react";
import "./Home.scss";
import FontAwesome from "../FontAwesome/FontAwesome";
import { TweenMax, Power1, Power3 } from "gsap";
import Footer from "../Footer/Footer";
import { Timeline } from "gsap/gsap-core";

const matt = require("../../Assets/MWlogo1.jpg");

const Home = () => {
  let img = useRef(null);
  let name = useRef(null);
  let statement = useRef(null);

  useEffect(() => {
    const tl = new Timeline();
    const height = window.innerHeight;
    const width = window.innerWidth;
    const headline1 = statement.children[0];
    const headline2 = statement.children[1];
    const headline3 = statement.children[2];

    tl.staggerFrom(
      img,
      1,
      {
        x: 20,
        y: 30,

        height: 300,
        ease: Power1.easeIn
      },
      1.2
    ).from(
      name,
      1,
      {
        opacity: 0,
        ease: Power1.easeIn
      },
      0.5
    );

    TweenMax.staggerFrom(
      [headline1, headline2, headline3, statement],
      2.25,
      { opacity: 0, height: 0, y: 0, x: 74, ease: "slow(0.7, 0.7, false)" },
      0.1
    ).to(name, 1, { x: -100, ease: Power3.easeOut, opacity: 0 });

    TweenMax.staggerTo([headline1, headline2, headline3, statement], 1, {
      ease: Power1.easeIn,
      opacity: 0
    });

    return () => {
      console.log("cleaned");
    };
  }, []);

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="top">
            <div className="frame">
              <img
                src={matt}
                alt={""}
                className="icon"
                ref={cr => (img = cr)}
              />
            </div>
            <h1 className="name" ref={cr => (name = cr)}>
              Matt Wellman
            </h1>
          </div>
          <div className="menu"></div>
          <span className="bottom" ref={cr => (statement = cr)}>
            <div className="subTitle2"> Manager</div>

            <div className="subTitle2"> Dad &</div>

            <div className="subTitle2">JavaScript Enthusiast </div>
          </span>
        </div>
        <FontAwesome />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
