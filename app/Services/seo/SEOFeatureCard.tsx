// components/SEOFeatureCard.tsx
"use client";

import { CheckIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { motion, MotionValue } from "framer-motion";

interface SEOFeatureCardProps {
  img: string;
  title: string;
  points: string[];
  opacity: MotionValue<number>;
  translateY: MotionValue<number>;
}

export default function SEOFeatureCard({ img, title, points, opacity, translateY }: SEOFeatureCardProps) {
  return (
    <motion.div
      style={{ opacity, y: translateY, position: 'absolute', top: 0, left: 0, right: 0 }}
      className="flex justify-center w-full px-6"
    >
      {/* Glow behind */}
      <div
        className="absolute -inset-4 rounded-2xl blur-3xl"
        style={{
          background: 'radial-gradient(circle at center, rgba(235,192,45,0.4), transparent 70%)',
        }}
      />

      {/* Card container */}
      <div className="relative flex flex-col md:flex-row w-full h-auto md:h-90 bg-background border border-gray-700 rounded-2xl overflow-hidden z-10">
        {/* Decorative quarter-circle */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary rounded-full" />
        </div>

        {/* Text + points */}
        <div className="flex-1 max-w-md px-10 py-12 flex flex-col">
          <h3 className="text-3xl font-semibold text-foreground mb-4">{title}</h3>
          <ul className="space-y-3 flex-grow text-foreground">
            {points.map((pt, i) => (
              <li key={i} className="flex items-start space-x-2">
                <CheckIcon className="h-5 w-5 flex-shrink-0 text-primary mt-1" />
                <span className="text-sm leading-relaxed">{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Icon illustration */}
        <div className="hidden md:flex absolute right-0 top-1/2 z-20 items-center justify-center h-38 w-38 -translate-y-1/2 m-12">
          <Image src={img} alt={title} fill className="object-contain" />
        </div>
      </div>
    </motion.div>
  );
}
