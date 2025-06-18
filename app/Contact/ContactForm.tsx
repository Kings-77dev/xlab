// components/ContactForm.tsx
"use client";

import { motion } from "framer-motion";

const formVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export default function ContactForm() {
  return (
    <motion.section
      id="contact-form"
      className="py-16 px-6 md:px-12 bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={formVariants}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-3xl mx-auto border border-gray-700 rounded-2xl shadow p-8">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground">Name</label>
            <input
              id="name"
              type="text"
              className="mt-1 block w-full rounded-lg border border-gray-700 rounded-lg shadow-sm focus:ring-foreground focus:border-accent"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg text-foreground font-medium ">Email</label>
            <input
              id="email"
              type="email"
              className="mt-1 block w-full rounded-lg border border-gray-700 rounded-lg shadow-sm focus:ring-accent focus:border-accent"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-foreground font-medium ">Message</label>
            <textarea
              id="message"
              rows={5}
              className="mt-1 block w-full rounded-lg border border-gray-700 rounded-lg shadow-sm focus:ring-accent focus:border-accent"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-full text-lg font-medium hover:bg-gray-400 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
}