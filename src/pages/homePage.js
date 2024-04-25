import React from "react";
import SocialMedia from "../components/socialMediaComponents/socialMediaBar";

// What visitors first see.

function Homepage() {
  return (
    <div className="container whiteBackground">
      <br />
      <h1 className="largeText horizontalCenter">William Nguyen</h1>
      <h3>
        <b>Bio</b>
      </h3>
      <br />
      <p className="horizontalCenter">
        Graduated from UCI in 2022 - double majored in computer science and computer game science.
      </p>
      <br />
      <p className="horizontalCenter">
        Now working at Edwards Lifesciences as a Software test engineer.
      </p>
      <hr></hr>
      <SocialMedia />
    </div>
  );
}

export default Homepage;