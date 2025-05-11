// components/WhoWeWorkWith.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const workWithItems = [
  {
    img: "/whoworkwith/smb.svg",
    title: "Small to Mid-Sized Businesses",
    desc: "We optimize acquisition channels for small to mid-sized businesses, maximize customer revenue, and develop strategies for market expansion.",
  },
  {
    img: "/whoworkwith/local.svg",
    title: "Local Businesses",
    desc: "We boost local businesses by enhancing visibility and engagement, driving foot traffic, and improving online presence to increase local sales.",
  },
  {
    img: "/whoworkwith/ecommerce.svg",
    title: "E-commerce Brands",
    desc: "We scale e-commerce operations through optimized sales processes and digital marketing, increasing traffic, conversions, and revenue.",
  },
  {
    img: "/whoworkwith/professional.svg",
    title: "Professional Services",
    desc: "We help professional services build market authority and attract more clients by refining their online presence and streamlining client acquisition.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function WhoWeWorkWith() {
  return (
    <motion.section
      id="who"
      className="bg-gray-100 py-16 px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <h2 className="text-3xl font-bold text-center mb-6">
        Who We <span className="text-primary underline">Work With</span>
      </h2>

      <motion.div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-8"
        variants={containerVariants}
      >
        {workWithItems.map(({ img, title, desc }, idx) => (
          <motion.div
            key={idx}
            className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-shadow hover:shadow-md"
            variants={itemVariants}
            transition={{ duration: 0.6 }}
          >
            {/* image */}
            <div className="relative w-24 h-24">
              <Image
                src={img}
                alt={title}
                fill
                className="object-contain p-6"
              />
            </div>
            {/* content */}
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}