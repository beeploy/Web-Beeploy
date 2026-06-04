import { TrendingUp, ShieldCheck, Network } from "lucide-react";

const items = [
  { text: "Crecimiento sin fricción operativa", desc: "Automatizamos procesos manuales para que tu equipo deje de copiar y pegar, y empiece a generar más ventas.", icon: TrendingUp },
  { text: "Seguridad que protege tu reputación", desc: "Construimos arquitecturas resilientes que blindan tu información antes de que una vulnerabilidad detenga tu negocio.", icon: ShieldCheck },
  { text: "Decisiones basadas en datos reales", desc: "Conectamos tus sistemas dispersos para transformar datos aislados en visibilidad total y decisiones rentables.", icon: Network },
];

export function TrustBar() {
  return (
    <section className="px-6">
      <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.text} className="bg-white p-7 flex flex-col h-full items-start rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-neutral-100">
              <div className="mb-4 flex items-center justify-center w-12 h-12 bg-amber-400 rounded-xl shrink-0">
                <Icon className="size-6 text-neutral-900" />
              </div>
              <div className="min-h-[64px]">
                <p className="font-heading text-xl font-black text-neutral-900">
                  {item.text}
                </p>
              </div>
              <p className="text-neutral-600 text-sm mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
