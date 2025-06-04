// // components/ExpertiseCard.tsx
// "use client";

// import { motion, MotionValue } from "framer-motion";

// interface ExpertiseCardProps {
//   title: string;
//   description: string;
//   /**
//    * A MotionValue<number> mapping scroll progress to scale.
//    */
//   scale: MotionValue<number>;
// }

// export default function ExpertiseCard({
//   title,
//   description,
//   scale,
// }: ExpertiseCardProps) {
//   return (
//     <motion.div
//       style={{ scale }}
//       className="absolute inset-0 flex items-center justify-center"
//     >
//       <div className="bg-gray-800 rounded-2xl p-6 w-100 h-60">
//         <h3 className="text-lg font-semibold text-mywhite">{title}</h3>
//         <p className="text-gray-400 mt-2">{description}</p>
//       </div>
//     </motion.div>
//   );
// }

// components/ExpertiseCard.tsx
"use client";

import React from "react";

export interface ExpertiseCardProps {
  title: string;
  description: string;
}

export default function ExpertiseCard({ title, description }: ExpertiseCardProps) {
  return (
    <div className="max-w-md w-full bg-gray-800 rounded-2xl p-8 shadow-xl">
      <h3 className="text-xl font-semibold text-mywhite mb-2">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}