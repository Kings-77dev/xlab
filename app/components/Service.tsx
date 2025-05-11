// components/Services.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    svg: "/uiux2.svg",
    title: "Web Design / UI/UX",
    text: "We create user-friendly, engaging designs that enhance the user experience and drive conversions.",

  },
  {
    svg: "/seo2.svg",
    title: "Search Engine Optimisation",
    text: "We help your site get found on Google by optimizing content, structure, and speed.",
  },
  {
    svg: "/webdev.svg",
    title: "Web Development",
    text: "Fast, scalable websites built with clean code and smart tech — easy to manage and built to grow.",
  },
  {
    svg: "/maintenance.svg",
    title: "Maintenance & Support",
    text: "Ongoing updates, backups, and expert support to keep your site secure, smooth, and stress-free.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <motion.section
      id="services"
      className="bg-gray-100 py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto p-12 space-y-8">
        {/* Heading */}
        <div className="text-center space-y-2">
          <motion.h2
            className="text-3xl font-bold"
            variants={itemVariants}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-gray-700"
            variants={itemVariants}
            transition={{ duration: 0.6 }}
          >
            Smart, modern websites built to grow your business. From full redesigns to ongoing support — we’ve got you covered.
          </motion.p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 bg">
          {services.map(({ svg, title, text }, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-start space-y-4 bg-white border border-gray-300 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
              transition={{ duration: 0.6 }}
            >
              {/* fixed-size icon wrapper */}
              <div className="bg- p- rounded-lg ">
                <div className="relative w-24 h-24 ">
                  <Image
                    src={svg}
                    alt={title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-gray-600 text-sm">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}