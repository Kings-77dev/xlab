// // components/WebDevCTA.tsx
// "use client";

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// import Link from 'next/link';

// export default function WebDevCTA() {
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const id = window.setTimeout(() => setLoading(false), 600);
//     return () => window.clearTimeout(id);
//   }, []);

//   return (
//     <motion.section
//       id="web-dev-cta"
//       className="py-16 px-6 md:px-12 bg-white rounded-2xl text-center"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: loading ? 0 : 1, y: loading ? 20 : 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       {loading ? (
//         <>
//           <Skeleton width={400} height={32} />
//           <div className="h-4" />
//           <Skeleton width={200} height={40} />
//         </>
//       ) : (
//         <>
//           <h2 className="text-3xl md:text-4xl font-bold">
//             Ready to Build Your Next Web Project?
//           </h2>
//           <p className="mt-2 text-gray-700">
//             Get in touch to discuss custom development solutions and receive a free quote.
//           </p>
//           <Link href="/contact">
//             <button className="mt-6 bg-primary text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-accent-dark transition">
//               Request a Quote
//             </button>
//           </Link>
//         </>
//       )}
//     </motion.section>
//   );
// }



// components/WebDevCTA.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Link from "next/link";

export default function WebDevCTA() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const id = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(id);
  }, []);

  return (
    <motion.section
      id="web-dev-cta"
      className="py-16 px-4 bg-background text-foreground"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: loading ? 0 : 1, y: loading ? 20 : 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative max-w-5xl mx-auto">
        {/* Glow behind the card */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -inset-4 rounded-2xl blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(235,192,45,0.4) 0%, transparent 70%)",
          }}
        />

        {/* CTA card */}
        <div className="relative bg-black rounded-2xl p-14 flex flex-col md:flex-row items-center justify-between">
          {loading ? (
            <div className="w-full">
              <Skeleton height={32} width={400} />
              <div className="h-4" />
              <Skeleton height={20} width={300} />
              <div className="mt-6">
                <Skeleton height={48} width={200} />
              </div>
            </div>
          ) : (
            <>
              {/* Text */}
              <div className="md:flex-1 mb-6 md:mb-0">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Ready to Build Your Next Web Project?
                </h2>
                <p className="text-gray-300 max-w-md">
                  Get in touch to discuss custom development solutions and receive a free quote.
                </p>
              </div>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="inline-block bg-primary px-8 py-3 rounded-lg text-lg font-medium text-white hover:scale-115 hover:bg-primary transition"
              >
                Request a Quote
              </Link>
            </>
          )}
        </div>
      </div>
    </motion.section>
  );
}