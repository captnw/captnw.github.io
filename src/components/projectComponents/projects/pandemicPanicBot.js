import React from "react";
import ReactGA from "react-ga";

import HeaderComponent from "../headerComponent";
import TagComponent from "../tagComponent";
import GalleryComponent from "../galleryComponent";

// Images
import screenshot1 from "../../../Assets/images/PandemicPanicBot_1.jpg";
import screenshot2 from "../../../Assets/images/PandemicPanicBot_2.jpg";

// Google analytics functions declaration (users doing specific stuff)
const CheckPandemicPanicBot = () => {
  ReactGA.event({
    category: "Projects page",
    action: "Checked out DiscordUserBot",
  });
};

function PandemicPanicBot() {
  const title = "PandemicPanicBot";
  const date = "December 17, 2020";
  const status = "Last updated";
  const version = "1.0.0";

  const screenshots = [screenshot1, screenshot2];
  const tags = [
    "Project",
    "Discord bot",
    "C#",
    "DSharpPlus",
    "Multiplayer game",
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
          A discord bot that hosts the Pandemic Panic game on any server. Only
          one game may be running at a time (the bot is rate limited and cannot
          send messages continously).
        </p>
        <p>
          More information about PandemicPanic and the bot itself can be found
          in the links below.
        </p>

        <a
            href="https://github.com/captnw/PandemicPanicBot/blob/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
            title="More information about the project."
            className="whiteTextButton"
            onClick={CheckPandemicPanicBot}
        >
          <button type="button" className="btn btn-primary">
            More info
          </button>
        </a>

        <div className="divider"></div>

        <a
            href="https://github.com/captnw/PandemicPanicBot"
            target="_blank"
            rel="noopener noreferrer"
            title="Github download page for the project."
            className="whiteTextButton"
            onClick={CheckPandemicPanicBot}
        >
          <button type="button" className="btn btn-primary">
            Github repo
          </button>
        </a>

        <div className="divider"></div>

        <a
            href="https://github.com/captnw/PandemicPanicBot/blob/main/InfoAboutProject/PPBotStateDiagram.pdf"
            target="_blank"
            rel="noopener noreferrer"
            title="More information about the project."
            className="whiteTextButton"
            onClick={CheckPandemicPanicBot}
        >
          <button type="button" className="btn btn-primary">
            Bot state diagram
          </button>
        </a>
        
      </div>
      <br />
    </div>
  );
}

export default PandemicPanicBot;