import React, { useRef, useEffect } from "react";
import "./Home.scss";
import FontAwesome from "../FontAwesome/FontAwesome";
import { TweenMax, Power1, Power3 } from "gsap";
import Footer from "../Footer/Footer";

const matt = require("../../Assets/MWlogo1.jpg");

const Home = () => {
  let img = useRef(null);
  let name = useRef(null);
  let statement = useRef(null);

  useEffect(() => {

    const headline1 = statement.children[0];
    const headline2 = statement.children[1];
    const headline3 = statement.children[2];

    window.TweenMax.staggerFrom(
      img,
      .5,
      {
        css: {
          x: 20,
          y: 30,
          height: 300,
          ease: "Power1.easeIn"
        }
      },
      1
    ).staggerFrom(
      name,
      1,
      {
        opacity: 0,
        ease: "Power1.easeIn"
      },
3
    );

    window.TweenMax.staggerFrom(
      [headline1, headline2, headline3],
      2.25,
      {
        css: {
          opacity: 0,
          height: 0,
          y: 0,
          x: 7,
          ease: "slow(0.7, 0.7, true)"
        }
      }

    ).to(name, 0.75, { css: { x: -30, ease: "Power3.easeOut", opacity: 0 } });

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
            <div className="subTitle2"> Manager,</div>

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
