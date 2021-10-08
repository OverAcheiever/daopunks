import React from "react";
import BackgroundImage from "../../assets/images/backgrounds/hero-background.png";
import Cross from "../../assets/images/hero/close.png";
import Twitter from "../../assets/images/sidebar/twitter.png";
import Discord from "../../assets/images/sidebar/discord.png";
export default function Sidebar({ setShowSidebar }) {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%), url(${BackgroundImage})`,
      }}
      className="absolute w-screen h-screen bg-cover"
    >
      <div className="w-full p-8 flex items-center justify-end">
        <div
          onClick={() => setShowSidebar(false)}
          className="w-10 h-10 mt-3.5 mr-2 outline flex items-center justify-end"
        >
          <img className="w-10" src={Cross} alt="" />
        </div>
      </div>

      <div className="absolute left-0 bottom-0 pl-8 pb-20 flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-5 text-white modius text-2xl">
          <div>ABOUT</div>
          <div>MINT</div>
          <div>ROADMAP</div>
          <div>TEAM</div>
          <div>MY DAO PUNKS</div>
          <div>CONTACT</div>
        </div>
        <div className="flex gap-x-8">
          <img src={Twitter} alt="" />
          <img src={Discord} alt="" />
        </div>
      </div>
    </div>
  );
}
