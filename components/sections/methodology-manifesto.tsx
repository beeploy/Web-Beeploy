import { SectionShell } from "@/components/ui/section-shell";
import { Network, Hexagon } from "lucide-react";

export function MethodologyManifesto() {
  return (
    <SectionShell
      className="bg-surface"
      eyebrow="Nuestra Metodología"
      title="La Mente Colmena: Ingeniería y Precisión"
      intro="En Beeploy no trabajamos al azar. Operamos bajo un sistema altamente estructurado donde cada pieza de código y cada estrategia tiene un propósito. Somos el socio tecnológico de las empresas en Guayaquil que buscan escalar sin fricciones."
    >
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {/* Tarjeta 1 - Envuelta en su propio div para Blendy */}
        <div className="methodology-card-wrapper group rounded-2xl border border-text-main/10 bg-background p-8 transition-shadow hover:shadow-soft">
          <div className="mb-6 inline-flex size-12 items-center justify-center rounded-xl bg-golden-pollen/10 text-golden-pollen">
            <Network className="size-6" />
          </div>
          <h3 className="mb-4 font-heading text-2xl font-black text-text-main">
            Sincronización Ágil
          </h3>
          <p className="leading-relaxed text-text-muted">
            Al igual que una colmena opera con roles definidos y un enfoque absoluto, nuestro equipo ejecuta el desarrollo bajo metodologías ágiles. Trabajamos en ciclos de sprints estructurados para garantizar entregas continuas, comunicación transparente y cero tiempo perdido. Sabrás exactamente en qué fase está tu proyecto en todo momento.
          </p>
        </div>

        {/* Tarjeta 2 - Envuelta en su propio div para Blendy */}
        <div className="methodology-card-wrapper group rounded-2xl border border-text-main/10 bg-background p-8 transition-shadow hover:shadow-soft">
          <div className="mb-6 inline-flex size-12 items-center justify-center rounded-xl bg-golden-pollen/10 text-golden-pollen">
            <Hexagon className="size-6" />
          </div>
          <h3 className="mb-4 font-heading text-2xl font-black text-text-main">
            Arquitectura de Panal (Stack Tecnológico)
          </h3>
          <p className="leading-relaxed text-text-muted">
            El hexágono es matemáticamente la estructura más eficiente y resistente de la naturaleza para almacenar recursos. Así construimos nuestro software. Desarrollamos con arquitecturas modernas y modulares utilizando tecnologías robustas como React y Node.js. El resultado son sistemas veloces, mantenibles y capaces de soportar el crecimiento de tu empresa sin colapsar. Cero código espagueti, pura ingeniería.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
