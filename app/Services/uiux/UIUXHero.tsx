// components/UIUXHero.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";

export default function UIUXHero() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const id = window.setTimeout(() => setLoading(false), 600);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <motion.section
      className="bg-white py-16 px-6 md:px-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: loading ? 0 : 1, y: loading ? 20 : 0 }}
      transition={{ duration: 0.6 }}
    >
      {loading ? (
        <>
          <Skeleton width={400} height={40} />
          <div className="h-4" />
          <Skeleton
            width={600}
            height={20}
            count={2}
            style={{ lineHeight: "1.5" }}
          />
          <div className="h-8" />
          <Skeleton width="100%" height={300} />
        </>
      ) : (
        <>
          <h1 className="text-4xl md:text-5xl font-bold">
            UI/UX Design & Prototyping
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            We research, prototype, and refine interfaces so your users love
            interacting with your product on any device.
          </p>
          <div className="mt-8 relative w-full h-64 md:h-96 mx-auto">
            <Image
              src="/illustrations/uiux-hero.svg"
              alt="UI/UX illustration"
              fill
              className="object-contain"
            />
          </div>
        </>
      )}
    </motion.section>
  );
}