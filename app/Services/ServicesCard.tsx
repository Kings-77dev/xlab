// // components/ServiceCard.tsx
// "use client";

// import Image from "next/image";
// import Link from "next/link";

// interface ServiceCardProps {
//   title: string;
//   text: string;
//   svg: string;
//   href?: string;
// }

// export default function ServiceCard({
//   title,
//   text,
//   svg,
//   href = "/services",
// }: ServiceCardProps) {
//   return (
//     <div className="relative w-full h-auto md:h-80">
//       {/* Glow behind */}
//       <div
//         className="absolute -inset-4 rounded-2xl blur-3xl"
//         style={{
//           background:
//             "radial-gradient(circle at center, rgba(235,192,45,0.4), transparent 70%)",
//         }}
//       />

//       {/* Card container */}
//       <div className="relative flex w-full h-full bg-[#111] border border-gray-700 rounded-2xl overflow-hidden z-10">
//         {/** 1) Decorative quarter-circle top-right **/}
//         <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none">
//           <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary rounded-full" />
//         </div>

//         {/** 2) Left: title + text + button **/}
//         <div className="flex-1 max-w-md px-10 py-12 flex flex-col">
//           <h3 className="text-3xl font-semibold text-white mb-4">{title}</h3>
//           <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
//             {text}
//           </p>
//           <Link
//             href={href}
//             className="mt-4 inline-block bg-primary text-background px-4 py-2 rounded-full font-medium hover:bg-accent transition"
//           >
//             Learn More
//           </Link>
//         </div>

//         {/** 3) Right: SVG illustration **/}
//         <div className="absolute right-0 top-1/2 z-20 flex h-38 w-38 -translate-y-1/2 items-center justify-center m-12">
//           <Image
//             src={svg}
//             alt={title}
//             fill
//             className="object-contain"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }



// components/ServiceCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  text: string;
  svg: string;
  href?: string;
    idx?: number;

}

export default function ServiceCard({
  title,
  text,
  svg,
  href = "/services",
}: ServiceCardProps) {
  return (
    <div className="relative w-full h-auto md:h-80">
      {/* Glow behind */}
      <div
        className="absolute -inset-4 rounded-2xl blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, rgba(235,192,45,0.4), transparent 70%)",
        }}
      />

      {/* Card container */}
      <div className="relative flex flex-col md:flex-row w-full h-full bg-[#111] border border-gray-700 rounded-2xl overflow-hidden z-10">
        {/** 1) Decorative quarter-circle top-right **/}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary rounded-full" />
        </div>

        {/** 2) Left: title + text + button **/}
        <div className="flex-1 max-w-md px-10 py-12 flex flex-col">
          <h3 className="text-3xl font-semibold text-white mb-4">{title}</h3>
          <p className="text-gray-300 leading-relaxed mb-6 flex-grow">{text}</p>
          <Link
            href={href}
            className="mt-4 block w-full md:w-1/2 md:inline-block  bg-primary text-background px-4 py-2 rounded-xl font-medium hover:bg-accent transition"
          >
            Learn More
          </Link>
        </div>

        {/** 3) Right: SVG illustration (hidden on mobile) **/}
        <div className="hidden md:flex absolute right-0 top-1/2 z-20 items-center justify-center h-38 w-38 -translate-y-1/2 m-12">
          <Image
            src={svg}
            alt={title}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}