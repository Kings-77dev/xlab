// components/PortfolioClient.tsx
"use client";

import { useState } from "react";
import PortfolioHero from "./PortfolioHero";
import ProjectGrid from "./ProjectGrid";
import PortfolioCTA from "./PortfolioCTA";

const categories = [
  "All Projects",
  "Legal",
  "Real Estate",
  "Technology",
  "Healthcare",
  "Finance",
  "Services",
];

const projects = [
  // — Original four —
  {
    year: 2023,
    client: "Garry Neville",
    title: "Refreshing Garry Neville’s digital presence",
    href: "/projects/garry-neville",
    img: "/projects/project-1.jpg",
    categories: ["Real Estate", "Branding"],
    tags: ["Branding", "Website", "SEO"],
  },
  {
    year: 2024,
    client: "Sketch Studios",
    title: "A workplace consultancy creating inspiring environments",
    href: "/projects/sketch-studios",
    img: "/projects/project-2.jpg",
    categories: ["Services", "Technology"],
    tags: ["Consulting", "UX"],
  },
  {
    year: 2024,
    client: "Enabl",
    title: "Reimagining the built environment",
    href: "/projects/enabl",
    img: "/projects/project-3.jpg",
    categories: ["Real Estate", "Architecture"],
    tags: ["Architecture", "Web"],
  },
  {
    year: 2024,
    client: "Forma",
    title: "Bringing architectural ideas to life",
    href: "/projects/forma",
    img: "/projects/project-4.jpg",
    categories: ["Real Estate", "Branding"],
    tags: ["Branding", "Maintenance"],
  },

  // — One for each additional category —
  {
    year: 2024,
    client: "Kil Gates Law",
    title: "Premier Criminal Defence Law Firm",
    href: "/projects/kil-gates",
    img: "/projects/project-5.jpg",
    categories: ["Legal", "Services"],
    tags: ["Legal", "Consulting"],
  },
  {
    year: 2024,
    client: "TechNova",
    title: "Revamping TechNova’s product platform",
    href: "/projects/technova",
    img: "/projects/project-6.jpg",
    categories: ["Technology", "Web"],
    tags: ["Technology", "Product"],
  },
  {
    year: 2024,
    client: "HealthPlus Clinic",
    title: "Modernizing HealthPlus patient portal",
    href: "/projects/healthplus",
    img: "/projects/project-7.jpg",
    categories: ["Healthcare", "UX"],
    tags: ["Healthcare", "UX"],
  },
  {
    year: 2024,
    client: "FinanceCorp",
    title: "Investor relations website rebuild",
    href: "/projects/finance-corp",
    img: "/projects/project-8.jpg",
    categories: ["Finance", "Branding"],
    tags: ["Finance", "Branding"],
  },
  {
    year: 2024,
    client: "ServEase",
    title: "Streamlining ServEase service directory",
    href: "/projects/servease",
    img: "/projects/project-9.jpg",
    categories: ["Services", "UX"],
    tags: ["Services", "UX"],
  },
];

export default function PortfolioClient() {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("All Projects");

  return (
    <>
      <PortfolioHero
        categories={categories}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <ProjectGrid
        projects={projects}
        selectedCategory={selectedCategory}
      />
      <PortfolioCTA />
    </>
  );
}