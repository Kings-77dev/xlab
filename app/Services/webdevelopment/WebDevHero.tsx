// components/WebDevHero.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function WebDevHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.section
      id="web-dev-hero"
      className="bg-background text-foreground py-24 px-6 md:px-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeInUp}
    >
      <div className="max-w-7xl mx-auto">
        {/* Nav indicator */}
        <div className="flex items-center space-x-2 mb-6">
          {loaded ? (
            <>
              <span className="inline-block w-2 h-2 rounded-full bg-primary blink-dot" />{" "}
              <span className="text-sm text-gray-400">Web Development</span>
            </>
          ) : (
            <>
              <span className="w-2 h-2 rounded-full bg-gray-700 inline-block" />
              <div className="h-4 w-24 rounded bg-gray-700 animate-pulse" />
            </>
          )}
        </div>

        {/* Headline */}
        {loaded ? (
          <h1 className="text-5xl md:text-[100px] font-bold font-serif leading-tight">
            Custom Web Development Solutions
          </h1>
        ) : (
          <div className="h-12 md:h-20 w-3/4 md:w-1/2 rounded bg-gray-700 animate-pulse" />
        )}

        {/* Subheading */}
        {loaded ? (
          <p className="mt-4 text-lg md:text-xl max-w-2xl text-gray-400">
            We build fast, secure, and scalable websites and web applications
            tailored to your business needs.
          </p>
        ) : (
          <div className="mt-4 h-4 w-2/3 rounded bg-gray-700 animate-pulse" />
        )}

        {/* CTA */}
        <div className="mt-8">
          {loaded ? (
            <Link
              href="/contact"
              className="inline-block bg-primary text-foreground px-6 py-3 rounded-lg font-bold hover:scale-105 hover:bg-accent transition"
            >
              Talk to a Developer
            </Link>
          ) : (
            <div className="h-10 w-40 rounded-lg bg-gray-700 animate-pulse" />
          )}
        </div>
      </div>
    </motion.section>
  );
}
