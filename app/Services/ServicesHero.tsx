// components/ServicesHero.tsx
import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row ">
        {/* Text Column */}
        <div className="w-full md:w-2/3 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Expert UI/UX Design & Web Development Under One Roof
          </h1>
          <p className="mt-2 text-lg text-gray-700 max-w-2xl">
            We create smart, modern websites built to grow your business. From
            full redesigns to ongoing support — we’ve got you covered.
          </p>
        </div>

        {/* Image Column */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <div className="relative w-full h-48 md:h-80">
            <Image
              src="/services.svg"
              alt="Illustration of web services"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
