// // // components/IncludedServices.tsx
// // "use client";
// // export default function IncludedServices() {
// //   const items = [
// //     "Core Platform & Plugin Updates",
// //     "Daily/Weekly Backups & Restore Testing",
// //     "24/7 Uptime & Error Monitoring",
// //     "Security Scans & Malware Removal",
// //     "Performance Tuning (caching, image optimization)",
// //     "Content Edits & Minor Design Tweaks",
// //     "Monthly Analytics & Health Reports",
// //   ];
// //   return (
// //     <section className="py-16 px-6 md:px-12 bg-background text-foreground">
// //       <div className="max-w-6xl mx-auto">
// //         <h2 className="text-3xl font-bold mb-6">What’s Included</h2>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
// //           {items.map(i => (
// //             <div key={i} className="flex items-start space-x-2">
// //               <span className="text-primary">•</span><span>{i}</span>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// // // components/IncludedServices.tsx
// // "use client";

// // export default function IncludedServices() {
// //   const items = [
// //     "Core Platform & Plugin Updates",
// //     "Daily/Weekly Backups & Restore Testing",
// //     "24/7 Uptime & Error Monitoring",
// //     "Security Scans & Malware Removal",
// //     "Performance Tuning (caching, image optimization)",
// //     "Content Edits & Minor Design Tweaks",
// //     "Monthly Analytics & Health Reports",
// //   ];

// //   return (
// //     <section className="py-16 px-6 md:px-12 bg-background text-foreground">
// //       <div className="max-w-6xl mx-auto">
// //         {/* Card wrapper */}
// //         <div className="relative w-full bg-[#111] rounded-2xl overflow-hidden p-12">
// //           {/* Glow behind card */}
// //           <div
// //             className="absolute -inset-4 rounded-2xl blur-3xl pointer-events-none"
// //             style={{
// //               background:
// //                 "radial-gradient(circle at center, rgba(235,192,45,0.4), transparent 70%)",
// //             }}
// //           />

// //           {/* Quarter-circle accent */}
// //           <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none">
// //             <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary rounded-full" />
// //           </div>

// //           {/* Inner content */}
// //           <h2 className="text-3xl font-bold mb-6">What’s Included</h2>
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
// //             {items.map((item) => (
// //               <div key={item} className="flex items-start space-x-3">
// //                 <span className="mt-1 text-primary">•</span>
// //                 <span>{item}</span>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // components/IncludedServices.tsx
// "use client";

// import IncludedServicesCard from "./IncludedServicesCard";

// export default function IncludedServices() {
//   // Single card data:
//   const card = {
//     icon: "/icons/seo/technical.svg",
//     title: "Comprehensive Maintenance & Support",
//     points: [
//       "Core Platform & Plugin Updates",
//       "Daily/Weekly Backups & Restore Testing",
//       "24/7 Uptime & Error Monitoring",
//       "Security Scans & Malware Removal",
//       "Performance Tuning (caching, image optimization)",
//       "Content Edits & Minor Design Tweaks",
//       "Monthly Analytics & Health Reports",
//     ],
//     bgClass: "bg-black",
//     accentClass: "bg-primary",
//   };

//   return (
//     <section className="py-16 px-6 md:px-12 bg-background text-foreground">
//       <div className="max-w-7xl mx-auto">
//         <IncludedServicesCard desc={""} {...card} />
//       </div>
//     </section>
//   );
// }


// components/IncludedServices.tsx
"use client";

import IncludedMaintenanceCard from "./IncludedServicesCard";


export default function IncludedServices() {
  return (
    <section className="py-16 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <IncludedMaintenanceCard />
      </div>
    </section>
  );
}