import { SectionShell } from "@/components/ui/section-shell";

const principles = [
  {
    title: "Te explicamos en español de negocio.",
    desc: "Traducimos la complejidad del software a resultados financieros. Cero jerga técnica innecesaria."
  },
  {
    title: "Cuidamos tu inversión como si fuera nuestra.",
    desc: "Cada línea de código está pensada para generar retorno y eficiencia, no para inflar el presupuesto."
  },
  {
    title: "Construimos para vender, optimizar o proteger.",
    desc: "Desarrollamos sistemas escalables enfocados estrictamente en resolver problemas operativos."
  },
  {
    title: "No desaparecemos después del lanzamiento.",
    desc: "Ofrecemos monitoreo continuo, soporte técnico y escalabilidad a largo plazo."
  }
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
            key={principle.title}
            className="rounded-2xl border border-neutral-100 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-6 text-left"
          >
            <div className="mb-4 inline-flex size-10 items-center justify-center hexagon bg-text-main text-sm font-black text-golden-pollen">
              0{index + 1}
            </div>
            <p className="font-heading text-2xl font-black text-neutral-900">
              {principle.title}
            </p>
            <p className="text-neutral-600 text-sm mt-2">
              {principle.desc}
            </p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
