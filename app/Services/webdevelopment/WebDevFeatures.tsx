



// components/WebDevFeatures.tsx
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import WhoWeWorkCard from "@/app/components/WhoWeWorkCard";

const features = [
  {
    icon: "/icons/code/api.svg",
    title: "API & Integrations",
    desc: "Seamless integration with third-party services and APIs to extend functionality.",
  },
  {
    icon: "/icons/code/performance.svg",
    title: "Performance Optimization",
    desc: "Fast load times and efficient code for the best user experience and SEO.",
  },
  {
    icon: "/icons/code/security.svg",
    title: "Security & Maintenance",
    desc: "Hardened security and ongoing updates to keep your application safe.",
  },
  {
    icon: "/icons/code/scalability.svg",
    title: "Scalable Architecture",
    desc: "Built to grow with your business, from MVPs to enterprise solutions.",
  },
];

export default function WebDevFeatures() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const count = features.length;
  const segment = 1 / count;
  const fadeLen = 0.3 * segment;

  const transforms = features.map((_, i) => {
    const slotStart = i * segment;
    const fadeInEnd = slotStart + fadeLen;
    const nextStart = (i + 1) * segment;
    const nextEnd = nextStart + fadeLen;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const opacity = useTransform(
      scrollYProgress,
      [slotStart, fadeInEnd, nextStart, nextEnd],
      [0, 1, 1, 0]
    );

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const translateY = useTransform(
      scrollYProgress,
      [slotStart, fadeInEnd],
      [200, 0]
    );

    return { opacity, translateY };
  });

  const sectionMinHeight = `${(count + 1.5) * 100}vh`;

  return (
    <section
      ref={scrollRef}
      id="web-dev-features"
      className="relative bg-background text-black mx-6 rounded-bl-2xl rounded-br-2xl"
      style={{ minHeight: sectionMinHeight }}
    >
      <div className="sticky top-0 h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6">
          <h2 className="text-4xl md:text-[100px] font-bold text-center mb-16">
            Web Development <span className="">Features</span>
          </h2>

          <div className="relative h-[500px] flex justify-center items-center">
            {features.map((item, i) => (
              <motion.div
                key={i}
                style={{
                  opacity: transforms[i].opacity,
                  y: transforms[i].translateY,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                }}
                className="flex justify-center"
              >
                <WhoWeWorkCard
                  idx={i + 1}
                  title={item.title}
                  desc={item.desc}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full pb-16">
        <div className="max-w-7xl mx-auto text-center px-6">
          <p className="text-gray-500 mb-4">
            Powerful development solutions designed to grow with your business.
          </p>
        </div>
      </div>
    </section>
  );
}