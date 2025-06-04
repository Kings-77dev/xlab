// // components/WhyPartner.jsx
// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function WhyPartner() {
//   const points = [
//     {
//       img: "/whypartner/custom.svg",
//       title: "Tailored for Small Businesses",
//       text: "Every site is custom-crafted to your goals and audience—no one-size-fits-all templates.",
//     },
//     {
//       img: "/whypartner/process.svg",
//       title: "Simple, Transparent Process",
//       text: "Clear steps, honest pricing, and no tech jargon—just straightforward progress updates.",
//     },
//     {
//       img: "/whypartner/conversion.svg",
//       title: "Conversion-Focused Design",
//       text: "Built with strategy, SEO, and performance in mind so your site actually turns visitors into customers.",
//     },
//     {
//       img: "/whypartner/support.svg",
//       title: "Long-Term Support",
//       text: "Training, documentation, and maintenance options to keep your site running smoothly after launch.",
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <motion.section
//       id="why"
//       className="bg-gray-100 py-16"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       variants={containerVariants}
//     >
//       <div className="max-w-7xl mx-auto rounded-2xl p-12">
//         <h2 className="text-3xl font-bold text-center mb-4">
//           Why Partner with Design Point Digital?
//         </h2>
//         <p className="text-center text-gray-700 mb-10">
//           We know the real-world challenges small businesses face—tight budgets,
//           limited time, and past bad experiences. That’s why we make it simple,
//           personal, and results-driven.
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {points.map(({ img, title, text }, i) => (
//             <motion.div
//               key={i}
//               className="flex flex-col items-start space-y-4 bg-white border border-gray-300 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//               variants={itemVariants}
//               transition={{ duration: 0.6 }}
//             >
//               <div className="p-3">
//                 <div className="relative w-24 h-24">
//                   <Image
//                     src={img}
//                     alt={title}
//                     fill
//                     className="object-contain"
//                   />
//                 </div>
//               </div>
//               <h3 className="text-lg font-semibold">{title}</h3>
//               <p className="text-gray-600 text-sm">{text}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// }




// components/WhyPartner.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

interface Point {
  img: string;
  title: string;
  text: string;
}

const points: Point[] = [
  {
    img: "/whypartner/custom.svg",
    title: "Tailored for Small Businesses",
    text: "Every site is custom-crafted to your goals and audience—no one-size-fits-all templates.",
  },
  {
    img: "/whypartner/process.svg",
    title: "Simple, Transparent Process",
    text: "Clear steps, honest pricing, and no tech jargon—just straightforward progress updates.",
  },
  {
    img: "/whypartner/conversion.svg",
    title: "Conversion-Focused Design",
    text: "Built with strategy, SEO, and performance in mind so your site actually turns visitors into customers.",
  },
  {
    img: "/whypartner/support.svg",
    title: "Long-Term Support",
    text: "Training, documentation, and maintenance options to keep your site running smoothly after launch.",
  },
];

export default function WhyPartner() {
  // Split into two halves (first two on left, last two on right)
  const leftCards = points.slice(0, 2);
  const rightCards = points.slice(2, 4);

  function renderCard(pt: Point, idx: number) {
    return (
      <div
        key={idx}
        className="group block rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
      >
        {/* Image container */}
        <div className="relative w-full h-64 bg-gray-50">
          <Image
            src={pt.img}
            alt={pt.title}
            fill
            className="object-contain p-6"
          />
        </div>

        {/* Meta below */}
        <div className="px-4 py-5">
          <h3 className="text-xl font-semibold text-foreground">{pt.title}</h3>
          <p className="mt-2 text-gray-600 text-sm leading-relaxed">
            {pt.text}
          </p>
        </div>
      </div>
    );
  }

  return (
    <section id="why" className="py-16 px-6 md:px-12 bg-background">
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left Column: first two cards + CTA */}
        <div className="flex-1 flex flex-col gap-10">
          {leftCards.map(renderCard)}

          {/* (Optional) CTA under left cards */}
          <div className="text-center mt-10">
            <p className="text-xl font-semibold text-foreground mb-4">
              Ready to get started?
            </p>
            <Link href="/contact">
              <button className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-accent transition">
                Contact Us
              </button>
            </Link>
            <div className="mt-4 flex justify-center items-center gap-0.5 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-5 w-5" />
              ))}
              <span className="ml-2 text-sm text-gray-400">★★★★★ Reviews</span>
            </div>
          </div>
        </div>

        {/* Right Column: section title + last two cards */}
        <div className="flex-1 flex flex-col gap-10">
          <div>
            <p className="text-sm text-gray-400 mb-1">• Why Partner</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Partner with Design Point Digital?
            </h2>
          </div>

          <div className="flex flex-col gap-10">
            {rightCards.map(renderCard)}
          </div>
        </div>
      </div>
    </section>
  );
}