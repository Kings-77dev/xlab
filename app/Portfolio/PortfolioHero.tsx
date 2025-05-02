// components/PortfolioHero.tsx
import Image from "next/image";

export default function PortfolioHero() {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start">
        {/* Text Column */}
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Portfolio</h1>
          <p className="mt-2 text-lg text-gray-700 max-w-2xl">
            A showcase of recent projects where we’ve crafted modern,
            high-impact websites for small businesses.
          </p>
        </div>

        {/* Image Column */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <div className="relative w-full h-48 md:h-80">
        <Image
              src="/portfolio.svg"   // put your image in public/
              alt="Portfolio preview"
              fill
              className="object-cover animated"
            />
          </div>
        </div>
      </div>
    </section>
  );
}