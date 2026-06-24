import { ButtonLink } from "@/components/ui/button-link";
import { Eyebrow } from "@/components/ui/eyebrow";

export function PurposeBridge() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-center lg:gap-14">
        <div>
          <Eyebrow dark>Impacto Polinizador</Eyebrow>
          <h2 className="mt-4 text-balance font-heading text-3xl font-black leading-[1.08] text-white sm:text-4xl lg:text-5xl">
            La infraestructura que fortalece tu empresa también democratiza el
            acceso al talento.
          </h2>
        </div>

        <div className="flex flex-col gap-8 lg:border-l lg:border-white/10 lg:pl-12">
          <p className="text-lg leading-relaxed text-white/90">
            Cameyapp no compite con nuestro ecosistema, lo complementa. Mientras
            nosotros construimos las capacidades tecnológicas de tu organización,
            tú propicias la plataforma de empleabilidad directa en
            Latinoamérica.
          </p>
          <div>
            <ButtonLink href="/cameyapp" variant="gold">
              Ver Manifiesto
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}
