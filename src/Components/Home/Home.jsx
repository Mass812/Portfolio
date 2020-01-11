import React, { useRef, useEffect } from "react";
import "./Home.scss";
import FontAwesome from "../FontAwesome/FontAwesome";
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
        
          y:100,
          duration: 2,
          height: 330,
          borderWidth: 5,
          ease: "Power0",
       
        },
        {
          y:0,
          delay: 1.5,
          duration: 1.5,
          height: 150,
          borderWidth: 2,
          ease: "Power1.easeOut",
          rotate: 180,
        
        
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
      // .to(name, {
      //   duration: 1,
      //   x: -30,
      //   ease: "Back.easeOut",
      //   opacity: 0,
      //   delay: 1
      // });
    // .to([headline1, headline2, headline3], {
    //   duration: 0.7,
    //   y: 300,
    //   ease: "bounce.easeOut",
    //   opacity: 0,
    //   delay: 0
    // });

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
          </div>
         
          <div className="bottom" ref={cr => (statement = cr)}>
            <div className="name" ref={cr => (name = cr)} style={{fontSize: 50}}>
             Matt Wellman
            </div>
            <div className="subTitle2"> Operations Manager &</div>

            <div className="subTitle2">JavaScript Enthusiast </div>
          </div>
        </div>
        <FontAwesome />
      </section>
    
    </div>
  );
};

export default Home;
