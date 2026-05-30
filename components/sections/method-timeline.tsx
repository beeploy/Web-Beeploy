import { SectionShell } from "@/components/ui/section-shell";

const steps = [
  {
    title: "Diagnosticar",
    body: "Leemos riesgos, sistemas y restricciones antes de prometer una solucion.",
  },
  {
    title: "Diseñar",
    body: "Convertimos incertidumbre en arquitectura, alcance y criterios de exito.",
  },
  {
    title: "Construir",
    body: "Entregamos en ciclos breves, con visibilidad y decisiones tecnicas explicadas.",
  },
  {
    title: "Transferir",
    body: "Documentamos, acompanamos y dejamos capacidades dentro del equipo.",
  },
];

export function MethodTimeline() {
  return (
    <SectionShell
      className="bg-surface"
      eyebrow="Metodo"
      title="La velocidad correcta empieza con una buena lectura del sistema."
      intro="Nuestro trabajo combina precision arquitectonica y cuidado operativo: cada decision debe sostenerse frente al equipo tecnico y frente al negocio."
    >
      <ol className="mt-12 grid gap-5 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="relative rounded-xl border border-text-main/10 bg-background p-6"
          >
            <span className="text-sm font-bold text-text-muted">
              Paso {index + 1}
            </span>
            <h3 className="mt-4 font-heading text-2xl font-black text-text-main">
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
