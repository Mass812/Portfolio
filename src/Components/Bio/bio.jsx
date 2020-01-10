import React, { useEffect, useRef } from "react";
import "./Bio.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGit,
  faJsSquare,
  faReact,
  faHtml5,
  faJira,
  faLess,
  faNode,
  faPython,
  faSass,
  faSourcetree,
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
  faChartPie,
  faHandMiddleFinger
} from "@fortawesome/free-solid-svg-icons";

const Bio = () => {
  const random = Math.floor(Math.random() * 12);

  let characteristics,
    titleArea,
    icon,
    js,
    git,
    react,
    html5,
    node,
    py,
    sass,
    st,
    mdb,
    excel,
    github,
    npm,
    ms,
    gdrive,
    jira,
    word,
    powerpoint,
    pie,
    google,
    dochub,
    less = useRef();

  useEffect(() => {
    window.gsap
      .timeline([icon, { duration: 0.5 }])
      .fromTo(
        [
          word,
          js,
          github,
          st,
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
          jira,
          pie
        ],
        {
          scale: 0,
          duration: 0.5,
          ease: "Sine.easeIn",
           display: 'inline-block',
          stagger: 0.2,
        },
        {
          scale: 1,
          stagger: .19,
          duration: 0.5,
        }
      );

      
      

    return () => {
      console.log("fired useEffect gsap effects");
    };
  }, []);

  return (
    <div className="bio-wrapper">
      <div className="bio-parent">
        <div className="bio-title-area" ref={cr => titleArea}>
          <div className="bio-subtitle-main"><br/>
            Proficient in the Following:  
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

        <div ref={cr => (characteristics = cr)}>
          <div>
            <div className="bio-subtitle" ref={cr => (characteristics = cr)}>
            
              About Me
              <p className="weakness">
                <q>
                  I am an Operations Manager with an exceptional record of
                  proven site management. Working alongside three staffing
                  agencies and seven internal operational departments, for a
                  company consisting of 1000+ employees, I have usurped a
                  wellspring of working knowledge. My experience permeates into
                  operations/distribution/logistics in a
                  warehouse/retail/customer service environment; Effectively
                  coordinating a 40+ personnel team; evaluating, mentoring, and
                  developing managers/supervisors; Mass Scheduling; On-boarding,
                  Hiring and Developing employees; Managing workload and
                  streamlining operations; RFPs ; Data compiling and analysis;
                  Integrating SOPs into and throughout multiple departments /
                  areas.
                </q>
                <br />
                <br />
                <q>
                  I am skilled in Excel / Google Sheets, Word / Docs &
                  PowerPoint. I am also a skilled mobile app & web developer
                  using React & React-Native frameworks with Javascript , as an
                  aside.
                </q>
              </p>
            </div>
          </div>

          <div className="bio-subtitle">
            Business Characteristics
            <div className="business-characteristic-parent">
              <ul className="business-characteristic-ul">
                <div>
                  <FontAwesomeIcon icon={faCaretSquareRight} size="sm" />
                  <span className="bullet-pint-description">
                    {" "}
                    6 Years Operations Management
                  </span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faCaretSquareRight} size="sm" />
                  <span className="bullet-pint-description">
                    {" "}
                    2 Years Area Management
                  </span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faCaretSquareRight} size="sm" />
                  <span className="bullet-pint-description">
                    {" "}
                    Keen Inductive & Deductive Logic
                  </span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faCaretSquareRight} size="sm" />
                  <span className="bullet-pint-description">
                    {" "}
                    High Business Acumen
                  </span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faCaretSquareRight} size="sm" />
                  <span className="bullet-pint-description">
                    {" "}
                    Amazing Ability to Learn Fast
                  </span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faCaretSquareRight} size="sm" />
                  <span className="bullet-pint-description">
                    {" "}
                    Affable and Well Spoken
                  </span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faCaretSquareRight} size="sm" />
                  <span className="bullet-pint-description">
                    {" "}
                    Embrace & Endorse Change
                  </span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faCaretSquareRight} size="sm" />
                  <span className="bullet-pint-description">
                    {" "}
                    Very Strong Work Ethic
                  </span>
                </div>
              </ul>
            </div>
          </div>
          <div>
            <div className="bio-subtitle" ref={cr => (characteristics = cr)}>
              
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
              Certifications
              <div className="business-characteristic-parent">
                <ul className="business-characteristic-ul">
                  <div>
                    <FontAwesomeIcon icon={faCaretSquareRight} size="sm" />
                    <span className="bullet-pint-description">
                      {" "}
                      React-Native, JavaScript, Node.js
                    </span>
                  </div>

                  <div>
                    <FontAwesomeIcon icon={faCaretSquareRight} size="sm" />
                    <span className="bullet-pint-description">
                      {" "}
                      AED, CPR, BBP
                    </span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faCaretSquareRight} size="sm" />
                    <span className="bullet-pint-description">
                      {" "}
                      Yellow-Belt Lean Sigma Six
                    </span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faCaretSquareRight} size="sm" />
                    <span className="bullet-pint-description">
                      {" "}
                      Project Management Certification
                    </span>
                  </div>
                  <hr />
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
