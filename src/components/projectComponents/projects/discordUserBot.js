import React from "react";
import ReactGA from "react-ga";
import GalleryComponent from "../galleryComponent";

// Images
import screenshot1 from "../../../Assets/images/PlaceHolder.jpg";

let screenshots = [screenshot1];

// Google analytics functions declaration (users doing specific stuff)
const CheckDiscordUserBot = () => {
  ReactGA.event({
    category: "Projects page",
    action: "Checked out DiscordUserBot",
  });
};

function DiscordUserBot() {
  return (
    <div>
      <i>
        <h2 className="orangeText">DiscordUserBot</h2>
      </i>
      <b>
        <p>
          <span class="badge badge-secondary">Last updated</span> August 18,
          2020
        </p>
      </b>
      {/** The tags describing the project. **/}
      <div className="horizontalCenter">
        <h6>
          <span className="badge badge-secondary">Project</span>
          <div className="divider"></div>
          <span className="badge badge-secondary">Discord bot</span>
          <div className="divider"></div>
          <span className="badge badge-secondary">Python</span>
          <div className="divider"></div>
          <span className="badge badge-secondary">discord.py</span>
          <div className="divider"></div>
          <span className="badge badge-secondary">matplotlib.py</span>
        </h6>
      </div>

      <GalleryComponent images={screenshots} />

      <br />
      <div className="horizontalCenter">
        <p>
          A discord bot that, when invited to a discord server, would track the
          online times of all the server's occupants. Users can request to see
          their own online activity, or check to see the cumulative activity of
          the whole server. Stores user's online times for up to 10 days.
        </p>
        <button type="button" className="btn btn-primary">
          <a
            href="https://github.com/captnw/DiscordUserScheduleBot"
            target="_blank"
            rel="noopener noreferrer"
            title="Github repo for the project."
            className="whiteTextButton"
            onClick={CheckDiscordUserBot}
          >
            Github repo
          </a>
        </button>
      </div>
      <br />
    </div>
  );
}

export default DiscordUserBot;
