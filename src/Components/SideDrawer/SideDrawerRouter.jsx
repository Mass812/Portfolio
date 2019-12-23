import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: <div>Home Component</div>
  },
  {
    path: "/bio",
    sidebar: <div>Bio Component</div>
  },
  {
    path: "/resume",
    sidebar: <div>Resume Component</div>
  },
  {
    path: "/",
    sidebar: <div>KindWords Component</div>
  }
];

const SideDrawerRouter = props => {
  return (
    <Router>
      {/* <header>
        <nav>
          <div></div>
          <div>The Logo</div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Bio">Bio</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/recommendations">Recommendations</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.sidebar />}
            />

            // You can render a <Route> in as many places
            // as you want in your app. It will render along
            // with any other <Route>s that also match the URL.
            // So, a sidebar or breadcrumbs or anything else
            // that requires you to render multiple things
            // in multiple places at the same URL is nothing
            // more than multiple <Route>s.
          ))}
        </Switch>
      </header> */}
    </Router>
  );
};

export default SideDrawerRouter;
