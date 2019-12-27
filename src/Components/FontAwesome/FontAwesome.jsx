import React from "react";

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
// import { faCommentDots } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import { faReact } from "@fortawesome/free-brands-svg-icons";
// import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./FontAwesome.scss";

const FontAwesome = () => {
  return (
    <section className="contactBlockContainer">
      <div className="contactBlockIconBlock">
        <ul className="IconBar">
          <li>
            <FontAwesomeIcon
              icon={faFacebookF}
              className="IconBarLi"
              size="lg"
            />
          </li>
          <li>
            <FontAwesomeIcon
              icon={faLinkedin}
              className="IconBarLi"
              size="lg"
            />
          </li>
          <li>
            <FontAwesomeIcon icon={faCircle} className="IconBarLi" size="lg" />
          </li>

          <li>
            <FontAwesomeIcon icon={faGithub} className="IconBarLi" size="lg" />
          </li>
        </ul>
      </div>
    </section>
  );
};

// render to #root
export default FontAwesome;
