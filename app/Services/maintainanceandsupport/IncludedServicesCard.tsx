// // components/IncludedServicesCard.tsx
// "use client";

// interface IncludedServicesCardProps {
//   title: string;
//   desc: string;
//   bgClass: string;
//   accentClass: string;
// }

// export default function IncludedServicesCard({
//   title,
//   desc,
//   bgClass,
//   accentClass,
// }: IncludedServicesCardProps) {
//   return (
//     <div className="relative w-full h-64">
//       {/* Glow halo */}
//       <div
//         aria-hidden="true"
//         className="absolute -inset-4 rounded-2xl blur-3xl pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(circle at center, rgba(235,192,45,0.4), transparent 70%)",
//         }}
//       />

//       {/* Card */}
//       <div className={`${bgClass} relative overflow-hidden rounded-2xl h-full text-white z-10`}>
//         {/* Quarter-circle accent */}
//         <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none">
//           <div
//             className={`${accentClass} absolute bottom-0 left-0 w-32 h-32 rounded-full`}
//           />
//         </div>

//         {/* Content pinned bottom-left */}
//         <div className="absolute bottom-6 left-6 max-w-[75%]">
//           <h3 className="text-xl md:text-3xl font-semibold mb-2">{title}</h3>
//           <p className="text-md leading-relaxed opacity-90">{desc}</p>
//         </div>
//       </div>
//     </div>
//   );
// }


// // components/IncludedServicesCard.tsx
// "use client";

// interface IncludedServicesCardProps {
//   title: string;
//   desc: string;
//   bgClass: string;
//   accentClass: string;
// }

// export default function IncludedServicesCard({
//   title,
//   desc,
//   bgClass,
//   accentClass,
// }: IncludedServicesCardProps) {
//   return (
//     <div className="relative w-full h-80">
//       {/* Glow halo */}
//       <div
//         aria-hidden="true"
//         className="absolute -inset-4 rounded-2xl blur-3xl pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(circle at center, rgba(235,192,45,0.4), transparent 70%)",
//         }}
//       />

//       {/* Card container */}
//       <div className={`${bgClass} relative overflow-hidden rounded-2xl h-full text-white z-10`}>
//         {/* Quarter-circle accent */}
//         <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none">
//           <div
//             className={`${accentClass} absolute bottom-0 left-0 w-32 h-32 rounded-full`}
//           />
//         </div>

//         {/* Content pinned bottom-left */}
//         <div className="absolute bottom-6 left-6 max-w-[75%]">
//           <h3 className="text-xl md:text-3xl font-semibold mb-2">{title}</h3>
//           <p className="text-sm md:text-base leading-relaxed opacity-90">{desc}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// components/IncludedMaintenanceCard.tsx
"use client";

import { CheckIcon } from "@heroicons/react/24/solid";

export default function IncludedMaintenanceCard() {
  const items = [
    "Core Platform & Plugin Updates",
    "Daily/Weekly Backups & Restore Testing",
    "24/7 Uptime & Error Monitoring",
    "Security Scans & Malware Removal",
    "Performance Tuning (caching, image optimization)",
    "Content Edits & Minor Design Tweaks",
    "Monthly Analytics & Health Reports",
  ];

  return (
    <div className="relative w-full px-6">
      {/* Glow halo */}
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-2xl blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(235,192,45,0.4), transparent 70%)",
        }}
      />

      {/* Card container */}
      <div className="relative flex flex-col md:flex-row w-full h-auto md:h-90 bg-background border border-gray-700 rounded-2xl overflow-hidden text-foreground z-10">
        {/* Quarter-circle accent */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary rounded-full" />
        </div>

        {/* Content */}
        <div className="flex-1 max-w-md px-10 py-12 flex flex-col">
          <h3 className="text-3xl font-semibold mb-4">Maintenance & Support</h3>
          <ul className="space-y-3 flex-grow">
            {items.map((pt, i) => (
              <li key={i} className="flex items-start space-x-2">
                <CheckIcon className="h-5 w-5 flex-shrink-0 text-primary mt-1" />
                <span className="text-sm leading-relaxed">{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}