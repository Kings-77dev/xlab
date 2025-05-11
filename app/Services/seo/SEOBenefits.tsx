// components/SEOBenefits.tsx
import Image from "next/image";

const benefits = [
  {
    img: "/icons/keyword.svg",
    title: "Keyword Research",
    desc: "Target the phrases your customers actually search for to drive qualified traffic.",
  },
  {
    img: "/icons/onpage.svg",
    title: "On-Page Optimisation",
    desc: "Fine-tune titles, headings, metadata and content structure for maximum relevance.",
  },
  {
    img: "/icons/technical.svg",
    title: "Technical SEO",
    desc: "Speed, mobile-friendliness, crawlability and security audits to keep Google happy.",
  },
  {
    img: "/icons/link.svg",
    title: "Link Building",
    desc: "Earn high-quality backlinks that boost your domain authority and rankings.",
  },
];

export default function SEOBenefits() {
  return (
    <section id="seo-benefits" className="bg-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {benefits.map(({ img, title, desc }, i) => (
          <div key={i} className="flex space-x-4">
            <div className="w-12 h-12 flex-shrink-0">
              <Image src={img} alt={title} width={48} height={48} className="object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}