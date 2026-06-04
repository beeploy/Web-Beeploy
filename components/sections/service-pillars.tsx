import { SectionShell } from "@/components/ui/section-shell";
import { JSX } from "react";
import Link from "next/link";
import { hexClip } from "@/components/ui/hexClip";

type Service = {
  title: string;
  body: string;
  proof: string;
  hrefId: string;
};

const services: Service[] = [
  {
    title: "Arquitectura y Desarrollo Modular",
    body: "Sistemas construidos bajo arquitectura hexagonal. Desplegamos soluciones tecnológicas que resuelven tus ineficiencias críticas y están diseñadas para evolucionar sin acumular deuda técnica.",
    proof: "Ideal para organizaciones que requieren escalar sus sistemas sin perder el control de su núcleo de negocio.",
    hrefId: "desarrollo",
  },
  {
    title: "Ciberseguridad y Resiliencia",
    body: "Auditorías de penetración y análisis de vulnerabilidades. Identificamos brechas en tu red o software y orquestamos una defensa que asegura la continuidad ininterrumpida de tus operaciones.",
    proof: "Imprescindible para proteger información confidencial, integridad de bases y la confianza institucional.",
    hrefId: "ciberseguridad",
  },
  {
    title: "Automatización e Inteligencia",
    body: "Extracción e interpretación de datos masivos. Implementamos soluciones impulsadas por modelos algorítmicos que previenen bloqueos, orquestan respuestas asíncronas y predicen demanda.",
    proof: "Diseñado para tomadores de decisiones que exigen visibilidad absoluta, centralizada y en tiempo real.",
    hrefId: "datos-ia",
  },
];

export function ServicePillars(): JSX.Element {

  return (
    <SectionShell
      className=""
      eyebrow="Ecosistema de Soluciones"
      title="Construcción técnica que apuntala tu rentabilidad."
      intro="Nuestros servicios son conectores hacia la autonomía. Traducimos la más compleja ingeniería de software en módulos accionables, medibles y diseñados para multiplicar y resguardar tus activos empresariales."
    >
      <div id="servicios" className="mt-10 grid gap-6 lg:grid-cols-3">
        {services.map((service, index) => (
          <article
            key={service.title}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-100 bg-white p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_0_0_1px_rgba(255,204,51,0.15),0_10px_30px_rgba(255,204,51,0.10)]"
          >
            <div className="mb-6 flex items-start gap-5 min-h-[80px]">
              {/* Glossy honey hexagon — same treatment as HeroHoneycomb */}
              <div
                className="relative grid size-16 shrink-0 place-items-center bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 shadow-lg"
                style={{ clipPath: hexClip }}
              >
                {/* Top gloss */}
                <div className="absolute inset-0 h-[55%] bg-gradient-to-b from-white/65 via-white/10 to-transparent mix-blend-overlay pointer-events-none"></div>
                {/* Bottom depth */}
                <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-amber-800/35 to-transparent pointer-events-none"></div>
                <span className="relative z-10 font-heading text-lg font-black text-amber-950 drop-shadow-sm">
                  0{index + 1}
                </span>
              </div>
              <h3 className="line-clamp-2 pt-1.5 font-heading text-2xl font-black text-neutral-900">
                {service.title}
              </h3>
            </div>

            <div className="flex flex-1 flex-col">
              <p className="font-sans text-base font-medium leading-relaxed text-text-main/90">
                {service.body}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-text-muted">
                {service.proof}
              </p>
            </div>

            <Link
              href={`/servicios#${service.hrefId}`}
              className="mx-auto mt-10 inline-flex min-h-12 w-4/5 items-center justify-center rounded-full bg-golden-pollen px-6 py-3 text-sm font-black text-text-main transition hover:bg-golden-hover"
            >
              Integrar esta solución
            </Link>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
