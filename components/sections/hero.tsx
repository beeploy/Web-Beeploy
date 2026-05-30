import { ButtonLink } from "@/components/ui/button-link";
import { NetworkField } from "@/components/visuals/network-field";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-14 sm:pb-24 sm:pt-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.92fr]">
        <div className="relative z-10 max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-text-main/10 bg-surface px-4 py-2 text-sm font-bold text-text-muted shadow-sm">
            Arquitectura que cuida
          </p>
          <h1 className="font-heading text-5xl font-black leading-[1.02] text-text-main sm:text-6xl lg:text-7xl">
            Software critico con rigor tecnico y proposito humano.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted">
            Beeploy construye ciberseguridad, datos y software a medida para
            organizaciones que necesitan sistemas confiables, decisiones claras
            y una relacion tecnica profundamente humana.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contacto">Agendar diagnostico</ButtonLink>
            <ButtonLink href="/camellapp" variant="light">
              Ver proposito social
            </ButtonLink>
          </div>
        </div>

        <div className="relative min-h-[420px] rounded-xl border border-text-main/10 bg-surface shadow-soft">
          <NetworkField />
          <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-3">
            {["Seguridad", "Datos", "Software"].map((label) => (
              <div
                key={label}
                className="rounded-xl border border-text-main/10 bg-white/88 p-4 backdrop-blur"
              >
                <span className="block size-2 rounded-full bg-golden-pollen" />
                <p className="mt-3 text-sm font-bold text-text-main">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
