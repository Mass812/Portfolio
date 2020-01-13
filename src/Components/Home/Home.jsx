import React, { useRef, useEffect } from "react";
import "./Home.scss";
import FontAwesome from "../FontAwesome/FontAwesome";
import Button from "../../Assets/Button";
import { Link } from "react-router-dom";
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

    window.gsap
      .timeline(frame, { opacity: 0, duration: 3 })

      .fromTo(
        img,
        {
          y: 100,
          duration: 2,
          height: 330,

          ease: "Power0"
        },
        {
          y: 0,
          delay: 1.5,
          duration: 1.5,
          height: 150,
          borderWidth: 2,
          ease: "Power1.easeOut",
          rotate: 540
        }
      )

      .from(
        [headline1, headline2, headline3],

        {
          stagger: 0.5,
          delay: 0.51,
          opacity: 0,
          height: 0,
          fontSize: 3,
          ease: "Power1.easeIn",
          color: "rgb(210,181,113)"
        }
      );

    return () => {
      console.log("cleaned");
    };
  }, []);

  (() => {
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
  })();
  console.log();

  return (
    <div>
      <section className="home-section">
        <div className="home-container">
          <div className="home-top">
            <div className="home-frame" ref={cr => (frame = cr)}>
              <img
                src={matt}
                alt={""}
                className="home-icon"
                ref={cr => (img = cr)}
              />
            </div>
          </div>

          <div className="home-bottom" ref={cr => (statement = cr)}>
            <div
              className="home-name"
              ref={cr => (name = cr)}
              style={{ fontSize: 50 }}>
              Matt Wellman
            </div>
            Manager
            <div className="home-subTitle2">Full Stack Mern Developer</div>
          </div>
        </div>
        <FontAwesome />
      </section>
    </div>
  );
};

export default Home;
