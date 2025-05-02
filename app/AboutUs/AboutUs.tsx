// components/AboutUs.tsx
import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about" className="bg-gray-100 py-16">
      {/* Intro */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-12 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">About Design Point Digital</h2>
        <p className="text-gray-700">
          We partner with small businesses to craft clean, modern websites that
          convert. Born out of a passion for design and performance, our mission
          is simple: make top-tier web design accessible, affordable, and
          results-driven.
        </p>
      </div>

      {/* Our Story */}
      <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
          <p className="text-gray-700 mb-4">
            After years working at larger digital agencies, we saw small
            businesses struggling with cookie-cutter sites or high agency fees.
            So in 2025, we launched Design Point Digital to deliver custom
            solutions without the sticker shock.
          </p>
          <p className="text-gray-700">
            Today, we’ve helped over 50 clients—from local cafés to boutique
            consultants—refresh their online presence and grow their revenue.
          </p>
        </div>
        <div className="w-full h-64 md:h-80 relative rounded-lg overflow-hidden">
          <Image
            src="/team-photo.jpg"
            alt="Design Point Digital team"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-5xl mx-auto mt-16 bg-white rounded-2xl p-12 space-y-8">
        <h3 className="text-2xl font-bold text-center">Our Core Values</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Custom Solutions",
              desc: "Every site is tailored to your brand, goals, and budget.",
            },
            {
              title: "Client-First",
              desc: "Clear communication, honest pricing, and no surprises.",
            },
            {
              title: "Performance Focused",
              desc: "Fast, SEO-optimized sites that turn visitors into customers.",
            },
            {
              title: "Long-Term Partnership",
              desc: "Training, documentation, and support to keep you ahead.",
            },
          ].map((v, i) => (
            <div key={i} className="space-y-2">
              <h4 className="text-lg font-semibold">{v.title}</h4>
              <p className="text-gray-600 text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-5xl mx-auto mt-16 px-6">
        <div className="bg-black rounded-2xl p-12 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:flex-1 space-y-2">
            <h3 className="text-2xl font-bold text-white">
              Ready to learn more about us?
            </h3>
            <p className="text-gray-300">
              Let’s chat and see how we can transform your website into your
              best sales tool.
            </p>
          </div>
          <a
            href="#cta"
            className="bg-accent text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-accent-dark transition"
          >
            Book a Free Call
          </a>
        </div>
      </div>
    </section>
  );
}