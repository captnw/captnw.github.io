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
        I'm a 4th year undergraduate UCI student double-majoring in computer
        science and computer game science.
      </p>
      <hr></hr>
      <SocialMedia />
    </div>
  );
}

export default Homepage;