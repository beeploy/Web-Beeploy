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
    title: "Desarrollo a la Medida",
    body: "Creamos la App, Web o Sistema que tu negocio necesita para vender, operar mejor y dejar de depender de procesos manuales.",
    proof: "Ideal para automatizar ventas, reservas, inventario, clientes o reportes internos.",
    hrefId: "desarrollo",
  },
  {
    title: "Ciberseguridad",
    body: "Protegemos a tu empresa de hackeos y fugas de información antes de que un incidente te cueste dinero, reputación o clientes.",
    proof: "Ideal para empresas que manejan clientes, pagos, accesos o información sensible.",
    hrefId: "ciberseguridad",
  },
  {
    title: "Datos e IA",
    body: "Organizamos tu información para que tomes decisiones rentables con tableros, indicadores y automatizaciones inteligentes.",
    proof: "Ideal para saber qué vender, dónde invertir y qué procesos están drenando margen.",
    hrefId: "datos-ia",
  },
];

export function ServicePillars(): JSX.Element {
  return (
    <SectionShell
      className=""
      eyebrow="Servicios"
      title="Soluciones que un dueño de negocio entiende desde el primer minuto."
      intro="No vendemos código. Vendemos crecimiento, protección y claridad para que tu empresa opere mejor."
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
