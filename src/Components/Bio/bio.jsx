import React, { useEffect, useRef } from "react";
import "./Bio.scss";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGit,
  faJsSquare,
  faReact,
  faHtml5,
  faLess,
  faNode,
  faPython,
  faSass,
  faMicrosoft,
  faMdb,
  faNpm,
  faGithubSquare,
  faGoogleDrive,
  faDochub,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";

import { faCaretSquareRight } from "@fortawesome/free-regular-svg-icons";
import {
  faFilePowerpoint,
  faFileWord,
  faFileExcel,
  faChartPie
} from "@fortawesome/free-solid-svg-icons";

const Bio = () => {
  let titleArea,
    icon,
    js,
    git,
    react,
    html5,
    node,
    py,
    sass,
    mdb,
    excel,
    github,
    npm,
    ms,
    gdrive,
    word,
    powerpoint,
    pie,
    google,
    dochub,
    less = useRef();

  const reload = useLocation();
  console.log(reload);

  useEffect(() => {
    window.gsap.fromTo(
      [
        word,
        js,
        github,
        git,
        less,
        react,
        excel,
        node,
        py,
        dochub,
        sass,
        mdb,
        npm,
        html5,
        google,
        ms,
        gdrive,
        powerpoint,
        pie
      ],
      {
        scale: 0,
        delay: 10,
        duration: 0.3,
        ease: "Sine.easeIn",
        display: "inline-block",
        stagger: 0.2,
        color: "#566b75"
      },
      {
        scale: 1.5,
        stagger: 0.1,
        duration: 0.3,
        color: "#566b75"
      }
    );
    window.gsap.timeline([icon, { duration: 0.3, delay: 5 }]).staggerTo(
      [
        excel,
        word,
        powerpoint,
        dochub,
        js,
        git,
        react,
        html5,
        node,
        py,
        github,
        sass,
        less,
        mdb,
        npm,
        google,
        ms,
        gdrive,
        pie
      ],
      {},
      {
        delay: 2.2,
        duration: 1.8,
        scale: 1.8,

        stagger: 0.03,
        color: "rgba(255,255,255,.4)",
        display: "inline-block",
        ease: "Power0.easeInOut"
      }
    );

    return () => {
      console.log("fired useEffect gsap effects");
    };
    /* eslint-disable-next-line no-alert, quotes, semi */
  }, []); /* eslint-disable-line no-alert, quotes, semi */

  return (
    <div className="bio-wrapper">
      <div className="bio-parent">
        <div className="bio-subtitle">
          <div> Proficiencies </div>
        </div>
        <div>
          <div className="bio-title-area" ref={cr => titleArea}>
            <div>
              <ul className="icon-splay" ref={cr => (icon = cr)}>
                <div ref={cr => (excel = cr)}>
                  <FontAwesomeIcon
                    icon={faFileExcel}
                    className="icon-bar-li-bio"
                    size="lg"
                  />
                </div>
                <div ref={cr => (word = cr)}>
                  <FontAwesomeIcon
                    icon={faFileWord}
                    className="icon-bar-li-bio"
                    size="lg"
                  />
                </div>
                <div ref={cr => (powerpoint = cr)}>
                  <FontAwesomeIcon
                    icon={faFilePowerpoint}
                    className="icon-bar-li-bio"
                    size="lg"
                  />
                </div>

                <div ref={cr => (dochub = cr)}>
                  <FontAwesomeIcon
                    icon={faDochub}
                    className="icon-bar-li-bio"
                    size="lg"
                  />
                </div>
                <div ref={cr => (js = cr)}>
                  <FontAwesomeIcon
                    icon={faJsSquare}
                    className="icon-bar-li-bio"
                    size="lg"
                  />
                </div>

                <div ref={cr => (git = cr)}>
                  <FontAwesomeIcon
                    icon={faGit}
                    className="icon-bar-li-bio"
                    size="lg"
                  />
                </div>
                <div ref={cr => (react = cr)}>
                  <FontAwesomeIcon
                    icon={faReact}
                    className="icon-bar-li-bio"
                    size="lg"
                  />
                </div>
                <div ref={cr => (html5 = cr)}>
                  <FontAwesomeIcon
                    icon={faHtml5}
                    className="icon-bar-li-bio"
                    size="lg"
                  />
                </div>

                <div ref={cr => (node = cr)}>
                  <FontAwesomeIcon
                    icon={faNode}
                    className="icon-bar-li-bio"
                    size="lg"
                  />
                </div>
                <div ref={cr => (py = cr)}>
                  <FontAwesomeIcon
                    icon={faPython}
                    className="icon-bar-li-bio"
                    size="lg"
                  />
                </div>
                <div ref={cr => (sass = cr)}>
                  <FontAwesomeIcon
                    icon={faSass}
                    className="icon-bar-li-bio"
                    size="lg"
                  />
                </div>

                <div ref={cr => (less = cr)}>
                  <FontAwesomeIcon
                    icon={faLess}
                    className="icon-bar-li-bio"
                    size="lg"
                  />
                </div>
                <div ref={cr => (mdb = cr)}>
                  <FontAwesomeIcon
                    icon={faMdb}
                    className="icon-bar-li-bio"
                    size="lg"
                  />
                </div>
                <div ref={cr => (github = cr)}>
                  <FontAwesomeIcon
                    icon={faGithubSquare}
                    className="icon-bar-li-bio"
                    size="lg"
                  />
                </div>
                <div ref={cr => (npm = cr)}>
                  <FontAwesomeIcon
                    icon={faNpm}
                    className="icon-bar-li-bio"
                    size="lg"
                  />
                </div>
                <div ref={cr => (pie = cr)}>
                  <FontAwesomeIcon
                    icon={faChartPie}
                    className="icon-bar-li-bio"
                    size="lg"
                  />
                </div>
                <div ref={cr => (google = cr)}>
                  <FontAwesomeIcon
                    icon={faGoogle}
                    className="icon-bar-li-bio"
                    size="lg"
                  />
                </div>
                <div ref={cr => (ms = cr)}>
                  <FontAwesomeIcon
                    icon={faMicrosoft}
                    className="icon-bar-li-bio"
                    size="lg"
                  />
                </div>
                <div ref={cr => (gdrive = cr)}>
                  <FontAwesomeIcon
                    icon={faGoogleDrive}
                    className="icon-bar-li-bio"
                    size="lg"
                  />
                </div>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div className="bio-subtitle">
              About Me
              <p className="weakness">
                <q>
                  There are a lot of things that make me unique to a workforce.
                  I have a college background in Chemistry & Biology, have read
                  a library of books, Know technology intimately & always try to
                  work at least twice as hard as the guy working next to me.
                </q>
                <br />
                <br />
              </p>
            </div>
          </div>

          <div className="bio-subtitle">
            Business Characteristics
            <div className="business-characteristic-parent">
              <ul className="business-characteristic-ul">
                <div>
                  <FontAwesomeIcon
                    icon={faCaretSquareRight}
                    size="sm"
                    style={{ color: "goldenrod" }}
                  />
                  <span className="bullet-pint-description">
                    {" "}
                    6 Years Operations Management
                  </span>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faCaretSquareRight}
                    size="sm"
                    style={{ color: "goldenrod" }}
                  />
                  <span className="bullet-pint-description">
                    {" "}
                    2 Years Area Management
                  </span>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faCaretSquareRight}
                    size="sm"
                    style={{ color: "goldenrod" }}
                  />
                  <span className="bullet-pint-description">
                    {" "}
                    Keen Inductive & Deductive Logic
                  </span>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faCaretSquareRight}
                    size="sm"
                    style={{ color: "goldenrod" }}
                  />
                  <span className="bullet-pint-description">
                    {" "}
                    High Business Acumen
                  </span>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faCaretSquareRight}
                    size="sm"
                    style={{ color: "goldenrod" }}
                  />
                  <span className="bullet-pint-description">
                    {" "}
                    Amazing Ability to Learn Fast
                  </span>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faCaretSquareRight}
                    size="sm"
                    style={{ color: "goldenrod" }}
                  />
                  <span className="bullet-pint-description">
                    {" "}
                    Affable and Well Spoken
                  </span>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faCaretSquareRight}
                    size="sm"
                    style={{ color: "goldenrod" }}
                  />
                  <span className="bullet-pint-description">
                    {" "}
                    Embrace & Endorse Change
                  </span>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faCaretSquareRight}
                    size="sm"
                    style={{ color: "goldenrod" }}
                  />
                  <span className="bullet-pint-description">
                    {" "}
                    Very Strong Work Ethic
                  </span>
                </div>
              </ul>
            </div>
          </div>
          <div>
            <div className="bio-subtitle">
              Greatest Weakness & Strength
              <p className="weakness">
                <q>
                  Inwardly, contending with my self can be difficult. I thrive
                  in progress and stagnate in idleness. Succinctly, I am
                  healthiest when I can operate at the edge of my capabilities,
                  pushing myself to learn, commit, do and achieve more. The
                  downside is that I give myself over to my work so completely
                  at points that I have to literally <i>mentally-nudge</i>{" "}
                  myself to back off the throttle enough to enjoy the fruits of
                  those labors.
                </q>
              </p>
            </div>
          </div>

          <div>
            <div className="bio-subtitle">
              Education
              <div className="business-characteristic-parent">
                <ul className="business-characteristic-ul">
                  <ul className="education-list">
                    {" "}
                    University of Kentucky
                    <p>
                      <b>Major: </b> Chemistry & Biology
                    </p>
                    <p>
                      <b>GPA:</b> 3.2
                    </p>
                    <p>
                      <b>Attended:</b> 2005-2007
                    </p>
                  </ul>
                  <ul className="education-list">
                    {" "}
                    Indiana University
                    <p>
                      <b>Major: </b> Biochemistry
                    </p>
                    <p>
                      <b>GPA:</b> 3.0
                    </p>
                    <p>
                      <b>Attended:</b> 2004-2005
                    </p>
                  </ul>
                  <ul className="education-list">
                    {" "}
                    Ivy Tech Community
                    <p>
                      <b>Major: </b> Prerequisites
                    </p>
                    <p>
                      <b>GPA:</b> 3.9
                    </p>
                    <p>
                      <b>Attended:</b> 2003-2004
                    </p>
                  </ul>
                </ul>
                <br />
                <br />
              </div>
            </div>
          </div>

          <div>
            <div className="bio-subtitle">
              Certifications
              <div className="business-characteristic-parent">
                <ul className="business-characteristic-ul">
                  <div>
                    <FontAwesomeIcon
                      icon={faCaretSquareRight}
                      size="sm"
                      style={{ color: "goldenrod" }}
                    />
                    <span className="bullet-pint-description" >
                      {" "}
                      React-Native, JavaScript, Node.js
                    </span>
                  </div>

                  <div>
                    <FontAwesomeIcon
                      icon={faCaretSquareRight}
                      size="sm"
                      style={{ color: "goldenrod" }}
                    />
                    <span className="bullet-pint-description">
                      {" "}
                      AED, CPR, BBP
                    </span>
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faCaretSquareRight}
                      size="sm"
                      style={{ color: "goldenrod" }}
                    />
                    <span className="bullet-pint-description">
                      {" "}
                      Yellow-Belt Lean Sigma Six
                    </span>
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faCaretSquareRight}
                      size="sm"
                      style={{ color: "goldenrod" }}
                    />
                    <span className="bullet-pint-description">
                      {" "}
                      Project Management Certification
                    </span>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/*  hello  */}
      </div>
    </div>
  );
};

export default Bio;
