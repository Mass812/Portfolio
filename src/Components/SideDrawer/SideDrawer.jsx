import React from "react";
import "./SideDrawer.scss";
import { Link } from "react-router-dom";
import Button from "../../Assets/Button";

const SideDrawer = props => {
  // <nav className="drawer-parent">
  // <ul className="drawer-ul">

  return (
    <nav className="drawer-parent">
      <ul className="drawer-ul">
        <Link to="/" exact style={{ textDecoration: "none" }}>
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
