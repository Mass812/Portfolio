import React from "react";
import "./Resume.scss";
import "../../Assets/Disney2018.jpeg";
import { Disney } from "../Pics/Pics";

const Resume = () => {
  return (
    <div className="container-fluid">
      <div className="row example-centered">
        <div className="col-md-12 example-title">
        <Disney styles={{'margin': '25px'}}/>
          <h2>Experience Timeline</h2>
        </div>
        <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
          <ul className="timeline timeline-centered">
            <li className="timeline-item">
              <div className="timeline-info">
                <span id="padSpan">July 2, 2019 => Present</span>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">
                  Comprehensive Health & Safety Committee (CHSP)
                </h3>
                <h4 className="timeline-title">
                  <strong>UPS (World Port)</strong>
                </h4>
                <blockquote>
                  Yep, built this site line by line. I was fortunate to be given
                  a seat on such a great team. I worked on both large and small
                  scale projects ranging from internationalizing currently
                  existing applications to creating video streaming applications
                  from scratch.
                </blockquote>
                <ul className="ExperienceListParent">
                  <li>
                    Oversee Aircraft Loading, Machinery Operation and Personnel
                    Conduct Safety
                  </li>
                  <li>Act as a Support to Throughput Operations </li>
                  <li>
                    Train all new Ramp Employees on Wing D (12 plane docks)
                  </li>
                  <li>
                    Analyze Safety Concerns via Safety Audits and Create Action
                    Plans{" "}
                  </li>
                </ul>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-info">
                <span>March => October 23, 2019</span>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">
                  Full Stack Mobile App Developer
                </h3>
                <p>
                  <strong>Parsed.io</strong>
                </p>
                <blockquote>
                  Yep, built this site line by line. I was fortunate to be given
                  a seat on such a great team. I worked on both large and small
                  scale projects ranging from internationalizing currently
                  existing applications to creating video streaming applications
                  from scratch.
                </blockquote>
                <ul className="ExperienceListParent">
                  <li>Developed UI's via React-Native for iOS and Android</li>
                  <li>Responsibilty 2 </li>
                  <li>Responsibilty 3 </li>
                  <li>Responsibilty 3 </li>
                </ul>
              </div>
            </li>
            <li className="timeline-item period">
              <div className="timeline-info"></div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h2 className="timeline-title">April 2012-2018</h2>
              </div>
            </li>
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
                  <li>Developed UI's via React-Native for iOS and Android</li>
                  <li>Responsibilty 2 </li>
                  <li>Responsibilty 3 </li>
                  <li>Responsibilty 3 </li>
                </ul>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-info">
                <span>April 28, 2016</span>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Event Title</h3>
                <p>
                  Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a,
                  consectetuer eget, posuere ut, mauris. Donec orci lectus,
                  aliquam ut, faucibus non, euismod id, nulla. Donec vitae
                  sapien ut libero venenatis faucibus. ullam dictum felis eu
                  pede mollis pretium. Pellentesque ut neque.{" "}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
