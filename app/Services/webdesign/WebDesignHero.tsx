// components/WebDesignHero.tsx
"use client";

import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function WebDesignHero() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const id = window.setTimeout(() => setLoading(false), 600);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <motion.section
      id="web-design-hero"
      className="bg-white py-16 px-6 md:px-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: loading ? 0 : 1, y: loading ? 20 : 0 }}
      transition={{ duration: 0.6 }}
    >
      {loading ? (
        <>
          <Skeleton width={500} height={40} />
          <div className="h-4" />
          <Skeleton count={2} width={600} height={20} />
          <div className="h-8" />
          <Skeleton width="100%" height={300} />
        </>
      ) : (
        <>
          <h1 className="text-4xl md:text-5xl font-bold">
            Professional Custom Web Design
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            We craft responsive, user-friendly websites that engage your audience and strengthen your brand online.
          </p>
          <div className="mt-8 relative w-full h-64 md:h-96 mx-auto">
            <Image
              src="/web-design-hero.svg"
              alt="Custom web design example"
              fill
              className="object-contain"
            />
          </div>
        </>
      )}
    </motion.section>
  );
}
