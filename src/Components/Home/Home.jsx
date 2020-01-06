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
      .timeline(frame,{ opacity: 0 , duration: 3})

      

      .fromTo(img, {
          duration: 2,
          height: 330,
          borderWidth: 10,
          ease: 'smooth'
          
          
        },
        {
          delay: 1,
          height: 100,
          borderWidth: 4,
          ease: "Power1.easeIn"
          
      }
      
      
      )
      .fromTo(name, {
        duration: 1,
        opacity: 0,
        ease: "Power1.easeIn"
      },{
        opacity: 1
      })

      .from(
        [headline1, headline2, headline3],
        
         {
            stagger: 0.5,
            delay: .01,
            opacity: 0,
            height: 0,
            fontSize: 3,
            ease: 'Power4.easeIn',
            color: 'rgb(210,181,113)'
          
        }
      
  
      )
      .to(name, {duration:1, x: -30, ease: "Power3.easeOut", opacity: 0, delay: 3 })
      .to([headline1, headline2, headline3], {duration:0.7, y: 300, ease: "bounce.easeOut", opacity: 0, delay: 0 });
  

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

            <div className="subTitle2"> Erudite &</div>

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
