import Link from "next/link";
import { BeeployMark } from "@/components/brand/beeploy-mark";

const footerLinks = [
  { href: "/servicios", label: "Servicios" },
  { href: "/camellapp", label: "Camellapp" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export function SiteFooter() {
  return (
    <footer className="bg-text-main px-6 py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <BeeployMark inverse />
          <p className="mt-4 max-w-md text-sm leading-6 text-white/70">
            Casa ecuatoriana de desarrollo de software: ciberseguridad, datos y
            soluciones a medida con proposito humano.
          </p>
        </div>
        <nav className="flex flex-wrap gap-4" aria-label="Pie de pagina">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="min-h-10 rounded-xl px-3 py-2 text-sm font-semibold text-white/76 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
