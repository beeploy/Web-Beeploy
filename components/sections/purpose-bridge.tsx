import { ButtonLink } from "@/components/ui/button-link";
import { Eyebrow } from "@/components/ui/eyebrow";

export function PurposeBridge() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow dark>Impacto Polinizador</Eyebrow>
        <h2 className="mt-4 text-balance font-heading text-4xl font-black leading-tight sm:text-5xl">
          La infraestructura que fortalece tu empresa también democratiza el acceso al talento.
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/90">
          Cameyapp no compite con nuestro ecosistema, lo complementa. Mientras nosotros construimos las capacidades tecnológicas de tu organización, tú propicias la plataforma de empleabilidad directa en Latinoamérica.
        </p>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/cameyapp" variant="gold">
            Conocer la Trascendencia de Cameyapp
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
