import { hexClip } from "@/components/ui/hexClip";

export function CameyappPlaceholder() {
  return (
    <figure className="grid min-h-[340px] place-items-center rounded-xl border border-dashed border-text-main/20 bg-background p-8 text-center">
      <div>
        <div
          className="mx-auto relative grid size-32 place-items-center bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 shadow-lg"
          style={{ clipPath: hexClip }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 h-[55%] bg-gradient-to-b from-white/65 via-white/10 to-transparent mix-blend-overlay pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-amber-800/35 to-transparent pointer-events-none" />
          <span className="relative z-10 text-5xl" role="img" aria-label="Abejita en construcción">
            🐝🚧
          </span>
        </div>
        <figcaption className="mt-5 text-sm font-semibold text-text-muted">
          Espacio reservado para la Abejita con casco de ingeniero/arquitecto.
        </figcaption>
      </div>
    </figure>
  );
}
