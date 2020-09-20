// includes
import "./Assets/css/default.min.css"; // our custom css
import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Header from "./components/headerComponents/header";
import Homepage from "./components/pages/homePage";
import ResumePage from "./components/pages/resumePage";
import ProjectsPage from "./components/pages/projectsPage";
import NoMatch from "./components/pages/noMatch";

function App() {
  useEffect(() => {
    ReactGA.initialize("UA-148738592-1")

    // to report page view
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/resume" component={ResumePage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route component={NoMatch}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
