"use client";

import { useState, useEffect } from "react";
import { Search, Menu, X } from "lucide-react";
import Image from "next/image";
import { LOGO, LOGO_BG } from "../assets/images";

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
      setIsScrolled(scrollTop > 100); // Show sticky header after scrolling 100px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Header */}
      <header className="header-main relative z-40 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <div className="flex items-center">
              <div className="logo-container relative -top-5 w-96 h-96">
                <Image
                  src={LOGO_BG}
                  alt="Logo Background"
                  fill
                  className="object-contain drop-shadow-sm"
                />
                <div className="absolute top-14 -left-4 inset-0 flex items-center justify-center">
                  <Image
                    src={LOGO}
                    alt="Adsflourish Logo"
                    width={200}
                    height={150}
                    className="object-contain drop-shadow-md"
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
                  className="header-nav-link font-medium text-lg tracking-wide"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Search Icon & Mobile Menu */}
            <div className="flex items-center space-x-2">
              <button
                type="button"
                aria-label="Search"
                className="header-search-btn p-2 text-white hover:text-white/80 rounded-lg hover:bg-white/10"
              >
                <Search size={20} />
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                aria-label="Toggle mobile menu"
                className="md:hidden p-2 text-white hover:text-white/80 rounded-lg hover:bg-white/10"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky Header */}
      <header
        className={`header-sticky fixed top-0 left-0 right-0 shadow-lg border-b z-50 transition-all duration-300 ${
          isScrolled
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Compact Logo */}
            <div className="flex items-center">
              <div className="logo-container">
                <Image
                  src={LOGO}
                  alt="Adsflourish Logo"
                  width={140}
                  height={110}
                  className="object-contain drop-shadow-sm"
                />
              </div>
            </div>

            {/* Compact Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="header-nav-link font-medium text-base tracking-wide"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Compact Search Icon & Mobile Menu */}
            <div className="flex items-center space-x-2">
              <button
                type="button"
                aria-label="Search"
                className="header-search-btn p-2 text-muted-foreground hover:text-primary rounded-lg hover:bg-accent"
              >
                <Search size={18} />
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                aria-label="Toggle mobile menu"
                className="md:hidden p-2 text-muted-foreground hover:text-primary rounded-lg hover:bg-accent"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
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
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
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
                width={120}
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
