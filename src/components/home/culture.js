import React, { useState } from "react";
import DaoPunks from "./daopunks";

export default function Culture() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      style={{ fontSize: "4.5rem" }}
      className="w-screen h-max mt-12 md:mt-40 bg-white flex flex-col items-center"
    >
      <h1 className="modius md:leading-tight max-w-5xl text-red mx-10 text-center text-3xl md:text-7xl">
        CORPORATE PUNK TO DAOPUNK
      </h1>
      <p className="w-11/12 mx-10 max-w-5xl mt-5 sm:mt-10 ibm-plex text-base md:text-xl text-center">
        Our mission is to help free all humans from the soul-sucking drudgery of
        default world work to the rewarding expansive freedom found in
        meaningful DAO work.
        <br />
        <br />
        We blaze new trails for others to follow to fertile promised lands where
        they find opportunity, meaningful work, community, and untold abundance.
        We build the bridges. We blaze the trails. With open minds and arms, we
        invite others to join us. Together we go further. A better world awaits.
        DAOpunks lead the way.
      </p>
      <DaoPunks showMore={showMore} setShowMore={setShowMore} />
    </div>
  );
}
