import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// Your average social media bar. Should be imported in one of the pages, NOT APP.JS
function SocialMedia() {
  return (
    <div className="horizontalCenter">
      <h4>My Social media:</h4>
      <ul className="noBulletList">
        <li className="horizontalListItem">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/captnw"
            title="My Github profile"
            id="GithubIconTheme"
          >
            {/* Changes the icon image when hovered over. */}
            <FontAwesomeIcon icon={faGithub} className="fa-4x" />
          </a>
        </li>
        <li className="horizontalListItem last">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/william-nguyen-934552194/"
            title="My Linkedin profile"
            id="LinkedinIconTheme"
          >
            {/* Changes the icon image when hovered over. */}
            <FontAwesomeIcon icon={faLinkedin} className="fa-4x" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialMedia;
