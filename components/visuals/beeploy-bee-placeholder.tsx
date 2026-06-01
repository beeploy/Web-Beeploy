export function BeeployBeePlaceholder() {
  return (
    <figure className="relative mx-auto max-w-sm">
      <div className="hexagon mx-auto grid aspect-square w-64 place-items-center bg-golden-pollen p-7 shadow-soft">
        <div className="grid size-44 place-items-center rounded-full bg-surface">
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
