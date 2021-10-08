import React from "react";
import abstractBackground from "../../assets/images/mint-background.png";

export default function Mint() {
  return (
    <div
      style={{ backgroundImage: `url(${abstractBackground})` }}
      className="w-screen h-screen bg-cover flex flex-col items-center justify-center"
    >
      <h1 className="max-w-screen-xl mx-3 sm:mx-10 text-white text-4xl md:text-6xl lg:text-7xl leading-normal md:leading-snug lg:leading-snug modius red-text-shadow text-center">
        I WANT TO BE PART OF THE <br /> DAOPUNK CULTURE
      </h1>
      {/* <div className="mt-10 text-white text-4xl modius text-center">
        1190 NFTs will be sold <br /> for 0.1 ETH
      </div> */}
      <button className="mt-28 px-3 sm:px-5 mx-5 py-5 rounded bg-white modius text-base sm:text-xl leading-snug text-black outline-none">
        Connect your wallet
      </button>
    </div>
  );
}
