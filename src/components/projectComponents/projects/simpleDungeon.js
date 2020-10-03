import React from "react";
import ReactGA from "react-ga";
import GalleryComponent from "../galleryComponent";

// Images
import screenshot1 from "../../../Assets/images/SimpleDungeon_1.jpg";
import screenshot2 from "../../../Assets/images/SimpleDungeon_2.jpg";
import gif1 from "../../../Assets/images/SimpleDungeon_3.gif";
let screenshots = [screenshot1, screenshot2, gif1];

// Google analytics functions declaration (users doing specific stuff)
const DownloadSimpleDungeon = () => {
  ReactGA.event({
    category: "Projects page",
    action: "Went to SimpleDungeon downloads",
  });
};

function SimpleDungeon() {
  return (
    <div>
      <i>
        <h2 className="orangeText">Escape the simple dungeon</h2>
      </i>
      <b>
        <p>June 1, 2018</p>
      </b>
      {/** The tags describing the project. **/}
      <div className="horizontalCenter">
        <h6>
          <span className="badge badge-secondary">Game</span>
          <div className="divider"></div>
          <span className="badge badge-secondary">2D</span>
          <div className="divider"></div>
          <span className="badge badge-secondary">Text adventure</span>
          <div className="divider"></div>
          <span className="badge badge-secondary">Python</span>
          <div className="divider"></div>
          <span className="badge badge-secondary">No sound</span>
        </h6>
      </div>

      <GalleryComponent images={screenshots} />
      
      <br />
      <div className="horizontalCenter">
        <p>
          A text adventure game in which you type commands to navigate your way
          through a randomly generated dungeon. The game has a (very) basic
          inventory and combat system.
        </p>
        <button type="button" className="btn btn-primary">
          <a
            href="https://github.com/captnw/project_display/blob/master/Escape_the_simple_dungeon/PROJECTREADME.md"
            target="_blank"
            rel="noopener noreferrer"
            title="More info about the project"
            className="whiteTextButton"
          >
            More info
          </a>
        </button>
        <div className="divider"></div>
        <button type="button" className="btn btn-primary">
          <a
            href="https://github.com/captnw/project_display/tree/master/Escape_the_simple_dungeon"
            target="_blank"
            rel="noopener noreferrer"
            title="Github repo for the project."
            className="whiteTextButton"
          >
            Github repo
          </a>
        </button>
        <div className="divider"></div>
        <button type="button" className="btn btn-primary">
          <a
            href="https://github.com/captnw/project_display/tree/master/Escape_the_simple_dungeon/all_builds"
            target="_blank"
            rel="noopener noreferrer"
            title="Github download page for the project."
            className="whiteTextButton"
            onClick={DownloadSimpleDungeon}
          >
            Download
          </a>
        </button>
      </div>
      <br />
    </div>
  );
}

export default SimpleDungeon;
