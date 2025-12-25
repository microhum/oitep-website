"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg"
          : "bg-white sm:bg-transparent opacity-0 sm:opacity-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/static/logo/logo.svg"
                  alt="OITEP Logo"
                  width={40}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a
                href="#about"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium transition-colors ${
                  isScrolled
                    ? "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    : "border-transparent text-white hover:text-gray-200"
                }`}
              >
                About Us
              </a>
              <a
                href="#products"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium transition-colors ${
                  isScrolled
                    ? "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    : "border-transparent text-white hover:text-gray-200"
                }`}
              >
                Our Products
              </a>
              <a
                href="#contact"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium transition-colors ${
                  isScrolled
                    ? "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    : "border-transparent text-white hover:text-gray-200"
                }`}
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button className="bg-meadow-3 hover:cursor-pointer hover:border-white border-meadow-3 border-2 text-white px-4 py-1 rounded-lg text-md font-semibold transition-all duration-100 transform">
              Try it out
            </button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${isMobileMenuOpen ? "block" : "hidden"} sm:hidden`}
        id="mobile-menu"
      >
        <div className="pt-2 pb-3 space-y-1">
          <a
            href="#about"
            className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          >
            About Us
          </a>
          <a
            href="#products"
            className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          >
            Our Products
          </a>
          <a
            href="#contact"
            className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          >
            Contact Us
          </a>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-4">
            <button className="bg-meadow-2 hover:bg-meadow-1 text-white px-4 py-2 rounded-md text-sm font-medium w-full transition-colors">
              Try it out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
