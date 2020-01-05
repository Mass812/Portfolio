import React, { useRef, useEffect } from "react";
import "./Home.scss";
import FontAwesome from "../FontAwesome/FontAwesome";
import { TweenMax, Power1, Power3 } from "gsap";
import Footer from "../Footer/Footer";

const matt = require("../../Assets/MWlogo2.jpg");

const Home = () => {
  let img = useRef(null);
  let name = useRef(null);
  let statement = useRef(null);
  let frame = useRef(null);

  useEffect(() => {
    const headline1 = statement.children[0];
    const headline2 = statement.children[1];
    const headline3 = statement.children[2];

    window.TweenMax.staggerFrom(frame, .25, { css: { opacity: 0 } })

      .staggerFrom(
        img,
        2.75,
        {
          css: {
            x: 20,
            y: 30,
            height: 500,
            ease: "Power1.easeIn"
          }
        }
      );
      window.gsap.timeline(
        name,
        4,
        {
          opacity: 0,
          ease: "Power1.easeIn"
        },

      );

    window.TweenMax.staggerFrom([headline1, headline2, headline3], 2.25, {
      css: {
        opacity: 0,
        height: 0,
        y: 0,
        x: 7,
        ease: "slow(0.7, 0.7, true)"
      }
    }).to(name, 0.75, { css: { x: -30, ease: "Power3.easeOut", opacity: 0 } });

    return () => {
      console.log("cleaned");
    };
  }, []);

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="top">
            <div className="frame" ref={cr => (frame = cr)}>
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

            <div className="subTitle2"> Solution Expert &</div>

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
