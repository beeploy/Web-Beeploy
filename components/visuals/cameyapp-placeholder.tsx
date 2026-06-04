import { hexClip } from "@/components/ui/hexClip";

export function CameyappPlaceholder() {
  return (
    <figure className="grid min-h-[340px] place-items-center rounded-xl border border-dashed border-text-main/20 bg-background p-8 text-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-3 rounded-full bg-golden-pollen/20 px-4 py-2 text-golden-pollen">
          <span className="text-xl" role="img" aria-label="Construcción">🚧</span>
          <span className="text-sm font-bold uppercase tracking-widest">En Construcción</span>
        </div>
        <figcaption className="mt-2 max-w-[250px] text-sm font-medium leading-relaxed text-text-muted">
          Espacio reservado para la plataforma de Cameyapp.
        </figcaption>
      </div>
    </figure>
  );
}
