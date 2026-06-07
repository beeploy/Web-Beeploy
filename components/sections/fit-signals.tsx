import { SectionShell } from "@/components/ui/section-shell";
import { hexClip } from "@/components/ui/hexClip";

const signals = [
  "Tu operación es rehén de procesos manuales y hojas de cálculo desconectadas.",
  "Posees grandes volúmenes de datos que permanecen invisibles a la hora de tomar decisiones gerenciales.",
  "La integridad de tu sistema, base de clientes o flujo de pago carece de validación en ciberseguridad.",
  "Estás pagando licencias de software complejas que fuerzan a tu equipo a modificar su forma de trabajar.",
  "Las herramientas actuales de tu empresa colapsan frente a picos de demanda o escalabilidad comercial.",
  "La brecha digital de tu corporación permite que competidores absorban tu cuota del mercado.",
];

export function FitSignals() {

  return (
    <SectionShell
      className="bg-warm"
      eyebrow="Tensión Estructural"
      title="Síntomas inequívocos de que tu infraestructura actual frena tu competitividad."
    >
      <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {signals.map((signal) => (
          <li
            key={signal}
            className="flex min-h-28 gap-4 rounded-2xl border border-neutral-200 bg-surface p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
          >
            {/* Micro-hexágono glossy — sin ícono, sólo miel */}
            <div
              className="relative mt-1.5 size-5 shrink-0 bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 shadow-sm"
              style={{ clipPath: hexClip }}
            >
              <div className="absolute inset-0 h-[55%] bg-gradient-to-b from-white/65 via-white/10 to-transparent mix-blend-overlay pointer-events-none"></div>
              <div className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-amber-800/35 to-transparent pointer-events-none"></div>
            </div>
            <p className="leading-relaxed font-medium text-neutral-800 text-[15px]">{signal}</p>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
