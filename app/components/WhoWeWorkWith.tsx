// "use client";

// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import WhoWeWorkCard from "./WhoWeWorkCard";

// interface WorkWithItem {
//   img: string;
//   title: string;
//   desc: string;
// }

// const workWithItems: WorkWithItem[] = [
//   {
//     img: "/whoworkwith/smb.svg",
//     title: "Small to Mid-Sized Businesses",
//     desc: "We optimize acquisition channels for small to mid-sized businesses, maximize customer revenue, and develop strategies for market expansion.",
//   },
//   {
//     img: "/whoworkwith/local.svg",
//     title: "Local Businesses",
//     desc: "We boost local businesses by enhancing visibility and engagement, driving foot traffic, and improving online presence to increase local sales.",
//   },
//   {
//     img: "/whoworkwith/ecommerce.svg",
//     title: "E-commerce Brands",
//     desc: "We scale e-commerce operations through optimized sales processes and digital marketing—boosting conversions and revenue.",
//   },
//   {
//     img: "/whoworkwith/professional.svg",
//     title: "Professional Services",
//     desc: "We help professional services build authority and attract more clients by refining their online presence and streamlining client acquisition.",
//   },
// ];

// export default function WhoWeWorkWith() {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   // Track scroll progress through this entire section
//   const { scrollYProgress } = useScroll({
//     target: scrollRef,
//     offset: ["start end", "end start"], // animation from when section enters viewport to when it exits
//   });

//   const count = workWithItems.length;
//   const segment = 1 / count;
//   const fadeLen = 0.1 * segment; // 10% of each segment used for fade or slide animation

//   // Build transforms for each card’s opacity & translateY based on scrollYProgress
//   const transforms = workWithItems.map((_, i) => {
//     const slotStart = i * segment;
//     const slotEnd = slotStart + segment;

//     // First card: always visible from top, then fades out near end of its “slot”
//     if (i === 0) {
//       const fadeOutStart = slotEnd - fadeLen;
//       const fadeOutEnd = slotEnd;

//       return {
//         opacity: useTransform(
//           scrollYProgress,
//           [0, fadeOutStart, fadeOutEnd],
//           [1, 1, 0]
//         ),
//         translateY: useTransform(
//           scrollYProgress,
//           [0, fadeLen],
//           [20, 0]
//         ),
//       };
//     }

//     // Last card: fades in, then stays fully visible until the section’s end.
//     if (i === count - 1) {
//       const fadeInStart = slotStart;
//       const fadeInEnd = slotStart + fadeLen;

//       return {
//         opacity: useTransform(
//           scrollYProgress,
//           [fadeInStart, fadeInEnd, slotEnd],
//           [0, 1, 1]
//         ),
//         translateY: useTransform(
//           scrollYProgress,
//           [fadeInStart, fadeInEnd],
//           [20, 0]
//         ),
//       };
//     }

//     // Intermediate cards: fade in, stay visible, then fade out
//     const fadeInStart = slotStart;
//     const fadeInEnd = slotStart + fadeLen;
//     const fadeOutStart = slotEnd - fadeLen;
//     const fadeOutEnd = slotEnd;

//     return {
//       opacity: useTransform(
//         scrollYProgress,
//         [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
//         [0, 1, 1, 0]
//       ),
//       translateY: useTransform(
//         scrollYProgress,
//         [fadeInStart, fadeInEnd],
//         [20, 0]
//       ),
//     };
//   });

//   // Compute a minHeight large enough for “count” scroll segments + extra space for CTA
//   const sectionMinHeight = `${(count + 1.5) * 100}vh`;

//   return (
//     <section
//       ref={scrollRef}
//       id="who"
//       className="relative bg-foreground text-background mx-6 rounded-bl-2xl rounded-br-2xl"
//       style={{ minHeight: sectionMinHeight }}
//     >
//       {/* 1) “Pin” the heading + card stack to the top of the viewport during scroll */}
//       <div className="sticky top-0 h-screen flex items-center">
//         <div className="max-w-7xl mx-auto w-full px-6">
//           <h2 className="text-4xl font-bold text-center mb-16">
//             Who We <span className="text-primary underline">Work With</span>
//           </h2>

