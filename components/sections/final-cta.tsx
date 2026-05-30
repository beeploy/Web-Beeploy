import { ButtonLink } from "@/components/ui/button-link";

export function FinalCta() {
  return (
    <section className="px-6 pb-24 pt-8">
      <div className="mx-auto max-w-7xl rounded-xl border border-text-main/10 bg-surface p-8 text-center shadow-soft sm:p-12">
        <h2 className="mx-auto max-w-3xl font-heading text-3xl font-black leading-tight text-text-main sm:text-5xl">
          Construyamos sistemas que sostengan negocio y proposito.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-text-muted">
          Si tu organizacion necesita seguridad, datos o software con criterio,
          conversemos con calma y profundidad.
        </p>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/contacto">Agendar diagnostico</ButtonLink>
        </div>
      </div>
    </section>
  );
}
