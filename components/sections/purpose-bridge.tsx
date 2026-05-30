import { ButtonLink } from "@/components/ui/button-link";

export function PurposeBridge() {
  return (
    <section className="px-6 py-20">
      <div className="dark-technical-grid mx-auto overflow-hidden rounded-xl bg-text-main text-white shadow-soft">
        <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[0.95fr_1.05fr] lg:p-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-golden-pollen">
              Puente a Camellapp
            </p>
            <h2 className="mt-4 max-w-2xl font-heading text-4xl font-black leading-tight sm:text-5xl">
              La tecnologia tambien puede devolver oportunidades.
            </h2>
          </div>
          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-white/78">
              Cada proyecto de Beeploy ayuda a financiar Camellapp, una
              plataforma pensada para devolver trabajo, reputacion y dignidad a
              personas en Latam. No es filantropia decorativa: es arquitectura
              tecnica al servicio de un tejido humano mas fuerte.
            </p>
            <div className="mt-8">
              <ButtonLink href="/camellapp" variant="gold">
                Conocer Camellapp
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
