"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import Image from "next/image";
import { LOGO, LOGO_BG } from "../assets/images";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationLinks = [
    { name: "HOME", href: "/" },
    { name: "ADVERTISERS", href: "/advertisers" },
    { name: "PUBLISHERS", href: "/publishers" },
    { name: "WHAT WE DO", href: "/what-we-do" },
    { name: "CONTACT US", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100); // Show sticky header after scrolling 100px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Header */}
      <header className="bg-primary relative z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <div className="flex items-center">
              <div className="relative -top-5 w-96 h-96">
                <Image
                  src={LOGO_BG}
                  alt="Logo Background"
                  fill
                  className="object-contain"
                />
                <div className="absolute top-14 -left-4 inset-0 flex items-center justify-center">
                  <Image
                    src={LOGO}
                    alt="Adsflourish Logo"
                    width={200}
                    height={150}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-white/80 font-medium text-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Search Icon */}
            <div className="flex items-center">
              <button
                type="button"
                aria-label="Search"
                className="p-2 text-white hover:text-white/80 transition-colors"
              >
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 bg-white shadow-md border-b border-gray-200 z-50 transition-transform duration-300 ${
          isScrolled ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Compact Logo */}
            <div className="flex items-center">
              <Image
                src={LOGO}
                alt="Adsflourish Logo"
                width={150}
                height={120}
                className="object-contain"
              />
            </div>

            {/* Compact Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-gray-900 font-medium text-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Compact Search Icon */}
            <div className="flex items-center">
              <button
                type="button"
                aria-label="Search"
                className="p-1.5 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Search size={18} />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
