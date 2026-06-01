const items = [
  "Más ventas con mejores sistemas",
  "Menos riesgos y fugas de información",
  "Decisiones rentables con datos claros",
];

export function TrustBar() {
  return (
    <section className="px-6">
      <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-xl border border-text-main/10 bg-text-main/10 sm:grid-cols-3">
        {items.map((item) => (
          <div key={item} className="bg-surface p-6">
            <span className="mb-4 block h-1 w-10 rounded-full bg-golden-pollen" />
            <p className="font-heading text-xl font-black text-text-main">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
