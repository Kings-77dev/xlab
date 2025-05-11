// components/FeatureHighlights.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    icon: "/icons/channels.svg",
    title: "Own All of the Channels You Need",
    text: "We’ve assembled the best-of-breed teams into a single relationship so you can avoid managing a network of agencies and internal hires.",
  },
  {
    icon: "/icons/partner.svg",
    title: "A Partner You Can Count On",
    text: "“Agency” by definition, our team of All-Stars work as part of your team, invested in your success and the sacredness of your brand.",
  },
  {
    icon: "/icons/advantage.svg",
    title: "Gain an Unfair Advantage",
    text: "Beyond top talent and certifications, we built proprietary and use AI technology to help your business lead its category at all times.",
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

export default function FeatureHighlights() {
  return (
    <motion.section
      className="bg-gray-100 rounded-2xl py-16 px-6 md:px-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Heading */}
      <motion.div
        className="text-center mb-12 space-y-2"
        variants={itemVariants}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-700">
          Be ready to be{" "}
          <span className="text-primary   ">
            one of the first
          </span>{" "}
          in your specific niche
        </h2>
      </motion.div>

      {/* Feature cards */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
      >
        {features.map(({ icon, title, text }, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col"
            variants={itemVariants}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-12 mb-4">
              <Image
                src={icon}
                alt={title}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 flex-1">{text}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}