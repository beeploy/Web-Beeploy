type BeeployMarkProps = {
  inverse?: boolean;
};

export function BeeployMark({ inverse = false }: BeeployMarkProps) {
  return (
    <span className="inline-flex items-center gap-3" aria-label="Beeploy">
      <span
        className={`grid size-10 place-items-center rounded-xl border ${
          inverse
            ? "border-white/20 bg-white text-text-main"
            : "border-text-main/10 bg-text-main text-white"
        }`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 32 32" className="size-6" fill="none">
          <path
            d="M16 3 27 9.5v13L16 29 5 22.5v-13L16 3Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M11 14h10M11 18h10M16 9v14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span
        className={`font-heading text-2xl font-black tracking-normal ${
          inverse ? "text-white" : "text-text-main"
        }`}
      >
        beeploy
      </span>
    </span>
  );
}
