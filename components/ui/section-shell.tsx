type SectionShellProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: SectionShellProps) {
  return (
    <section id={id} className={`px-4 py-16 sm:px-6 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-neutral-100 bg-white/95 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-sm sm:p-10 md:p-16">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.22em] text-text-main">
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
