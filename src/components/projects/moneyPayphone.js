import React from "react";
import screenshot1 from "../../Assets/images/MoneyPay_1.jpg";
import ReactGA from "react-ga";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Google analytics functions declaration (users doing specific stuff)
const DownloadMoneyPayphone = () => {
  ReactGA.event({
    category: "Projects page",
    action: "Went to MoneyPayphone downloads",
  });
};

// Your average social media bar. Should be imported in one of the pages, NOT APP.JS
function MoneyPayphone() {
  return (
    <div>
      <div className="horizontalCenter">
        <h2>Money for a Payphone.</h2>
      </div>
      <img src={screenshot1} className="centerImage" alt="Money for a payphone screenshot."></img>
      <br />
      <div className="horizontalCenter">
        <p>
          A talking "adventure" game where you have to go and talk to the
          inhabitants around your town in order to earn enough money to use a
          payphone. Made in python.
        </p>
      </div>
      <br />
      <ul>
        <li>
          <b>
            <a
              href="https://github.com/captnw/project_display/blob/master/Money_for_a_payphone/PROJECTREADME.md"
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
              href="https://github.com/captnw/project_display/tree/master/Money_for_a_payphone"
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
              href="https://github.com/captnw/project_display/tree/master/Money_for_a_payphone/all_builds"
              target="_blank"
              rel="noopener noreferrer"
              title="Github download page for the project."
              onClick={DownloadMoneyPayphone}
            >
              Download this project.
            </a>
          </b>
        </li>
      </ul>
    </div>
  );
}

export default MoneyPayphone;
