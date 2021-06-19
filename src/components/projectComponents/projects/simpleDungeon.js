import React from "react";
import ReactGA from "react-ga";

import HeaderComponent from "../headerComponent";
import TagComponent from "../tagComponent";
import GalleryComponent from "../galleryComponent";

// Images
import screenshot1 from "../../../Assets/images/SimpleDungeon_1.jpg";
import screenshot2 from "../../../Assets/images/SimpleDungeon_2.jpg";
import gif1 from "../../../Assets/images/SimpleDungeon_3.gif";

// Google analytics functions declaration (users doing specific stuff)
const DownloadSimpleDungeon = () => {
  ReactGA.event({
    category: "Projects page",
    action: "Went to SimpleDungeon downloads",
  });
};

function SimpleDungeon() {
  const title = "Escape the simple dungeon";
  const date = "June 1, 2018";
  const status = "Released";
  const version = "1.0.0";

  const screenshots = [screenshot1, screenshot2, gif1];
  const tags = ["Game", "2D", "Text adventure", "Python", "No sound"];

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
          If you're in the niche audience who likes text-based games and turn
          based combat, you may be interested in this game.
        </p>

        <a
            href="https://github.com/captnw/project_display/blob/master/Escape_the_simple_dungeon/PROJECTREADME.md"
            target="_blank"
            rel="noopener noreferrer"
            title="More info about the project"
            className="whiteTextButton"
        >
          <button type="button" className="btn btn-primary">
            More info
          </button>
        </a>

        <div className="divider"></div>

        <a
            href="https://github.com/captnw/project_display/tree/master/Escape_the_simple_dungeon"
            target="_blank"
            rel="noopener noreferrer"
            title="Github repo for the project."
            className="whiteTextButton"
        >
          <button type="button" className="btn btn-primary">
            Github repo
          </button>
        </a>

        <div className="divider"></div>

        <a
            href="https://github.com/captnw/project_display/tree/master/Escape_the_simple_dungeon/all_builds"
            target="_blank"
            rel="noopener noreferrer"
            title="Github download page for the project."
            className="whiteTextButton"
            onClick={DownloadSimpleDungeon}
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

export default SimpleDungeon;
