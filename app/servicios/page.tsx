import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/section-shell";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Desarrollo a la medida, ciberseguridad y marketing digital para empresas en Ecuador y Latam. Soluciones que entienden tu negocio desde el primer minuto.",
};

/* ─── Datos ──────────────────────────────────────────────── */

const devSolutions = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M9 9l6 6M15 9l-6 6" />
      </svg>
    ),
    title: "Software a la Medida",
    body: "Apps web o móviles, ERPs, CRMs o portales construidos exactamente para tu flujo de trabajo — sin funciones que nunca usarás.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2a10 10 0 1 1 0 20A10 10 0 0 1 12 2Z" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "Adopción de IA",
    body: "Integramos modelos de lenguaje y automatizaciones inteligentes para que operes más rápido con menos personal en tareas repetitivas.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 6h16M4 12h10M4 18h7" />
        <circle cx="19" cy="17" r="3" />
        <path d="M21.5 19.5 23 21" />
      </svg>
    ),
    title: "Automatizaciones B2C",
    body: "Flujos de captación, seguimiento y venta que corren solos: notificaciones, formularios, integraciones con WhatsApp, email o ERP.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    title: "Organización de Datos",
    body: "Convertimos hojas de cálculo desordenadas en dashboards en tiempo real que te dicen qué vender, dónde invertir y qué cortar.",
  },
];

const cyberCards = [
  {
    num: "01",
    title: "Auditoría de Seguridad Web",
    body: "Encontramos brechas en tu plataforma — inyecciones SQL, XSS, configuraciones expuestas — antes de que un atacante lo haga.",
  },
  {
    num: "02",
    title: "Auditoría de Infraestructura",
    body: "Evaluamos redes, servidores y Active Directory para detectar accesos no autorizados, configuraciones débiles y vectores internos.",
  },
  {
    num: "03",
    title: "Explotación y Mitigación",
    body: "Realizamos un ataque ético controlado sobre tu entorno, documentamos cada vector y entregamos el plan de corrección priorizado.",
  },
];

const marketingPlans = [
  {
    tier: "Básico",
    tagline: "Presencia constante",
    features: [
      "2 redes sociales",
      "8 posts / mes",
      "Diseño gráfico incluido",
      "Reporte mensual",
    ],
    cta: "Quiero el plan Básico",
    highlight: false,
  },
  {
    tier: "Intermedio",
    tagline: "Más alcance y pauta",
    features: [
      "3 redes sociales",
      "16 posts / mes",
      "Pauta básica (Meta Ads)",
      "Análisis de audiencia",
    ],
    cta: "Quiero el plan Intermedio",
    highlight: false,
  },
  {
    tier: "Avanzado",
    tagline: "Estrategia completa",
    features: [
      "Todas las redes activas",
      "Meta Ads + Google Ads",
      "SEO on-page",
      "Funnel de conversión",
    ],
    cta: "Quiero el plan Avanzado",
    highlight: true,
  },
  {
    tier: "Corporativo",
    tagline: "A medida · 360°",
    features: [
      "Sistema completo a medida",
      "Branding + identidad visual",
      "Estrategia omnicanal",
      "Consultoría mensual",
    ],
    cta: "Quiero el plan Corporativo",
    highlight: false,
  },
];

const WA_NUMBER = "593997963617";

function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

/* ─── Componentes internos de página ─────────────────────── */

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" className="mt-0.5 size-4 shrink-0 text-golden-pollen" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 8l3.5 3.5L13 4" />
    </svg>
  );
}

/* ─── Page ───────────────────────────────────────────────── */

