import { SectionShell } from "@/components/ui/section-shell";

const steps = [
  {
    title: "Auditoría Sistémica",
    body: "Diagnosticamos la raíz técnica del cuello de botella. Ninguna línea de código se escribe sin comprender el modelo de negocio.",
  },
  {
    title: "Blueprint Arquitectónico",
    body: "Trazamos la estructura lógica. Priorizamos desarrollos modulares que devuelven márgenes operativos tangibles desde el primer mes.",
  },
  {
    title: "Despliegue Desacoplado",
    body: "Programación bajo arquitectura hexagonal. Eliminamos la fricción técnica con entregas incrementales y testeos rigurosos de resiliencia.",
  },
  {
    title: "Acompañamiento Corporativo",
    body: "La entrega es solo el inicio. Capacitamos al equipo y aseguramos el escalado orgánico del sistema respaldado en datos verificables.",
  },
];

export function MethodTimeline() {
  return (
    <SectionShell
      className="bg-warm"
      eyebrow="Framework Metodológico"
      title="Ingeniería precisa. Explicaciones nítidas."
      intro="La improvisación tecnológica representa un riesgo corporativo crítico. Nuestro marco de trabajo protege la inversión garantizando que cada fase resuelva un desafío empresarial genuino y auditable."
    >
      <ol className="mt-12 grid gap-5 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="relative rounded-2xl border border-neutral-200 bg-surface shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-6"
          >
            <div className="mb-2 inline-flex items-center justify-center rounded-md bg-text-main px-3 py-1 text-xs font-black uppercase tracking-widest text-golden-pollen">
              Fase 0{index + 1}
            </div>
            <h3 className="mt-4 min-h-[64px] font-heading text-2xl font-black text-neutral-900">
              {step.title}
            </h3>
            <p className="mt-4 leading-7 text-text-muted">{step.body}</p>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
