import { SectionShell } from "@/components/ui/section-shell";

const principles = [
  "Rigor sin arrogancia.",
  "Decisiones tecnicas explicables.",
  "Documentacion que sirve despues de la entrega.",
  "Transferencia de conocimiento como parte del producto.",
];

export function PrinciplesSection() {
  return (
    <SectionShell
      className="pt-0"
      eyebrow="Principios"
      title="La excelencia tecnica tambien debe sentirse tranquila."
      intro="Trabajamos para que los equipos puedan confiar, preguntar, auditar y continuar. El cuidado no suaviza el rigor: lo vuelve sostenible."
    >
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {principles.map((principle) => (
          <div
            key={principle}
            className="rounded-xl border border-text-main/10 bg-surface p-6"
          >
            <p className="font-heading text-2xl font-black text-text-main">
              {principle}
            </p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
