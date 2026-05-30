import { SectionShell } from "@/components/ui/section-shell";

const services = [
  {
    title: "Ciberseguridad",
    body: "Reducimos exposicion con diagnosticos, hardening, gestion de riesgos y controles que el negocio puede entender.",
  },
  {
    title: "Datos",
    body: "Ordenamos fuentes, modelos y tableros para convertir operacion dispersa en decisiones trazables.",
  },
  {
    title: "Software a medida",
    body: "Construimos herramientas internas y productos digitales ajustados a procesos reales, no a plantillas genericas.",
  },
];

export function ServicePillars() {
  return (
    <SectionShell
      eyebrow="Servicios"
      title="Tres capacidades para sistemas que no pueden fallar."
      intro="Beeploy entra donde la tecnologia toca riesgo, operacion y confianza. Cada servicio se disena para dejar criterio instalado, no dependencia."
    >
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {services.map((service, index) => (
          <article
            key={service.title}
            className="rounded-xl border border-text-main/10 bg-surface p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="grid size-11 place-items-center rounded-xl bg-golden-pollen font-heading text-lg font-black text-text-main">
                0{index + 1}
              </span>
              <span className="h-px flex-1 bg-text-main/10" />
            </div>
            <h3 className="mt-8 font-heading text-2xl font-black text-text-main">
              {service.title}
            </h3>
            <p className="mt-4 leading-7 text-text-muted">{service.body}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
