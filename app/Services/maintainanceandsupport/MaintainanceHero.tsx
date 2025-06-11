// components/ServicesHero.tsx
"use client";
import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <motion.section
      id="maintenance-hero"
      className="py-24 px-6 md:px-12 bg-background text-foreground"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-serif text-4xl md:text-[80px] font-bold leading-tight">
          Maintenance & Support
        </h1>
        <div className="mt-4 text-2xl">•</div>
        <p className="mt-8 text-lg md:text-xl max-w-2xl mx-auto text-gray-400">
          We create smart, modern websites built to grow your business. From full redesigns to ongoing support — we’ve got you covered.
        </p>
      </div>
    </motion.section>
  );
}