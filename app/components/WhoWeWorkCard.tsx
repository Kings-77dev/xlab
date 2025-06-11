// components/WhoWeWorkCard.tsx
import Image from "next/image";
import { ClockIcon } from "@heroicons/react/24/outline";

interface WhoWeWorkCardProps {
  idx: number;
  title: string;
  desc: string;
  graphicSrc?: string;
  duration?: string;    // e.g. "2–4 Days"
}

export default function WhoWeWorkCard({
  idx,
  title,
  desc,
  graphicSrc,
  duration,
}: WhoWeWorkCardProps) {
  return (
    <div className="relative w-full h-80">
      {/* 1) Glow behind */}
      <div
        className="absolute -inset-4 rounded-2xl blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, rgba(235, 191, 45, 0.3), transparent 70%)",
        }}
      />

      {/* 2) Decorative quarter-circle bottom-left (above card) */}
      <div className="absolute bottom-0 left-0 w-16 h-16 overflow-hidden pointer-events-none z-20">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full" />
      </div>

      {/* 3) Card container */}
      <div className="relative flex w-full h-full rounded-2xl bg-[#111] border border-gray-700 overflow-hidden z-10">
        {/* Left column: index + text + optional duration badge */}
        <div className="flex-1 max-w-md px-10 py-8 flex flex-col">
          <div className="text-3xl font-bold text-white text-opacity-20 mb-4">
            {String(idx).padStart(2, "0")}
          </div>
          <h3 className="text-3xl font-semibold text-white mb-4">{title}</h3>
          <p className="text-gray-300 leading-relaxed mb-6">{desc}</p>
          {duration && (
            <span className="inline-flex items-center space-x-2 bg-gray-800/50 border border-gray-600 rounded-full px-4 py-2 text-sm text-gray-200">
              <ClockIcon className="h-5 w-5" />
              <span>{duration}</span>
            </span>
          )}
        </div>

        {/* Right column: graphic */}
        <div className="absolute right-0 top-1/2 z-20 flex h-40 w-40 -translate-y-1/2 items-center justify-center pr-8">
          {graphicSrc ? (
            <div className="relative h-full w-full">
              <Image
                src={graphicSrc}
                alt={title}
                fill
                className="object-contain"
              />
            </div>
          ) : (
            <svg
              viewBox="0 0 100 100"
              className="h-full w-full animate-pulseOpacity"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="10"
                y="10"
                width="60"
                height="60"
                rx="8"
                fill="#ED2A4F"
                fillOpacity="0.6"
              />
              <rect
                x="20"
                y="20"
                width="60"
                height="60"
                rx="8"
                fill="white"
                fillOpacity="0.15"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}