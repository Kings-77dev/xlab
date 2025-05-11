// components/ProposalCTA.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ProposalCTA() {
  return (
    <section className="py-16 bg-white px-6 md:px-12  rounded-2xl">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-4">
        {/* 1/3 (animated in three parts with staggered delays) */}
        <div className="flex-1 md:flex-none md:w-1/3 text-center md:text-left space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0, duration: 0.6 }}
            className="text-gray-500"
          >
            Our average time to proposal is
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-primary"
          >
            THREE DAYS
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Link href="/contact">
              <button className="bg-black text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-700 transition">
                Get a Proposal
              </button>
            </Link>
          </motion.div>
        </div>

        {/* 2/3 (static image) */}
        <div className="flex-1 md:w-2/3 relative w-full h-64 md:h-96">
          <Image
            src="/time.svg"
            alt="Person working at laptop with clock"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}