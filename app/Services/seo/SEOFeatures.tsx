// // components/SEOFeatures.tsx
// "use client";

// import { CheckIcon } from "@heroicons/react/24/solid";
// import Image from "next/image";

// const features = [
//   {
//     img: "/whoworkwith/smb.svg", // swap in your actual icon paths
//     title: "Attract more customers and boost profits",
//     points: [
//       "Enhance mobile optimization to improve user experience, minimize bounce rates, and increase conversions from mobile devices.",
//       "Achieve higher rankings and draw in additional unbranded traffic to expand your customer base.",
//       "Boost your site’s authority and credibility to attract more qualified, relevant traffic.",
//     ],
//   },
//   {
//     img: "/whoworkwith/local.svg",
//     title: "Enhance your online visibility",
//     points: [
//       "Perform a competitive evaluation and establish a customized SEO plan to accelerate your visibility.",
//       "Regularly analyze keywords and content to draw in more targeted traffic.",
//       "Continuously audit and refresh your content so that your pages align with current search trends and resonate with your audience.",
//     ],
//   },
//   {
//     img: "/whoworkwith/ecommerce.svg",
//     title: "Establish a consistent flow of organic leads",
//     points: [
//       "Regularly perform keyword research to elevate traffic and boost lead generation.",
//       "Develop a robust, long-term SEO roadmap to steadily enhance your online visibility.",
//       "Craft a content plan that increases brand prominence while catering to diverse user needs, driving more leads.",
//     ],
//   },
// ];

// export default function SEOFeatures() {
//   return (
//     <section className="bg-gray-100 py-16 px-6 md:px-12 rounded-2xl">
//       {/* Heading */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl font-bold text-gray-700 capitalize">
//           We help you significantly{" "}
//           <span className="text-primary underline">boost your income</span>{" "}
//           through organic search
//         </h2>
//       </div>

//       {/* Cards */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
//         {features.map(({ img, title, points }, idx) => (
//           <div
//             key={idx}
//             className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col"
//           >
//             <div className="w-16 h-16 mb-4 px-4 ">
//               <Image
//                 src={img}
//                 alt={title}
//                 width={64}
//                 height={64}
//                 className="object-contain"
//               />
//             </div>
//             <h3 className="text-xl font-semibold text-gray-800 mb-4 px-6">
//               {title}
//             </h3>
//             <ul className="space-y-3 flex-1">
//               {points.map((pt, i) => (
//                 <li key={i} className="flex items-start space-x-2">
//                   <CheckIcon className="h-5 w-5 flex-shrink-0 text-primary mt-1" />
//                   <span className="text-gray-600 text-sm leading-relaxed">
//                     {pt}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// components/SEOFeatures.tsx
"use client";

import React, { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import SEOFeatureCard from "./SEOFeatureCard";

const features = [
  {
    img: "/whoworkwith/smb.svg",
    title: "Attract more customers and boost profits",
    points: [
      "Enhance mobile optimization to improve user experience, minimize bounce rates, and increase conversions from mobile devices.",
      "Achieve higher rankings and draw in additional unbranded traffic to expand your customer base.",
      "Boost your site’s authority and credibility to attract more qualified, relevant traffic.",
    ],
  },
  {
    img: "/whoworkwith/local.svg",
    title: "Enhance your online visibility",
    points: [
      "Perform a competitive evaluation and establish a customized SEO plan to accelerate your visibility.",
      "Regularly analyze keywords and content to draw in more targeted traffic.",
      "Continuously audit and refresh your content so that your pages align with current search trends and resonate with your audience.",
    ],
  },
  {
    img: "/whoworkwith/ecommerce.svg",
    title: "Establish a consistent flow of organic leads",
    points: [
      "Regularly perform keyword research to elevate traffic and boost lead generation.",
      "Develop a robust, long-term SEO roadmap to steadily enhance your online visibility.",
      "Craft a content plan that increases brand prominence while catering to diverse user needs, driving more leads.",
    ],
  },
];

export default function SEOFeatures() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const count = features.length;
  const segment = 1 / count;
  const fadeLen = 0.3 * segment;

  const transforms = features.map((_, i) => {
    const start = i * segment;
    const fadeInEnd = start + fadeLen;
    const nextStart = (i + 1) * segment;
    const nextEnd = nextStart + fadeLen;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const opacity = useTransform(
      scrollYProgress,
      [start, fadeInEnd, nextStart, nextEnd],
      [0, 1, 1, 0]
    );

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const translateY = useTransform(
      scrollYProgress,
      [start, fadeInEnd],
      [200, 0]
    );

    return { opacity, translateY };
  });

  const sectionMinHeight = `${(count + 1.5) * 100}vh`;

  return (
    <section
      ref={scrollRef}
      id="seo-features"
      className="relative bg-black text-black"
      style={{ minHeight: sectionMinHeight }}
    >
      {/* Sticky header + stack */}
      <div className="sticky top-0 h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-[100px] font-bold">
              We help you significantly{" "}
              <span className="text-primary underline">boost your income</span>{" "}
              through organic search
            </h2>
          </div>
          <div className="relative h-[500px] flex justify-center items-center">
            {features.map((feat, i) => (
              <SEOFeatureCard
                key={i}
                img={feat.img}
                title={feat.title}
                points={feat.points}
                opacity={transforms[i].opacity}
                translateY={transforms[i].translateY}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
