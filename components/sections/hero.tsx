import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-12 sm:pb-24 sm:pt-18">

      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.92fr]">
        <div className="relative z-10 max-w-3xl">
          <p className="mb-6 inline-block px-6 py-2 rounded-full border border-amber-300 bg-amber-100 text-amber-950 font-bold uppercase tracking-wide text-xs text-center cursor-default">
            La Colmena de la Tecnología
          </p>
          <h1 className="text-balance font-heading text-5xl font-black leading-[1.02] text-text-main sm:text-6xl lg:text-7xl">
            Tecnología de élite para hacer crecer tu empresa.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted">
            Creamos la app, web o sistema que tu negocio necesita, protegemos
            tu información y ordenamos tus datos para que vendas más, pierdas
            menos tiempo y tomes decisiones rentables.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/servicios" variant="gold">
              Explorar servicios
            </ButtonLink>
            <ButtonLink href="/nosotros" variant="dark">
              Conocer al equipo
            </ButtonLink>
          </div>
        </div>

        <div className="relative min-h-[460px] flex-1 overflow-hidden rounded-2xl border border-text-main/10 bg-surface shadow-soft">


          {/* Isotipo solo, limpio, centrado */}
          <div className="absolute inset-0 grid place-items-center">
            <Image
              src="/isotipo-beeploy.svg"
              alt="Beeploy Isotipo"
              width={180}
              height={180}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
