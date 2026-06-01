"use client";

import Link from "next/link";
import { BeeployMark } from "@/components/brand/beeploy-mark";
import { JSX, useState, useEffect } from "react";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/cameyapp", label: "Cameyapp" },
  { href: "/nosotros", label: "Nosotros" },
];

export function SiteHeader(): JSX.Element {
  const [isVisible, setIsVisible] = useState(true);

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

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out bg-white/90 backdrop-blur-sm border-b border-text-main/10 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-6">
        <Link href="/" aria-label="Ir al inicio de Beeploy">
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
        <a
          href="https://wa.me/593997963617?text=Hola%20equipo%20de%20Beeploy.%20Quiero%20escalar%20mi%20empresa%20y%20me%20gustar%C3%ADa%20agendar%20un%20diagn%C3%B3stico%20tecnol%C3%B3gico."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center rounded-full bg-text-main px-4 py-2 text-sm font-bold text-white transition hover:bg-golden-hover hover:text-text-main"
        >
          Agendar diagnostico
        </a>
      </div>
    </header>
  );
}
