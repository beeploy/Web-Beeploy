import { ButtonLink } from "@/components/ui/button-link";
import { Eyebrow } from "@/components/ui/eyebrow";

export function FinalCta() {
  return (
    <div className="mx-auto max-w-7xl border-t border-white/10 pt-24 text-center">
      <Eyebrow dark>Diagnóstico Estructural</Eyebrow>
      <h2 className="mx-auto mt-4 max-w-3xl font-heading text-3xl font-black leading-tight sm:text-5xl">
        La madurez de un negocio se mide por la escalabilidad de su infraestructura.
      </h2>
      <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/90">
        Transformamos las vulnerabilidades y cuellos de botella operativos en plataformas resilientes. Desplegamos soluciones de ingeniería para proteger, estructurar y potenciar el rendimiento global de tu corporación.
      </p>
      <div className="mt-8 flex justify-center">
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
  );
}
