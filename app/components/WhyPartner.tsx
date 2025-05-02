// components/WhyPartner.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhyPartner() {
  const points = [
    {
      img: "/whypartner/custom.svg",
      title: "Tailored for Small Businesses",
      text: "Every site is custom-crafted to your goals and audience—no one-size-fits-all templates.",
    },
    {
      img: "/whypartner/process.svg",
      title: "Simple, Transparent Process",
      text: "Clear steps, honest pricing, and no tech jargon—just straightforward progress updates.",
    },
    {
      img: "/whypartner/conversion.svg",
      title: "Conversion-Focused Design",
      text: "Built with strategy, SEO, and performance in mind so your site actually turns visitors into customers.",
    },
    {
      img: "/whypartner/support.svg",
      title: "Long-Term Support",
      text: "Training, documentation, and maintenance options to keep your site running smoothly after launch.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="why"
      className="bg-gray-100 py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto rounded-2xl p-12">
        <h2 className="text-3xl font-bold text-center mb-4">
          Why Partner with Design Point Digital?
        </h2>
        <p className="text-center text-gray-700 mb-10">
          We know the real-world challenges small businesses face—tight budgets,
          limited time, and past bad experiences. That’s why we make it simple,
          personal, and results-driven.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map(({ img, title, text }, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-start space-y-4"
              variants={itemVariants}
              transition={{ duration: 0.6 }}
            >
              <div className="p-3">
                <div className="relative w-24 h-24">
                  <Image
                    src={img}
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