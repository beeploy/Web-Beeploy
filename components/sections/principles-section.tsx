import { SectionShell } from "@/components/ui/section-shell";

const principles = [
  {
    title: "Traducción corporativa, cero opacidad técnica.",
    desc: "Rechazamos la condescendencia tecnológica. Explicamos arquitecturas, despliegues y modelos de datos como estrategias directas de retorno financiero."
  },
  {
    title: "Eficiencia estructural en la inversión.",
    desc: "El panal no desperdicia espacio; nosotros no malgastamos presupuesto. Cada módulo se programa exclusivamente si resuelve una falla operativa demostrada."
  },
  {
    title: "Software nativo al ecosistema del cliente.",
    desc: "La herramienta debe moldearse a la empresa. Erradicamos dependencias de herramientas genéricas que sabotean los procesos que te hacen único."
  },
  {
    title: "Gestión perenne del riesgo.",
    desc: "Nuestra obligación ética y técnica no culmina con el código desplegado. Mantenemos el resguardo y la escalabilidad del sistema a largo plazo."
  }
];

export function PrinciplesSection() {
  return (
    <SectionShell
      className="pt-0"
      eyebrow="Garantías del Ecosistema"
      title="Construcción técnica liderada por socios de negocio."
      intro="La confianza institucional se forja con resultados de alta precisión y con el respaldo continuo hacia el equipo operativo que utiliza nuestras soluciones."
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
            <h3 className="min-h-[64px] font-heading text-2xl font-black text-neutral-900">
              {principle.title}
            </h3>
            <p className="text-neutral-600 text-sm mt-2">
              {principle.desc}
            </p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
