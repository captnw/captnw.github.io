import React from "react";
import ReactGA from "react-ga";

import HeaderComponent from "../headerComponent";
import TagComponent from "../tagComponent";
import GalleryComponent from "../galleryComponent";

// Images
import screenshot1 from "../../../Assets/images/MoneyPay_1.jpg";
import screenshot2 from "../../../Assets/images/MoneyPay_2.jpg";
import gif1 from "../../../Assets/images/MoneyPay_3.gif";

// Google analytics functions declaration (users doing specific stuff)
const DownloadMoneyPayphone = () => {
  ReactGA.event({
    category: "Projects page",
    action: "Went to MoneyPayphone downloads",
  });
};

function MoneyPayphone() {
  const title = "Money for a payphone";
  const date = "June 12, 2019";
  const status = "Released";
  const version = "1.0.0";

  const screenshots = [screenshot1, screenshot2, gif1];
  const tags = ["Game", "2D", "Adventure", "Python", "No sound"];

  return (
    <div>
      <HeaderComponent
        title={title}
        date={date}
        version={version}
        status={status}
      />
      <TagComponent tagList={tags} />
      <GalleryComponent images={screenshots} />

      <div className="horizontalCenter">
        <p>
          You walk around, and you talk with the inhabitants of this town. Not
          much else happens.
        </p>
        
        <a
            href="https://github.com/captnw/project_display/blob/master/Money_for_a_payphone/PROJECTREADME.md"
            target="_blank"
            rel="noopener noreferrer"
            title="More info about the project"
            className="whiteTextButton"
        >
          <button type="button" className="btn btn-primary">
            More info
          </button>
        </a>

        <div className="divider"></div>

        <a
            href="https://github.com/captnw/project_display/tree/master/Money_for_a_payphone"
            target="_blank"
            rel="noopener noreferrer"
            title="Github repo for the project."
            className="whiteTextButton"
        >
          <button type="button" className="btn btn-primary">
            Github repo
          </button>
        </a>

        <div className="divider"></div>

        <a
            href="https://github.com/captnw/project_display/tree/master/Money_for_a_payphone/all_builds"
            target="_blank"
            rel="noopener noreferrer"
            title="Github download page for the project."
            className="whiteTextButton"
            onClick={DownloadMoneyPayphone}
        >
          <button type="button" className="btn btn-success">
            Download
          </button>
        </a>
        
      </div>
      <br />
    </div>
  );
}

export default MoneyPayphone;
