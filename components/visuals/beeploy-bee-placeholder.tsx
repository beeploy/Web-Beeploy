import { JSX } from "react";
import { hexClip } from "@/components/ui/hexClip";

export function BeeployBeePlaceholder(): JSX.Element {
  return (
    <figure className="relative mx-auto max-w-sm">
      <div 
        className="mx-auto relative grid aspect-square w-64 place-items-center bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 shadow-lg"
        style={{ clipPath: hexClip }}
      >
        <div className="absolute inset-0 h-[55%] bg-gradient-to-b from-white/65 via-white/10 to-transparent mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-amber-800/35 to-transparent pointer-events-none" />
        <div 
          className="relative z-10 grid size-44 place-items-center bg-surface"
          style={{ clipPath: hexClip }}
        >
          <span className="text-7xl leading-none" role="img" aria-label="Abejita Beeploy">
            🐝
          </span>
        </div>
      </div>
      <figcaption className="mt-5 rounded-xl border border-white/15 bg-white/10 p-4 text-center text-sm font-semibold text-white/82">
        Espacio reservado para la Abejita Beeploy, la guía cercana de Cameyapp.
      </figcaption>
    </figure>
  );
}
