import { ButtonLink } from "@/components/ui/button-link";

export function PurposeBridge() {
  return (
    <section className="px-6 py-20">
      <div className="dark-technical-grid mx-auto overflow-hidden rounded-2xl bg-[#1a1a1a] text-white shadow-soft">
        <div className="p-8 sm:p-12 lg:p-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-golden-pollen">
              Puente a Cameyapp
            </p>
            <h2 className="mt-4 text-balance font-heading text-4xl font-black leading-tight sm:text-5xl">
              Tu proyecto también ayuda a construir trabajo digno en Latinoamérica.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/70">
              Cada app, web, sistema o solución de datos que construimos en
              Beeploy impulsa Cameyapp: una plataforma para conectar personas
              con oportunidades reales.
            </p>
            <div className="mt-8 flex justify-center">
              <ButtonLink href="/cameyapp" variant="gold">
                Conoce Cameyapp
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
