import { TrendingUp, ShieldCheck, Network } from "lucide-react";

const items = [
  { text: "Más ventas con mejores sistemas", desc: "Optimizamos tus canales digitales y automatizamos procesos para atraer y retener más clientes.", icon: TrendingUp },
  { text: "Menos riesgos y fugas de información", desc: "Blindamos tu infraestructura contra ataques externos y aseguramos la continuidad operativa 24/7.", icon: ShieldCheck },
  { text: "Decisiones rentables con datos claros", desc: "Transformamos tu información dispersa en tableros visuales para que tomes decisiones basadas en métricas reales.", icon: Network },
];

export function TrustBar() {
  return (
    <section className="px-6">
      <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-xl border border-text-main/10 bg-text-main/10 sm:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.text} className="bg-surface p-6">
              <Icon className="mb-4 size-6 text-golden-pollen" />
              <p className="font-heading text-xl font-black text-text-main">
                {item.text}
              </p>
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
