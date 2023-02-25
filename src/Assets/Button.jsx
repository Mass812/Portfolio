import React from "react";
import "./Button.scss";

const Button = ({ children = "mmm?" }) => {
  return (
    <ul className="button-ul">
      <li className="button-li">
        {children}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </li>
    </ul>
  );
};

export default Button;
