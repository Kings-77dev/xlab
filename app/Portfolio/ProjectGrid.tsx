// components/ProjectGrid.tsx
import Image from "next/image";
import Link from "next/link";

const projects = [
  { title: "Brand Refresh for Café Nero", image: "/projects/project-1.jpg", href: "/projects/1" },
  { title: "E-Commerce Site for Green Goods", image: "/projects/project-2.png", href: "/projects/2" },
  { title: "Portfolio Site for Jane Doe", image: "/projects/project-3.png", href: "/projects/3" },
  { title: "Booking Platform for FitLife", image: "/projects/project-4.png", href: "/projects/4" },
  { title: "Landing Page for Tech Summit", image: "/projects/project-5.png", href: "/projects/5" },
  { title: "Nonprofit Site for Hope Foundation", image: "/projects/project-6.png", href: "/projects/6" },
];

export default function ProjectGrid() {
  return (
    <section id="portfolio" className="py-16 px-6 md:px-12 bg-gray-100">
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((p, i) => (
          <Link
            key={i}
            href={p.href}
            className="group block overflow-hidden rounded-2xl shadow-lg"
          >
            <div className="relative h-48 md:h-100">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-accent transition-colors">
              {p.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}