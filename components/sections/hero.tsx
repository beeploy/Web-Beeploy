import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";

export function Hero() {
  return (
    <section className="honeycomb-bg relative overflow-hidden px-6 pb-16 pt-12 sm:pb-24 sm:pt-18">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]"
        aria-hidden="true"
      >
        <svg viewBox="0 0 32 32" className="size-[28rem] sm:size-[40rem] lg:size-[56rem]" fill="none">
          <path
            d="M16 3 27 9.5v13L16 29 5 22.5v-13L16 3Z"
            stroke="#FFCC33"
            strokeWidth="0.5"
          />
          <path
            d="M11 14h10M11 18h10M16 9v14"
            stroke="#FFCC33"
            strokeWidth="0.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.92fr]">
        <div className="relative z-10 max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-golden-pollen bg-golden-pollen px-4 py-2 text-sm font-black text-text-main shadow-sm">
            La Colmena Tech de Beeploy
          </p>
          <h1 className="text-balance font-heading text-5xl font-black leading-[1.02] text-text-main sm:text-6xl lg:text-7xl">
            Tecnología de élite para hacer crecer tu empresa.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted">
            Creamos la app, web o sistema que tu negocio necesita, protegemos
            tu información y ordenamos tus datos para que vendas más, pierdas
            menos tiempo y tomes decisiones rentables.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href="https://wa.me/593997963617?text=Hola%20equipo%20de%20Beeploy.%20Quiero%20escalar%20mi%20empresa%20y%20me%20gustar%C3%ADa%20agendar%20un%20diagn%C3%B3stico%20tecnol%C3%B3gico."
              variant="gold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar diagnóstico
            </ButtonLink>
            <ButtonLink href="#servicios" variant="dark">
              Ver soluciones
            </ButtonLink>
          </div>
        </div>

        <div className="relative min-h-[460px] flex-1 overflow-hidden rounded-2xl border border-text-main/10 bg-surface shadow-soft">
          {/* Patrón sutil de colmena — se mantiene */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <svg viewBox="0 0 32 32" className="absolute left-1/2 top-1/2 size-80 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]" fill="none">
              <path d="M16 3 27 9.5v13L16 29 5 22.5v-13L16 3Z" stroke="#FFCC33" strokeWidth="0.5" />
              <path d="M11 14h10M11 18h10M16 9v14" stroke="#FFCC33" strokeWidth="0.5" strokeLinecap="round" />
            </svg>
          </div>

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
