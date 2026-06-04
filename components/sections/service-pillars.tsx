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
    title: "Arquitectura y Desarrollo",
    body: "Construimos infraestructura digital modular que se adapta a tu negocio. Sistemas y plataformas preparadas para evolucionar sin generar dependencia artificial.",
    proof: "Ideal para erradicar procesos manuales y escalar operaciones sin multiplicar complejidad.",
    hrefId: "desarrollo",
  },
  {
    title: "Ciberseguridad Resiliente",
    body: "Aseguramos la continuidad operativa de tu empresa blindando tus sistemas y datos contra amenazas que pueden costar dinero, clientes y confianza.",
    proof: "Ideal para organizaciones que necesitan proteger información sensible sin frenar su agilidad.",
    hrefId: "ciberseguridad",
  },
  {
    title: "Datos e Inteligencia",
    body: "Transformamos tu información dispersa en un activo accionable. Integramos IA y analítica para anticipar demanda y visualizar dónde se pierde margen.",
    proof: "Ideal para equipos que toman decisiones por intuición y necesitan claridad matemática.",
    hrefId: "datos-ia",
  },
];

export function ServicePillars(): JSX.Element {
  return (
    <SectionShell
      className=""
      eyebrow="Ecosistema de Soluciones"
      title="Tecnología que se adapta a tu negocio, no al revés."
      intro="Diseñamos sistemas que resuelven problemas estructurales. Traducimos la complejidad tecnológica en herramientas claras que un dueño de negocio puede aprovechar desde el primer minuto."
    >
      <div id="servicios" className="mt-10 grid gap-6 lg:grid-cols-3">
        {services.map((service, index) => (
          <article 
            key={service.title} 
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-100 bg-white p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_0_0_1px_rgba(255,204,51,0.15),0_10px_30px_rgba(255,204,51,0.10)]"
          >
            <div className="mb-6 flex items-start gap-5 min-h-[80px]">
              <div className="hexagon grid size-14 shrink-0 place-items-center bg-golden-pollen font-heading text-lg font-black text-text-main">
                0{index + 1}
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
              Quiero esta solución
            </Link>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
