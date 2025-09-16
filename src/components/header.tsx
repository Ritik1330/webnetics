"use client";

import { useEffect, useState } from "react";
import { Menu, Search, X } from "lucide-react";
import Image from "next/image";
import { LOGO } from "../assets/images";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Sticky Navigation */}
      <header
        className={`fixed bg-white/90 top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled &&
          "bg-white/95 backdrop-blur-xl shadow-lg border-b border-border"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Mobile Layout */}
            <div className="md:hidden flex items-center justify-between w-full">
              <button
                type="button"
                aria-label="Toggle mobile menu"
                className={`p-2 rounded-lg transition-all duration-200 text-muted-foreground ${
                  isScrolled
                    ? " hover:text-primary hover:bg-accent"
                    : " hover:text-white/80 hover:bg-white/10"
                }`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>

              <div className="flex items-center absolute left-1/2 transform -translate-x-1/2">
                <Image
                  src={LOGO}
                  alt="Adsflourish Logo"
                  width={140}
                  height={80}
                  className="object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>

              <button
                type="button"
                aria-label="Search"
                className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 text-muted-foreground hover:text-primary hover:bg-accent `}
              >
                <Search size={20} />
              </button>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex items-center justify-between w-full">
              <div className="flex items-center">
                <Image
                  src={LOGO}
                  alt="Adsflourish Logo"
                  width={160}
                  height={100}
                  className="object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>

              <nav className="flex items-center space-x-8">
                {navigationLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`font-medium text-lg tracking-wide transition-all duration-200 hover:-translate-y-0.5 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:transition-all after:duration-300 hover:after:w-full focus:outline-2 focus:outline-ring focus:outline-offset-2 text-muted-foreground hover:text-primary after:bg-primary `}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="flex items-center">
                <button
                  type="button"
                  aria-label="Search"
                  className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 focus:outline-2 focus:outline-ring focus:outline-offset-2 text-muted-foreground hover:text-primary hover:bg-accent`}
                >
                  <Search size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <button
          type="button"
          className="absolute inset-0 bg-black/50 backdrop-blur-sm cursor-default"
          onClick={() => setIsMobileMenuOpen(false)}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setIsMobileMenuOpen(false);
            }
          }}
          aria-label="Close mobile menu"
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-card border-l shadow-2xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <Image
                src={LOGO}
                alt="Adsflourish Logo"
                width={150}
                height={90}
                className="object-contain"
              />
              <button
                type="button"
                aria-label="Close mobile menu"
                className="p-2 text-muted-foreground hover:text-primary rounded-lg hover:bg-accent"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex-1 px-6 py-8">
              <div className="space-y-6">
                {navigationLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-lg font-medium text-foreground hover:text-primary transition-colors py-2 border-b border-border/50 hover:border-primary/30"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </nav>

            {/* Mobile Menu Footer */}
            <div className="p-6 border-t">
              <button
                type="button"
                aria-label="Search"
                className="w-full flex items-center justify-center space-x-2 p-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Search size={18} />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
