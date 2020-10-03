import React from "react";
import ReactGA from "react-ga";
import GalleryComponent from "../galleryComponent";

// Images
import screenshot1 from "../../../Assets/images/JohnJump_1.jpg";
import screenshot2 from "../../../Assets/images/JohnJump_2.jpg";
import gif1 from "../../../Assets/images/JohnJump_3.gif";
let screenshots = [screenshot1, screenshot2, gif1];

// Google analytics functions declaration (users doing specific stuff)
const DownloadJohnJumper = () => {
  ReactGA.event({
    category: "Projects page",
    action: "Went to JohnJumper itch.io",
  });
};

function JohnJumper() {
  return (
    <div>
      <i>
        <h2 className="orangeText">JohnJumper</h2>
      </i>
      <b>
        <p>September 27, 2020</p>
      </b>
      {/** The tags describing the project. **/}
      <div className="horizontalCenter">
        <h6>
          <span className="badge badge-secondary">Game</span>
          <div className="divider"></div>
          <span className="badge badge-secondary">2D</span>
          <div className="divider"></div>
          <span className="badge badge-secondary">Infinite scroller</span>
          <div className="divider"></div>
          <span className="badge badge-secondary">Unity</span>
          <div className="divider"></div>
          <span className="badge badge-secondary">Sound included</span>
        </h6>
      </div>

      <GalleryComponent images={screenshots} />

      <br />
      <div className="horizontalCenter">
        <p>
          An infinite jumping game where there is only one button, the jump
          button. Keep jumping to reach further heights, and jump consecutively
          to increase your jump combo, which would increase your speed. Be sure
          not to touch the spikes or fall back to the bottom.
        </p>
        <button type="button" className="btn btn-success">
          <a
            href="https://captnw.itch.io/johnjumper"
            target="_blank"
            rel="noopener noreferrer"
            title="Github download page for the project."
            className="whiteTextButton"
            onClick={DownloadJohnJumper}
          >
            Play in browser or download (Itch.io)
          </a>
        </button>
      </div>
      <br />
    </div>
  );
}

export default JohnJumper;
