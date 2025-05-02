// components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// simple variants for fading/ sliding
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col-reverse md:flex-row items-center px-8 py-16 md:py-28"
    >
      {/* Text column */}
      <motion.div
        className="flex-2 space-y-8"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl md:text-[65px] font-semibold leading-tight"
          variants={fadeInUp}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Your Brand, Your Business, <br className="hidden" />
          Your Website.
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700"
          variants={fadeInUp}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          We design professional, engaging websites that capture your <br />
          brand’s essence and drive customer growth.
        </motion.p>
        <motion.div variants={fadeInUp} transition={{ delay: 0.6, duration: 0.6 }}>
          <Link href="#cta">
            <button
              type="button"
              className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-accent-dark transition"
            >
              Get a Free Website Review
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Image stack column */}
      <motion.div
        className="md:w-1/3 relative flex justify-center mb-10 md:mb-1 md:ml-10"
        initial="hidden"
        animate="visible"
        variants={slideInRight}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="relative w-64 h-40 md:w-90 md:h-52">
          {/* Bottom */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gray-200 rounded-xl overflow-hidden transform translate-y-8 translate-x-8"
            variants={slideInRight}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Image src="/screenshot-3.png" fill className="object-cover" alt="mockup bottom" />
          </motion.div>
          {/* Middle */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gray-200 rounded-xl overflow-hidden transform translate-y-4 translate-x-4"
            variants={slideInRight}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <Image src="/screenshot-2.png" fill className="object-cover" alt="mockup middle" />
          </motion.div>
          {/* Top */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gray-200 rounded-xl overflow-hidden"
            variants={slideInRight}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <Image src="/screenshot-1.png" fill className="object-cover" alt="mockup top" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}