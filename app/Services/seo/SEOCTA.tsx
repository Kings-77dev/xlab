// components/SEOCTA.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const metrics = [
  "Organic traffic volume",
  "Number of transactions",
  "Conversion rate",
  "Revenue from organic traffic",
];

export default function SEOCTA() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setLoaded(true), 600);
    return () => window.clearTimeout(id);
  }, []);

  // variants for staggered animation
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  if (!loaded) {
    return (
      <section className="py-16 px-6 md:px-12 bg-gray-800 rounded-2xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
          {/* Heading & button skeletons */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <Skeleton width={240} height={32} baseColor="#4B5563" />
            <div>
              <Skeleton width={120} height={40} baseColor="#4B5563" />
            </div>
          </div>
          {/* Pills skeletons */}
          <div className="flex-1 flex flex-wrap gap-4 justify-center md:justify-start">
            {metrics.map((_, i) => (
              <Skeleton
                key={i}
                width={120}
                height={32}
                borderRadius={9999}
                baseColor="#F3F4F6"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      className="py-16 px-4  "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
        <div className="max-w-5xl mx-auto bg-black rounded-2xl p-14 flex flex-col md:flex-row items-center justify-between">
        {/* Left */}
        <motion.div
          className="flex-1 text-center md:text-left space-y-4"
          variants={container}
        >
          <motion.h2
            variants={item}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-100"
          >
            We help you{" "}
              optimize:
          </motion.h2>

          <motion.button
            onClick={() => (window.location.href = "/contact")}
            variants={item}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-gray-700 transition"
          >
            Contact Us
          </motion.button>
        </motion.div>

        {/* Right */}
        <motion.div
          className="flex-1 flex flex-wrap gap-4 justify-center md:justify-start"
          variants={container}
        >
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              variants={item}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="bg-white rounded-full px-4 py-2 flex items-center space-x-2"
            >
              <span className="block w-4 h-4 bg-primary rounded-full flex-shrink-0" />
              <span className="text-gray-800 text-sm font-medium">{m}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}