import React from "react";
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
  faGoogleDrive
} from "@fortawesome/free-brands-svg-icons";

import { faCaretSquareRight } from "@fortawesome/free-regular-svg-icons";

const Bio = () => {
  const bullet = require("../../Assets/iconBullet.png");

  return (
    <div className="bio-wrapper">
      <div className="bio-parent">



      
        <div className="bio-title-area">
          <div className="bio-subtitle-main">
            High Acuity
            <div>
              <ul className="icon-splay">
                <FontAwesomeIcon
                  icon={faJsSquare}
                  className="icon-bar-li-bio"
                  size="lg"
                />
                <FontAwesomeIcon
                  icon={faGit}
                  className="icon-bar-li-bio"
                  size="lg"
                />
                <FontAwesomeIcon
                  icon={faReact}
                  className="icon-bar-li-bio"
                  size="lg"
                />
                <FontAwesomeIcon
                  icon={faHtml5}
                  className="icon-bar-li-bio"
                  size="lg"
                />
                <FontAwesomeIcon
                  icon={faJira}
                  className="icon-bar-li-bio"
                  size="lg"
                />
                <FontAwesomeIcon
                  icon={faNode}
                  className="icon-bar-li-bio"
                  size="lg"
                />
                <FontAwesomeIcon
                  icon={faPython}
                  className="icon-bar-li-bio"
                  size="lg"
                />
                <FontAwesomeIcon
                  icon={faSass}
                  className="icon-bar-li-bio"
                  size="lg"
                />
                <FontAwesomeIcon
                  icon={faSourcetree}
                  className="icon-bar-li-bio"
                  size="lg"
                />
                <FontAwesomeIcon
                  icon={faLess}
                  className="icon-bar-li-bio"
                  size="lg"
                />
                <FontAwesomeIcon
                  icon={faMdb}
                  className="icon-bar-li-bio"
                  size="lg"
                />
                <FontAwesomeIcon
                  icon={faGithubSquare}
                  className="icon-bar-li-bio"
                  size="lg"
                />
                <FontAwesomeIcon
                  icon={faNpm}
                  className="icon-bar-li-bio"
                  size="lg"
                />
                <FontAwesomeIcon
                  icon={faMicrosoft}
                  className="icon-bar-li-bio"
                  size="lg"
                />
                <FontAwesomeIcon
                  icon={faGoogleDrive}
                  className="icon-bar-li-bio"
                  size="lg"
                />
              </ul>
            </div>
          </div>
          <hr />
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
                  Broad Experience
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
          <hr />
          <div className="bio-subtitle">
            Greatest Weakness & Strength
            <p className="weakness">
              <q>
                Inwardly, contending with my self can be difficult. I thrive in
                progress and stagnate in idleness. In a word I am healthiest
                when I can operate at the edge of my capabilities, pushing
                myself to learn, commit, do and achieve more. The downside is
                that I give myself over to my work so completely at points that
                I have to literally <i>mentally-nudge</i> myself to back off the
                throttle enough to enjoy the fruits of those labors.
              </q>
            </p>
          </div>
        </div>
        <div>
          <hr />
          <div className="bio-subtitle">
            Certifications
            <div className="business-characteristic-parent">
              <ul className="business-characteristic-ul">
                <hr />
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
        {/*  hello  */}
      </div>
    </div>
  );
};

export default Bio;
