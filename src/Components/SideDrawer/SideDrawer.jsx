import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./SideDrawer.scss";
import { Link } from "react-router-dom";
import Button from "../../Assets/Button";

const SideDrawer = (props) => {
  const parent = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(parent.current, {
        duration: 0.35,
        ease: "slow(0.7, 0.7, false)",
        y: -45,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <nav className="drawer-parent" ref={parent}>
      <div className="drawer-container">
        <ul className="drawer-ul" onClick={props.onClick}>
          <Link to="/" style={{ textDecoration: "none" }}>
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
        </ul>
      </div>
    </nav>
  );
};

export default SideDrawer;
