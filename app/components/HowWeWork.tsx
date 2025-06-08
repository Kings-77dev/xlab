// // components/HowWeWork.jsx
// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import {
//   PhoneIcon,
//   PencilSquareIcon,
//   DevicePhoneMobileIcon,
//   RocketLaunchIcon,
// } from "@heroicons/react/24/solid";
// import Link from "next/link";

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: { staggerChildren: 0.2 }
//   }
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 }
// };

// export default function HowWeWork() {
//   const steps = [
//     {
//       icon: <PhoneIcon className="h-6 w-6 text-accent" />,
//       title: "Free Discovery Call",
//       text: "We’ll chat about your business, goals, and what’s not working on your current site.",
//     },
//     {
//       icon: <PencilSquareIcon className="h-6 w-6 text-accent" />,
//       title: "Custom Strategy & Quote",
//       text: "You’ll get a clear plan, a timeline, and pricing tailored to your needs.",
//     },
//     {
//       icon: <DevicePhoneMobileIcon className="h-6 w-6 text-accent" />,
//       title: "Design & Build",
//       text: "We create a clean, modern design and develop it with speed, SEO, and usability in mind.",
//     },
//     {
//       icon: <RocketLaunchIcon className="h-6 w-6 text-accent" />,
//       title: "Launch & Support",
//       text: "We go live — then hand over training docs and offer optional maintenance to keep you stress-free.",
//     },
//   ];

//   return (
//     <motion.section
//       id="process"
//       className="py-16 px-8 bg-foreground rounded-tl-2xl rounded-tr-2xl mx-6 text-background"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//       variants={containerVariants}
//     >
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[100px]">
//         {/* Left column */}
//         <motion.div className="space-y-4" variants={itemVariants}>
//           <h2 className="text-3xl text-background font-bold">
//             How We Bring <span className="text-primary">Your Website</span> to Life
//           </h2>
//           <p className="text-gray-700">
//             We keep it simple, clear, and client-friendly. Whether you’re
//             starting from scratch or giving your site a fresh look, here’s what
//             to expect when working with us.
//           </p>

//           {/* Illustration under the description */}
//           <div className="relative w-full h-48 md:h-84">
//             <Image
//               src="/Designteam.svg"
//               alt="Workflow illustration"
//               fill
//               loading="lazy"
//               className="object-contain"
//             />
//           </div>
//         </motion.div>

//         {/* Right column */}
//         <div className="space-y-6">
//           {steps.map((step, idx) => (
//             <motion.div
//               key={idx}
//               className="flex items-start space-x-4"
//               variants={itemVariants}
//             >
//               <div className="text-primary">{step.icon}</div>
//               <div>
//                 <h3 className="text-lg text-background font-semibold">{step.title}</h3>
//                 <p className="text-gray-600">{step.text}</p>
//               </div>
//             </motion.div>
//           ))}
//           <motion.div
//             className="mt-10"
//             variants={itemVariants}
//           >
//             <Link
//               href="/contact"
//               className="ml-10 bg-primary text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-accent-dark transition"
//             >
//               Get in Touch
//             </Link>
//           </motion.div>
//         </div>
//       </div>
//     </motion.section>
//   );
// }

// components/HowWeWorkGrid.tsx
"use client";

import Link from "next/link";
import React from "react";

// Each card’s data, including a Tailwind background color & accent color.
const steps = [
  {
    idx: 1,
    title: "Free Discovery Call",
    text: "We’ll chat about your business, goals, and what’s not working on your current site.",
    bgClass: "bg-red-900",
    accentClass: "bg-red-600",
  },
  {
    idx: 2,
    title: "Custom Strategy & Quote",
    text: "You’ll get a clear plan, a timeline, and pricing tailored to your needs.",
    bgClass: "bg-yellow-800",
    accentClass: "bg-yellow-400",
  },
  {
    idx: 3,
    title: "Design & Build",
    text: "We create a clean, modern design and develop it with speed, SEO, and usability in mind.",
    bgClass: "bg-green-900",
    accentClass: "bg-green-400",
  },
  {
    idx: 4,
    title: "Launch & Support",
    text: "We go live — then hand over training docs and offer optional maintenance to keep you stress-free.",
    bgClass: "bg-blue-900",
    accentClass: "bg-blue-400",
  },
];

