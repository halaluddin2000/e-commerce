import React from "react";
import Hero from "../Components/Hero";
import LatesCollection from "../Components/LatesCollection";
import BestSeller from "../Components/BestSeller";
import OurPolicy from "../Components/OurPolicy";
import NewsletterBox from "../Components/NewsletterBox";

function Home() {
  return (
    <div>
      <Hero />
      <LatesCollection />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox />
    </div>
  );
}

export default Home;
