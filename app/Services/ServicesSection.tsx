// components/ServicesScrollSection.tsx
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ServiceCard from "./ServicesCard";
import Link from "next/link";

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

export default function ServicesScrollSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const count = services.length;
  const segment = 1 / count;
  const fadeLen = 0.3 * segment;

  const transforms = services.map((_, i) => {
    const start = i * segment;
    const fadeInEnd = start + fadeLen;
    const nextStart = (i + 1) * segment;
    const nextEnd = nextStart + fadeLen;

    // fade in 0→1 over [start, fadeInEnd], stay at 1, then fade out 1→0 over [nextStart, nextEnd]
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const opacity = useTransform(
      scrollYProgress,
      [start, fadeInEnd, nextStart, nextEnd],
      [0, 1, 1, 0]
    );

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const translateY = useTransform(
      scrollYProgress,
      [start, fadeInEnd],
      [200, 0]
    );

    return { opacity, translateY };
  });

  const sectionMinHeight = `${(count + 1.5) * 100}vh`;

  return (
    <section
      ref={scrollRef}
      id="services"
      className="relative bg-black text-black  "
      style={{ minHeight: sectionMinHeight }}
    >
      {/* Sticky header + stack */}
      <div className="sticky top-0 h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6">
          <h2 className="text-4xl md:text-[100px] font-bold text-center mb-16">
            Our Services
          </h2>
          <div className="relative h-[500px] flex justify-center items-center">
            {services.map((svc, i) => (
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
                className="flex justify-center w-full px-6"
              >
                <ServiceCard
                  idx={i + 1}
                  title={svc.title}
                  text={svc.text}
                  svg={svc.svg}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="hidden md:flex absolute bottom-0 w-full pb-16">
        <div className="max-w-7xl mx-auto text-center px-6">
          <p className="text-gray-400 mb-4">
            We turn great ideas into digital experiences that engage and
            convert.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-background px-6 py-3 rounded-xl font-medium hover:bg-accent transition"
          >
            Talk to Us
          </Link>
        </div>
      </div>
    </section>
  );
}
