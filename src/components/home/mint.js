/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import BackgroundImage from "../../assets/images/backgrounds/mint-background.png";

function MintNFT({ wallet, setWallet, isSoldOut, setIsSoldOut }) {
  useEffect(() => {
    (async () => {
      // Code to check if NFT's are soldout
      // If soldout - setIsSoldOut(true);
    })();
  }, [setIsSoldOut]);

  async function walletConnect() {
    // Wallet Connect Code
    // setWallet(walletId/any data needed for minting)
  }

  async function Mint() {
    //
  }

  return (
    <div>
      {wallet === null && !isSoldOut ? (
        <button
          onClick={walletConnect}
          className="mt-16 sm:mt-28 px-3 sm:px-10 mx-5 py-5 rounded bg-white modius text-base sm:text-xl leading-snug text-black outline-none"
        >
          CONNECT YOUR WALLET
        </button>
      ) : !isSoldOut ? (
        <>
          <input
            type="number"
            className="w-60 sm:w-80 mx-20 mt-28 px-5 sm:px-10 py-5 rounded modius text-base sm:text-xl leading-snug text-black outline-none"
          />
          <button className="mt-3 px-3 sm:px-7 mx-5 py-5 rounded red text-white modius text-base sm:text-xl leading-snug text-black outline-none">
            MINT A DAOPUNK
          </button>
        </>
      ) : (
        <div className="mt-20 sm:mt-32 mb-10 text-red white-text-shadow text-7xl sm:text-8xl text-center lg:text-9xl violence">
          SOLD OUT
        </div>
      )}
    </div>
  );
}

export default function Mint() {
  const [wallet, setWallet] = useState(null);
  const [isSoldOut, setIsSoldOut] = useState(false);

  return (
    <div
      id="mint"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
      className="w-screen h-screen bg-cover flex flex-col items-center justify-center"
    >
      <h1 className="max-w-6xl mx-3 sm:mx-10 text-white text-4xl sm:text-6xl lg:text-7xl leading-normal md:leading-snug lg:leading-snug modius red-text-shadow text-center">
        I WANT TO BECOME A DAOPUNK
      </h1>

      <MintNFT
        wallet={wallet}
        setWallet={setWallet}
        isSoldOut={isSoldOut}
        setIsSoldOut={setIsSoldOut}
      />
    </div>
  );
}
