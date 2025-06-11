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

// // components/PortfolioHero.tsx
// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.2 }
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

// export default function SEOHero() {
//   return (
//     <motion.section
//       className="bg-white py-16 px-6 md:px-12"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       variants={containerVariants}
//     >
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start">
//         {/* Text Column */}
//         <motion.div
//           className="w-full md:w-1/2 space-y-4"
//           variants={itemVariants}
//           transition={{ duration: 0.6 }}
//         >
//           <h1 className="text-4xl md:text-5xl font-bold">Effective Search Engine Optimisation</h1>
//           <p className="mt-2 text-lg text-gray-700 max-w-2xl">
//           Get your site found on Google. We optimize structure, content & speed so you rank higher and drive more traffic.          </p>
//         </motion.div>

//         {/* Image Column (static) */}
//         <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
//           <div className="relative w-full h-48 md:h-80">
//             <Image
//               src="/portfolio.svg"
//               alt="Portfolio preview"
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// }

// components/ServicesHero.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function SEOHero() {
  return (
    <motion.section
      id="services-hero"
      className="relative bg-background text-foreground py-24 px-6 md:px-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Nav indicator dot + label */}
        <div className="flex items-center space-x-2 mb-6">
          <span className="inline-block w-2 h-2 rounded-full bg-primary" />
          <span className="text-sm text-gray-400">SEO</span>
        </div>

        {/* Headline */}
        <h1 className=" text-5xl md:text-[100px] font-bold text-foreground leading-tight">
          Drive More Traffic with Expert SEO Services
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg md:text-xl max-w-2xl text-gray-400">
          Elevating brands through design and technical expertise.
        </p>

        {/* CTA */}
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block bg-primary text-foreground px-6 py-3 rounded-xl font-bold transform duration-200 ease-out hover:scale-115 hover:bg-primary transition"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
