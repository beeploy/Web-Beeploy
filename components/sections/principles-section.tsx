import { SectionShell } from "@/components/ui/section-shell";

const principles = [
  {
    title: "Traducción corporativa, cero opacidad técnica.",
    desc: "Rechazamos la condescendencia tecnológica. Explicamos arquitecturas, despliegues y modelos de datos como estrategias directas de retorno financiero.",
  },
  {
    title: "Eficiencia estructural en la inversión.",
    desc: "El panal no desperdicia espacio; nosotros no malgastamos presupuesto. Cada módulo se programa exclusivamente si resuelve una falla operativa demostrada.",
  },
  {
    title: "Software nativo al ecosistema del cliente.",
    desc: "La herramienta debe moldearse a la empresa. Erradicamos dependencias de herramientas genéricas que sabotean los procesos que te hacen único.",
  },
  {
    title: "Gestión perenne del riesgo.",
    desc: "Nuestra obligación ética y técnica no culmina con el código desplegado. Mantenemos el resguardo y la escalabilidad del sistema a largo plazo.",
  },
];

export function PrinciplesSection() {
  return (
    <SectionShell
      variant="dark"
      eyebrow="Garantías del Ecosistema"
      title="Construcción técnica liderada por socios de negocio."
      intro="La confianza institucional se forja con resultados de alta precisión y con el respaldo continuo hacia el equipo operativo que utiliza nuestras soluciones."
    >
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {principles.map((principle, index) => (
          <div
            key={principle.title}
            className="border border-white/10 bg-white/5 p-6 text-left"
          >
            <div className="mb-4 flex min-h-[56px] items-center gap-4">
              <div className="inline-flex size-10 shrink-0 items-center justify-center hexagon bg-golden-pollen text-sm font-black text-text-main">
                0{index + 1}
              </div>
              <p className="font-heading text-xl font-bold leading-tight text-white">
                {principle.title}
              </p>
            </div>
            <p className="mx-auto mt-2 max-w-3xl text-sm font-medium leading-relaxed text-white/85">
              {principle.desc}
            </p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
