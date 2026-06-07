import { Zap, ShieldCheck, BrainCircuit } from "lucide-react";
import { hexClip } from "@/components/ui/hexClip";

const items = [
  { text: "Fluidez Operativa", desc: "Erradicamos procesos repetitivos mediante flujos asíncronos para que tu equipo se concentre en rentabilidad, no en trabajo mecánico.", icon: Zap },
  { text: "Ciberseguridad Resiliente", desc: "Implementamos infraestructuras blindadas que protegen tus activos críticos antes de que una vulnerabilidad paralice el negocio.", icon: ShieldCheck },
  { text: "Inteligencia Predictiva", desc: "Unificamos bases de datos aisladas en tableros de control precisos, habilitando decisiones respaldadas matemáticamente.", icon: BrainCircuit },
];

export function TrustBar() {

  return (
    <section className="px-6">
      <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.text} className="bg-surface p-7 flex flex-col h-full items-start rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-neutral-200">
              <div className="mb-4 flex min-h-[56px] items-center gap-4">
                <div
                  className="relative grid size-14 shrink-0 place-items-center bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 shadow-lg"
                  style={{ clipPath: hexClip }}
                >
                  <div className="absolute inset-0 h-[55%] pointer-events-none bg-gradient-to-b from-white/65 via-white/10 to-transparent mix-blend-overlay" />
                  <div className="absolute inset-x-0 bottom-0 h-[40%] pointer-events-none bg-gradient-to-t from-amber-800/35 to-transparent" />
                  <Icon className="relative z-10 size-6 text-amber-950" />
                </div>
                <h3 className="font-heading text-xl font-black leading-tight text-neutral-900">
                  {item.text}
                </h3>
              </div>
              <p className="mt-2 text-sm font-medium leading-relaxed text-neutral-800">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
