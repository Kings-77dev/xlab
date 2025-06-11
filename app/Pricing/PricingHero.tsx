

// // components/PricingHero.tsx
// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";

// const containerVariants = {
//   hidden: { opacity: 0, y: 20 },
//   show:  { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// export default function PricingHero() {
//   return (
//     <motion.section
//       id="pricing-hero"
//       className="bg-background py-24 px-6 md:px-12 text-foreground"
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, amount: 0.4 }}
//       variants={containerVariants}
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Nav indicator */}
//         <div className="flex items-center space-x-2 mb-6">
//           <span className="w-2 h-2 bg-primary rounded-full inline-block" />
//           <span className="text-sm text-gray-400">Pricing</span>
//         </div>

//         {/* Headline */}
//         <h1 className="font-serif text-5xl md:text-[100px] font-bold leading-tight">
//           Pricing Plans
//         </h1>

//         {/* Subheading */}
//         <p className="mt-4 text-lg md:text-xl max-w-2xl text-gray-400">
//           Choose a plan that fits your business needs and budget. Scale up as you grow.
//         </p>

//         {/* CTA */}
//         <div className="mt-8">
//           <Link
//             href="/pricing"
//             className="inline-block bg-primary text-foreground px-6 py-3 rounded-lg font-bold hover:scale-115 hover:bg-primary transition"
//           >
//             View Plans
//           </Link>
//         </div>
//       </div>
//     </motion.section>
//   );
// }


// components/PricingHero.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show:  { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function PricingHero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 500);
    return () => clearTimeout(t);
  }, []);


  return (
    <motion.section
      id="pricing-hero"
      className="bg-background py-24 px-6 md:px-12 text-foreground"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Nav indicator */}
        <div className="flex items-center space-x-2 mb-6">
          {loaded ? (
            <>
              <span className="w-2 h-2 bg-primary rounded-full inline-block" />
              <span className="text-sm text-gray-400">Pricing</span>
            </>
          ) : (
            <>
              <span className="w-2 h-2 rounded-full inline-block bg-gray-700" />
              <div className="h-4 w-16 rounded bg-gray-700 animate-pulse" />
            </>
          )}
        </div>

        {/* Headline */}
        {loaded ? (
          <h1 className="font-serif text-5xl md:text-[100px] font-bold leading-tight">
            Pricing Plans
          </h1>
        ) : (
          <div className="h-12 md:h-20 w-3/4 md:w-1/2 rounded bg-gray-700 animate-pulse" />
        )}

        {/* Subheading */}
        {loaded ? (
          <p className="mt-4 text-lg md:text-xl max-w-2xl text-gray-400">
            Choose a plan that fits your business needs and budget. Scale up as you grow.
          </p>
        ) : (
          <div className="mt-4 h-4 w-1/2 rounded bg-gray-700 animate-pulse" />
        )}

        {/* CTA */}
        <div className="mt-8">
          {loaded ? (
            <Link
              href="/pricing"
              className="inline-block bg-primary text-foreground px-6 py-3 rounded-lg font-bold hover:scale-105 hover:bg-accent transition"
            >
              Get In Touch
            </Link>
          ) : (
            <div className="h-10 w-32 rounded-lg bg-gray-700 animate-pulse" />
          )}
        </div>
      </div>
    </motion.section>
  );
}