import React from "react";
import ToggleDrawerButton from "../ToggleDrawer/ToggleDrawer";
import "./ToolBar.scss";

const Toolbar = props => {
  return (
    <header className="header_bar">
      <nav className="drawer_parent">
        <div>
          <ToggleDrawerButton showHide={props.pushShowHide} />
        </div>
        <div className="site_name">
          M<span id="W">W</span>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
