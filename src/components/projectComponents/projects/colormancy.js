import React from "react";
import ReactGA from "react-ga";

import HeaderComponent from "../headerComponent";
import TagComponent from "../tagComponent";
import GalleryComponent from "../galleryComponent";

// Images
import screenshot1 from "../../../Assets/images/Colormancy_1.JPG";
import screenshot2 from "../../../Assets/images/Colormancy_2.JPG";
import screenshot3 from "../../../Assets/images/Colormancy_3.gif";

// Google analytics functions declaration (users doing specific stuff)
const CheckColormancy = () => {
  ReactGA.event({
    category: "Projects page",
    action: "Checked out Colormancy",
  });
};

function Colormancy() {
  const title = "Colormancy";
  const date = "March 13, 2021";
  const status = "Last updated";
  const version = "0.3.0";

  const screenshots = [screenshot1, screenshot2, screenshot3];
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
          A multiplayer game created with Unity and the Photon network framework. 2-4 players would work together to paint the maps they're on and the fend off any incoming enemies.
        </p>
        <button type="button" className="btn btn-primary">
          <a
            href="https://docs.google.com/document/d/1grMS0t6vFWo_L7KMkfW5mP7-KUXBDEYBIMxrwxCApbg/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            title="More information about the project."
            className="whiteTextButton"
            onClick={CheckColormancy}
          >
            Game design document
          </a>
        </button>
        <div className="divider"></div>
        <button type="button" className="btn btn-primary">
          <a
            href="https://github.com/mandarker/Chromaturgy"
            target="_blank"
            rel="noopener noreferrer"
            title="Github repo for the project."
            className="whiteTextButton"
            onClick={CheckColormancy}
          >
            Github repo
          </a>
        </button>
      </div>
      <br />
    </div>
  );
}

export default Colormancy;
