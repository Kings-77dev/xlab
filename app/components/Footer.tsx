// components/Footer.tsx
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  // replace with actual Heroicons or react-icons imports
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Logo & tagline */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">
            <span className="text-accent">LO</span>GO
          </h3>
          <p>Your partner for modern, high-impact websites.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-accent transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-accent transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-accent transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-accent transition">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-accent transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact & social */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Get in Touch</h4>
          <p>1234 Web St.<br/>Amsterdam, NL</p>
          <p>Email: <a href="mailto:hello@designpoint.digital" className="hover:text-accent">hello@designpoint.digital</a></p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-500 hover:text-accent transition">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-accent transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-accent transition">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 pt-4 pb-2 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Design Point Digital. All rights reserved.
      </div>
    </footer>
  );
}