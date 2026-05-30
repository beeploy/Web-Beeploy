import Link from "next/link";
import { BeeployMark } from "@/components/brand/beeploy-mark";

const navItems = [
  { href: "/catalogo", label: "Catalogo" },
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-text-main/10 bg-surface/92 backdrop-blur">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-6">
        <Link href="/" aria-label="Ir al inicio de Beeploy">
          <BeeployMark />
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-text-muted transition hover:text-text-main"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contacto"
          className="inline-flex min-h-11 items-center rounded-xl bg-text-main px-4 py-2 text-sm font-bold text-white transition hover:bg-golden-hover hover:text-text-main"
        >
          Agendar diagnostico
        </Link>
      </div>
    </header>
  );
}
