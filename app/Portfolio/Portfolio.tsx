import { useState } from "react";
import Head from "next/head";
import PortfolioHero from "./PortfolioHero";
import ProjectGrid from "./ProjectGrid";

// Make sure each Project in your data has a `categories: string[]` field
const projects = [
  {
    year: 2023,
    client: "Garry Neville",
    title: "Refreshing Garry Neville’s digital presence",
    href: "/projects/garry-neville",
    img: "/projects/project-1.jpg",
    categories: ["Real Estate", "Branding"],
    tags: ["Branding", "Website", "SEO"],
  },
  /* …etc… */
];

const categories = [
  "All Projects",
  "Legal",
  "Real Estate",
  "Technology",
  "Healthcare",
  "Finance",
  "Services",
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState(
    "All Projects"
  );

  return (
    <>
      <Head>
        <title>Portfolio — Design by Kings</title>
      </Head>

      <PortfolioHero
        categories={categories}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <ProjectGrid
        projects={projects}
        selectedCategory={selectedCategory}
      />
    </>
  );
}