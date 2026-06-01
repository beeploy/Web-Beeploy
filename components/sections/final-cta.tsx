import { ButtonLink } from "@/components/ui/button-link";

export function FinalCta() {
  return (
    <section className="px-6 pb-24 pt-8">
      <div className="mx-auto max-w-7xl rounded-xl border border-text-main/10 bg-surface p-8 text-center shadow-soft sm:p-12">
        <h2 className="mx-auto max-w-3xl font-heading text-3xl font-black leading-tight text-text-main sm:text-5xl">
          ¿Listo para que tu tecnología trabaje por tu negocio?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-text-muted">
          Cuéntanos qué quieres vender, automatizar, proteger o medir. Beeploy
          te ayuda a convertirlo en una solución clara.
        </p>
        <div className="mt-8 flex justify-center">
          <ButtonLink
            href="https://wa.me/593997963617?text=Hola%20Beeploy%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios%20tecnol%C3%B3gicos."
            variant="gold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quiero cotizar mi proyecto
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
