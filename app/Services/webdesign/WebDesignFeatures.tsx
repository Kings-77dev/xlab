

// // components/WebDesignFeatures.tsx
// "use client";

// import { motion } from "framer-motion";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";

// const features = [
//   {
//     icon: "/icons/uiux/responsive.svg",
//     title: "Responsive Design",
//     desc: "An optimal user experience across mobile, tablet, and desktop devices.",
//   },
//   {
//     icon: "/icons/uiux/branding.svg",
//     title: "Branding & Visual Design",
//     desc: "Custom visuals and brand integration for recognizable and cohesive design.",
//   },
//   {
//     icon: "/icons/uiux/prototype.svg",
//     title: "Prototyping & Wireframes",
//     desc: "Test interactions and flows before development begins.",
//   },
//   {
//     icon: "/icons/uiux/cms.svg",
//     title: "CMS Implementation",
//     desc: "Easy content management with WordPress, Webflow, or headless CMS setups.",
//   },
// ];

// export default function WebDesignFeatures() {
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const id = window.setTimeout(() => setLoading(false), 600);
//     return () => window.clearTimeout(id);
//   }, []);

//   return (
//     <motion.section
//       id="web-design-features"
//       className="bg-gray-100 py-16 px-6 md:px-12 rounded-2xl"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: loading ? 0 : 1, y: loading ? 20 : 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//         {features.map((f, i) => (
//           <motion.div
//             key={i}
//             className="flex space-x-4 items-start"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: loading ? 0 : 1, y: loading ? 20 : 0 }}
//             transition={{ delay: 0.1 * i, duration: 0.6 }}
//           >
//             <div className="w-12 h-12">
//               {loading ? (
//                 <Skeleton circle width={48} height={48} />
//               ) : (
//                 <Image
//                   src={f.icon}
//                   alt={f.title}
//                   width={48}
//                   height={48}
//                   className="object-contain"
//                 />
//               )}
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold">
//                 {loading ? <Skeleton width={200} height={24} /> : f.title}
//               </h3>
//               <p className="text-gray-600">
//                 {loading ? <Skeleton width={300} height={16} /> : f.desc}
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </motion.section>
//   );
// }

// components/WebDesignFeatures.tsx
// components/WebDesignFeatures.tsx
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import WhoWeWorkCard from "@/app/components/WhoWeWorkCard";

const features = [
  {
    title: "Responsive Design",
    desc: "An optimal user experience across mobile, tablet, and desktop devices.",
  },
  {
    title: "Branding & Visual Design",
    desc: "Custom visuals and brand integration for recognizable and cohesive design.",
  },
  {
    title: "Prototyping & Wireframes",
    desc: "Test interactions and flows before development begins.",
  },
  {
    title: "CMS Implementation",
    desc: "Easy content management with WordPress, Webflow, or headless CMS setups.",
  },
];

export default function WebDesignFeatures() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const count = features.length;
  const segment = 1 / count;
  const fadeLen = 0.3 * segment;

  const transforms = features.map((_, i) => {
    const slotStart = i * segment;
    const fadeInEnd = slotStart + fadeLen;
    const nextStart = (i + 1) * segment;
    const nextEnd = nextStart + fadeLen;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const opacity = useTransform(
      scrollYProgress,
      [slotStart, fadeInEnd, nextStart, nextEnd],
      [0, 1, 1, 0]
    );

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const translateY = useTransform(
      scrollYProgress,
      [slotStart, fadeInEnd],
      [200, 0]
    );

    return { opacity, translateY };
  });

  const sectionMinHeight = `${(count + 1.5) * 100}vh`;

  return (
    <section
      ref={scrollRef}
      id="web-design-features"
      className="relative bg-background text-white mx-6 rounded-bl-2xl rounded-br-2xl"
      style={{ minHeight: sectionMinHeight }}
    >
      {/* Sticky header + cards */}
      <div className="sticky top-0 h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6">
          <h2 className="text-4xl md:text-[100px] font-bold text-center mb-16">
            Web Design <span className="text-primary">Features</span>
          </h2>

          <div className="relative h-[500px] flex justify-center items-center">
            {features.map((item, i) => (
              <motion.div
                key={i}
                style={{
                  opacity: transforms[i].opacity,
                  y: transforms[i].translateY,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                }}
                className="flex justify-center"
              >
                <WhoWeWorkCard idx={i + 1} title={item.title} desc={item.desc} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom text */}
      <div className="absolute bottom-0 w-full pb-16">
        <div className="max-w-7xl mx-auto text-center px-6">
          <p className="text-gray-400 mb-4">
            Every feature is tailored to enhance usability, engagement, and scalability.
          </p>
        </div>
      </div>
    </section>
  );
}