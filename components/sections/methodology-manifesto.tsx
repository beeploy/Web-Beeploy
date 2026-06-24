import { SectionShell } from "@/components/ui/section-shell";
import { RefreshCcw, Hexagon } from "lucide-react";
import { hexClip } from "@/components/ui/hexClip";

export function MethodologyManifesto() {
  return (
    <SectionShell
      variant="light"
      eyebrow="Integridad Técnica"
      title="Inteligencia Colectiva: Ingeniería Desacoplada"
      intro="En Beeploy erradicamos la entropía tecnológica. Operamos bajo un esquema de ingeniería predecible donde cada decisión de software se asienta en escalabilidad comercial y seguridad."
    >
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="group border border-text-main/10 bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
          <div className="mb-6 flex items-center gap-4">
            <div className="relative grid size-14 shrink-0 place-items-center bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 shadow-lg" style={{ clipPath: hexClip }}>
              <div className="absolute inset-0 h-[55%] pointer-events-none bg-gradient-to-b from-white/65 via-white/10 to-transparent mix-blend-overlay" />
              <div className="absolute inset-x-0 bottom-0 h-[40%] pointer-events-none bg-gradient-to-t from-amber-800/35 to-transparent" />
              <RefreshCcw className="relative z-10 size-6 text-amber-950" />
            </div>
            <p className="font-heading text-xl font-bold text-text-main">
              Sincronización Transparente
            </p>
          </div>
          <p className="mx-auto max-w-3xl leading-relaxed text-text-muted">
            Ejecutamos implementaciones con un paralelismo biológico a la colmena. Coordinamos módulos complejos en tiempo real sin saturar a los líderes del proyecto. Desplegamos versiones continuas, con hitos verificables y entregas limpias para anular la especulación y el riesgo del mercado.
          </p>
        </div>

        <div className="group border border-text-main/10 bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
          <div className="mb-6 flex items-center gap-4">
            <div className="relative grid size-14 shrink-0 place-items-center bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 shadow-lg" style={{ clipPath: hexClip }}>
              <div className="absolute inset-0 h-[55%] pointer-events-none bg-gradient-to-b from-white/65 via-white/10 to-transparent mix-blend-overlay" />
              <div className="absolute inset-x-0 bottom-0 h-[40%] pointer-events-none bg-gradient-to-t from-amber-800/35 to-transparent" />
              <Hexagon className="relative z-10 size-6 text-amber-950" />
            </div>
            <p className="font-heading text-xl font-bold text-text-main">
              Arquitectura Hexagonal (Modularidad)
            </p>
          </div>
          <p className="mx-auto max-w-3xl leading-relaxed text-text-muted">
            Nuestros desarrollos no se limitan a funcionar temporalmente. Construimos el código alrededor de un patrón de puertos y adaptadores: separando el núcleo vital de tu negocio de factores externos (como bases de datos e interfaces). Así blindamos tu inversión contra la obsolescencia técnica inminente.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
