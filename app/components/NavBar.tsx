// components/NavBar.tsx
"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { useTheme } from "next-themes";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  // SunIcon,
  // MoonIcon,
} from "@heroicons/react/24/solid";

export default function NavBar() {
  const pathname = usePathname() || "";
  // const { theme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);

  const openServices = () => {
    window.clearTimeout(closeTimer.current as number);
    setServicesOpen(true);
  };
  const closeServices = () => {
    closeTimer.current = window.setTimeout(() => {
      setServicesOpen(false);
    }, 200);
  };

  const linkClass = (path: string) =>
    `${
      pathname === path
        ? "border-b-2 border-primary text-primary font-medium"
        : "border-b-2 border-transparent "
    } hover:text-primary transition`;

  return (
    <header className="sticky top-0 z-50 bg-background ">
      <div className="max-w-9xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <span className="text-primary">LO</span>&#123;GO&#125;
          </Link>
        </div>

        {/* Desktop nav: centered */}
        <nav className="hidden md:flex  flex-1 justify-center space-x-8 text-lg items-center">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/Portfolio" className={linkClass("/Portfolio")}>
            Portfolio
          </Link>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={closeServices}
          >
            <button className={`flex items-center ${linkClass("/Services")}`}>
              Services <ChevronDownIcon className="h-4 w-4 ml-1" />
            </button>
            {servicesOpen && (
              <div
                className="absolute top-full mt-2 bg-background rounded-lg shadow-lg border border-gray-700 py-2 w-48 z-50"
                onMouseEnter={openServices}
                onMouseLeave={closeServices}
              >
                <Link
                  href="/Services"
                  className="block px-4 py-2 hover:bg-primary rounded-lg"
                >
                  All Services
                </Link>
                <Link
                  href="/Services/webdesign"
                  className="block px-4 py-2 hover:bg-primary rounded-lg"
                >
                  Web Design
                </Link>
                <Link
                  href="/Services/seo"
                  className="block px-4 py-2 hover:bg-primary rounded-lg"
                >
                  SEO
                </Link>
                <Link
                  href="/Services/webdevelopment"
                  className="block px-4 py-2 hover:bg-primary rounded-lg"
                >
                  Web Development
                </Link>
                <Link
                  href="/Services/maintainanceandsupport"
                  className="block px-4 py-2 hover:bg-primary rounded-lg"
                >
                  Maintenance & Support
                </Link>
              </div>
            )}
          </div>

          <Link href="/Pricing" className={linkClass("/Pricing")}>
            Pricing
          </Link>
          <Link href="/Contact" className={linkClass("/Contact")}>
            Contact
          </Link>
        </nav>

        {/* Theme toggle */}
        {/* <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle light/dark mode"
          className="hidden md:flex mr-4 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {theme === "dark" ? (
            <SunIcon className="h-6 w-6 text-foreground" />
          ) : (
            <MoonIcon className="h-6 w-6 text-background " />
          )}
        </button> */}

        {/* CTA Button */}
        <Link
          href="#cta"
          className="hidden md:inline-block bg-primary text-white px-6 py-2 rounded-lg text-lg font-medium  transform duration-200 ease-out hover:scale-115 hover:bg-primary transition"
        >
          Book a Free Call
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile slide-in menu */}
      <div
        className={`fixed inset-0 z-50 bg-background transform ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <div className="text-2xl font-bold">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <span className="text-primary">LO</span>&#123;GO&#125;
            </Link>
          </div>
          <button onClick={() => setMobileOpen(false)} className="p-2">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <nav className="px-6 py-4 text-xl font-medium space-y-2">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="block py-3 "
          >
            Home
          </Link>
          <Link
            href="/Portfolio"
            onClick={() => setMobileOpen(false)}
            className="block py-3 "
          >
            Portfolio
          </Link>

          {/* Services accordion */}
          <div className="">
            <button
              className="w-full flex justify-between items-center py-3"
              onClick={() => setServicesOpen((o) => !o)}
            >
              Services{" "}
              <ChevronDownIcon
                className={`h-5 w-5 transform transition ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {servicesOpen && (
              <div className="pl-4">
                <Link
                  href="/Services/webdesign"
                  onClick={() => {
                    setServicesOpen(false);
                    setMobileOpen(false);
                  }}
                  className="block py-2 hover:bg-gray-100"
                >
                  Web Design
                </Link>
                <Link
                  href="/Services/seo"
                  onClick={() => {
                    setServicesOpen(false);
                    setMobileOpen(false);
                  }}
                  className="block py-2 hover:bg-gray-100"
                >
                  SEO
                </Link>
                <Link
                  href="/Services/webdevelopment"
                  onClick={() => {
                    setServicesOpen(false);
                    setMobileOpen(false);
                  }}
                  className="block py-2 hover:bg-gray-100"
                >
                  Web Development
                </Link>
                <Link
                  href="/Services#maintenance"
                  onClick={() => {
                    setServicesOpen(false);
                    setMobileOpen(false);
                  }}
                  className="block py-2 hover:bg-gray-100"
                >
                  Maintenance & Support
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/Pricing"
            onClick={() => setMobileOpen(false)}
            className="block py-3 "
          >
            Pricing
          </Link>
          <Link
            href="/Contact"
            onClick={() => setMobileOpen(false)}
            className="block py-3 "
          >
            Contact
          </Link>

          {/* Mobile theme toggle */}
          {/* <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle light/dark mode"
            className="w-full flex items-center space-x-2 py-3"
          >
            {theme === "dark" ? (
              <SunIcon className="h-5 w-5 text-foreground" />
            ) : (
              <MoonIcon className="h-5 w-5 text-foreground" />
            )}
            <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
          </button> */}

          <Link
            href="#cta"
            onClick={() => setMobileOpen(false)}
            className="block px-6 py-3 bg-primary text-white text-center rounded-lg  transform duration-200 ease-out hover:scale-115 hover:bg-primary transition"
          >
            Book a Free Call
          </Link>
        </nav>
      </div>
    </header>
  );
}
