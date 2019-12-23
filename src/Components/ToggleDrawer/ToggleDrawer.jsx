import React from "react";
import "./ToggleDrawerButton.scss";

const ToggleDrawerButton = props => {
  return (
    <button className="toggle-button" onClick={props.showHide}>
      <div className="toggle_button_line" />
      <div className="toggle_button_line" />
      <div className="toggle_button_line" />
    </button>
  );
};

export default ToggleDrawerButton;
