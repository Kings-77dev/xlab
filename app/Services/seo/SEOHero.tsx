// // components/SEOHero.tsx
// export default function SEOHero() {
//     return (
//       <section id="seo-hero" className="bg-white py-16 px-6 md:px-12 ">
//         <h1 className="text-4xl md:text-5xl font-bold">Search Engine Optimisation</h1>
//         <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
//           Get your site found on Google. We optimize structure, content & speed so you rank higher and drive more traffic.
//         </p>
//       </section>
//     );
//   }


// components/PortfolioHero.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function SEOHero() {
  return (
    <motion.section
      className="bg-white py-16 px-6 md:px-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start">
        {/* Text Column */}
        <motion.div
          className="w-full md:w-1/2 space-y-4"
          variants={itemVariants}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">Effective Search Engine Optimisation</h1>
          <p className="mt-2 text-lg text-gray-700 max-w-2xl">
          Get your site found on Google. We optimize structure, content & speed so you rank higher and drive more traffic.          </p>
        </motion.div>

        {/* Image Column (static) */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <div className="relative w-full h-48 md:h-80">
            <Image
              src="/portfolio.svg"
              alt="Portfolio preview"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}