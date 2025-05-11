// components/UIUXCTA.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Link from "next/link";

export default function UIUXCTA() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const id = window.setTimeout(() => setLoading(false), 600);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <motion.section
      className="py-16 px-6 md:px-12 bg-white rounded-2xl text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: loading ? 0 : 1, y: loading ? 20 : 0 }}
      transition={{ duration: 0.6 }}
    >
      {loading ? (
        <>
          <Skeleton width={400} height={36} />
          <div className="h-4" />
          <Skeleton width={200} height={40} />
        </>
      ) : (
        <>
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to elevate your UX?
          </h2>
          <p className="mt-2 text-gray-700">
            Let’s create interfaces that delight and convert—schedule a free UX
            audit today.
          </p>
          <Link href="/contact">
            <button className="mt-6 bg-primary text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-accent-dark transition">
              Get a Free UX Audit
            </button>
          </Link>
        </>
      )}
    </motion.section>
  );
}