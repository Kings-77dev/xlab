// components/MaintenanceServicesSection.tsx
"use client";

import MaintenanceServicesCard from "./MaintainanceServicesCard";

export default function MaintenanceServicesSection() {
  const cards = [
    {
      title: "Security",
      desc: "Patches, vulnerability scans to keep your site safe.",
      bgClass: "bg-red-900",
      accentClass: "bg-red-600",
    },
    {
      title: "Uptime & Reliability",
      desc: "Continuous monitoring and alerts to ensure your site never goes down.",
      bgClass: "bg-yellow-800",
      accentClass: "bg-yellow-400",
    },
    {
      title: "Performance",
      desc: "Speed optimizations and caching for a lightning-fast experience.",
      bgClass: "bg-green-900",
      accentClass: "bg-green-400",
    },
    {
      title: "Content Updates",
      desc: "Text, image edits and CMS training to keep you in control.",
      bgClass: "bg-blue-900",
      accentClass: "bg-blue-400",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-background text-foreground">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, idx) => (
          <MaintenanceServicesCard
            key={idx}
            title={card.title}
            desc={card.desc}
            bgClass={card.bgClass}
            accentClass={card.accentClass}
          />
        ))}
      </div>
    </section>
  );
}
