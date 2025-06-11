

// components/IncludedInSEOCards.tsx
"use client";

// import Image from "next/image";

interface IncludedInSEOCardsProps {
  icon: string;
  title: string;
  desc: string;
  bgClass: string;
  accentClass: string;
}

export default function IncludedInSEOCards({
  title,
  desc,
  bgClass,
  accentClass,
}: IncludedInSEOCardsProps) {
  return (
    <div
      className={`${bgClass} relative overflow-hidden rounded-2xl h-64 lg:h-100 text-white`}
    >
      {/* Decorative quarter-circle */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none">
        <div
          className={`absolute bottom-0 left-0 w-32 h-32 ${accentClass} rounded-full`}
        />
      </div>

      {/* Card content pinned bottom-left */}
      <div className="absolute bottom-6 left-6 max-w-[75%] z-10">
        <h3 className="text-xl md:text-3xl font-semibold mb-2">{title}</h3>
        <p className="text-md leading-relaxed opacity-90">{desc}</p>
      </div>
    </div>
  );
}