export default function ServiciosPage() {
  return (
    <main id="contenido">

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="honeycomb-bg px-6 pb-16 pt-20 text-center sm:pb-24 sm:pt-28">
        <div className="mx-auto max-w-4xl">
          <p className="mb-5 inline-flex rounded-full border border-golden-pollen bg-golden-pollen px-4 py-2 text-sm font-black text-text-main shadow-sm">
            Servicios Beeploy
          </p>
          <h1 className="text-balance font-heading text-4xl font-black leading-[1.05] text-text-main sm:text-5xl lg:text-6xl">
            Soluciones que tu negocio entiende desde el primer minuto.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-text-muted">
            No vendemos tecnología. Vendemos tiempo que recuperas, dinero que
            dejas de perder y clientes que atraes.
          </p>
        </div>
      </section>

      {/* ── Sección 1: Desarrollo a la Medida ────────────── */}
      <SectionShell
        id="desarrollo"
        eyebrow="Desarrollo a la Medida"
        title="El sistema que necesitas, no el que te sobre-venden."
        className="bg-surface scroll-mt-24"
      >
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">

          {/* Columna problema */}
          <div className="rounded-xl border border-text-main/10 bg-background p-8 sm:p-10">
            <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-text-muted">
              El problema real
            </span>
            <p className="font-heading text-2xl font-black leading-snug text-text-main sm:text-3xl">
              Las empresas gastan miles en sistemas genéricos que solo usan al&nbsp;30%.
            </p>
            <p className="mt-5 text-base leading-7 text-text-muted">
              Nosotros construimos exactamente lo que necesitas. Sin licencias
              anuales de módulos que nunca abres, sin adaptarte al software:
              el software se adapta a ti.
            </p>
            <a
              href={waLink("Hola equipo de Beeploy. Quiero agendar un diagnóstico tecnológico para mi empresa.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-golden-pollen px-7 py-3 text-sm font-black text-text-main transition hover:bg-golden-hover"
            >
              Agendar diagnóstico →
            </a>
          </div>

          {/* Columna soluciones */}
          <ul className="grid gap-5 sm:grid-cols-2" role="list">
            {devSolutions.map((s) => (
              <li
                key={s.title}
                className="flex flex-col gap-3 rounded-xl border border-text-main/10 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-golden-pollen text-text-main">
                  {s.icon}
                </span>
                <h3 className="font-heading text-lg font-black text-text-main">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {s.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </SectionShell>

      {/* ── Sección 2: Ciberseguridad (franja oscura) ──────── */}
      <section id="ciberseguridad" className="dark-technical-grid bg-text-main px-6 py-20 sm:py-28 scroll-mt-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/50">
              Ciberseguridad
            </p>
            <h2 className="mt-3 font-heading text-3xl font-black leading-tight text-white sm:text-4xl">
              Protección para empresas que no pueden perder su información.
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/70">
              Un solo incidente puede costar más que todo un año de inversión en
              tecnología. Nosotros encontramos las brechas antes que los atacantes.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {cyberCards.map((card) => (
              <article
                key={card.num}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-golden-pollen/30 hover:bg-white/8"
              >
                <span className="mb-5 font-heading text-4xl font-black text-golden-pollen/30 transition-colors duration-300 group-hover:text-golden-pollen/60">
                  {card.num}
                </span>
                <h3 className="font-heading text-xl font-black text-white">
                  {card.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">
                  {card.body}
                </p>
                <a
                  href={waLink(`Hola Beeploy, me interesa el servicio de ${card.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-bold text-white transition hover:border-golden-pollen hover:bg-golden-pollen hover:text-text-main"
                >
                  Quiero esta auditoría
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sección 3: Marketing y Branding — Pricing ──────── */}
      <SectionShell
        id="datos-ia"
        eyebrow="Marketing y Branding"
        title="Publicar sin estrategia es gritar en el desierto."
        intro="Cada plan incluye gestión profesional, diseño gráfico y reportes claros para que sepas exactamente qué resultado está generando tu inversión."
        className="honeycomb-bg scroll-mt-24"
      >
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {marketingPlans.map((plan) => (
            <article
              key={plan.tier}
              className={`relative flex flex-col overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-soft ${
                plan.highlight
                  ? "border-golden-pollen bg-text-main text-white shadow-[0_0_0_1px_rgba(255,204,51,0.25),0_12px_32px_rgba(255,204,51,0.12)]"
                  : "border-text-main/10 bg-surface"
              }`}
            >
              {plan.highlight && (
                <div className="bg-golden-pollen px-4 py-1.5 text-center text-xs font-black uppercase tracking-widest text-text-main">
                  Más popular
                </div>
              )}

              <div className="flex flex-1 flex-col p-7">
                <h3
                  className={`font-heading text-2xl font-black ${
                    plan.highlight ? "text-white" : "text-text-main"
                  }`}
                >
                  {plan.tier}
                </h3>
                <p
                  className={`mt-1 text-sm font-medium ${
                    plan.highlight ? "text-white/60" : "text-text-muted"
                  }`}
                >
                  {plan.tagline}
                </p>

                <ul className="mt-6 flex flex-1 flex-col gap-3" role="list">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <CheckIcon />
                      <span
                        className={`text-sm leading-relaxed ${
                          plan.highlight ? "text-white/80" : "text-text-muted"
                        }`}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(`Hola Beeploy, me interesa el ${plan.cta.replace("Quiero el ", "")}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-full text-sm font-black transition hover:scale-[1.02] ${
                    plan.highlight
                      ? "bg-golden-pollen text-text-main hover:bg-golden-hover"
                      : "bg-text-main text-white hover:bg-golden-pollen hover:text-text-main"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      {/* ── Final CTA ─────────────────────────────────────── */}
      <section className="px-6 pb-24 pt-8">
        <div className="mx-auto max-w-7xl rounded-xl border border-text-main/10 bg-surface p-8 text-center shadow-soft sm:p-14">
          <h2 className="mx-auto max-w-3xl font-heading text-3xl font-black leading-tight text-text-main sm:text-4xl">
            ¿No sabes por dónde empezar? Nosotros te orientamos sin costo.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-text-muted">
            Cuéntanos tu reto más urgente y en 24 horas te respondemos con una
            propuesta de acción clara.
          </p>
          <a
            href={waLink("Hola Beeploy, me interesa conocer más sobre sus servicios tecnológicos.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-golden-pollen px-10 py-3 text-sm font-black text-text-main transition hover:bg-golden-hover"
          >
            Hablar con Beeploy →
          </a>
        </div>
      </section>

    </main>
  );
}
