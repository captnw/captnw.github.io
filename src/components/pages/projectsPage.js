import React from "react";
// Projects
import MoneyPayphone from "../projectComponents/projects/moneyPayphone";
import SimpleDungeon from "../projectComponents/projects/simpleDungeon";
import JohnJumper from "../projectComponents/projects/johnJumper";
import DiscordActivityBot from "../projectComponents/projects/discordActivityBot";

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
      <hr></hr>

      {/* Place projects under here! */}
      <DiscordActivityBot />
      <hr></hr>
      <JohnJumper />
      <hr></hr>
      <MoneyPayphone />
      <hr></hr>
      <SimpleDungeon />
    </div>
  );
}

export default ProjectsPage;
