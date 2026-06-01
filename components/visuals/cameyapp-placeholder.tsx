export function CameyappPlaceholder() {
  return (
    <figure className="grid min-h-[340px] place-items-center rounded-xl border border-dashed border-text-main/20 bg-background p-8 text-center">
      <div>
        <div
          className="mx-auto grid size-32 place-items-center rounded-xl border border-text-main/10 bg-surface shadow-soft"
          aria-hidden="true"
        >
          <span className="text-5xl" role="img" aria-label="Abejita en construcción">
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
