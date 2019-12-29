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
        <div className="col-sm-12 example-title">
          <h2>Experience Timeline</h2>
        </div>

        <h2 className="timeline-title"> 2019</h2>

        <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
          <ul className="timeline timeline-centered">
            <li className="timeline-item">
              <div className="timeline-info">
                <span id="padSpan"> => Present</span>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">
                  <b>
                    UPS (World Port) <br></br>
                  </b>
                  Comprehensive Health & Safety Process Committee (CHSP)
                </h3>

                <blockquote>
                  <q>
                    Training is the cornerstone of safety at UPS, and management
                    training is the logical precursor to an informed and safe
                    workforce. UPS invests $175 million per year on safety
                    training. UPS employees receive nearly 3.8 million hours of
                    safety training annually, including Safe Work Methods. UPS
                    Safe Work Methods have been developed to help address the
                    major sources of known risk to our employees.
                  </q>
                </blockquote>
                <ul className="ExperienceListParent">
                  <Icon size={"sm"} icon={faUps} color={"red"}>
                    Facility and equipment audits
                  </Icon>
                  <Icon size={"sm"} icon={faUps}>
                    Safety compliance training
                  </Icon>
                  <Icon size={"sm"} icon={faUps}>
                    Audit root cause analysis
                  </Icon>
                  <Icon size={"sm"} icon={faUps}>
                    Safety Outreach
                  </Icon>
                </ul>
              </div>
            </li>

            <li className="timeline-item">
              <div className="timeline-info">
                <span>July 2, 2019</span>
              </div>
              <div className="timeline-marker"></div>
            </li>
            <br />

            <div className="timeline-item">
              <div className="timeline-info">
                <span> => October 23, 2019</span>
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
                  <Icon size={"sm"} icon={faReact}>
                    Developed UIs via React-Native for iOS and Android
                  </Icon>
                  <Icon size={"sm"} icon={faReact}>
                    Responsibilty 2{" "}
                  </Icon>
                  <Icon size={"sm"} icon={faReact}>
                    Responsibilty 3{" "}
                  </Icon>
                  <Icon size={"sm"} icon={faReact}>
                    Responsibilty 3{" "}
                  </Icon>
                </ul>
              </div>
            </div>
            <li className="timeline-item">
              <div className="timeline-info">
                <span>March 1, 2019 </span>
              </div>
              <div className="timeline-marker"></div>
            </li>
            <br />
            <br />
            <h2 className="timeline-title">2011-2018</h2>

            <li className="timeline-item">
              <div className="timeline-info">
                <span>=> October 02, 2018</span>
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
                  <Icon size={"sm"} icon={faGooglePlay}>
                    Developed UIs via React-Native for iOS and Android
                  </Icon>
                  <Icon size={"sm"} icon={faGooglePlay}>
                    Responsibilty 2{" "}
                  </Icon>
                  <Icon size={"sm"} icon={faGooglePlay}>
                    Responsibilty 3{" "}
                  </Icon>
                  <Icon size={"sm"} icon={faGooglePlay}>
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
