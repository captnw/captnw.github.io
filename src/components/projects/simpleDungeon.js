import React from "react";
import screenshot1 from "../../Assets/images/SimpleDungeon_1.jpg";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Your average social media bar. Should be imported in one of the pages, NOT APP.JS
function SimpleDungeon() {
  return (
    <div>
      <div className="horizontalCenter">
        <h2>Escape the simple dungeon.</h2>
      </div>
      <img
        src={screenshot1}
        className="centerImage"
        alt="Money for a payphone screenshot."
      ></img>
      <br />
      <div className="horizontalCenter">
        <p>
          A text adventure game in which you type commands to navigate your way through
          a randomly generated dungeon. Made in python.
        </p>
      </div>
      <br />
      <ul>
        <li>
          <b>
            <a
              href="https://github.com/captnw/project_display/blob/master/Escape_the_simple_dungeon/PROJECTREADME.md"
              target="_blank"
              rel="noopener noreferrer"
              title="More info about the project"
            >
              More info about the project
            </a>
          </b>
        </li>
        <li>
          <b>
            <a
              href="https://github.com/captnw/project_display/tree/master/Escape_the_simple_dungeon"
              target="_blank"
              rel="noopener noreferrer"
              title="Github repo for the project."
            >
              Github repo for the project.
            </a>
          </b>
        </li>
        <li>
          <b>
            <a
              href="https://github.com/captnw/project_display/tree/master/Escape_the_simple_dungeon/all_builds"
              target="_blank"
              rel="noopener noreferrer"
              title="Github download page for the project."
            >
              Download this project.
            </a>
          </b>
        </li>
      </ul>
    </div>
  );
}

export default SimpleDungeon;
