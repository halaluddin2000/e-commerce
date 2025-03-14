import React from "react";
import Hero from "../Components/Hero";
import LatesCollection from "../Components/LatesCollection";
import BestSeller from "../Components/BestSeller";
import OurPolicy from "../Components/OurPolicy";

function Home() {
  return (
    <div>
      <Hero />
      <LatesCollection />
      <BestSeller />
      <OurPolicy />
    </div>
  );
}

export default Home;
