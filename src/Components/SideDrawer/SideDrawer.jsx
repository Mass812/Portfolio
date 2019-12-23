import React from "react";
import "./SideDrawer.scss";
import { Link } from "react-router-dom";
import Button from "../../Assets/Button";

const SideDrawer = props => {
  return (
    <nav className="drawer-parent">
      <ul className="drawer-ul" onClick={props.closeMenu}>
        <Link to="/" exact="true" style={{ textDecoration: "none" }}>
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
      </ul>
    </nav>
  );
};

export default SideDrawer;
