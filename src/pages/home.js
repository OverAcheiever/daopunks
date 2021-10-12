import React from "react";
import Culture from "../components/home/about";
import Hero from "../components/home/hero";
import Mint from "../components/home/mint";
import Roadmap from "../components/home/roadmap";
import Team from "../components/home/team";
import Footer from "../components/home/footer";
export default function Home() {
  return (
    <>
      <Hero />
      <Culture />
      <Mint />
      <Roadmap />
      <Team />
      <Footer />
    </>
  );
}
