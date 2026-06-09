import type { Metadata } from "next";
import Link from "next/link";
import { CameyappPlaceholder } from "@/components/visuals/cameyapp-placeholder";
import { Eyebrow } from "@/components/ui/eyebrow";

export const metadata: Metadata = {
  title: "Cameyapp en construccion",
  description:
    "El equipo de Beeploy esta construyendo Cameyapp, una plataforma para devolver trabajo y dignidad en Latinoamérica.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function CameyappPage() {
  return (
    <main id="contenido" className="section-light w-full px-6 py-24">
      <section className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="border border-text-main/10 bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
          <CameyappPlaceholder />
        </div>
        <div>
          <Eyebrow>Cameyapp en obra</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-black leading-tight text-text-main sm:text-5xl lg:text-6xl">
            Nuestros arquitectos están construyendo el futuro del trabajo.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-text-muted">
            El equipo de Beeploy esta trabajando en una plataforma para que mas
            personas en Latinoamérica encuentren oportunidades reales, reputacion
            laboral y una forma digna de crecer.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex min-h-12 items-center bg-text-main px-6 py-3 text-sm font-bold text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-golden-hover hover:text-text-main focus-visible:outline-text-main"
          >
            Volver al Inicio
          </Link>
        </div>
      </section>
    </main>
  );
}
