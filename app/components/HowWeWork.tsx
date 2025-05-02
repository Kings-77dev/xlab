// components/HowWeWork.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  PhoneIcon,
  PencilSquareIcon,
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function HowWeWork() {
  const steps = [
    {
      icon: <PhoneIcon className="h-6 w-6 text-accent" />,
      title: "Free Discovery Call",
      text: "We’ll chat about your business, goals, and what’s not working on your current site.",
    },
    {
      icon: <PencilSquareIcon className="h-6 w-6 text-accent" />,
      title: "Custom Strategy & Quote",
      text: "You’ll get a clear plan, a timeline, and pricing tailored to your needs.",
    },
    {
      icon: <DevicePhoneMobileIcon className="h-6 w-6 text-accent" />,
      title: "Design & Build",
      text: "We create a clean, modern design and develop it with speed, SEO, and usability in mind.",
    },
    {
      icon: <RocketLaunchIcon className="h-6 w-6 text-accent" />,
      title: "Launch & Support",
      text: "We go live — then hand over training docs and offer optional maintenance to keep you stress-free.",
    },
  ];

  return (
    <motion.section
      id="process"
      className="py-16 px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[100px]">
        {/* Left column */}
        <motion.div className="space-y-4" variants={itemVariants}>
          <h2 className="text-3xl font-bold">
            How We Bring Your Website to Life
          </h2>
          <p className="text-gray-700">
            We keep it simple, clear, and client-friendly. Whether you’re
            starting from scratch or giving your site a fresh look, here’s what
            to expect when working with us.
          </p>

          {/* Illustration under the description */}
          <div className="relative w-full h-48 md:h-84">
            <Image
              src="/Designteam.svg"
              alt="Workflow illustration"
              fill
              loading="lazy"
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Right column */}
        <div className="space-y-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="flex items-start space-x-4"
              variants={itemVariants}
            >
              <div>{step.icon}</div>
              <div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-gray-600">{step.text}</p>
              </div>
            </motion.div>
          ))}
          <motion.div
            className="mt-10"
            variants={itemVariants}
          >
            <Link
              href="/contact"
              className="ml-10 bg-primary text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-accent-dark transition"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}