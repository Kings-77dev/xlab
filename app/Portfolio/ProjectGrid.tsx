// // pages/portfolio.tsx
// import Head from "next/head";
// import Link from "next/link";
// import Image from "next/image";
// import { StarIcon } from "@heroicons/react/24/solid";

// interface Project {
//   year: number;
//   client: string;
//   title: string;
//   href: string;
//   img: string;
//   tags: string[];
// }

// const projects: Project[] = [
//   {
//     year: 2023,
//     client: "Garry Neville",
//     title: "Refreshing Garry Neville’s digital presence",
//     href: "/projects/garry-neville",
//     img: "/projects/project-1.jpg",
//     tags: ["Branding", "Website", "SEO"],
//   },
//   {
//     year: 2024,
//     client: "Sketch Studios",
//     title: "A workplace consultancy creating inspiring environments",
//     href: "/projects/sketch-studios",
//     img: "/projects/project-2.jpg",
//     tags: ["Consulting", "UX"],
//   },
//   {
//     year: 2024,
//     client: "Enabl",
//     title: "Reimagining the built environment",
//     href: "/projects/enabl",
//     img: "/projects/project-3.jpg",
//     tags: ["Architecture", "Web"],
//   },
//   {
//     year: 2024,
//     client: "Forma",
//     title: "Bringing architectural ideas to life",
//     href: "/projects/forma",
//     img: "/projects/project-1.jpg",
//     tags: ["Branding", "Maintenance"],
//   },
//   // …add any additional projects here…
// ];

// function renderCard(p: Project) {
//   return (
//     <Link
//       key={p.href}
//       href={p.href}
//       className="group block relative rounded-3xl overflow-hidden"
//     >
//       {/* tag pills on hover */}
//       <div className="absolute bg-black p-2 -top-px -right-px pl-3 pb-3 rounded-l-4xl flex flex-wrap justify-center items-center gap-2 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out z-10">
//         {p.tags.map((tag, i) => (
//           <span
//             key={tag}
//             className={`bg- text-white px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ease-out delay-${i * 100}`}
//           >
//             {tag}
//           </span>
//         ))}
//       </div>

//       {/* project image */}
//       <div className="relative w-full h-64 md:h-80 bg-gray-800">
//         <Image
//           src={p.img}
//           alt={p.title}
//           fill
//           className="object-cover transition-transform group-hover:scale-105"
//         />
//       </div>

//       {/* meta */}
//       <div className="px-2 mt-4">
//         <p className="text-sm text-gray-400">
//           {p.year} • {p.client}
//         </p>
//         <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-1">
//           {p.title}
//         </h3>
//       </div>
//     </Link>
//   );
// }

// export default function PortfolioPage() {
//   return (
//     <>
//       <Head>
//         <title>Portfolio — Design Point Digital</title>
//       </Head>

//       {/* Hero */}
//       <section className="pt-24 pb-12 px-6 md:px-12 text-center ">
//         <p className="text-sm text-gray-400 mb-2">• Our Work</p>
//         <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
//           Our Portfolio
//         </h1>
//         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//           Explore a selection of projects where we’ve combined modern design
//           and performance-driven development to help brands shine online.
//         </p>
//       </section>

//       {/* Grid of all projects */}
//       <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
//           {projects.map(renderCard)}
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-16 px-6 md:px-12 text-center">
//         <p className="text-xl font-semibold text-foreground mb-4">
//           Like what you see?
//         </p>
//         <Link href="/contact">
//           <button className="bg-primary text-background px-6 py-3 rounded-full font-medium hover:bg-accent transition">
//             Contact Us
//           </button>
//         </Link>
//         <div className="mt-6 flex justify-center items-center gap-1 text-yellow-400">
//           {[...Array(5)].map((_, i) => (
//             <StarIcon key={i} className="h-5 w-5" />
//           ))}
//           <span className="ml-2 text-sm text-gray-400">Google reviews</span>
//         </div>
//       </section>
//     </>
//   );
// }


"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Project {
  year: number;
  client: string;
  title: string;
  href: string;
  img: string;
  categories: string[]; // ← make sure your data has this
  tags: string[];
}

interface ProjectGridProps {
  projects: Project[];
  selectedCategory: string;
}

export default function ProjectGrid({
  projects,
  selectedCategory,
}: ProjectGridProps) {
  const filtered =
    selectedCategory === "All Projects"
      ? projects
      : projects.filter((p) =>
          p.categories.includes(selectedCategory)
        );

  return (
    <section className="py-16 px-6 md:px-12 ma mx-auto bg-background">
      {/* Optional sub-heading */}
      {selectedCategory !== "All Projects" && (
        <h2 className="text-4xl font-bold text-white mb-8">
          {selectedCategory} Projects
        </h2>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {filtered.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="group block relative rounded-3xl overflow-hidden"
          >
            {/* hover-tags */}
            <div className="absolute bg-black p-2 -top-px right-px pl-3 pb-3 rounded-4xl flex flex-wrap items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out z-10">
              {p.tags.map((tag, i) => (
                <span
                  key={i}
                  className={`text-white px-3 py-1  text-xs font-medium transition-all duration-300 ease-out delay-${i * 100}`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* image */}
            <div className="relative w-full h-64 md:h-140 bg-gray-800">
              <Image
                src={p.img}
                alt={p.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>

            {/* meta */}
            <div className="px-2 mt-4">
              <p className="text-sm text-gray-400">
                {p.year} • {p.client}
              </p>
              <h3 className="text-xl md:text-2xl font-semibold text-white mt-1">
                {p.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}