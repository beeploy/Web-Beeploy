import { ButtonLink } from "@/components/ui/button-link";
import { BeeployBeePlaceholder } from "@/components/visuals/beeploy-bee-placeholder";

export function PurposeBridge() {
  return (
    <section className="px-6 py-20">
      <div className="dark-technical-grid mx-auto overflow-hidden rounded-xl bg-text-main text-white shadow-soft">
        <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_0.8fr] lg:p-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-golden-pollen">
              Puente a Cameyapp
            </p>
            <h2 className="mt-4 max-w-3xl text-balance font-heading text-4xl font-black leading-tight sm:text-5xl">
              Tu proyecto también ayuda a construir trabajo digno en Latam.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
              Cada app, web, sistema o solución de datos que construimos en
              Beeploy impulsa Cameyapp: una plataforma para conectar personas
              con oportunidades reales. La Abejita Beeploy será la guía humana
              de ese camino.
            </p>
            <div className="mt-8">
              <ButtonLink href="/cameyapp" variant="gold">
                Conocer Cameyapp
              </ButtonLink>
            </div>
          </div>
          <BeeployBeePlaceholder />
        </div>
      </div>
    </section>
  );
}
