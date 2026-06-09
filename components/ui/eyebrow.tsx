export function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 border border-amber-300 bg-amber-50 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-text-main shadow-sm">
      <span className="size-1.5 bg-amber-500" aria-hidden="true" />
      {children}
    </span>
  );
}

export function Eyebrow({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      className={`inline-block text-sm font-black uppercase tracking-[0.22em] underline decoration-2 underline-offset-4 ${
        dark
          ? "text-golden-pollen decoration-golden-pollen/70"
          : "text-text-main decoration-text-main/30"
      }`}
    >
      {children}
    </p>
  );
}
