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
          <a href="https://www.facebook.com/william.m.wellman">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="IconBarLi"
              size="lg"
            />
          </a>
          <a href="https://www.linkedin.com/in/matt-wellman-154301a3?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BmRw6jTXHSQCdaLMn1XAr7A%3D%3D">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="IconBarLi"
              size="lg"
            />
          </a>
          <a>
            <FontAwesomeIcon icon={faCircle} className="IconBarLi" size="lg" />
          </a>

          <a href="https://github.com/Mass812">
            <FontAwesomeIcon icon={faGithub} className="IconBarLi" size="lg" />
          </a>
        </ul>
      </div>
    </section>
  );
};

// render to #root
export default FontAwesome;
