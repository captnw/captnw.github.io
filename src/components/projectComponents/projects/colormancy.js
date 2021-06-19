import React from "react";
import ReactGA from "react-ga";

import HeaderComponent from "../headerComponent";
import TagComponent from "../tagComponent";
import GalleryComponent from "../galleryComponent";

// Images
import screenshot1 from "../../../Assets/images/Colormancy_1.JPG";
import screenshot2 from "../../../Assets/images/Colormancy_2.JPG";
import screenshot3 from "../../../Assets/images/Colormancy_3.JPG";
import gif1 from "../../../Assets/images/Colormancy_1.gif";

// Google analytics functions declaration (users doing specific stuff)
const CheckColormancy = () => {
  ReactGA.event({
    category: "Projects page",
    action: "Checked out Colormancy",
  });
};

function Colormancy() {
  const title = "Colormancy";
  const date = "June 13, 2021";
  const status = "Last updated";
  const version = "1.0.0";

  const screenshots = [screenshot1, screenshot2, screenshot3, gif1];
  const tags = [
    "Game",
    "3D",
    "Multiplayer player vs environment",
    "Unity",
    "Photon",
  ];

  return (
    <div>
      <HeaderComponent
        title={title}
        date={date}
        version={version}
        status={status}
      />

      <TagComponent tagList={tags} />
      <GalleryComponent images={screenshots} />

      <div className="horizontalCenter">
        <p>
          A multiplayer game created with Unity and the Photon network framework. 1-4 player(s) would work together to paint the maps they're on and the fend off any incoming enemies.
        </p>
        {/* <a
            href="/projects/Colormancy"
            target="_self"
            rel="noopener noreferrer"
            title="Colormancy project page"
            className="whiteTextButton"
            onClick={CheckColormancy}
        >
          <button type="button" className="btn btn-primary">
            Test
          </button>
        </a>
        
        <div className="divider"></div> */}

        <a
            href="https://github.com/mandarker/Chromaturgy"
            target="_blank"
            rel="noopener noreferrer"
            title="Github repo for the project."
            className="whiteTextButton"
            onClick={CheckColormancy}
        >
          <button type="button" className="btn btn-primary">
          Github repo
          </button>
        </a>

        <div className="divider"></div>
        
        <a
            href="https://github.com/mandarker/Colormancy/releases/"
            target="_blank"
            rel="noopener noreferrer"
            title="Github repo for the project."
            className="whiteTextButton"
            onClick={CheckColormancy}
        >
          <button type="button" className="btn btn-success">
          Download
          </button>
        </a>
      </div>
      <br />
    </div>
  );
}

export default Colormancy;
