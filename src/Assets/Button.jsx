import React from "react";
import "./Button.scss";

const Button = (props = "Default") => {
  return (
    <ul>
      <li>
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
