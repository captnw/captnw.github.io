import React, { useState } from "react";
import { Link } from "react-router-dom";
import svgLogoInactive from "../../Assets/images/logoLight.svg";
import svgLogoActive from "../../Assets/images/logoDark.svg";
import logoActive from "../../Assets/images/logo84.png";
import logoInactive from "../../Assets/images/logo84dark.png";
import ReactGA from "react-ga";

// The large orange bootstrap container at the top of each page.

// Google analytics functions declaration (users doing specific stuff)
const ViewResume = () => {
  ReactGA.event({
    category: "Page view",
    action: "Viewed resume page",
  });
};

const ViewProjects = () => {
  ReactGA.event({
    category: "Page view",
    action: "Viewed projects page",
  });
};

function Header() {
  const svgImages = [svgLogoInactive, svgLogoActive];
  const images = [logoInactive, logoActive];
  const [image_ind, setInd] = useState(0);
  return (
    <header>
      <nav>
        <ul>
          <li className="first">
            <Link to="/" title="Home page">
              {/* Changes the icon image when hovered over. */}
              <img
                id="siteLogo"
                className="logo"
                src={images[image_ind]}
                srcSet={svgImages[image_ind]}
                alt=""
                onMouseOver={() =>
                  setInd(1)
                }
                onMouseOut={() =>
                  setInd(0)
                }
              />
            </Link>
          </li>
          <li>
            <Link to="/resume" title="Resume page" onClick={ViewResume}>
              Resume
            </Link>
          </li>
          <li className="last">
            <Link to="/projects" title="Projects page" onClick={ViewProjects}>
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );  
}

export default Header;
