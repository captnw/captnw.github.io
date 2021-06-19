import React from "react";
import ReactGA from "react-ga";

import HeaderComponent from "../headerComponent";
import TagComponent from "../tagComponent";
import GalleryComponent from "../galleryComponent";

// Images
import screenshot1 from "../../../Assets/images/JohnJump_1.jpg";
import screenshot2 from "../../../Assets/images/JohnJump_2.jpg";
import gif1 from "../../../Assets/images/JohnJump_3.gif";

// Google analytics functions declaration (users doing specific stuff)
const CheckJohnJumper = () => {
  ReactGA.event({
    category: "Projects page",
    action: "Went to JohnJumper itch.io",
  });
};

const DownloadJohnJumper = () => {
  ReactGA.event({
    category: "Projects page",
    action: "Went to JohnJumper itch.io",
  });
};

function JohnJumper() {
  const title = "JohnJumper";
  const date = "September 27, 2020";
  const status = "Released";
  const version = "1.0.1";

  const screenshots = [screenshot1, screenshot2, gif1];
  const tags = ["Game", "2D", "Infinite scroller", "Unity", "Sound included"];

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
        <p>Vertical flappy-bird, but without the addictive gameplay.</p>
      
        <a
            href="https://github.com/captnw/JohnJumper"
            target="_blank"
            rel="noopener noreferrer"
            title="Github repo for the project."
            className="whiteTextButton"
            onClick={CheckJohnJumper}
        >
          <button type="button" className="btn btn-primary">
            Github repo
          </button> 
        </a>

        <div className="divider"></div>

        <a
            href="https://captnw.itch.io/johnjumper"
            target="_blank"
            rel="noopener noreferrer"
            title="Github download page for the project."
            className="whiteTextButton"
            onClick={DownloadJohnJumper}
        >
          <button type="button" className="btn btn-success">
            Play in browser or download (Itch.io)
          </button>
        </a>
        
      </div>
      <br />
    </div>
  );
}

export default JohnJumper;
