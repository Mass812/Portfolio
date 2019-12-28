import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = props => {
  return (
    <div>
      <FontAwesomeIcon
        icon={props.icon}
        size={props.size}
        style={{marginRight: "10px" }}
      />
      {` ${props.children}`}
    </div>
  );
};

export default Icon;
