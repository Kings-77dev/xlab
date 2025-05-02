// components/PricingCTA.tsx
import Link from "next/link";

export default function PricingCTA() {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto bg-black rounded-2xl p-12 flex flex-col md:flex-row items-center justify-between">
        <div className="md:flex-1 mb-6 md:mb-0">
          <h2 className="text-3xl font-bold text-white">Still Unsure?</h2>
          <p className="mt-2 text-gray-300">
            Schedule a free consultation, and we&apos;ll tailor a plan just for you.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-accent-dark transition"
        >
          Book a Free Call
        </Link>
      </div>
    </section>
  );
}