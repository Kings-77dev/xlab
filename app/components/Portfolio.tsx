// components/PortfolioSection.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

interface Project {
  year: number;
  client: string;
  title: string;
  href: string;
  img: string;
  tags: string[];
}

const projects: Project[] = [
  {
    year: 2023,
    client: "Garry Neville",
    title: "Refreshing Garry Neville’s digital presence",
    href: "/projects/garry-neville",
    img: "/projects/project-1.jpg",
    tags: ["Branding", "Website", "SEO"],
  },
  {
    year: 2024,
    client: "Sketch Studios",
    title: "A workplace consultancy creating inspiring environments",
    href: "/projects/sketch-studios",
    img: "/projects/project-2.jpg",
    tags: ["Consulting", "UX"],
  },
  {
    year: 2024,
    client: "Enabl",
    title: "Reimagining the built environment",
    href: "/projects/enabl",
    img: "/projects/project-3.jpg",
    tags: ["Architecture", "Web"],
  },
  {
    year: 2024,
    client: "Forma",
    title: "Bringing architectural ideas to life",
    href: "/projects/forma",
    img: "/projects/project-1.jpg",
    tags: ["Branding", "Maintenance"],
  },
];

export default function PortfolioSection() {
  const left = projects.slice(0, 2);
  const right = projects.slice(2, 4);

  function renderCard(p: Project) {
    return (
      <Link
        key={p.href}
        href={p.href}
        className="group block relative"
      >
        {/* tag pills */}
        <div className="absolute  bg-black p-2 -top-px -right-px pl-3 pb-3 rounded-l-4xl flex flex-wrap justify-center items-center gap-2 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out z-10">
          {p.tags.map((tag, i) => (
            <span
              key={tag}
              className={`bg- text-white px-3 p-2 rounded-full text-xs font-medium transition-all duration-800 ease-out delay-${i * 500}`}
            >
              {tag}
            </span>
          ))}
        </div>
  
        {/* image container with rounded corners */}
        <div className="relative w-full h-80 md:h-[70vh] bg-gray-800 rounded-3xl overflow-hidden mb-4">
          <Image
            src={p.img}
            alt={p.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
  
        {/* meta (below image) */}
        <div className="px-1 md:px-2">
          <p className="text-sm text-gray-400">
            {p.year} • {p.client}
          </p>
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-1">
            {p.title}
          </h3>
        </div>
      </Link>
    );
  }

  return (
    <section id="portfolio" className="py-16 px-6 md:px-12  flex flex-wrap">
  <div className="max-w-8xl md:w-full  rounded-2xl p-4 mx-auto flex flex-col-reverse md:flex-row gap-12 md:gap-12">
    {/* left column - cards 1 & 2 + CTA */}
    <div className="flex-1 flex flex-col gap-[10vh]">
      {left.map(renderCard)}

      {/* CTA */}
      <div className="text-center">
        <p className="text-xl font-semibold text-foreground mb-4">
          Like what you see?
        </p>
        <Link href="/contact">
          <button className="bg-primary text-background px-6 py-3 rounded-full font-medium hover:bg-accent transition">
            Contact Us
          </button>
        </Link>
        <div className="mt-4 flex justify-center items-center gap-0.5 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className="h-5 w-5" />
          ))}
          <span className="ml-2 text-sm text-gray-400">Google reviews</span>
        </div>
      </div>
    </div>

    {/* right column - title + cards 3 & 4 */}
    <div className="flex-1">
      {/* Move this title above everything on mobile */}
      <div className="mb-8 md:mb-12">
        <p className="text-sm text-gray-400 mb-1">• Our Work</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Take a look at our projects
        </h2>
      </div>

      <div className="flex flex-col gap-[10vh]">{right.map(renderCard)}</div>
    </div>
  </div>
</section>
  );
}
