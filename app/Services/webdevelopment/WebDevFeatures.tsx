// components/WebDevFeatures.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Image from 'next/image';

const features = [
  {
    icon: '/icons/code/api.svg',
    title: 'API & Integrations',
    desc: 'Seamless integration with third-party services and APIs to extend functionality.',
  },
  {
    icon: '/icons/code/performance.svg',
    title: 'Performance Optimization',
    desc: 'Fast load times and efficient code for the best user experience and SEO.',
  },
  {
    icon: '/icons/code/security.svg',
    title: 'Security & Maintenance',
    desc: 'Hardened security and ongoing updates to keep your application safe.',
  },
  {
    icon: '/icons/code/scalability.svg',
    title: 'Scalable Architecture',
    desc: 'Built to grow with your business, from MVPs to enterprise solutions.',
  },
];

export default function WebDevFeatures() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const id = window.setTimeout(() => setLoading(false), 600);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <motion.section
      id="web-dev-features"
      className="bg-gray-100 py-16 px-6 md:px-12 rounded-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: loading ? 0 : 1, y: loading ? 20 : 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={i}
            className="flex flex-col space-x-4 items-start bg-white p-4 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: loading ? 0 : 1, y: loading ? 20 : 0 }}
            transition={{ delay: 0.1 * i, duration: 0.6 }}
          >
            <div className="w-12 h-12 ">
              {loading ? (
                <Skeleton circle width={48} height={48} />
              ) : (
                <Image
                  src={f.icon}
                  alt={f.title}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              )}
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                {loading ? <Skeleton width={200} height={24} /> : f.title}
              </h3>
              <p className="text-gray-600">
                {loading ? <Skeleton width={300} height={16} /> : f.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