//           {/* 2) Container for all cards (stacked absolutely on top of each other) */}
//           <div className="relative h-[500px] flex justify-center items-center">
//             {workWithItems.map((item, i) => (
//               <motion.div
//                 key={i}
//                 style={{
//                   opacity: transforms[i].opacity,
//                   y: transforms[i].translateY,
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   right: 0,
//                 }}
//                 className="flex justify-center"
//               >
//                 <WhoWeWorkCard
//                   idx={i + 1}
//                   title={item.title}
//                   desc={item.desc}
//                   img={item.img}
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* 3) Once all cards have animated through, reveal this CTA at the very bottom */}
//       <div className="absolute bottom-0 w-full pb-16">
//         <div className="max-w-7xl mx-auto text-center px-6">
//           <p className="text-gray-600 mb-4">
//             We work with businesses of all sizes to help them grow and succeed in the digital space.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// // components/WhoWeWorkWith.tsx
// "use client";

// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import WhoWeWorkCard from "./WhoWeWorkCard";

// interface WorkWithItem {
//   img: string;
//   title: string;
//   desc: string;
// }

// const workWithItems: WorkWithItem[] = [
//   {
//     img: "/whoworkwith/smb.svg",
//     title: "Small to Mid-Sized Businesses",
//     desc: "We optimize acquisition channels for small to mid-sized businesses, maximize customer revenue, and develop strategies for market expansion.",
//   },
//   {
//     img: "/whoworkwith/local.svg",
//     title: "Local Businesses",
//     desc: "We boost local businesses by enhancing visibility and engagement, driving foot traffic, and improving online presence to increase local sales.",
//   },
//   {
//     img: "/whoworkwith/ecommerce.svg",
//     title: "E-commerce Brands",
//     desc: "We scale e-commerce operations through optimized sales processes and digital marketing—boosting traffic, conversions, and revenue.",
//   },
//   {
//     img: "/whoworkwith/professional.svg",
//     title: "Professional Services",
//     desc: "We help professional services build authority and attract more clients by refining their online presence and streamlining client acquisition.",
//   },
// ];

// export default function WhoWeWorkWith() {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   // Use exactly your previous scroll logic (unchanged)
//   const { scrollYProgress } = useScroll({
//     target: scrollRef,
//     offset: ["start end", "end start"],
//   });

//   const count = workWithItems.length;
//   const segment = 1 / count;
//   const fadeLen = 0.1 * segment;

//   const transforms = workWithItems.map((_, i) => {
//     const slotStart = i * segment;
//     const slotEnd = slotStart + segment;

//     // First card: stay visible until fade‐out point
//     if (i === 0) {
//       const fadeOutStart = slotEnd - fadeLen;
//       const fadeOutEnd = slotEnd;
//       return {
//         opacity: useTransform(
//           scrollYProgress,
//           [0, fadeOutStart, fadeOutEnd],
//           [1, 1, 0]
//         ),
//         translateY: useTransform(scrollYProgress, [0, fadeLen], [20, 0]),
//       };
//     }

//     // Last card: fade in and remain
//     if (i === count - 1) {
//       const fadeInStart = slotStart;
//       const fadeInEnd = slotStart + fadeLen;
//       return {
//         opacity: useTransform(
//           scrollYProgress,
//           [fadeInStart, fadeInEnd, slotEnd],
//           [0, 1, 1]
//         ),
//         translateY: useTransform(
//           scrollYProgress,
//           [fadeInStart, fadeInEnd],
//           [20, 0]
//         ),
//       };
//     }

//     // Intermediate cards: fade in → hold → fade out
//     const fadeInStart = slotStart;
//     const fadeInEnd = slotStart + fadeLen;
//     const fadeOutStart = slotEnd - fadeLen;
//     const fadeOutEnd = slotEnd;
//     return {
//       opacity: useTransform(
//         scrollYProgress,
//         [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
//         [0, 1, 1, 0]
//       ),
//       translateY: useTransform(
//         scrollYProgress,
//         [fadeInStart, fadeInEnd],
//         [20, 0]
//       ),
//     };
//   });

//   // Enough scroll space: one “screen” per card + extra 1.5 screens for CTA
//   const sectionMinHeight = `${(count + 1.5) * 100}vh`;

//   return (
//     <section
//       ref={scrollRef}
//       id="who"
//       className="relative bg-[#111] text-white mx-6 rounded-bl-2xl rounded-br-2xl"
//       style={{ minHeight: sectionMinHeight }}
//     >
//       {/** 1) Pin this heading + card stack while scrolling through cards **/}
//       <div className="sticky top-0 h-screen flex items-center">
//         <div className="max-w-7xl mx-auto w-full px-6">
//           <h2 className="text-4xl md:text-[100px] font-bold text-center mb-16">
//             Who We Work With
//           </h2>

