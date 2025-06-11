// components/SLACallToAction.tsx
"use client";

import Link from "next/link";
import { CheckIcon } from "@heroicons/react/24/solid";

export default function SLACallToAction() {
  const items = [
    'Critical issues: 1 hr',
    'Standard requests: 4 hrs',
    'Scheduled maintenance windows',
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-background text-foreground">
      <div className="relative max-w-6xl mx-auto">
        {/* Glow halo behind card */}
        <div
          aria-hidden="true"
          className="absolute -inset-4 rounded-2xl blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(235,192,45,0.4), transparent 70%)",
          }}
        />

        {/* Card container */}
        <div className="relative bg-[#111] border border-gray-700 rounded-2xl overflow-hidden p-12 flex flex-col md:flex-row gap-8 z-10">
          {/* SLA list */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Service Response Times
            </h2>
            <ul className="space-y-3">
              {items.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-gray-300">
                  <CheckIcon className="h-5 w-5 flex-shrink-0 text-primary mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA column: constrained width on md+ */}
          <div className="w-full md:w-1/3 max-w-lg flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Need dedicated support?
            </h3>
            <p className="text-gray-400 mb-6">
              Select the plan that fits your business and get peace of mind.
            </p>
            <Link
              href="/contact"
         className="inline-block w-1/2 bg-primary text-white px-4 py-2 rounded-lg text-base text-center font-bold hover:scale-115 hover:bg-primary transition"

            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}