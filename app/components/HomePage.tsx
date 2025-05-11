import React from "react";
import Hero from "./Hero";
import HowWeWork from "./HowWeWork";
import Services from "./Service";
// import Portfolio from "./Portfolio";
import WhyPartner from "./WhyPartner";
import CTA from "./CTA";
import FeatureHighlights from "./FeatureHighlights";
import WhoWeWorkWith from "./WhoWeWorkWith";
import ProposalCTA from "./ProposalCTA";
import TestimonialsCarousel from "../Services/TestimonialsCarousel";

const Home = () => {
  return (
    <main>
      <Hero />
      <FeatureHighlights />
      <HowWeWork />
      <Services />
      <WhoWeWorkWith />
      <ProposalCTA />

      {/* <Portfolio /> */}
      <WhyPartner />
      <TestimonialsCarousel />

      <CTA />
    </main>
  );
};

export default Home;
