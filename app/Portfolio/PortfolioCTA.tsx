// // components/PortfolioCTA.tsx
// import Link from "next/link";

// export default function PortfolioCTA() {
//   return (
//     <section className="py-16 px-6 md:px-12 bg-background">
//       <div className="max-w-5xl mx-auto bg-black rounded-2xl p-12 flex flex-col md:flex-row items-center justify-between">
//         <div className="md:flex-1 mb-6 md:mb-0 space-y-2">
//           <h2 className="text-3xl font-bold text-white">
//             Ready to Start Your Project?
//           </h2>
//           <p className="text-gray-300">
//             Let’s discuss how we can bring your vision to life with a stunning,
//             high-performing website.
//           </p>
//         </div>
//         <Link
//           href="/contact"
//           className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-accent-dark transition"
//         >
//           Get in Touch
//         </Link>
//       </div>
//     </section>
//   );
// }


// components/PortfolioCTA.tsx
"use client";

import Link from "next/link";

export default function PortfolioCTA() {
  return (
    <section className="py-16 px-6 md:px-12 bg-background">
      <div className="relative max-w-5xl mx-auto">
        {/* Glow behind the CTA card */}
        <div
          aria-hidden="true"
          className="absolute -inset-4 rounded-2xl blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(235,192,45,0.4), transparent 70%)",
          }}
        />

        {/* Actual CTA card */}
        <div className="relative bg-black rounded-2xl p-12 flex flex-col md:flex-row items-center justify-between z-10">
          <div className="md:flex-1 mb-6 md:mb-0 space-y-2">
            <h2 className="text-3xl font-bold text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-300">
              Let’s discuss how we can bring your vision to life with a stunning,
              high-performing website.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-medium  hover:scale-110 hover:bg-primary transition"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}