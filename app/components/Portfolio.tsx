// components/Portfolio.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 px-8">
      <h2 className="text-3xl font-bold text-center mb-6">Our Work</h2>
      <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <motion.div
            key={i}
            className="relative bg-gray-200 h-48 md:h-100 rounded-lg overflow-hidden group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={cardVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src={`/projects/project-${i}.jpg`}
              alt={`Project ${i}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}