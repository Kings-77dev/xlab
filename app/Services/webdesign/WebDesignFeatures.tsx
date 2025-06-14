// // components/UIUXBenefits.tsx
// "use client";

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import Image from "next/image";

// const benefits = [
//   {
//     icon: "/icons/uiux/research.svg",
//     title: "User Research",
//     desc: "Understand your users’ needs through interviews, surveys, and analytics.",
//   },
//   {
//     icon: "/icons/uiux/wireframe.svg",
//     title: "Wireframing & Prototyping",
//     desc: "Quick prototypes to iterate on layouts, flows, and interactions.",
//   },
//   {
//     icon: "/icons/uiux/design.svg",
//     title: "Visual Design",
//     desc: "Create stunning, accessible designs that reflect your brand.",
//   },
//   {
//     icon: "/icons/uiux/testing.svg",
//     title: "User Testing",
//     desc: "Validate designs and refine them using real user feedback.",
//   },
// ];

// export default function UIUXBenefits() {
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const id = window.setTimeout(() => setLoading(false), 600);
//     return () => window.clearTimeout(id);
//   }, []);

//   return (
//     <motion.section
//       className="bg-gray-100 py-16 px-6 md:px-12"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: loading ? 0 : 1, y: loading ? 20 : 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//         {benefits.map((b, i) => (
//           <motion.div
//             key={i}
//             className="flex space-x-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: loading ? 0 : 1, y: loading ? 20 : 0 }}
//             transition={{ delay: 0.1 * i, duration: 0.6 }}
//           >
//             <div className="w-12 h-12">
//               {loading ? (
//                 <Skeleton circle width={48} height={48} />
//               ) : (
//                 <Image
//                   src={b.icon}
//                   alt={b.title}
//                   width={48}
//                   height={48}
//                   className="object-contain"
//                 />
//               )}
//             </div>
//             <div className="flex-1 space-y-2">
//               <h3 className="text-xl font-semibold">
//                 {loading ? <Skeleton width={180} height={24} /> : b.title}
//               </h3>
//               <p className="text-gray-600">
//                 {loading ? <Skeleton width={300} height={16} /> : b.desc}
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </motion.section>
//   );
// }


// components/WebDesignFeatures.tsx
"use client";

import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const features = [
  {
    icon: "/icons/uiux/responsive.svg",
    title: "Responsive Design",
    desc: "An optimal user experience across mobile, tablet, and desktop devices.",
  },
  {
    icon: "/icons/uiux/branding.svg",
    title: "Branding & Visual Design",
    desc: "Custom visuals and brand integration for recognizable and cohesive design.",
  },
  {
    icon: "/icons/uiux/prototype.svg",
    title: "Prototyping & Wireframes",
    desc: "Test interactions and flows before development begins.",
  },
  {
    icon: "/icons/uiux/cms.svg",
    title: "CMS Implementation",
    desc: "Easy content management with WordPress, Webflow, or headless CMS setups.",
  },
];

export default function WebDesignFeatures() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const id = window.setTimeout(() => setLoading(false), 600);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <motion.section
      id="web-design-features"
      className="bg-gray-100 py-16 px-6 md:px-12 rounded-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: loading ? 0 : 1, y: loading ? 20 : 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={i}
            className="flex space-x-4 items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: loading ? 0 : 1, y: loading ? 20 : 0 }}
            transition={{ delay: 0.1 * i, duration: 0.6 }}
          >
            <div className="w-12 h-12">
              {loading ? (
                <Skeleton circle width={48} height={48} />
              ) : (
                <Image
                  src={f.icon}
                  alt={f.title}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              )}
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                {loading ? <Skeleton width={200} height={24} /> : f.title}
              </h3>
              <p className="text-gray-600">
                {loading ? <Skeleton width={300} height={16} /> : f.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}