// components/IncludedInSEO.tsx
import Image from "next/image";

const seoItems = [
  {
    icon: "/icons/seo/on-page.svg",
    title: "On-Page SEO",
    desc: "Optimize your website’s structure, content, and keywords to improve search engine rankings.",
  },
  {
    icon: "/icons/seo/technical.svg",
    title: "Technical SEO",
    desc: "Enhance site speed, mobile-friendliness, and indexing to ensure seamless performance.",
  },
  {
    icon: "/icons/seo/link-building.svg",
    title: "Link Building",
    desc: "Gain high-quality backlinks to boost your website’s authority and credibility.",
  },
  {
    icon: "/icons/seo/local.svg",
    title: "Local SEO",
    desc: "Get found by local customers with optimized Google My Business and location-based tactics.",
  },
  {
    icon: "/icons/seo/local.svg",
    title: "Keyword Research",
    desc: "Target the phrases your customers actually search for to drive qualified traffic.",
  },
];

export default function IncludedInSEO() {
  return (
    <section className="py-16 px-6 md:px-12 bg-gray-100 rounded-2xl">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        What’s Included in Our <span className="text-primary">SEO Services</span> 
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {seoItems.map(({ icon, title, desc }, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col h-full"
          >
            <div className="w-12 h-12 mb-4">
              <Image
                src={icon}
                alt={title}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {title}
            </h3>
            <p className="text-gray-600 flex-1">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}