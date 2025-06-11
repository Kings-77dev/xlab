import React from "react";
import Hero from "./Hero";
import HowWeWork from "./HowWeWork";
// import Services from "./Service";
// import Portfolio from "./Portfolio";
// import WhyPartner from "./WhyPartner";
import CTA from "./CTA";
import FeatureHighlights from "./FeatureHighlights";
import WhoWeWorkWith from "./WhoWeWorkWith";
// import ProposalCTA from "./ProposalCTA";
import TestimonialsCarousel from "../Services/TestimonialsCarousel";
import AboutUsSection from "./AboutUsSection";
import PortfolioSection from "./Portfolio";
import WhatWereGoodAt from "./WhatWereGoodAt";

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutUsSection />
      <PortfolioSection />
      <FeatureHighlights />
      <WhatWereGoodAt />

      <HowWeWork />
      {/* <Services /> */}
      {/* <WhyPartner /> */}

      <WhoWeWorkWith />
      {/* <ProposalCTA /> */}

      <TestimonialsCarousel />

      <CTA />
    </main>
  );
};

export default Home;
