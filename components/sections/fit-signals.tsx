import { SectionShell } from "@/components/ui/section-shell";

const signals = [
  "Riesgos de seguridad sin priorizacion ejecutiva.",
  "Datos repartidos entre sistemas que no conversan.",
  "Procesos manuales que ya cuestan demasiado.",
  "Herramientas internas fragiles o imposibles de escalar.",
  "Producto digital que necesita base tecnica seria.",
  "Equipos que necesitan claridad, no ruido consultivo.",
];

export function FitSignals() {
  return (
    <SectionShell
      eyebrow="Cuando entrar"
      title="Beeploy es util cuando la operacion ya pide arquitectura."
    >
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {signals.map((signal) => (
          <div
            key={signal}
            className="flex min-h-28 gap-4 rounded-xl border border-text-main/10 bg-surface p-5"
          >
            <span className="mt-1 size-3 shrink-0 rounded-full bg-golden-pollen" />
            <p className="leading-7 text-text-muted">{signal}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
