// // components/WhatWereGoodAt.tsx
// "use client";

// import Image from "next/image";
// import Link from "next/link";

// interface Offering {
//   title: string;
//   img: string;
//   href?: string; // optional link
// }

// const offerings: Offering[] = [
//   {
//     title: "Brand Identity",
//     img: "/seo.svg",
//     href: "/services/brand-identity",
//   },
//   {
//     title: "Websites",
//     img: "/images/websites.jpg",
//     href: "/services/websites",
//   },
//   {
//     title: "SEO",
//     img: "/images/seo.jpg",
//     href: "/services/seo",
//   },
//   {
//     title: "Craft CMS",
//     img: "/images/craft-cms.jpg",
//     href: "/services/craft-cms",
//   },
// ];

// export default function WhatWereGoodAt() {
//   return (
//     <section id="good-at" className="py-16 px-6 md:px-12 bg-background">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <h2 className="text-4xl md:text-[100px] font-bold text-foreground">
//           What We’re Good At
//         </h2>

//         {/* Offerings list */}
//         <div className="mt-12 space-y-8">
//           {offerings.map(({ title, img, href }) => {
//             const Wrapper = href ? Link : "div";
//             const wrapperProps = href
//               ? { href }
//               : {};

//             return (
//               <Wrapper
//                 {...wrapperProps}
//                 key={title}
//                 className="relative block group overflow-hidden"
//               >
//                 {/* Sliding image */}
//                 <div className="absolute inset-y-0 left-0 w-1/2 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0">
//                   <Image
//                     src={img}
//                     alt={title}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>

//                 {/* Title (with separator line below) */}
//                 <div className="relative z-10 border-b border-gray-700 pb-4">
//                   <h3 className="text-4xl md:text-5xl font-bold text-gray-600 group-hover:text-foreground transition-colors duration-300">
//                     {title}
//                   </h3>
//                 </div>
//               </Wrapper>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


// // components/WhatWereGoodAt.tsx
// "use client";

// import Image from "next/image";
// import Link from "next/link";

// interface Offering {
//   title: string;
//   img: string;
//   href?: string; // optional link
// }

// const offerings: Offering[] = [
//   {
//     title: "Brand Identity",
//     img: "/seo.svg",
//     href: "/services/brand-identity",
//   },
//   {
//     title: "Websites",
//     img: "/images/websites.jpg",
//     href: "/services/websites",
//   },
//   {
//     title: "SEO",
//     img: "/images/seo.jpg",
//     href: "/services/seo",
//   },
//   {
//     title: "Craft CMS",
//     img: "/images/craft-cms.jpg",
//     href: "/services/craft-cms",
//   },
// ];

// export default function WhatWereGoodAt() {
//   return (
//     <section id="good-at" className="py-16 px-6 md:px-12 bg-background">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <h2 className="text-4xl md:text-[100px] font-bold text-foreground">
//           What We’re Good At
//         </h2>

//         {/* Offerings list */}
//         <div className="mt-12 space-y-8">
//           {offerings.map(({ title, img, href }) => {
//             const Wrapper = href ? Link : "div";
//             const wrapperProps = href ? { href } : {};

//             return (
//               <Wrapper
//                 {...wrapperProps}
//                 key={title}
//                 className="relative block group overflow-hidden"
//               >
//                 {/* 1) Sliding image “icon” capped at 140×110 */}
//                 <div
//                   className="
//                     absolute inset-y-0 left-0
//                     w-[140px] h-[110px]
//                     transform -translate-x-[140px]
//                     group-hover:translate-x-0
//                     transition-transform duration-500 ease-out
//                     z-0
//                   "
//                 >
//                   <Image
//                     src={img}
//                     alt={title}
//                     fill
//                     className="object-cover"
//                     sizes="(max-width: 640px) 140px, 140px"
//                   />
//                 </div>

//                 {/* 2) Text container shifts right by exactly 140px */}
//                 <div
//                   className="
//                     relative z-10 border-b border-gray-700 pb-4
//                     transform translate-x-0
//                     group-hover:translate-x-[140px]
//                     transition-transform duration-500 ease-out
//                   "
//                 >
//                   <h3 className="text-4xl md:text-5xl font-bold text-gray-600 group-hover:text-foreground transition-colors duration-300">
//                     {title}
//                   </h3>
//                 </div>
//               </Wrapper>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// components/WhatWereGoodAt.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

interface Offering {
  title: string;
  img: string;
  href?: string; // optional link
}

const offerings: Offering[] = [
  {
    title: "Brand Identity",
    img: "/seo.svg",
    href: "/services/brand-identity",
  },
  {
    title: "Websites",
    img: "/images/websites.jpg",
    href: "/services/websites",
  },
  {
    title: "SEO",
    img: "/images/seo.jpg",
    href: "/services/seo",
  },
  {
    title: "Craft CMS",
    img: "/images/craft-cms.jpg",
    href: "/services/craft-cms",
  },
];

export default function WhatWereGoodAt() {
  return (
    <section id="good-at" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <h2 className="text-4xl md:text-[100px] font-bold text-foreground mb-12">
          What We’re Good At
        </h2>

        {/* 3-col grid, first col empty, list in cols 2&3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* empty first column on md+ */}
          <div className="hidden md:block" />

          {/* offerings list spans cols 2-3 */}
          <div className="md:col-span-2 space-y-8">
            {offerings.map(({ title, img, href }) => {
              const Wrapper: React.ElementType = href ? Link : "div";
              const wrapperProps = href ? { href } : {};

              return (
                <Wrapper
                  {...wrapperProps}
                  key={title}
                  className="relative flex overflow-hidden group"
                >
                  {/* sliding image icon */}
                  <div className="flex-shrink-0 w-[140px] h-[110px] -ml-[140px] group-hover:ml-0 transition-all duration-500 ease-out">
                    <div className="relative w-[140px] h-[110px]">
                      <Image
                        src={img}
                        alt={title}
                        fill
                        className="object-cover rounded-lg"
                        sizes="140px"
                      />
                    </div>
                  </div>

                  {/* text + full-width underline */}
                  <div className="flex-1 ml-6 border-b border-gray-700 pb-4">
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-600 group-hover:text-foreground transition-colors duration-300">
                      {title}
                    </h3>
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}