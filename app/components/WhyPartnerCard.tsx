// components/WhyPartnerCard.tsx
"use client";

import Image from "next/image";

interface WhyPartnerCardProps {
  icon: string;
  title: string;
  desc: string;
  bgClass: string;
  accentClass: string;
}

export default function WhyPartnerCard({ icon, title, desc, bgClass, accentClass }: WhyPartnerCardProps) {
  return (
    <div className={`${bgClass} relative overflow-hidden rounded-2xl h-80 text-white`}>      
      {/* Decorative quarter-circle in top-right */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none">
        <div className={`${accentClass} absolute bottom-0 left-0 w-32 h-32 rounded-full`} />
      </div>
      {/* Content pinned bottom-left */}
      <div className="absolute bottom-6 left-6 max-w-[75%] z-10">
        <div className="w-14 h-14 mb-4">
          <Image src={icon} alt={title} width={56} height={56} className="object-contain" />
        </div>
        <h3 className="text-xl md:text-3xl font-semibold mb-2">{title}</h3>
        <p className="text-sm md:text-base leading-relaxed opacity-90">{desc}</p>
      </div>
    </div>
  );
}