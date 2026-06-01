import { SectionShell } from "@/components/ui/section-shell";

const signals = [
  "Tu equipo copia datos a mano todos los días.",
  "Tu web existe, pero no atrae clientes.",
  "No sabes qué producto, sucursal o canal deja más margen.",
  "Te preocupa que un hackeo o error detenga la operación.",
  "Tu negocio creció y Excel ya no alcanza.",
  "Quieres una app o sistema, pero no sabes por dónde empezar.",
];

export function FitSignals() {
  return (
    <SectionShell
      eyebrow="Cuando entrar"
      title="Beeploy entra cuando la tecnología ya debe producir dinero."
    >
      <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {signals.map((signal) => (
          <li
            key={signal}
            className="flex min-h-28 gap-4 rounded-xl border border-neutral-200 bg-surface p-5"
          >
            <span className="mt-1.5 size-3 shrink-0 rounded-full bg-golden-pollen" />
            <p className="leading-7 text-text-muted">{signal}</p>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
