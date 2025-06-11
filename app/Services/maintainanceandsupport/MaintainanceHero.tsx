

// components/ServicesHero.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServicesHero() {
  return (
    <motion.section
      id="services-hero"
      className="py-24 px-6 md:px-12 bg-background text-foreground"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={container}
    >
      <div className="max-w-6xl mx-auto">
        {/* Nav indicator */}
        <div className="flex items-center space-x-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-sm text-gray-500">Services</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-5xl md:text-[100px] font-bold leading-tight">
          Maintenance &
          <br className="hidden md:block" />
          Support
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-lg md:text-xl max-w-2xl text-gray-400">
          Our dedication makes every project exceptional.
        </p>

        {/* CTA */}
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block bg-primary text-foreground px-6 py-3 rounded-xl font-bold  transform duration-200 ease-out hover:scale-115 hover:bg-primary transition"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
