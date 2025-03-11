import React from "react";
import Hero from "../Components/Hero";
import LatesCollection from "../Components/LatesCollection";
import BestSeller from "../Components/BestSeller";

function Home() {
  return (
    <div>
      <Hero />
      <LatesCollection />
      <BestSeller />
    </div>
  );
}

export default Home;
