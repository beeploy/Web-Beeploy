import { ButtonLink } from "@/components/ui/button-link";

export function FinalCta() {
  return (
    <section className="px-6 pb-24 pt-8">
      <div className="mx-auto max-w-7xl rounded-xl border border-text-main/10 bg-surface p-8 text-center shadow-soft sm:p-12">
        <h2 className="mx-auto max-w-3xl font-heading text-3xl font-black leading-tight text-text-main sm:text-5xl">
          La madurez de un negocio se mide por la escalabilidad de su infraestructura.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-text-muted">
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
    </section>
  );
}
