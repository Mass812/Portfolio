import React from "react";
import ToggleDrawerButton from "../ToggleDrawer/ToggleDrawer";
import "./ToolBar.scss";
import Button from "../../Assets/Button";
import { Link } from "react-router-dom";

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
        <div className="push_site_name_and_drawer_ul_apart" />
        <div>
          <div className="header_button_list">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button>Home</Button>
            </Link>

            <Link to="/about" style={{ textDecoration: "none" }}>
              <Button>About Me</Button>
            </Link>

            <Link to="/resume" style={{ textDecoration: "none" }}>
              <Button>Resume</Button>
            </Link>

            <Link to="/references" style={{ textDecoration: "none" }}>
              <Button>Refs</Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
