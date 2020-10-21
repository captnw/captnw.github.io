import React from "react";
import ReactGA from "react-ga";
import GalleryComponent from "../galleryComponent";

// Images
import screenshot1 from "../../../Assets/images/DiscordActivityBot_1.svg";
import screenshot2 from "../../../Assets/images/DiscordActivityBot_2.JPG";
import screenshot3 from "../../../Assets/images/DiscordActivityBot_3.jpg";

let screenshots = [screenshot1, screenshot2, screenshot3];

// Google analytics functions declaration (users doing specific stuff)
const CheckDiscordUserBot = () => {
  ReactGA.event({
    category: "Projects page",
    action: "Checked out DiscordUserBot",
  });
};

function DiscordActivityBot() {
  return (
    <div>
      <i>
        <h2 className="orangeText thicker noPaddingBottom">
          DiscordActivityBot
        </h2>
      </i>
      <b>
        <p className="noPaddingBottom">
          <span class="badge badge-warning">Last updated</span>
          <span class="badge badge-secondary">October 14, 2020</span>
        </p>
        <p>
          <span class="badge badge-dark">Version</span>
          <span class="badge badge-secondary">1.0.0</span>
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
          the whole server.
        </p>
        <b><h4><u>Features</u></h4></b>
        <ul>
          <li>
            Check your own online activity, or the activity of any server the
            bot is in
          </li>
          <li>
            See or adjust your timezone.
          </li>
        </ul>
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

export default DiscordActivityBot;
