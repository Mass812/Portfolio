import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Icon.css';



const Icon = props => {
  return (
    
    <div className='icon-parent'>
    
      <FontAwesomeIcon
        icon={props.icon}
        size={props.size}
        className='res'
      />{' '}
     
       {props.children}
     
      </div>
  
  );
};

export default Icon;
