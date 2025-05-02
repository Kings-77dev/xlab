// components/NavBar.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname() || "";

  return (
    <header className="border-b border-gray-200">
      <div className="max-w-9xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href={"/"}>
            <span className="text-primary">LO</span>GO
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-lg">
          <Link
            href="/"
            prefetch
            className={`
    ${
      pathname === "/"
        ? "border-b-2 border-primary text-primary font-medium"
        : "border-b-2 border-transparent text-gray-900"
    }
    hover:text-accent transition
  `}
          >
            Home
          </Link>

          {/* Portfolio */}
          <Link
            href="/Portfolio"
            prefetch
            className={`
                ${
                  pathname === "/Portfolio"
                    ? "border-b-2 border-primary text-primary font-medium"
                    : "border-b-2 border-transparent text-gray-900"
                }
                hover:text-accent transition
              `}
          >
            Portfolio
          </Link>

         

          

          {/* <Link
            href="#about"
            className="text-gray-900 hover:text-accent transition"
          >
            About us
          </Link> */}

          {/* Services */}
          <Link
            href="/Services"
            prefetch
            className={`
                ${
                  pathname === "/Services"
                    ? "border-b-2 border-primary text-primary font-medium"
                    : "border-b-2 border-transparent text-gray-900"
                }
                hover:text-accent transition
              `}
          >
            Services
          </Link>

         

           <Link
            href="/Pricing"
            prefetch
            className={`
                ${
                  pathname === "/Pricing"
                    ? "border-b-2 border-primary text-primary font-medium"
                    : "border-b-2 border-transparent text-gray-900"
                }
                hover:text-accent transition
              `}
          >
            Pricing
          </Link>
           <Link
            href="/Contact"
            prefetch
            className={`
                ${
                  pathname === "/Contact"
                    ? "border-b-2 border-primary text-primary font-medium"
                    : "border-b-2 border-transparent text-gray-900"
                }
                hover:text-accent transition
              `}
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <Link
          href="#cta"
          className="bg-primary text-white px-6 py-2 rounded-lg text-lg font-medium hover:bg-accent-dark transition"
        >
          Book a Free Call
        </Link>

      </div>
    </header>
  );
}
