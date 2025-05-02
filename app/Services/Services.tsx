import React from "react";
import ServicesHero from "./ServicesHero";
import ServicesSection from "./ServicesSection";
import Testimonials from "./TestimonialsCarousel";
import ProcessSteps from "./ProcessSteps";
import FeatureHighlights from "./FeatureHighlights";
import ServicesCTA from "./ServicesCTA";
// import Accreditation from "../components/Accreditation";
import LogoMarquee from "../components/LogoMarquee";

const Services = () => {
  return (
    <div>
      <ServicesHero />
      <ServicesSection />
      <LogoMarquee />
      {/* <Accreditation /> */}
      <FeatureHighlights />
      <ProcessSteps />
      <ServicesCTA />
      <Testimonials />
    </div>
  );
};

export default Services;
