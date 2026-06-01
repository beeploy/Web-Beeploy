import { SectionShell } from "@/components/ui/section-shell";

const principles = [
  "Te explicamos en español de negocio.",
  "Cuidamos tu inversión como si fuera nuestra.",
  "Construimos para vender, optimizar o proteger.",
  "No desaparecemos después del lanzamiento.",
];

export function PrinciplesSection() {
  return (
    <SectionShell
      className="pt-0"
      eyebrow="Nosotros"
      title="Somos el equipo que habla como socio, no como manual."
      intro="La tecnología puede ser compleja por dentro, pero para ti debe sentirse clara, útil y rentable."
    >
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {principles.map((principle, index) => (
          <div
            key={principle}
            className="rounded-xl border border-text-main/10 bg-surface p-6 text-left"
          >
            <span className="mb-2 block text-sm font-bold text-golden-pollen">
              0{index + 1}
            </span>
            <p className="font-heading text-2xl font-black text-text-main">
              {principle}
            </p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
