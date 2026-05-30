type SectionShellProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionShell({
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: SectionShellProps) {
  return (
    <section className={`px-6 py-20 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-text-muted">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 font-heading text-3xl font-black leading-tight text-text-main sm:text-4xl">
            {title}
          </h2>
          {intro ? (
            <p className="mt-4 text-lg leading-8 text-text-muted">{intro}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
