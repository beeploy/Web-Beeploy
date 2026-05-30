import type { Metadata } from "next";
import Link from "next/link";
import { CamellappPlaceholder } from "@/components/visuals/camellapp-placeholder";

export const metadata: Metadata = {
  title: "Camellapp en construccion",
  description:
    "El equipo de Beeploy esta construyendo Camellapp, una plataforma para devolver trabajo y dignidad en Latam.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function CamellappPage() {
  return (
    <main
      id="contenido"
      className="relative isolate min-h-[calc(100vh-152px)] overflow-hidden bg-background px-6 py-16 sm:py-24"
    >
      <div className="technical-grid absolute inset-0 -z-10 opacity-70" />
      <section className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-xl border border-text-main/10 bg-surface p-4 shadow-soft">
          <CamellappPlaceholder />
        </div>
        <div>
          <p className="mb-4 inline-flex rounded-full border border-golden-pollen/60 bg-golden-pollen/20 px-4 py-2 text-sm font-semibold text-text-main">
            Camellapp esta en obra
          </p>
          <h1 className="max-w-3xl font-heading text-4xl font-black leading-tight text-text-main sm:text-5xl lg:text-6xl">
            Nuestros arquitectos están construyendo el futuro del trabajo.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted">
            El equipo de Beeploy esta trabajando en una plataforma para que mas
            personas en Latam encuentren oportunidades reales, reputacion
            laboral y una forma digna de crecer.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-text-muted">
            Aqui vivira una Abejita con casco de ingeniero/arquitecto como
            simbolo amable de una obra seria: tecnologia al servicio del trabajo
            humano.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex min-h-12 items-center rounded-xl bg-text-main px-6 py-3 text-sm font-bold text-white transition hover:bg-golden-hover hover:text-text-main focus-visible:outline-text-main"
          >
            Volver al Inicio
          </Link>
        </div>
      </section>
    </main>
  );
}
