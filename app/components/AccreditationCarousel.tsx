// components/AccreditationCarousel.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface AccreditationCarouselProps {
  images: { src: string; alt: string }[];
  interval?: number; // ms between slides
}

export default function AccreditationCarousel({
  images,
  interval = 3000,
}: AccreditationCarouselProps) {
  const [current, setCurrent] = useState(0);

  // cycle the index
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto relative h-32 md:h-40 lg:h-48 overflow-hidden">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-center h-full">
              <Image
                src={img.src}
                alt={img.alt}
                width={200}
                height={100}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}