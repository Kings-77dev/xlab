// components/LogoMarquee.tsx
"use client";

import Marquee from "react-fast-marquee";
import {
  CubeIcon,
  RectangleStackIcon,
  ArrowTrendingUpIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";

const items = [
  { Icon: CubeIcon,           label: "Webflow Development" },
  { Icon: RectangleStackIcon, label: "UI/UX Design" },
  { Icon: ArrowTrendingUpIcon,label: "SEO"    },
  { Icon: PlayIcon,           label: "Video Editing" },
  { Icon: RectangleStackIcon, label: "UI/UX Design" },

];

export default function LogoMarquee() {
  return (
    <div className="bg-black py-4">
      <Marquee
        pauseOnHover
        gradient={false}
        speed={50}
        className="flex items-center "
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 flex items-center space-x-4 px-14"
          >
            <item.Icon className="h-8 w-8 text-primary" />
            <span className="font-medium text-xl text-gray-100">
              {item.label}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}