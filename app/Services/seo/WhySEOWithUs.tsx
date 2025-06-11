// components/WhySEOWithUs.tsx
"use client";

import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { motion } from "framer-motion";
import {
  ChartBarIcon,
  ArrowTrendingUpIcon,
  UsersIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";
// import Link from "next/link";

export default function WhySEOWithUs() {
  const points = [
    {
      icon: <ChartBarIcon className="h-6 w-6 text-primary" />,
      title: "Data-Driven Strategy",
      text: "We use real keyword and competitor analysis to craft a plan that delivers measurable traffic growth.",
    },
    {
      icon: <ArrowTrendingUpIcon className="h-6 w-6 text-primary" />,
      title: "Consistent Ranking Gains",
      text: "Through on-page, technical, and content optimization, we improve your position for high-value search terms.",
    },
    {
      icon: <UsersIcon className="h-6 w-6 text-primary" />,
      title: "Audience Engagement",
      text: "We fine-tune your content to speak directly to your customers’ needs—boosting dwell time and conversions.",
    },
    {
      icon: <ClockIcon className="h-6 w-6 text-primary" />,
      title: "Long-Term Growth",
      text: "Our ongoing monitoring and refinement ensures sustained results and adaptability to algorithm changes.",
    },
  ];

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const id = window.setTimeout(() => setLoaded(true), 600);
    return () => window.clearTimeout(id);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  if (!loaded) {
    return (
      <section id="why-seo" className="py-16 px-6 md:px-12 bg-background ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[100px]">
          {/* Left skeleton */}
          <div className="space-y-6">
            <Skeleton height={40} width="60%" />
            <Skeleton count={2} height={20} />
            <Skeleton height={256} />
          </div>
          {/* Right skeleton */}
          <div className="space-y-8">
            {points.map((_, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <Skeleton circle height={32} width={32} />
                <div className="flex-1 space-y-2">
                  <Skeleton height={24} width="50%" />
                  <Skeleton count={1} height={16} />
                </div>
              </div>
            ))}
            <Skeleton height={48} width={160} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      id="why-seo"
      className="py-16 px-6 md:px-12 bg-background "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[100px]">
        {/* Left */}
        <motion.div variants={itemVariants} className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Partner with Us for <span className="text-primary">SEO</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Our proven SEO expertise helps you attract the right customers,
            climb the rankings, and build a sustainable online presence that
            outlasts your competition.
          </p>
          {/* <div className="w-full h-64 relative">
            <Image
              src="/illustrations/seo-team.svg"
              alt="SEO team collaborating"
              fill
              className="object-contain"
            />
          </div> */}
        </motion.div>

        {/* Right */}
        <motion.div variants={itemVariants} className="space-y-8">
          {points.map((pt, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex items-start space-x-4"
            >
              <div className="p-2 bg-primary bg-opacity-10 rounded-lg">
                {pt.icon}
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-semibold mb-6">{pt.title}</h3>
                <p className="text-gray-400 text-base md:text-lg ">{pt.text}</p>
              </div>
            </motion.div>
          ))}

          <motion.div variants={itemVariants} className="mt-6">
            {/* <Link
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-accent-dark transition"
              href="/contact"
            >
              Get Your SEO Audit
            </Link> */}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}