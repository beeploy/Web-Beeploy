import { ButtonLink } from "@/components/ui/button-link";

export function PurposeBridge() {
  return (
    <section className="px-6 py-20">
      <div className="dark-technical-grid mx-auto overflow-hidden rounded-2xl bg-[#1a1a1a] text-white shadow-soft">
        <div className="p-8 sm:p-12 lg:p-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-golden-pollen">
              Impacto Polinizador
            </p>
            <h2 className="mt-4 text-balance font-heading text-4xl font-black leading-tight sm:text-5xl">
              La infraestructura que fortalece tu empresa también democratiza el acceso al talento.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Cameyapp no compite con nuestro ecosistema, lo complementa. Mientras nosotros construimos las capacidades tecnológicas de tu organización, tú propicias la plataforma de empleabilidad directa en Latinoamérica.
            </p>
            <div className="mt-8 flex justify-center">
              <ButtonLink href="/cameyapp" variant="gold">
                Conocer la Trascendencia de Cameyapp
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
