

// // components/PricingCTA.tsx
// "use client";

// import Link from "next/link";

// export default function PricingCTA() {
//   return (
//     <section className="py-16 px-6 md:px-12 bg-background">
//       <div className="relative max-w-5xl mx-auto">
//         {/* Glow halo behind the CTA card */}
//         <div
//           aria-hidden="true"
//           className="absolute -inset-4 rounded-2xl blur-3xl pointer-events-none"
//           style={{
//             background:
//               "radial-gradient(circle at center, rgba(235,192,45,0.4), transparent 70%)",
//           }}
//         />

//         {/* Actual CTA card */}
//         <div
//           className="
//             relative
//             bg-black
//             rounded-2xl
//             p-12
//             flex flex-col md:flex-row items-center justify-between
//             z-10
//           "
//         >
//           <div className="md:flex-1 mb-6 md:mb-0">
//             <h2 className="text-3xl font-bold text-white">Still Unsure?</h2>
//             <p className="mt-2 text-gray-300">
//               Schedule a free consultation, and we&apos;ll tailor a plan just
//               for you.
//             </p>
//           </div>
//           <Link
//             href="/contact"
//             className="
//               inline-block
//               bg-primary text-white
//               px-8 py-4
//               rounded-lg
//               text-lg font-medium
//               hover:scale-110 hover:bg-primary transition
//             "
//           >
//             Book a Free Call
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

// components/PricingCTA.tsx
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Skeleton loader for CTA card
function SkeletonCTACard() {
  return (
    <section className="py-16 px-6 md:px-12 bg-background">
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute -inset-4 rounded-2xl blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle at center, rgba(235,192,45,0.4), transparent 70%)" }} />
        <div className="relative bg-black rounded-2xl p-12 flex flex-col md:flex-row items-center justify-between z-10 animate-pulse">
          <div className="flex-1 mb-6 md:mb-0 space-y-4">
            <div className="h-8 bg-gray-700 rounded w-1/3"></div>
            <div className="h-4 bg-gray-700 rounded w-2/3"></div>
          </div>
          <div className="h-12 bg-gray-700 rounded-lg w-40"></div>
        </div>
      </div>
    </section>
  );
}

export default function PricingCTA() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <SkeletonCTACard />
  ) : (
    <motion.section
      className="py-16 px-6 md:px-12 bg-background"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative max-w-5xl mx-auto">
        {/* Glow halo behind the CTA card */}
        <div
          aria-hidden="true"
          className="absolute -inset-4 rounded-2xl blur-3xl pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, rgba(235,192,45,0.4), transparent 70%)",
          }}
        />

        {/* Actual CTA card */}
        <div
          className="
            relative
            bg-black
            border border-gray-800
            rounded-2xl
            p-12
            flex flex-col md:flex-row items-center justify-between
            z-10
          "
        >
          <div className="md:flex-1 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-white">Still Unsure?</h2>
            <p className="mt-2 text-gray-300">
              Schedule a free consultation, and we&apos;ll tailor a plan just
              for you.
            </p>
          </div>
          <Link
            href="/contact"
            className="
              inline-block
              bg-primary text-white
              px-8 py-4
              rounded-lg
              text-lg font-medium
              hover:scale-110 hover:bg-primary transition
            "
          >
            Book a Free Call
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
