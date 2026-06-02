import { SectionShell } from "@/components/ui/section-shell";

const steps = [
  {
    title: "Entendemos tu negocio",
    body: "Revisamos cómo vendes, operas y pierdes tiempo antes de recomendar tecnología.",
  },
  {
    title: "Definimos la ruta rentable",
    body: "Priorizamos lo que genera ingresos, reduce costos o baja riesgos primero.",
  },
  {
    title: "Construimos y lanzamos",
    body: "Creamos tu app, web, sistema o tablero con avances visibles y lenguaje claro.",
  },
  {
    title: "Acompañamos el crecimiento",
    body: "Te ayudamos a mejorar, medir y escalar después del lanzamiento.",
  },
];

export function MethodTimeline() {
  return (
    <SectionShell
      className=""
      eyebrow="El Proceso Beeploy"
      title="De la idea al retorno, sin marearte con tecnicismos."
      intro="Beeploy traduce necesidades de negocio en soluciones digitales que se pueden vender, medir y mantener."
    >
      <ol className="mt-12 grid gap-5 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="relative rounded-2xl border border-neutral-100 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-6"
          >
            <span className="text-sm font-bold text-text-muted">
              Paso {index + 1}
            </span>
            <h3 className="mt-4 font-heading text-2xl font-black text-neutral-900">
              {step.title}
            </h3>
            <p className="mt-4 leading-7 text-text-muted">{step.body}</p>
            <span className="absolute right-5 top-5 size-3 rounded-full bg-golden-pollen" />
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
