import React from "react";
import SocialMedia from "../components/socialMediaComponent/socialMediaBar";

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
        2022 UCI student computer
        science and computer game science graduate.
      </p>
      <hr></hr>
      <SocialMedia />
    </div>
  );
}

export default Homepage;