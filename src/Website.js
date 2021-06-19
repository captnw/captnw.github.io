// includes
import "./Assets/css/default.min.css"; // our custom css
import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Header from "./components/headerComponents/header";
import Homepage from "./pages/homePage";
import ResumePage from "./pages/resumePage";
import ProjectsPage from "./pages/projectsPage";
import NoMatch from "./pages/noMatch";
import ColormancyProjectPage from "./pages/colormancyProjectPage";

function Website() {
  useEffect(() => {
    ReactGA.initialize("UA-148738592-1");

    // to report page view
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="fullishHeight">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/resume" exact component={ResumePage} />
          <Route path="/projects" exact component={ProjectsPage} />
          <Route path="/projects/Colormancy" exact component={ColormancyProjectPage} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}

export default Website;
