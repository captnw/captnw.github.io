import React from "react";
import SocialMedia from "../socialMediaComponent/socialMediaBar"

// What visitors first see.

function Homepage() {
  return (
    <div className="container whiteBackground">
      <br/>
      <h1 className="largeText horizontalCenter">William Nguyen</h1>
      <h3><b>Bio</b></h3>
      <br/>
      <p className="horizontalCenter">I'm an undergraduate student attending UCI for a computer science and computer game science degree.</p>
      <hr></hr>
      <SocialMedia/>
    </div>
  );
}

export default Homepage;
