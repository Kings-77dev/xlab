// // components/PortfolioHero.tsx
// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: { 
//     opacity: 1,
//     transition: { staggerChildren: 0.2 }
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

// export default function PortfolioHero() {
//   return (
//     <motion.section
//       className="bg-white py-16 px-6 md:px-12"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       variants={containerVariants}
//     >
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start">
//         {/* Text Column */}
//         <motion.div
//           className="w-full md:w-1/2 space-y-4"
//           variants={itemVariants}
//           transition={{ duration: 0.6 }}
//         >
//           <h1 className="text-4xl md:text-5xl font-bold">Portfolio</h1>
//           <p className="mt-2 text-lg text-gray-700 max-w-2xl">
//             A showcase of recent projects where we’ve crafted modern,
//             high-impact websites for small businesses.
//           </p>
//         </motion.div>

//         {/* Image Column (static) */}
//         <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
//           <div className="relative w-full h-48 md:h-80">
//             <Image
//               src="/portfolio.svg"
//               alt="Portfolio preview"
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// }

"use client";

import React from "react";

interface PortfolioHeroProps {
  categories: string[];
  selectedCategory: string;
  onSelect: (cat: string) => void;
}

export default function PortfolioHero({
  categories,
  selectedCategory,
  onSelect,
}: PortfolioHeroProps) {
  return (
    <section className="bg-background text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-6xl md:text-8xl font-bold leading-tight">
          We Make <br className="hidden md:inline" /> Digital Beautiful
        </h1>
        
         {/* Subheading */}
        <p className="mt-6 text-lg md:text-xl max-w-2xl text-gray-400">
          Elevating brands through design and technical expertise.
        </p>

        {/* Category pills */}
        <div className="mt-12 flex flex-wrap gap-4">
          {categories.map((cat) => {
            const isActive = cat === selectedCategory;
            return (
              <button
                key={cat}
                onClick={() => onSelect(cat)}
                aria-pressed={isActive}
                className={`px-6 py-3 rounded-full text-sm font-medium transition ${
                  isActive
                    ? "bg-primary text-white border-2 border-gray-400"
                    : "border border-gray-700 text-white hover:bg-gray-800"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}