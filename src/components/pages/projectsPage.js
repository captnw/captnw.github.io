import React from "react";
// Projects
import MoneyPayphone from "../projectComponents/projects/moneyPayphone";
import SimpleDungeon from "../projectComponents/projects/simpleDungeon";
import JohnJumper from "../projectComponents/projects/johnJumper";
import DiscordUserBot from "../projectComponents/projects/discordUserBot";

function ProjectsPage() {
  return (
    <div className="container whiteBackground">
      <br />
      <h1 className="largeText horizontalCenter">My projects</h1>
      <br />
      <p>
        This page is dedicated to showcasing all of my various games and
        projects.
      </p>
      <p>Feel free to look at the assets, source code, and even use them.</p>
      <p>
        Suggestions and/or criticism are welcomed (when I eventually implement a
        comments section).
      </p>
      <p>
        <b>
          Note: games are playable in the browser only if they have an "itch.io" button.
        </b>
      </p>
      <br />
      <div className="horizontalCenter">
        <button type="button" className="btn btn-primary">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/captnw/project_display"
            title="My projects's Github page"
            className="whiteTextButton"
          >
            View all of my projects on Github
          </a>
        </button>
      </div>
      <hr></hr>

      {/* Place projects under here! */}
      <JohnJumper />
      <hr></hr>
      <DiscordUserBot />
      <hr></hr>
      <MoneyPayphone />
      <hr></hr>
      <SimpleDungeon />
    </div>
  );
}

export default ProjectsPage;
