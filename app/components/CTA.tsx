// components/CTA.jsx
"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <motion.section
      id="cta"
      className="py-16 px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-5xl mx-auto bg-black rounded-2xl p-14 flex flex-col md:flex-row items-center justify-between">
        {/* Text */}
        <div className="md:flex-1 mb-6 md:mb-0">
          <h2 className="text-3xl font-bold text-white mb-2">
            Ready to Transform Your Website?
          </h2>
          <p className="text-gray-300">
            Let’s build a site that works as hard as you do. Book a free discovery
            call and take the first step toward a faster, smarter online presence.
          </p>
        </div>

        {/* Button */}
        <a
          href="#"
          className="inline-block bg-primary px-8 py-3 rounded-full text-lg font-medium text-white hover:bg-accent-dark transition"
        >
          Book a Free Call
        </a>
      </div>
    </motion.section>
  );
}