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
  faSlack,
  faSourcetree,
  faMicrosoft
} from "@fortawesome/free-brands-svg-icons";
//import { faCircle } from "@fortawesome/free-regular-svg-icons";

const Bio = () => {
  return (
    <div className="bio-wrapper">
      <div className="bio-parent">
        <div className="bio-title-area">
          <div className="bio-main-title">Short Bio</div>
          <div className="bio-subtitle">
            High Acuity
            <div >
              <ul className="icon-splay">
                <FontAwesomeIcon
                  icon={faJsSquare}
                  className="IconBarLi"
                  size="lg"
                />
                <FontAwesomeIcon
                  icon={faGit}
                  className="IconBarLi"
                  size="lg"
                />
                <FontAwesomeIcon
                  icon={faReact}
                  className="IconBarLi"
                  size="lg"
                />
                <FontAwesomeIcon
                  icon={faHtml5}
                  className="IconBarLi"
                  size="lg"
                />
                <FontAwesomeIcon
                  icon={faJira}
                  className="IconBarLi"
                  size="lg"
                />
                <FontAwesomeIcon
                  icon={faNode}
                  className="IconBarLi"
                  size="lg"
                />
                <FontAwesomeIcon
                  icon={faPython}
                  className="IconBarLi"
                  size="lg"
                />
                <FontAwesomeIcon
                  icon={faSass}
                  className="IconBarLi"
                  size="lg"
                />
                <FontAwesomeIcon
                  icon={faSourcetree}
                  className="IconBarLi"
                  size="lg"
                />
                <FontAwesomeIcon
                  icon={faLess}
                  className="IconBarLi"
                  size="lg"
                />
                <FontAwesomeIcon
                  icon={faMicrosoft}
                  className="IconBarLi"
                  size="lg"
                />
              </ul>
            </div>
          </div>
        </div>
        <div>
          Drawing
          <hr />
          <div>Drawing Examples</div>
        </div>
        <br />
        <div>
          Music
          <hr />
          <div>Song Writing / Composing / Singing Examples</div>
        </div>
        <br />
        <div>
          Reading
          <hr />
          <div>BookList</div>
        </div>
        <br />
        <div>
          Coding
          <hr />
          <div>Languages, Frameworks, Favorites</div>
        </div>
        <br />
        <div>
          Family
          <hr />
          <div>The most amazing surprises ever</div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Bio;
