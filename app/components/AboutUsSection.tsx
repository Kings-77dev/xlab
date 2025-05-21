// components/AboutUsSection.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutUsSection() {
  return (
    <section
      id="about-us"
      className="py-16 px-6 md:px-12 bg-background text-foreground"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left column: bullet (1/3) */}
        <div className="col-span-1">
          <span className="inline-block text-2xl md:text-3xl mr-2">•</span>
          <span className="text-lg md:text-xl font-semibold">Who are we?</span>
        </div>

        {/* Right column: content + CTAs (2/3) */}
        <div className="col-span-1 md:col-span-2 space-y-6">
          <motion.h2
            className="text-2xl md:text-3xl font-bold leading-tight"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* We’re Color Code— */}
            <br className="hidden md:inline" />
            We’re a small web studio that turns clean, modern design into
            performance-driven sites for growing businesses—delivered with clear
            communication, fair pricing, and measurable results.{" "}
          </motion.h2>

          {/* <motion.p
            className="text-lg text-gray-300 max-w-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            From pixel-perfect mockups to lightning-fast code, we partner with
            growing businesses to build sites that look, feel and perform like
            the future.
          </motion.p> */}

          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link href="/about" legacyBehavior>
              <a className="inline-block bg-primary  px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
                About Design by Kings
              </a>
            </Link>
            <Link href="/team" legacyBehavior>
              <a className="inline-block text-foreground border border-foreground px-6 py-3 rounded-full font-medium hover:bg-foreground hover:text-background transition">
                Meet the Team
              </a>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
