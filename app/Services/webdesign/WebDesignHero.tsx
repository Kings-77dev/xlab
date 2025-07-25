// // components/WebDesignHero.tsx
// "use client";

// import { motion } from "framer-motion";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";

// export default function WebDesignHero() {
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const id = window.setTimeout(() => setLoading(false), 600);
//     return () => window.clearTimeout(id);
//   }, []);

//   return (
//     <motion.section
//       id="web-design-hero"
//       className="bg-background py-16 px-6 md:px-12 text-center"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: loading ? 0 : 1, y: loading ? 20 : 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       {loading ? (
//         <>
//           <Skeleton width={500} height={40} />
//           <div className="h-4" />
//           <Skeleton count={2} width={600} height={20} />
//           <div className="h-8" />
//           <Skeleton width="100%" height={300} />
//         </>
//       ) : (
//         <>
//           <h1 className="text-4xl md:text-5xl font-bold">
//             Professional Custom Web Design
//           </h1>
//           <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
//             We craft responsive, user-friendly websites that engage your audience and strengthen your brand online.
//           </p>
//           <div className="mt-8 relative w-full h-64 md:h-96 mx-auto">
//             {/* <Image
//               src="/web-design-hero.svg"
//               alt="Custom web design example"
//               fill
//               className="object-contain"
//             /> */}
//           </div>
//         </>
//       )}
//     </motion.section>
//   );
// }




// components/WebDesignHero.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function WebDesignHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.section
      id="web-design-hero"
      className="bg-background py-24 px-6 md:px-12 text-foreground"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeInUp}
    >
      <div className="max-w-7xl mx-auto">
        {/* Nav indicator */}
        <div className="flex items-center space-x-2 mb-6">
          {loaded ? (
            <>
              <span className="w-2 h-2 bg-primary rounded-full inline-block" />
              <span className="text-sm text-gray-400">Web Design</span>
            </>
          ) : (
            <>
              <span className="w-2 h-2 rounded-full bg-gray-700 inline-block" />
              <div className="h-4 w-20 rounded bg-gray-700 animate-pulse" />
            </>
          )}
        </div>

        {/* Headline */}
        {loaded ? (
          <h1 className="text-5xl md:text-[100px] font-bold font-serif leading-tight">
            Professional Custom Web Design
          </h1>
        ) : (
          <div className="h-12 md:h-20 w-3/4 md:w-1/2 rounded bg-gray-700 animate-pulse" />
        )}

        {/* Subheading */}
        {loaded ? (
          <p className="mt-4 text-lg md:text-xl max-w-2xl text-gray-400">
            We craft responsive, user-friendly websites that engage your audience and strengthen your brand online.
          </p>
        ) : (
          <div className="mt-4 h-4 w-1/2 rounded bg-gray-700 animate-pulse" />
        )}

        {/* CTA */}
        <div className="mt-8">
          {loaded ? (
            <Link
              href="/contact"
              className="inline-block bg-primary text-foreground px-6 py-3 rounded-lg font-bold hover:scale-105 hover:bg-accent transition"
            >
              Start Your Project
            </Link>
          ) : (
            <div className="h-10 w-40 rounded-lg bg-gray-700 animate-pulse" />
          )}
        </div>
      </div>
    </motion.section>
  );
}