export default function HowWeWorkGrid() {
  return (
    <section className="py-16 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADING */}
        <h2 className="text-4xl md:text-[100px] font-bold text-white mb-12">
          How We Bring Ideas To Life
        </h2>

        {/**
         * GRID SETUP:
         *   - On mobile (<md): 1‐column stack (`grid-cols-1`).
         *   - On md+: 3 columns × 2 rows (`md:grid-cols-3 md:grid-rows-2`).
         */}
        <div
          className="
            grid grid-cols-1 gap-8
            md:grid-cols-3 md:grid-rows-2 md:gap-8
          "
        >
          {steps.map((step, i) => {
            // Build span/position classes for each card depending on its index:
            let spanClasses = "";

            if (i === 0) {
              // Card 1: top-left, spans columns 1–2 in row 1
              spanClasses = "md:col-span-2 md:row-span-1 md:col-start-1 md:row-start-1";
            } else if (i === 1) {
              // Card 2: top-right, spans column 3, rows 1–2
              spanClasses = "md:col-span-1 md:row-span-2 md:col-start-3 md:row-start-1";
            } else if (i === 2) {
              // Card 3: bottom‐left “mirrored” → now spans columns 2–3, row 2
              spanClasses = "md:col-span-2 md:row-span-1 md:col-start-2 md:row-start-2";
            } else {
              // Card 4: bottom‐right “mirrored” → now sits in column 1, row 2
              spanClasses = "md:col-span-1 md:row-span-1 md:col-start-1 md:row-start-2";
            }

            return (
              <div
                key={step.idx}
                className={`
                  relative overflow-hidden rounded-2xl
                  h-64 lg:h-100           /* fixed height; adjust if you like */
                  ${step.bgClass}        /* background color */
                  text-white
                  ${spanClasses}         /* grid position on md+ */
                `}
              >
                {/* 1) Index “01 / 02 / 03 / 04” top-left */}
                <div className="absolute top-4 left-4 text-opacity-30 text-2xl font-bold">
                  {step.idx.toString().padStart(2, "0")}
                </div>

                {/* 2) Decorative quarter‐circle in top‐right */}
                <div className="absolute top-0 right-0">
                  <div
                    className={`
                      ${step.accentClass}
                      w-16 h-16 lg:w-20 lg:h-20
                      rounded-bl-full
                      translate-x-4 -translate-y-4
                    `}
                  />
                </div>

                {/* 3) Title + Description pinned at bottom-left */}
                <div className="absolute bottom-6 left-6 max-w-[75%]">
                  <h3 className="text-2xl lg:text-3xl font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm lg:text-base opacity-90 leading-snug">
                    {step.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* OPTIONAL CTA UNDERNEATH THE GRID */}
        <div className="mt-12 text-center">
          <Link href="/contact">
            <button className="inline-block bg-primary text-black px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
// "use client";

// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import ExpertiseCard from "./ExpertiseCard";

// interface CardData {
//   title: string;
//   description: string;
// }

// const cards: CardData[] = [
//   {
//     title: "Free Discovery Call",
//     description:
//       "We’ll chat about your business, goals, and what’s not working on your current site.",
//   },
//   {
//     title: "Custom Strategy & Quote",
//     description:
//       "You’ll get a clear plan, a timeline, and pricing tailored to your needs.",
//   },
//   {
//     title: "Design & Build",
//     description:
//       "We create a clean, modern design and develop it with speed, SEO, and usability in mind.",
//   },
//   {
//     title: "Launch & Support",
//     description:
//       "We go live — then hand over training docs and offer optional maintenance to keep you stress-free.",
//   },
// ];

// export default function HowWeWork() {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   // Track scroll progress through this entire section
//   const { scrollYProgress } = useScroll({
//     target: scrollRef,
//     offset: ["start end", "end start"],
//   });

//   const count   = cards.length;
//   const segment = 1 / count;

//   // Shrink fadeLen to 30% of each segment so fade‐in/out overlap 
//   const fadeLen = 0.1 * segment;

//   const transforms = cards.map((_, i) => {
//     const slotStart  = i * segment;
//     const slotEnd    = slotStart + segment;

//     // Special case #1: First card
//     // It should start fully visible, fade out partway through its slot
//     if (i === 0) {
//       const fadeOutStart = slotEnd - fadeLen;
//       const fadeOutEnd   = slotEnd;

//       return {
//         // stay at opacity=1 from the very top until fadeOutStart
//         opacity: useTransform(
//           scrollYProgress,
//           [0,       fadeOutStart, fadeOutEnd],
//           [1,       1,            0]
//         ),
//         translateY: useTransform(
//           scrollYProgress,
//           [0,       fadeLen],
//           [20,      0]
//         ),
//       };
//     }

//     // Special case #2: Last card
//     // It should fade in, then hold at 1 until the very end
//     if (i === count - 1) {
//       const fadeInStart = slotStart;
//       const fadeInEnd   = slotStart + fadeLen;

//       return {
//         opacity: useTransform(
//           scrollYProgress,
//           [fadeInStart, fadeInEnd, slotEnd],
//           [0,           1,         1]
//         ),
//         translateY: useTransform(
//           scrollYProgress,
//           [fadeInStart, fadeInEnd],
//           [20,         0]
//         ),
//       };
//     }

//     // Intermediate cards: fade in at slotStart→slotStart+fadeLen,
//     // stay fully on until slotEnd−fadeLen, then fade out to 0
//     const fadeInStart  = slotStart;
//     const fadeInEnd    = slotStart + fadeLen;
//     const fadeOutStart = slotEnd - fadeLen;
//     const fadeOutEnd   = slotEnd;

//     return {
//       opacity: useTransform(
//         scrollYProgress,
//         [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
//         [0,           1,         1,            0]
//       ),
//       translateY: useTransform(
//         scrollYProgress,
//         [fadeInStart, fadeInEnd],
//         [20,         0]
//       ),
//     };
//   });

//   // Enough scroll‐space: one “screen” per card + extra 1.5 screens for CTA
//   const sectionMinHeight = `${(count + 1.5) * 100}vh`;

//   return (
//     <section
//       ref={scrollRef}
//       id="expertise"
//       className="relative bg-background text-foreground"
//       style={{ minHeight: sectionMinHeight }}
//     >
//       {/* 1) Pin the heading + cards while scrolling through all of them */}
//       <div className="sticky top-0 h-screen flex items-center">
//         <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Column 1: bullet */}
//           <p className="text-sm text-gray-400">• Our Expertise</p>

//           {/* Column 2: headline */}
//           <h2 className="text-3xl md:text-4xl font-bold">
//             How we take your business to the next level
//           </h2>

//           {/* Column 3: stacked cards (all absolutely positioned) */}
//           <div className="relative h-full flex justify-center items-center">
//             {cards.map((card, i) => (
//               <motion.div
//                 key={i}
//                 style={{
//                   opacity: transforms[i].opacity,
//                   y:       transforms[i].translateY,
//                   position: "absolute",
//                   top:      0,
//                   left:     0,
//                   right:    0,
//                 }}
//                 className="flex justify-center items-center"
//               >
//                 <ExpertiseCard
//                   title={card.title}
//                   description={card.description}
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* 2) CTA appears only after scrolling past all cards */}
//       <div className="absolute bottom-0 w-full pb-16">
//         <div className="max-w-7xl mx-auto text-center px-6">
//           <p className="text-gray-400 mb-4">
//             We are a digital marketing agency with expertise, and we’re on a mission to help you take the next step in your business.
//           </p>
//           <a
//             href="/services"
//             className="inline-block bg-primary text-background px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
//           >
//             See all services
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }