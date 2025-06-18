// components/ContactHero.tsx
"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactHero() {
  return (
    <motion.section
      id="contact-hero"
      className="bg-background py-16 px-6 md:px-12 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold">
        Get in Touch
      </h1>
      <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
        Have a project in mind or questions about our services? Fill out the form below or use the info provided to reach out directly.
      </p>
    </motion.section>
  );
}