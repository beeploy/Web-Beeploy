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
      variant="dark"
      eyebrow="Framework Metodológico"
      title="Ingeniería precisa. Explicaciones nítidas."
      intro="La improvisación tecnológica representa un riesgo corporativo crítico. Nuestro marco de trabajo protege la inversión garantizando que cada fase resuelva un desafío empresarial genuino y auditable."
    >
      <ol className="mt-12 grid gap-5 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="relative border border-white/10 bg-white/5 p-6"
          >
            <div className="mb-2 inline-flex items-center justify-center bg-golden-pollen px-3 py-1 text-xs font-black uppercase tracking-widest text-text-main">
              Fase 0{index + 1}
            </div>
            <p className="mt-4 min-h-[64px] font-heading text-xl font-bold text-white">
              {step.title}
            </p>
            <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-white/85">
              {step.body}
            </p>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
