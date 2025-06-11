// components/WhoWeWorkWith.tsx
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import WhoWeWorkCard from "./WhoWeWorkCard";

interface WorkWithItem {
  img: string;
  title: string;
  desc: string;
}

const workWithItems: WorkWithItem[] = [
  {
    img: "/whoworkwith/smb.svg",
    title: "Small & Growing Businesses",
    desc: "Transform your outdated site into a lead-generating engine—boost form submissions by up to 40% with clear CTAs and streamlined UX.",
  },
  {
    img: "/whoworkwith/nonprofit.svg",
    title: "Non-Profits & NGOs",
    desc: "Maximize donor engagement with emotionally resonant storytelling, seamless donation flows, and mobile-optimized pages.",
  },
  {
    img: "/whoworkwith/creative.svg",
    title: "Creative Professionals",
    desc: "Elevate portfolios for photographers, designers, and artists—focus visitors on your best work and commission requests.",
  },
  {
    img: "/whoworkwith/freelancer.svg",
    title: "Freelancers & Consultants",
    desc: "Convert visitors into clients with clear service packages, testimonials, and effortless contact forms.",
  },
  {
    img: "/whoworkwith/ecommerce.svg",
    title: "E-Commerce Retailers",
    desc: "Scale online sales through intuitive product pages, simplified checkout flows, and A/B-tested landing pages that increase AOV.",
  },
  {
    img: "/whoworkwith/professional.svg",
    title: "Service Professionals",
    desc: "Build authority with polished portfolios, clear service breakdowns, and client testimonials that turn visitors into booked appointments.",
  },
];

export default function WhoWeWorkWith() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const count = workWithItems.length;
  const segment = 1 / count;
  const fadeLen = 0.3 * segment;

  // Build transforms: fade cards in, then fade them back out when the next card comes in
   
  const transforms = workWithItems.map((_, i) => {
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
      id="who"
      className="relative bg-[#111] text-white mx-6 rounded-bl-2xl rounded-br-2xl"
      style={{ minHeight: sectionMinHeight }}
    >
      {/* 1) Sticky header + stacked cards */}
      <div className="sticky top-0 h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6">
          <h2 className="text-4xl md:text-[100px] font-bold text-center mb-16">
            Who We <span className="">Work With</span>
          </h2>

          <div className="relative h-[500px] flex justify-center items-center">
            {workWithItems.map((item, i) => (
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

      {/* 2) Bottom CTA */}
      <div className="absolute bottom-0 w-full pb-16">
        <div className="max-w-7xl mx-auto text-center px-6">
          <p className="text-gray-400 mb-4">
            We work with businesses of all sizes to help them grow and succeed
            in the digital space.
          </p>
        </div>
      </div>
    </section>
  );
}
