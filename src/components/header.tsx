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
      {/* Main Header - Hidden on mobile */}
      <header className="bg-primary backdrop-blur-lg relative z-40 shadow-lg hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Mobile Layout */}
            <div className="md:hidden flex items-center justify-between w-full">
              {/* Mobile Menu Button - Left */}
              <button
                type="button"
                aria-label="Toggle mobile menu"
                className="p-3 text-white hover:text-white/80 rounded-lg hover:bg-white/10"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {/* Mobile Logo - Center */}
              <div className="flex items-center absolute left-1/2 transform -translate-x-1/2">
                <div className="relative -top-2 w-48 h-48 transition-transform duration-300 hover:scale-105">
                  <Image
                    src={LOGO_BG}
                    alt="Logo Background"
                    fill
                    className="object-contain drop-shadow-sm"
                  />
                  <div className="absolute top-7 -left-2 inset-0 flex items-center justify-center">
                    <Image
                      src={LOGO}
                      alt="Adsflourish Logo"
                      width={160}
                      height={120}
                      className="object-contain drop-shadow-md"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile Search - Right */}
              <button
                type="button"
                aria-label="Search"
                className="p-3 text-white hover:text-white/80 rounded-lg hover:bg-white/10 transition-all duration-200 hover:scale-110"
              >
                <Search size={24} />
              </button>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex items-center justify-between w-full">
              {/* Desktop Logo */}
              <div className="flex items-center">
                <div className="relative -top-5 w-96 h-96 transition-transform duration-300 hover:scale-105">
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
                      width={240}
                      height={180}
                      className="object-contain drop-shadow-md"
                    />
                  </div>
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="flex items-center space-x-8">
                {navigationLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-white hover:text-white/80 font-medium text-lg tracking-wide transition-all duration-200 hover:-translate-y-0.5 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-white/80 after:transition-all after:duration-300 hover:after:w-full focus:outline-2 focus:outline-ring focus:outline-offset-2"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              {/* Desktop Search */}
              <div className="flex items-center">
                <button
                  type="button"
                  aria-label="Search"
                  className="p-2 text-white hover:text-white/80 rounded-lg hover:bg-white/10 transition-all duration-200 hover:scale-110 focus:outline-2 focus:outline-ring focus:outline-offset-2"
                >
                  <Search size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky Header - Always visible on mobile, scroll-triggered on desktop */}
      <header
        className={`bg-white/95 backdrop-blur-xl border-border fixed top-0 left-0 right-0 shadow-lg border-b z-50 transition-all duration-300 ${
          // Always visible on mobile, scroll-triggered on desktop
          "md:transition-transform md:duration-300 " +
          (isScrolled
            ? "translate-y-0 opacity-100"
            : "md:-translate-y-full md:opacity-0 translate-y-0 opacity-100")
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Mobile Sticky Layout */}
            <div className="md:hidden flex items-center justify-between w-full">
              {/* Mobile Menu Button - Left */}
              <button
                type="button"
                aria-label="Toggle mobile menu"
                className="p-2 text-muted-foreground hover:text-primary rounded-lg hover:bg-accent"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>

              {/* Mobile Logo - Center */}
              <div className="flex items-center absolute left-1/2 transform -translate-x-1/2">
                <div className="transition-transform duration-300 hover:scale-105 scale-85 md:scale-100">
                  <Image
                    src={LOGO}
                    alt="Adsflourish Logo"
                    width={130}
                    height={100}
                    className="object-contain drop-shadow-sm"
                  />
                </div>
              </div>

              {/* Mobile Search - Right */}
              <button
                type="button"
                aria-label="Search"
                className="p-2 text-muted-foreground hover:text-primary rounded-lg hover:bg-accent transition-all duration-200 hover:scale-110 focus:outline-2 focus:outline-ring focus:outline-offset-2"
              >
                <Search size={20} />
              </button>
            </div>

            {/* Desktop Sticky Layout */}
            <div className="hidden md:flex items-center justify-between w-full">
              {/* Desktop Compact Logo */}
              <div className="flex items-center">
                <div className="transition-transform duration-300 hover:scale-105">
                  <Image
                    src={LOGO}
                    alt="Adsflourish Logo"
                    width={170}
                    height={130}
                    className="object-contain drop-shadow-sm"
                  />
                </div>
              </div>

              {/* Desktop Compact Navigation */}
              <nav className="flex items-center space-x-6">
                {navigationLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary font-medium text-base tracking-wide transition-all duration-200 hover:-translate-y-0.5 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full focus:outline-2 focus:outline-ring focus:outline-offset-2"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              {/* Desktop Compact Search */}
              <div className="flex items-center">
                <button
                  type="button"
                  aria-label="Search"
                  className="p-2 text-muted-foreground hover:text-primary rounded-lg hover:bg-accent transition-all duration-200 hover:scale-110 focus:outline-2 focus:outline-ring focus:outline-offset-2"
                >
                  <Search size={18} />
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
                height={115}
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
