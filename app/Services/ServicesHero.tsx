// // components/ServicesHero.tsx
// import Image from "next/image";

// export default function ServicesHero() {
//   return (
//     <section className="bg-background py-16 px-6 md:px-12">
//       <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row ">
//         {/* Text Column */}
//         <div className="w-full md:w-2/3 space-y-4">
//           <h1 className="text-4xl md:text-5xl font-bold">
//             Expert UI/UX Design & Web Development Under One Roof
//           </h1>
//           <p className="mt-2 text-lg text-gray-700 max-w-2xl">
//             We create smart, modern websites built to grow your business. From
//             full redesigns to ongoing support — we’ve got you covered.
//           </p>
//         </div>

//         {/* Image Column */}
//         <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
//           <div className="relative w-full h-48 md:h-80">
//             <Image
//               src="/services.svg"
//               alt="Illustration of web services"
//               fill
//               className="object-contain"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// components/ServicesHero.tsx
"use client";

import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <motion.section
      id="services-hero"
      className="relative bg-background text-foreground py-24 px-6 md:px-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Main heading */}
        <h1 className="font-serif text-4xl md:text-[100px] font-bold leading-tight">
          Expert UI/UX Design &<br className="hidden md:inline" />
          Web Development Under One Roof
        </h1>

        {/* Decorative dot */}
        <div className="mt-4 text-2xl">•</div>

        {/* Subheading */}
        <p className="mt-8 text-lg md:text-xl max-w-2xl mx-auto text-gray-400">
          We create smart, modern websites built to grow your business. From full redesigns
          to ongoing support — we’ve got you covered.
        </p>
      </div>
    </motion.section>
  );
}