import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionBadge } from "@/components/ui/eyebrow";

export function Hero() {
  return (
    <section className="section-light page-intro w-full px-6 py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.92fr]">
        {/* Bloque de texto: izquierda */}
        <div className="relative z-10 max-w-3xl">
          <div className="mb-6">
            <SectionBadge>Ecosistema Tecnológico B2B</SectionBadge>
          </div>
          <h1 className="text-balance font-heading text-5xl font-black leading-[1.02] text-text-main sm:text-6xl lg:text-7xl">
            Arquitectura digital que convierte complejidad en crecimiento.
          </h1>
          <p className="mr-auto ml-0 mt-6 max-w-3xl text-lg leading-relaxed text-text-muted">
            No somos una fábrica de software que opera por inercia. Diseñamos e implementamos infraestructura tecnológica modular, automatizamos flujos operativos y garantizamos la seguridad de tu información para que escales con autonomía técnica.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/servicios" variant="gold">
              Conocer el Ecosistema
            </ButtonLink>
            <ButtonLink href="/nosotros" variant="dark">
              Descubrir el Manifiesto
            </ButtonLink>
          </div>
        </div>

        {/* Elemento visual: abeja geométrica — derecha */}
        <div className="flex items-center justify-center lg:justify-end">
          <Image
            src="/bee-geometric-rounded-v1.svg"
            alt="Abeja geométrica Beeploy"
            width={420}
            height={420}
            priority
            className="w-[340px] sm:w-[420px] md:w-[540px] lg:w-[680px] h-auto -scale-x-100 drop-shadow-[0_8px_32px_rgba(217,119,6,0.18)]"
          />
        </div>
      </div>
    </section>
  );
}
