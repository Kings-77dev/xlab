

// // components/HowWeWorkGrid.tsx
// "use client";

// import Link from "next/link";
// import React from "react";

// // Each card’s data, including a Tailwind background color & accent color.
// const steps = [
//   {
//     idx: 1,
//     title: "Free Discovery Call",
//     text: "We’ll chat about your business, goals, and what’s not working on your current site.",
//     bgClass: "bg-red-900",
//     accentClass: "bg-red-600",
//   },
//   {
//     idx: 2,
//     title: "Custom Strategy & Quote",
//     text: "You’ll get a clear plan, a timeline, and pricing tailored to your needs.",
//     bgClass: "bg-yellow-800",
//     accentClass: "bg-yellow-400",
//   },
//   {
//     idx: 3,
//     title: "Design & Build",
//     text: "We create a clean, modern design and develop it with speed, SEO, and usability in mind.",
//     bgClass: "bg-green-900",
//     accentClass: "bg-green-400",
//   },
//   {
//     idx: 4,
//     title: "Launch & Support",
//     text: "We go live — then hand over training docs and offer optional maintenance to keep you stress-free.",
//     bgClass: "bg-blue-900",
//     accentClass: "bg-blue-400",
//   },
// ];

// export default function HowWeWorkGrid() {
//   return (
//     <section className="py-16 px-6 md:px-12 bg-black">
//       <div className="max-w-7xl mx-auto">
//         {/* SECTION HEADING */}
//         <h2 className="text-4xl md:text-[100px] font-bold text-white mb-12">
//           How We Bring Ideas To Life
//         </h2>

//         {/**
//          * GRID SETUP:
//          *   - On mobile (<md): 1‐column stack (`grid-cols-1`).
//          *   - On md+: 3 columns × 2 rows (`md:grid-cols-3 md:grid-rows-2`).
//          */}
//         <div
//           className="
//             grid grid-cols-1 gap-8
//             md:grid-cols-3 md:grid-rows-2 md:gap-8
//           "
//         >
//           {steps.map((step, i) => {
//             // Build span/position classes for each card depending on its index:
//             let spanClasses = "";

//             if (i === 0) {
//               // Card 1: top-left, spans columns 1–2 in row 1
//               spanClasses = "md:col-span-2 md:row-span-1 md:col-start-1 md:row-start-1";
//             } else if (i === 1) {
//               // Card 2: top-right, spans column 3, rows 1–2
//               spanClasses = "md:col-span-1 md:row-span-2 md:col-start-3 md:row-start-1";
//             } else if (i === 2) {
//               // Card 3: bottom‐left “mirrored” → now spans columns 2–3, row 2
//               spanClasses = "md:col-span-2 md:row-span-1 md:col-start-2 md:row-start-2";
//             } else {
//               // Card 4: bottom‐right “mirrored” → now sits in column 1, row 2
//               spanClasses = "md:col-span-1 md:row-span-1 md:col-start-1 md:row-start-2";
//             }

//             return (
//               <div
//                 key={step.idx}
//                 className={`
//                   relative overflow-hidden rounded-2xl
//                   h-64 lg:h-100          
//                   ${step.bgClass}       
//                   text-white
//                   ${spanClasses}         
//                 `}
//               >
//                 {/* 1) Index “01 / 02 / 03 / 04” top-left */}
//                 <div className="absolute top-4 left-4 text-opacity-30 text-2xl font-bold">
//                   {step.idx.toString().padStart(2, "0")}
//                 </div>

//                 {/* 2) Decorative quarter‐circle in top‐right */}
//                 <div className="absolute top-0 right-0">
//                   <div
//                     className={`
//                       ${step.accentClass}
//                       w-16 h-16 lg:w-20 lg:h-20
//                       rounded-bl-full
//                       translate-x-4 -translate-y-4
//                     `}
//                   />
//                 </div>

//                 {/* 3) Title + Description pinned at bottom-left */}
//                 <div className="absolute bottom-6 left-6 max-w-[75%]">
//                   <h3 className="text-2xl lg:text-3xl font-semibold mb-2">
//                     {step.title}
//                   </h3>
//                   <p className="text-sm lg:text-base opacity-90 leading-snug">
//                     {step.text}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* OPTIONAL CTA UNDERNEATH THE GRID */}
//         <div className="mt-12 text-center">
//           <Link href="/contact">
//             <button className="inline-block bg-primary text-black px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
//               Learn More
//             </button>
//           </Link>
//         </div>
//       </div>
//     </section>
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
              spanClasses =
                "md:col-span-2 md:row-span-1 md:col-start-1 md:row-start-1";
            } else if (i === 1) {
              // Card 2: top-right, spans column 3, rows 1–2
              spanClasses =
                "md:col-span-1 md:row-span-2 md:col-start-3 md:row-start-1";
            } else if (i === 2) {
              // Card 3: now bottom-left
              spanClasses =
                "md:col-span-1 md:row-span-1 md:col-start-1 md:row-start-2";
            } else {
              // Card 4: now bottom-right spanning cols 2–3
              spanClasses =
                "md:col-span-2 md:row-span-1 md:col-start-2 md:row-start-2";
            }

            return (
              <div
                key={step.idx}
                className={`
                  relative overflow-hidden rounded-2xl
                  h-64 lg:h-100
                  ${step.bgClass}
                  text-white
                  ${spanClasses}
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
                  <h3 className="text-xl md:text-3xl font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm  md:text-base opacity-90 leading-snug">
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
            <button className="inline-block bg-primary text-foreground  px-6 py-3 rounded-xl font-bold  transform duration-200 ease-out hover:scale-115 hover:bg-primary transition">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}