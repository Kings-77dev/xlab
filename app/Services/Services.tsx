import React from "react";
import ServicesHero from "./ServicesHero";
import ServicesSection from "./ServicesSection";
import ProcessSteps from "./ProcessSteps";
import FeatureHighlights from "./FeatureHighlights";
import ServicesCTA from "./ServicesCTA";
// import Accreditation from "../components/Accreditation";
import LogoMarquee from "../components/LogoMarquee";
import WhyPartner from "../components/WhyPartner";

const Services = () => {
  return (
    <div>
      <ServicesHero />
      <ServicesSection />
      <WhyPartner />
      <FeatureHighlights />
      <LogoMarquee />
      <ProcessSteps />
      <ServicesCTA />

    </div>
  );
};

export default Services;




// components/AllServicesHero.tsx
// "use client";

// import { motion } from "framer-motion";

// export default function AllServicesHero() {
//   return (
//     <motion.section
//       id="all-services-hero"
//       className="bg-white py-16 px-6 md:px-12 text-center"
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//     >
//       <h1 className="text-4xl md:text-5xl font-bold">
//         All Our Web Services
//       </h1>
//       <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
//         From design and development to SEO and ongoing support—everything you need to thrive online.
//       </p>
//     </motion.section>
//   );
// }
