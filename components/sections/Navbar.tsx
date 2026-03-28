"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className="fixed top-4 left-0 right-0 z-50 mx-auto w-max max-w-[90vw] md:max-w-4xl flex items-center gap-4 md:gap-10 px-6 md:px-10 py-4 rounded-full transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255, 255, 255, 0.7)" : "rgba(255, 255, 255, 0.15)",
          backdropFilter: scrolled ? "blur(32px)" : "blur(20px)",
          WebkitBackdropFilter: scrolled ? "blur(32px)" : "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.4)",
          boxShadow: "0 8px 32px rgba(212, 113, 138, 0.15), inset 0 1px 0 rgba(255,255,255,0.6)",
        }}
      >
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "#home")}
          className="flex items-center gap-2 text-[var(--color-rose)] font-bold text-xl shrink-0"
          style={{ fontFamily: "var(--font-display)" }}
        >
          🦷 PearlSmile
        </a>

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="group relative text-base text-[var(--color-text-dark)] hover:text-[var(--color-rose)] font-medium transition-colors duration-200"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block shrink-0">
          <a
            href="#book"
            onClick={(e) => scrollToSection(e, "#book")}
            className="inline-block rounded-full bg-[var(--color-rose)] text-white px-6 py-2 text-sm hover:bg-[var(--color-rose-dark)] transition-colors duration-300 font-medium"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Book Appointment
          </a>
        </div>

        <button
          className="md:hidden text-[var(--color-text-dark)] p-2 shrink-0 ml-auto"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-white/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden",
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => scrollToSection(e, link.href)}
            className="text-2xl text-[var(--color-text-dark)] font-medium"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {link.name}
          </a>
        ))}
        <a
          href="#book"
          onClick={(e) => scrollToSection(e, "#book")}
          className="rounded-full bg-[var(--color-rose)] text-white px-8 py-3.5 text-lg hover:bg-[var(--color-rose-dark)] transition-colors duration-300"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Book Appointment
        </a>
      </div>
    </>
  );
}
