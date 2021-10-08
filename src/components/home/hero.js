import React from "react";
import abstractBackground from "../../assets/images/hero-background.png";
import Logo from "../../assets/images/logo.png";
import HamburgerIcon from "../../assets/images/hamburger-icon.png"
export default function Hero() {
  return (
    <div
      style={{ backgroundImage: `url(${abstractBackground})` }}
      className="w-screen h-screen bg-cover"
    >
      {/* <div className="w-full p-5 flex items-center justify-between">
        <img className="-ml-3" src={Logo} alt="" />
        <img src={HamburgerIcon} alt="" />
      </div> */}
    </div>
  );
}
