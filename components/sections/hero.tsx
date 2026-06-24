import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionBadge } from "@/components/ui/eyebrow";

export function Hero() {
  return (
    <section className="section-light page-intro w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.92fr]">
        {/* Bloque de texto: izquierda */}
        <div className="relative z-10 max-w-3xl">
          <div className="mb-6">
            <SectionBadge>Ecosistema Tecnológico B2B</SectionBadge>
          </div>
          <h1 className="text-balance font-heading text-5xl font-black leading-[1.02] text-text-main sm:text-6xl lg:text-7xl">
            Empresa de Desarrollo de Software a la Medida
          </h1>
          <p className="mr-auto ml-0 mt-6 max-w-3xl text-lg leading-relaxed text-text-muted">
            Transformamos la complejidad digital en ecosistemas B2B seguros y escalables. Somos una empresa de desarrollo de software a medida que integra inteligencia artificial, ciberseguridad y estrategias de marca para potenciar tu arquitectura web.
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
        <div className="flex flex-shrink-0 items-center justify-center lg:justify-end">
          <Image
            src="/bee-geometric-rounded-v1.svg"
            alt="Abeja geométrica Beeploy"
            width={520}
            height={520}
            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-[440px] sm:w-[580px] md:w-[800px] lg:w-[980px] h-auto -scale-x-100 drop-shadow-[0_8px_32px_rgba(217,119,6,0.18)]"
          />
        </div>
      </div>
    </section>
  );
}
