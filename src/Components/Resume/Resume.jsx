import React from "react";
import "./Resume.scss";
import "../../Assets/Disney2018.jpeg";
import { Disney } from "../Pics/Pics";

const Resume = () => {
  return (
    <div className="container-fluid">
      <div className="row example-centered">
        <Disney />
        <div className="col-md-12 example-title">
          <h2>Experience Timeline</h2>
          <p>Time Hardened and Battle Worn</p>
        </div>
        <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
          <ul className="timeline timeline-centered">
            <li className="timeline-item">
              <div className="timeline-info">
                <span id="padSpan">March 12, 2010</span>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Area Operations Manager</h3>
                <p>Area Operations Manager</p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-info">
                <span>March 23, 2016</span>
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
            <li className="timeline-item period">
              <div className="timeline-info"></div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h2 className="timeline-title">April 2016</h2>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-info">
                <span>April 02, 2016</span>
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
