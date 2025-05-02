// components/ContactInfo.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const info = [
  { icon: "/contact/phone.svg", label: "Phone", value: "+31 20 123 4567" },
  { icon: "/contact/email.svg", label: "Email", value: "hello@designpoint.digital" },
  { icon: "/contact/location.svg", label: "Address", value: "Amsterdam, Netherlands" },
];

const container = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2 }
  },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactInfo() {
  return (
    <motion.section
      id="contact-info"
      className="py-16 px-6 md:px-12 bg-gray-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {info.map((itemData, i) => (
          <motion.div
            key={i}
            className="flex items-center space-x-4"
            variants={item}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-12 h-12">
              <Image
                src={itemData.icon}
                alt={itemData.label}
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h4 className="text-lg font-semibold">{itemData.label}</h4>
              <p className="text-gray-600">{itemData.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}