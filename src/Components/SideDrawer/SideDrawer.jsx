import React, {useRef, useEffect} from "react";
import "./SideDrawer.scss";
import { Link } from "react-router-dom";
import Button from "../../Assets/Button";




const SideDrawer = props => {
let parent = useRef(null);

useEffect(() => {
  


window.TweenMax.staggerFrom(parent, .75, { ease: "slow(0.7, 0.7, false)", y: -45})


  return () => {
  };
}, [])



//prev props.close menu

  return (
    
    <nav className="drawer-parent" ref={cr=>parent=cr}>
      <ul className="drawer-ul" onClick={props.onClick}>
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
        <Link to="/projects" style={{ textDecoration: "none" }}>
          <Button>Projects</Button>
        </Link>
      </ul>
      
    </nav>
  );
};

export default SideDrawer;
