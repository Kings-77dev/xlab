// // components/ServiceOverviewCard.tsx
// "use client";

// interface MaintainanceServicesCardProps {
//   title: string;
//   desc: string;
// }

// export default function ServiceOverviewCard({ title, desc }: MaintainanceServicesCardProps) {
//   return (
//     <div className="relative w-full h-64">
//       {/* Glow halo */}
//       <div
//         className="absolute -inset-4 rounded-2xl blur-3xl"
//         style={{
//           background:
//             "radial-gradient(circle at center, rgba(235,192,45,0.4), transparent 70%)",
//         }}
//       />

//       {/* Card */}
//       <div className="relative flex flex-col justify-center bg-[#111] border border-gray-700 rounded-2xl overflow-hidden text-white h-full z-10">
//         {/* Quarter-circle accent */}
//         <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none">
//           <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary rounded-full" />
//         </div>

//         {/* Content */}
//         <div className="p-8">
//           <h3 className="text-2xl font-semibold mb-2">{title}</h3>
//           <p className="text-gray-300 leading-relaxed">{desc}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// // components/ServiceOverviewCard.tsx
// "use client";

// interface ServiceOverviewCardProps {
//   title: string;
//   desc: string;
// }

// export default function ServiceOverview() {
//   const cards = [
//     {
//       title: "Security",
//       desc: "Patches, vulnerability scans to keep your site safe.",
//       bgClass: "bg-red-900",
//       accentClass: "bg-red-600",
//     },
//     {
//       title: "Uptime & Reliability",
//       desc: "Continuous monitoring and alerts to ensure your site never goes down.",
//       bgClass: "bg-yellow-800",
//       accentClass: "bg-yellow-400",
//     },
//     {
//       title: "Performance",
//       desc: "Speed optimizations and caching for a lightning-fast experience.",
//       bgClass: "bg-green-900",
//       accentClass: "bg-green-400",
//     },
//     {
//       title: "Content Updates",
//       desc: "Text, image edits and CMS training to keep you in control.",
//       bgClass: "bg-blue-900",
//       accentClass: "bg-blue-400",
//     },
//   ];

//   return (
//     <section className="py-16 px-6 md:px-12 bg-background text-foreground">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {cards.map((card, idx) => (
//           <MaintainanceServicesCard
//             key={idx}
//             title={card.title}
//             desc={card.desc}
//             bgClass={card.bgClass}
//             accentClass={card.accentClass}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }Card({ title, desc }: ServiceOverviewCardProps) {
//   return (
//     <div className="relative w-full h-64">
//       {/* Glow halo */}
//       <div
//         className="absolute -inset-4 rounded-2xl blur-3xl"
//         style={{
//           background:
//             "radial-gradient(circle at center, rgba(235,192,45,0.4), transparent 70%)",
//         }}
//       />

//       {/* Card */}
//       <div className="relative flex flex-col justify-center bg-[#111] border border-gray-700 rounded-2xl overflow-hidden text-white h-full z-10">
//         {/* Quarter-circle accent */}
//         <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none">
//           <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary rounded-full" />
//         </div>

//         {/* Content */}
//         <div className="p-8">
//           <h3 className="text-2xl font-semibold mb-2">{title}</h3>
//           <p className="text-gray-300 leading-relaxed">{desc}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// components/MaintenanceServicesCard.tsx
"use client";

interface MaintenanceServicesCardProps {
  title: string;
  desc: string;
  bgClass: string;
  accentClass: string;
}

export default function MaintenanceServicesCard({
  title,
  desc,
  bgClass,
  accentClass,
}: MaintenanceServicesCardProps) {
  return (
    <div
      className={`${bgClass} relative overflow-hidden rounded-2xl h-64 lg:h-80 text-white`}
    >
      {/* Decorative quarter-circle accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none">
        <div
          className={`${accentClass} absolute bottom-0 left-0 w-32 h-32 rounded-full`}
        />
      </div>

      {/* Content pinned bottom-left */}
      <div className="absolute bottom-6 left-6 max-w-[75%] z-10">
        <h3 className="text-xl md:text-3xl font-semibold mb-2">{title}</h3>
        <p className="text-sm md:text-base leading-relaxed opacity-90">
          {desc}
        </p>
      </div>
    </div>
  );
}
