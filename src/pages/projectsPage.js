import React from "react";

// Projects
import MoneyPayphone from "../components/projectComponents/projects/moneyPayphone";
import SimpleDungeon from "../components/projectComponents/projects/simpleDungeon";
import JohnJumper from "../components/projectComponents/projects/johnJumper";
import DiscordActivityBot from "../components/projectComponents/projects/discordActivityBot";
import PandemicPanicBot from "../components/projectComponents/projects/pandemicPanicBot";
import Colormancy from "../components/projectComponents/projects/colormancy";

function ProjectsPage() {
  return (
    <div className="container whiteBackground">
      <br />

      <div className="containerImage">
        <h1 className="largeText horizontalCenter">My projects</h1>
        <br />
        <p>
          This page is dedicated to showcasing all of my various games and
          projects. If there is a project not listed here, it's sitting in an empty Github repo due to the fact that its a school project and people
          may plagiarize it.
        </p>
      </div>

      {/* Place projects under here! */}
      <hr className="noPaddingBottom"></hr>
      <Colormancy className="noPaddingBottom" />
      <hr className="noPaddingBottom"></hr>
      <PandemicPanicBot className="noPaddingBottom" />
      <hr className="noPaddingBottom"></hr>
      <DiscordActivityBot className="noPaddingBottom" />
      <hr className="noPaddingBottom"></hr>
      <JohnJumper className="noPaddingBottom" />
      <hr className="noPaddingBottom"></hr>
      <MoneyPayphone className="noPaddingBottom" />
      <hr className="noPaddingBottom"></hr>
      <SimpleDungeon className="noPaddingBottom" />
    </div>
  );
}

export default ProjectsPage;
