import React from "react";
import ReactGA from "react-ga";

import HeaderComponent from "../headerComponent";
import TagComponent from "../tagComponent";
import GalleryComponent from "../galleryComponent";

// Images
import screenshot1 from "../../../Assets/images/DiscordActivityBot_1.svg";
import screenshot2 from "../../../Assets/images/DiscordActivityBot_2.JPG";
import screenshot3 from "../../../Assets/images/DiscordActivityBot_3.jpg";

// Google analytics functions declaration (users doing specific stuff)
const CheckDiscordUserBot = () => {
  ReactGA.event({
    category: "Projects page",
    action: "Checked out DiscordUserBot",
  });
};

function DiscordActivityBot() {
  const title = "DiscordActivityBot";
  const date = "October 15, 2020";
  const status = "Last updated";
  const version = "1.0.0";

  const screenshots = [screenshot1, screenshot2, screenshot3];
  const tags = [
    "Project",
    "Discord bot",
    "Python",
    "discord.py",
    "matplotlib.py",
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
          A discord bot that, when invited to a discord server, would track the
          online times of all the server's occupants.
        </p>
        <b>
          <h4>
            <u>Features</u>
          </h4>
        </b>
        <ul>
          <li>Check your own online activity (when am I online on Discord?)</li>
          <li>
            Check the activity of the server (when are people online in this
            server?)
          </li>
        </ul>

        <a
            href="https://github.com/captnw/DiscordUserScheduleBot"
            target="_blank"
            rel="noopener noreferrer"
            title="Github repo for the project."
            className="whiteTextButton"
            onClick={CheckDiscordUserBot}
        >
          <button type="button" className="btn btn-primary">
            Github repo
          </button>
        </a>
        
      </div>
      <br />
    </div>
  );
}

export default DiscordActivityBot;
