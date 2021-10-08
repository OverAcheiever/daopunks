import React, { useState } from "react";
import DaoPunks from "./daopunks";

export default function Culture() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      style={{ fontSize: "4.5rem" }}
      className="w-screen h-max mt-12 md:mt-40 bg-white flex flex-col items-center"
    >
      <h1 className="modius text-red mx-10 text-center text-4xl md:text-7xl">
        CULTURE DAOPUNK
      </h1>
      <p className="w-11/12 mx-10 max-w-5xl mt-5 sm:mt-10 ibm-plex text-base md:text-xl text-center">
        In 1977, the influence of the music and subculture spread worldwide. It
        took root in a wide range of local scenes that often rejected
        affiliation with the mainstream. In the late 1970s, punk experienced a
        second wave as new actIn 1977, the influence of the music and subculture
        spread worldwide. It took root in a wide range of local scenes that
        often rejected affiliation with the mainstream. In the late 1970s, punk
        experienced a second wave as new acts that were not active during its
        formative years adopted the style. s that were not active during its
        formative years adopted the style.
      </p>
      <DaoPunks showMore={showMore} setShowMore={setShowMore} />
    </div>
  );
}
