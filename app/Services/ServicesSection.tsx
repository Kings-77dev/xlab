// components/ServicesSection.tsx
import { PencilIcon, ChartBarIcon, CodeBracketIcon, WrenchIcon } from "@heroicons/react/24/solid";
import ServiceCard from "./ServicesCard";

const services = [
  {
    icon: PencilIcon,
    title: "Web Design",
    text: "Clean, responsive designs that reflect your brand and connect with your audience.",
  },
  {
    icon: ChartBarIcon,
    title: "Search Engine Optimisation",
    text: "We help your site get found on Google by optimizing content, structure, and speed.",
  },
  {
    icon: CodeBracketIcon,
    title: "Web Development",
    text: "Fast, scalable websites built with clean code and smart tech — easy to manage and built to grow.",
  },
  {
    icon: WrenchIcon,
    title: "Maintenance & Support",
    text: "Ongoing updates, backups, and expert support to keep your site secure, smooth, and stress-free.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-gray-100 py-16 px-6 md:px-0 md:py-0">
      <div className=" mx-auto  rounded-2xl p-12 space-y-8">
        {/* Heading */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <p className="text-gray-700">
            Smart, modern websites built to grow your business. From full redesigns to ongoing support — we’ve got you covered.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 p-6">
          {services.map((svc, idx) => (
            <ServiceCard
              key={idx}
              icon={svc.icon}
              title={svc.title}
              text={svc.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}