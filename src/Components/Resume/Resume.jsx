import React from "react";
import "./Resume.scss";
import "../../Assets/Disney2018.jpeg";
import Icon from "../FontAwesome/Icon";
import {
  faUps,
  faReact,
  faJs,
  faGooglePlay
} from "@fortawesome/free-brands-svg-icons";

const Resume = () => {
  return (
    <div className="container-fluid">
      <div className="row example-centered">
        <div className="col-md-12 example-title">
          <h2>Experience Timeline</h2>
        </div>

        <h2 className="timeline-title"> 2019</h2>

        <div className="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
          <ul className="timeline timeline-centered">
            <li className="timeline-item">
              <div className="timeline-info">
                <span id="padSpan">July 2, 2019 => Present</span>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">
                  <b>
                    UPS (World Port) <br></br>
                  </b>
                  Comprehensive Health & Safety Committee (CHSP)
                </h3>

                <blockquote>
                  Yep, built this site line by line. I was fortunate to be given
                  a seat on such a great team. I worked on both large and small
                  scale projects ranging from internationalizing currently
                  existing applications to creating video streaming applications
                  from scratch.
                </blockquote>
                <ul className="ExperienceListParent">
                  <Icon size={"md"} icon={faUps} color={"red"}>
                    Developed UIs via React-Native for iOS and Android
                  </Icon>
                  <Icon size={"md"} icon={faUps}>
                    Responsibilty 2{" "}
                  </Icon>
                  <Icon size={"md"} icon={faUps}>
                    Responsibilty 3{" "}
                  </Icon>
                  <Icon size={"md"} icon={faUps}>
                    Responsibilty 3{" "}
                  </Icon>
                </ul>
              </div>
            </li>
            <div className="timeline-item">
              <div className="timeline-info">
                <span>March => October 23, 2019</span>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">
                  Parsed.io <br></br>Mobile App Developer
                </h3>

                <blockquote>
                  Yep, built this site line by line. I was fortunate to be given
                  a seat on such a great team. I worked on both large and small
                  scale projects ranging from internationalizing currently
                  existing applications to creating video streaming applications
                  from scratch.
                </blockquote>
                <ul className="ExperienceListParent">
                  <Icon size={"md"} icon={faReact}>
                    Developed UIs via React-Native for iOS and Android
                  </Icon>
                  <Icon size={"md"} icon={faReact}>
                    Responsibilty 2{" "}
                  </Icon>
                  <Icon size={"md"} icon={faReact}>
                    Responsibilty 3{" "}
                  </Icon>
                  <Icon size={"md"} icon={faReact}>
                    Responsibilty 3{" "}
                  </Icon>
                </ul>
              </div>
            </div>

            <br />
            <br />
            <h2 className="timeline-title">2011-2018</h2>

            <li className="timeline-item">
              <div className="timeline-info">
                <span>October 02, 2018</span>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">
                  Director of Security Operations
                </h3>
                <p>
                  <strong>Techstyle Fashion Group</strong>
                </p>

                <blockquote>
                  Yep, built this site line by line. I was fortunate to be given
                  a seat on such a great team. I worked on both large and small
                  scale projects ranging from internationalizing currently
                  existing applications to creating video streaming applications
                  from scratch.
                </blockquote>
                <ul className="ExperienceListParent">
                  <Icon size={"md"} icon={faGooglePlay}>
                    Developed UIs via React-Native for iOS and Android
                  </Icon>
                  <Icon size={"md"} icon={faGooglePlay}>
                    Responsibilty 2{" "}
                  </Icon>
                  <Icon size={"md"} icon={faGooglePlay}>
                    Responsibilty 3{" "}
                  </Icon>
                  <Icon size={"md"} icon={faGooglePlay}>
                    Responsibilty 3{" "}
                  </Icon>
                </ul>
              </div>
            </li>

            <li className="timeline-item">
              <div className="timeline-info">
                <span>Feb 28, 2011</span>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
