type RoutePlaceholderProps = {
  title: string;
};

export function RoutePlaceholder({ title }: RoutePlaceholderProps) {
  return (
    <main id="contenido" className="px-6 py-24">
      <section className="mx-auto max-w-4xl rounded-xl border border-text-main/10 bg-surface p-8 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-text-muted">
          Beeploy
        </p>
        <h1 className="mt-3 font-heading text-4xl font-black text-text-main">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-text-muted">
          Esta ruta base queda preparada para crecer sin distraer la landing
          principal.
        </p>
      </section>
    </main>
  );
}
