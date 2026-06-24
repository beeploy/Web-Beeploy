"use client";

import Link from "next/link";
import { BeeployMark } from "@/components/brand/beeploy-mark";
import { JSX, useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/cameyapp", label: "Cameyapp" },
  { href: "/nosotros", label: "Nosotros" },
];

export function SiteHeader(): JSX.Element {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out bg-white/70 backdrop-blur-md border-b border-neutral-100 shadow-sm ${isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-6 relative z-[60] bg-transparent">
        <Link
          href="/"
          aria-label="Ir al inicio de Beeploy"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <BeeployMark />
        </Link>
        <nav className="hidden items-center gap-x-8 md:flex" aria-label="Principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-semibold text-neutral-900 hover:text-yellow-600 transition-colors duration-200 px-2 py-1"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/593997963617?text=Hola%20equipo%20de%20Beeploy.%20Quiero%20escalar%20mi%20empresa%20y%20me%20gustar%C3%ADa%20agendar%20un%20diagn%C3%B3stico%20tecnol%C3%B3gico."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex min-h-11 items-center rounded-full bg-text-main px-4 py-2 text-sm font-bold text-white transition hover:bg-golden-hover hover:text-text-main"
          >
            Agendar diagnostico
          </a>
          <button
            className="md:hidden p-2 text-neutral-900 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-neutral-900" />
            ) : (
              <Menu className="w-6 h-6 text-neutral-900" />
            )}
          </button>
        </div>
      </div>

      {/* Menú Móvil / Drawer */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full h-auto bg-background border-b shadow-2xl flex flex-col p-6 gap-6 z-50 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-semibold text-neutral-900 py-2 text-center transition-colors hover:text-amber-500"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://wa.me/593997963617?text=Hola%20equipo%20de%20Beeploy.%20Quiero%20escalar%20mi%20empresa%20y%20me%20gustar%C3%ADa%20agendar%20un%20diagn%C3%B3stico%20tecnol%C3%B3gico."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex min-h-12 items-center justify-center rounded-full bg-text-main px-6 py-2 text-base font-bold text-white transition hover:bg-golden-hover hover:text-text-main text-center"
          >
            Agendar diagnostico
          </a>
        </div>
      )}
    </header>
  );
}
