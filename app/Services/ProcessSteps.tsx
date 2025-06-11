// components/ProcessSteps.tsx
import {
    MagnifyingGlassCircleIcon,
    ClipboardDocumentListIcon,
    CodeBracketIcon,
    RocketLaunchIcon,
  } from "@heroicons/react/24/outline";
  
  const steps = [
    {
      icon: MagnifyingGlassCircleIcon,
      title: "01. Discover & Research",
      desc: "We dive deep into your brand, audience, and objectives to set a solid foundation.",
    },
    {
      icon: ClipboardDocumentListIcon,
      title: "02. Plan & Prototype",
      desc: "We translate insights into a strategic blueprint and interactive wireframes.",
    },
    {
      icon: CodeBracketIcon,
      title: "03. Develop & Optimize",
      desc: "We build your site with clean code, SEO best practices, and lightning-fast performance.",
    },
    {
      icon: RocketLaunchIcon,
      title: "04. Launch & Improve",
      desc: "We deploy, monitor, and refine—ensuring ongoing growth and ROI.",
    },
  ];
  
  export default function ProcessSteps() {
    return (
      <section id="process" className="bg-background py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our 4-Step Web Process
          </h2>
          <p className="mt-4 text-gray-400">
            A transparent, collaborative workflow—from research to launch—that
            turns your vision into a high-impact website.
          </p>
        </div>
  
        <div className="max-w-5xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="p-4 bg-primary rounded-full">
                <step.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }