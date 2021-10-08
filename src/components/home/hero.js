import React, { useState } from "react";
import BackgroundImage from "../../assets/images/backgrounds/hero-background.png";
import Logo from "../../assets/images/hero/logo.png";
import HamburgerIcon from "../../assets/images/hero/hamburger-icon.png";

import Sidebar from "./sidebar";
export default function Hero() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%), url(${BackgroundImage})`,
      }}
      className="w-screen h-screen bg-cover"
    >
      {showSidebar ? <Sidebar setShowSidebar={setShowSidebar} /> : null}
      <div className="w-full p-8 flex items-center justify-between">
        <img className="w-32" src={Logo} alt="" />
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className="w-10 h-10 -mt-3 mr-1 outline flex items-center justify-center"
        >
          <img className="w-10" src={HamburgerIcon} alt="" />
        </div>
      </div>
    </div>
  );
}
