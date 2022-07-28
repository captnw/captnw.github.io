// includes
import "./Assets/css/default.min.css"; // our custom css
import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Elements
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
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route exact path="/resume" element={<ResumePage/>} />
          <Route exact path="/projects" element={<ProjectsPage/>} />
          <Route exact path="/projects/Colormancy" element={<ColormancyProjectPage/>} />
          <Route component={NoMatch} />
        </Routes>
      </Router>
    </div>
  );
}

export default Website;
