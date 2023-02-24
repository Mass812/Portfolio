import { faJedi } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Icon from "../ContactBar/Icon";

const Features = ({ featuresArray }) => {
  if (!featuresArray) return null;
  console.warn("featuresArrayLength", featuresArray);
  // console.warn("featuresArray", features)
  const features = featuresArray.map((n) => (
    <span className="m-bodies">
      <Icon size={"sm"} icon={faJedi}>
        {n}
      </Icon>
    </span>
  ));

  return (
    <>
      {featuresArray.length ? (
        <>
          <div className="m-title">
            Features{" "}
            <span className="features-addendum-text">(Developed) </span>
          </div>
    
            <div>{features}</div>)
          
        </>
      ) : null}
    </>
  );
};

export default Features;
