export function CamellappPlaceholder() {
  return (
    <figure className="grid min-h-[340px] place-items-center rounded-xl border border-dashed border-text-main/20 bg-background p-8 text-center">
      <div>
        <div
          className="mx-auto grid size-32 place-items-center rounded-xl border border-text-main/10 bg-surface shadow-soft"
          aria-hidden="true"
        >
          <svg viewBox="0 0 120 120" className="size-24" fill="none">
            <path
              d="M33 61c6-13 16-20 27-20s21 7 27 20c-5 17-14 26-27 26S38 78 33 61Z"
              fill="#FFCC33"
              stroke="#1A1A1A"
              strokeWidth="4"
            />
            <path
              d="M36 48c4-13 13-20 24-20s20 7 24 20"
              stroke="#1A1A1A"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M31 44h58l-6-13H37l-6 13Z"
              fill="#FFFFFF"
              stroke="#1A1A1A"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            <path
              d="M44 64h32M48 75h24"
              stroke="#1A1A1A"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <figcaption className="mt-5 text-sm font-semibold text-text-muted">
          Espacio reservado para la Abejita con casco de ingeniero/arquitecto.
        </figcaption>
      </div>
    </figure>
  );
}
