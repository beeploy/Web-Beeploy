import { ButtonLink } from "@/components/ui/button-link";
import { Eyebrow } from "@/components/ui/eyebrow";

export function FinalCta() {
  return (
    <div className="mx-auto max-w-7xl">
      <hr className="border-t border-white/10 my-12 md:my-16" />
      <div className="pt-8 text-center flex flex-col items-center">
        <Eyebrow dark>Diagnóstico Estructural</Eyebrow>
        <div className="mt-4 mb-8 max-w-3xl">
          <h2 className="font-heading text-3xl font-black leading-tight sm:text-5xl text-balance">
            La madurez de un negocio se mide por la escalabilidad de su infraestructura.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/90">
            Transformamos las vulnerabilidades y cuellos de botella operativos en plataformas resilientes. Desplegamos soluciones de ingeniería para proteger, estructurar y potenciar el rendimiento global de tu corporación.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <ButtonLink
            href="https://wa.me/593997963617?text=Hola%20Beeploy%2C%20requerimos%20el%20an%C3%A1lisis%20de%20nuestra%20infraestructura%20tecnol%C3%B3gica."
            variant="gold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar diagnóstico de arquitectura
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
