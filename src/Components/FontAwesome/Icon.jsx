import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = props => {
  return (
    <div>
      <FontAwesomeIcon
        icon={props.icon}
        size={props.size}
        style={{marginRight: "10px", color: 'Brown', backgroundColor: 'white' }}
        
      />
      {` ${props.children}`}
    </div>
  );
};

export default Icon;