//           {/** 2) Stacked cards container (absolute each card) **/}
//           <div className="relative h-[500px] flex justify-center items-center">
//             {workWithItems.map((item, i) => (
//               <motion.div
//                 key={i}
//                 style={{
//                   opacity: transforms[i].opacity,
//                   y: transforms[i].translateY,
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   right: 0,
//                 }}
//                 className="flex justify-center"
//               >
//                 {/** Here we use our new card UI */}
//                 <WhoWeWorkCard
//                   idx={i + 1}
//                   title={item.title}
//                   desc={item.desc}
//                   img={item.img}
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/** 3) Once all cards have animated, show this bottom section **/}
//       <div className="absolute bottom-0 w-full pb-16">
//         <div className="max-w-7xl mx-auto text-center px-6">
//           <p className="text-gray-400 mb-4">
//             We work with businesses of all sizes to help them grow and succeed
//             in the digital space.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }



// components/WhoWeWorkWith.tsx
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import WhoWeWorkCard from "./WhoWeWorkCard";

interface WorkWithItem {
  img: string;
  title: string;
  desc: string;
}

const workWithItems: WorkWithItem[] = [
  {
    img: "/whoworkwith/smb.svg",
    title: "Small & Growing Businesses",
    desc: "Transform your outdated site into a lead-generating engine—boost form submissions by up to 40% with clear CTAs and streamlined UX."
  },
  {
    img: "/whoworkwith/nonprofit.svg",
    title: "Non-Profits & NGOs",
    desc: "Maximize donor engagement with emotionally resonant storytelling, seamless donation flows, and mobile-optimized pages."
  },
  {
    img: "/whoworkwith/creative.svg",
    title: "Creative Professionals",
    desc: "Elevate portfolios for photographers, designers, and artists—focus visitors on your best work and commission requests."
  },
  {
    img: "/whoworkwith/freelancer.svg",
    title: "Freelancers & Consultants",
    desc: "Convert visitors into clients with clear service packages, testimonials, and effortless contact forms."
  },
  {
    img: "/whoworkwith/ecommerce.svg",
    title: "E-Commerce Retailers",
    desc: "Scale online sales through intuitive product pages, simplified checkout flows, and A/B-tested landing pages that increase AOV."
  },
  {
    img: "/whoworkwith/professional.svg",
    title: "Service Professionals",
    desc: "Build authority with polished portfolios, clear service breakdowns, and client testimonials that turn visitors into booked appointments."
  },
];

export default function WhoWeWorkWith() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const count = workWithItems.length;
  const segment = 1 / count;
  const fadeLen = 0.1 * segment;

  // Build transforms: no fade-out; new cards slide in from below
  const transforms = workWithItems.map((_, i) => {
    const slotStart = i * segment;
    const fadeInStart = slotStart;
    const fadeInEnd = slotStart + fadeLen;

    // opacity: first card always visible, others go from 0→1 over their fade window
    const opacity = i === 0
      // eslint-disable-next-line react-hooks/rules-of-hooks
      ? useTransform(scrollYProgress, [0, 1], [1, 1])
      // eslint-disable-next-line react-hooks/rules-of-hooks
      : useTransform(scrollYProgress, [fadeInStart, fadeInEnd], [0, 1]);

    // translateY: new cards slide from 200px below up into place
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const translateY = useTransform(
      scrollYProgress,
      [fadeInStart, fadeInEnd],
      [200, 0]
    );

    return { opacity, translateY };
  });

  const sectionMinHeight = `${(count + 1.5) * 100}vh`;

  return (
    <section
      ref={scrollRef}
      id="who"
      className="relative bg-[#111] text-white mx-6 rounded-bl-2xl rounded-br-2xl"
      style={{ minHeight: sectionMinHeight }}
    >
      {/* 1) Sticky header + stacked cards */}
      <div className="sticky top-0 h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6">
          <h2 className="text-4xl md:text-[100px] font-bold text-center mb-16">
            Who We <span className="">Work With</span>
          </h2>

          <div className="relative h-[500px] flex justify-center items-center">
            {workWithItems.map((item, i) => (
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
                <WhoWeWorkCard
                  idx={i + 1}
                  title={item.title}
                  desc={item.desc}
                  img={item.img}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 2) Bottom CTA */}
      <div className="absolute bottom-0 w-full pb-16">
        <div className="max-w-7xl mx-auto text-center px-6">
          <p className="text-gray-400 mb-4">
            We work with businesses of all sizes to help them grow and succeed in the digital space.
          </p>
        </div>
      </div>
    </section>
  );
}