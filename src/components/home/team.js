import React from "react";
import BackgroundImage from "../../assets/images/team-background.png";

export default function Team() {
  return (
    <div
      style={{ backgroundImage: `url(${BackgroundImage})` }}
      className="w-screen h-screen bg-cover"
    ></div>
  );
}
