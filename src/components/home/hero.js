import React, { useState } from "react";
import BackgroundImage from "../../assets/images/backgrounds/hero-background.png";
import Logo from "../../assets/images/hero/logo.png";
import HamburgerIcon from "../../assets/images/hero/hamburger-icon.png";

import Sidebar from "./sidebar";

import Twitter from "../../assets/images/sidebar/twitter.png";
import Discord from "../../assets/images/sidebar/discord.png";
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
      <div className="w-full p-8 sm:p-10 lg:p-14 flex items-center justify-between">
        <img className="w-32 md:w-36 lg:w-40" src={Logo} alt="" />
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className="block md:hidden w-10 h-10 -mt-3 mr-1 outline flex items-center justify-center"
        >
          <img className="w-10" src={HamburgerIcon} alt="" />
        </div>
        <div className="hidden xl:block modius text-white text-lg">About  /  Mint  /  Roadmap  /  Team  /  Contact</div>
        <div className="hidden md:flex -mt-1 items-center justify-center gap-x-10">
          <div className="flex gap-x-6">
            <img src={Twitter} alt="" />
            <img src={Discord} alt="" />
          </div>
          <button className="px-3 sm:px-7 py-5 rounded bg-black text-white modius text-base sm:text-xl leading-snug text-black outline-none">
            CONNECT
          </button>
        </div>
      </div>
    </div>
  );
}
