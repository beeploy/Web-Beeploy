import { SectionShell } from "@/components/ui/section-shell";
import { JSX } from "react";
import Link from "next/link";

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
      eyebrow="Ecosistema de Soluciones"
      title="Construcción técnica que apuntala tu rentabilidad."
      intro="Nuestros servicios son conectores hacia la autonomía. Traducimos la más compleja ingeniería de software en módulos accionables, medibles y diseñados para multiplicar y resguardar tus activos empresariales."
      variant="light"
    >
      <div id="servicios" className="mt-10 grid gap-6 lg:grid-cols-3">
        {services.map((service, index) => (
          <article
            key={service.title}
            className="group relative flex h-full flex-col overflow-hidden border border-text-main/10 bg-white p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 ease-in-out hover:scale-105"
          >
            <div className="pointer-events-none absolute inset-0 z-0 flex select-none items-center justify-center overflow-hidden">
              <span className="font-heading text-[320px] font-black leading-none text-golden-pollen/20 transition-colors duration-300 group-hover:text-golden-pollen/30">
                {index + 1}
              </span>
            </div>
            <div className="relative z-10 mb-6 flex min-h-[40px] items-center">
              <p className="font-heading text-xl font-bold text-text-main">
                {service.title}
              </p>
            </div>
            <div className="relative z-10 flex flex-1 flex-col">
              <p className="mx-auto max-w-3xl font-sans text-base font-medium leading-relaxed text-text-main/90">
                {service.body}
              </p>
              <p className="mx-auto mt-4 max-w-3xl text-sm font-semibold leading-relaxed text-text-main/80">
                {service.proof}
              </p>
            </div>
            <Link
              href={`/servicios#${service.hrefId}`}
              className="relative z-10 mx-auto mt-10 inline-flex h-auto min-h-[3rem] w-4/5 items-center justify-center bg-golden-pollen px-6 py-3 text-center text-sm font-black leading-tight text-text-main transition-all duration-300 ease-in-out hover:scale-105 hover:bg-golden-hover"
            >
              Integrar esta solución
            </Link>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
