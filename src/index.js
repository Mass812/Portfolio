import * as serviceWorker from "./serviceWorker";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// import Bio from './Components/Bio/bio'
// import KindWords from './Components/KindWords/KindWords'
// import Resume from './Components/Resume/Resume'
// import SideDrawer from './Components/SideDrawer/SideDrawer'
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
