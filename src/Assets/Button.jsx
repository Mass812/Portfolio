import React from "react";
import "./Button.scss";

const Button = (props = "Default") => {
  return (
    <ul className = 'button-ul'>
      <li className = 'button-li'>
        {props.children}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </li>
    </ul>
  );
};

export default Button;
