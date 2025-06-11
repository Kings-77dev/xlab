// components/ServicesCTA.tsx
"use client";

import Link from "next/link";

export default function ServicesCTA() {
  return (
    <section className="py-16 px-6 bg-background md:px-12">
      {/* Glow wrapper */}
      <div className="relative w-full">
        {/* 1) Glow behind the card */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -inset-4 rounded-2xl blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(235,192,45,0.4) 0%, transparent 70%)",
          }}
        />

        {/* 2) Actual CTA card */}
        <div className="relative max-w-5xl mx-auto bg-black rounded-2xl p-12 flex flex-col md:flex-row items-center justify-between">
          {/* Text */}
          <div className="md:flex-1 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-white">
              Need a Quote On a Website Re-Design Or a New Project?
            </h2>
            <p className="mt-2 text-gray-300 max-w-lg">
              From design and development to SEO and ongoing support, we’ve got
              the expertise to transform your online presence. Let’s discuss
              your project and get you the results you deserve.
            </p>
          </div>

          {/* Button */}
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-accent-dark transition"
          >
            Book a Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}