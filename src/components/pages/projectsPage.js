import React from "react";
import MoneyPayphone from "../projects/moneyPayphone";
import SimpleDungeon from "../projects/simpleDungeon";

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
          Note: currently games are downloadable .exe files, I will get the
          games running in the browser if you don't wish to download some random
          .exe file to try out these games/projects.
        </b>
      </p>
      <br />
      <div className="horizontalCenter">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/captnw/project_display"
          title="My projects's Github page"
        >
          View all of my projects on Github
        </a>
      </div>
      <hr></hr>
      
      {/* Place projects under here! */}
      <MoneyPayphone/>
      <hr></hr>
      <SimpleDungeon/>
    </div>
  );
}

export default ProjectsPage;
