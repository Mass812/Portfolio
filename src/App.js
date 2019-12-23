import React, { useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import SideDrawer from "./Components/SideDrawer/SideDrawer";
import Toolbar from "./Components/Header/Toolbar";
import FoggedGlass from "./Components/FoggedGlass/FoggedGlass";
import KindWords from "./Components/KindWords/KindWords";
import Home from "./Components/Home/Home";
import Resume from "./Components/Resume/Resume";
import Bio from "../src/Components/Bio/bio";

const App = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  // const mainPic = require("./Assets/sunRing.jpg");
  /* <img className="mainPic" src={mainPic} alt={"Fire Ring"} /> */

  const runHideShow = () => {
    setSideDrawerOpen(prev => {
      const value = setSideDrawerOpen(!prev);
      console.log(value);
      return value;
    });
  };

  const exitMenu = () => {
    setSideDrawerOpen(false);
  };

  const expandSide = sideDrawerOpen ? (
    <SideDrawer hideShow={runHideShow} />
  ) : null;
  const expandFog = sideDrawerOpen ? (
    <FoggedGlass unFogGlass={exitMenu} />
  ) : null;

  return (
    <div style={{ height: "100" }}>
      <Toolbar pushShowHide={runHideShow} />
      <hr className="header-break" />
      {expandSide} {expandFog}
      <main style={{ marginTop: "64px" }}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={Bio} />
          <Route path="/resume" component={Resume} />
          <Route path="/references" component={KindWords} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
