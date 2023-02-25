import React, { useRef, useEffect } from "react";
import "./SideDrawer.scss";
import { Link } from "react-router-dom";
import Button from "../../Assets/Button";

const SideDrawer = (props) => {
  let parent = useRef(null);

  useEffect(() => {
    window.TweenMax.staggerFrom(parent, 0.35, {
      ease: "slow(0.7, 0.7, false)",
      y: -45,
    });

    return () => {};
  }, []);

  return (
    <nav className="drawer-parent" ref={(cr) => (parent = cr)}>
      <div className="drawer-container">
        <ul className="drawer-ul" onClick={props.onClick}>
          <Link to="/" exact="true" style={{ textDecoration: "none" }}>
            <Button>Home</Button>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <Button>Education</Button>
          </Link>
          <Link to="/resume" style={{ textDecoration: "none" }}>
            <Button>Career</Button>
          </Link>
          <Link to="/references" style={{ textDecoration: "none" }}>
            <Button>Accolades</Button>
          </Link>
          <Link to="/projects" style={{ textDecoration: "none" }}>
            <Button>Examples</Button>
          </Link>
          <Link to="/additional" style={{ textDecoration: "none" }}>
            <Button>More</Button>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default SideDrawer;
