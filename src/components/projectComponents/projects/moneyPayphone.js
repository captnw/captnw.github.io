import React from "react";
import ReactGA from "react-ga";
import GalleryComponent from "../galleryComponent";

// Images
import screenshot1 from "../../../Assets/images/MoneyPay_1.jpg";
import screenshot2 from "../../../Assets/images/MoneyPay_2.jpg";
import gif1 from "../../../Assets/images/MoneyPay_3.gif";
let screenshots = [screenshot1, screenshot2, gif1];

// Google analytics functions declaration (users doing specific stuff)
const DownloadMoneyPayphone = () => {
  ReactGA.event({
    category: "Projects page",
    action: "Went to MoneyPayphone downloads",
  });
};

function MoneyPayphone() {
  return (
    <div>
      <i>
        <h2 className="orangeText thicker noPaddingBottom">Money for a payphone</h2>
      </i>
      <b>
        <p>
          <span class="badge badge-success">Released</span><span class="badge badge-secondary">June 12, 2019</span>
        </p>
      </b>
      {/** The tags describing the project. **/}
      <div className="horizontalCenter">
        <h6>
          <span className="badge badge-secondary">Game</span>
          <div className="divider"></div>
          <span className="badge badge-secondary">2D</span>
          <div className="divider"></div>
          <span className="badge badge-secondary">Adventure</span>
          <div className="divider"></div>
          <span className="badge badge-secondary">Python</span>
          <div className="divider"></div>
          <span className="badge badge-secondary">No sound</span>
        </h6>
      </div>

      <GalleryComponent images={screenshots} />

      <br />
      <div className="horizontalCenter">
        <p>
          A talking "adventure" game where you have to go and talk to the
          inhabitants around your town in order to earn enough money to use a
          payphone. Your choices determine what ending you would see when you
          finish the game.
        </p>
        <button type="button" className="btn btn-primary">
          <a
            href="https://github.com/captnw/project_display/blob/master/Money_for_a_payphone/PROJECTREADME.md"
            target="_blank"
            rel="noopener noreferrer"
            title="More info about the project"
            className="whiteTextButton"
          >
            More info
          </a>
        </button>
        <div className="divider"></div>
        <button type="button" className="btn btn-primary">
          <a
            href="https://github.com/captnw/project_display/tree/master/Money_for_a_payphone"
            target="_blank"
            rel="noopener noreferrer"
            title="Github repo for the project."
            className="whiteTextButton"
          >
            Github repo
          </a>
        </button>
        <div className="divider"></div>
        <button type="button" className="btn btn-primary">
          <a
            href="https://github.com/captnw/project_display/tree/master/Money_for_a_payphone/all_builds"
            target="_blank"
            rel="noopener noreferrer"
            title="Github download page for the project."
            className="whiteTextButton"
            onClick={DownloadMoneyPayphone}
          >
            Download
          </a>
        </button>
      </div>
      <br />
    </div>
  );
}

export default MoneyPayphone;
