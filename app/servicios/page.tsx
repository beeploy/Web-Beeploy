import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/section-shell";
import { SquareCode, Brain, Workflow, Database } from "lucide-react";
import { hexClip } from "@/components/ui/hexClip";

export const metadata: Metadata = {
  title: "Servicios | Ecosistema Tecnológico Beeploy",
  description:
    "Infraestructura digital, desarrollo a medida, inteligencia artificial y ciberseguridad resiliente para empresas en Latinoamérica. Transformamos complejidad en crecimiento real.",
};

/* ─── Datos ──────────────────────────────────────────────── */

const devSolutions = [
  {
    icon: <SquareCode className="w-6 h-6 text-neutral-900 stroke-[2px]" />,
    title: "Arquitectura y Desarrollo Modular",
    body: "Construimos plataformas, ERPs y aplicaciones web/móviles preparadas para escalar. Diseñamos bajo el principio de arquitectura hexagonal: sistemas desacoplados que protegen el núcleo de tu negocio y no generan dependencia tecnológica.",
  },
  {
    icon: <Brain className="w-6 h-6 text-neutral-900 stroke-[2px]" />,
    title: "Implementación de Inteligencia Artificial",
    body: "Integramos modelos algorítmicos predictivos y procesamiento de lenguaje natural. Convertimos la complejidad de la IA en herramientas accesibles que automatizan la toma de decisiones y reducen el trabajo manual repetitivo.",
  },
  {
    icon: <Workflow className="w-6 h-6 text-neutral-900 stroke-[2px]" />,
    title: "Integración y Automatización Sistémica",
    body: "Conectamos las herramientas que ya utilizas (CRMs, ERPs, canales de venta). Eliminamos los silos de información mediante flujos de trabajo asíncronos para que tu equipo deje de operar manualmente y se enfoque en aportar valor.",
  },
  {
    icon: <Database className="w-6 h-6 text-neutral-900 stroke-[2px]" />,
    title: "Orquestación y Análisis de Datos",
    body: "Centralizamos tu información operativa en paneles de control (dashboards) en tiempo real. Pasamos de datos dispersos y estáticos a inteligencia de negocios accionable que te permite saber con precisión dónde invertir o ajustar.",
  },
];

const cyberCards = [
  {
    num: "01",
    title: "Auditoría de Infraestructura y Redes",
    body: "Evaluamos sistemáticamente servidores, bases de datos y arquitecturas cloud. Identificamos brechas de configuración y vulnerabilidades antes de que se conviertan en vectores de acceso para atacantes externos o internos.",
  },
  {
    num: "02",
    title: "Análisis de Seguridad en Aplicaciones",
    body: "Sometemos tus plataformas web y móviles a pruebas rigurosas. Detectamos fallos críticos (inyecciones SQL, XSS, autenticaciones débiles) para garantizar que los datos de tus clientes y la continuidad de tu negocio permanezcan blindados.",
  },
  {
    num: "03",
    title: "Explotación Ética y Plan de Mitigación",
    body: "Simulamos ataques controlados para medir la resiliencia real de tus sistemas. No solo reportamos el problema, sino que entregamos un plan de arquitectura defensiva priorizado para neutralizar riesgos sin detener tu operación.",
  },
];

const marketingPlans = [
  {
    tier: "Presencia Base",
    tagline: "Ecosistema Inicial",
    features: [
      "Activación de 2 canales digitales",
      "8 piezas de comunicación mensual",
      "Diseño alineado a identidad visual",
      "Reporte de alcance y visibilidad",
    ],
    cta: "Iniciar con Presencia Base",
    highlight: false,
  },
  {
    tier: "Crecimiento Digital",
    tagline: "Expansión y Captación",
    features: [
      "Gestión de 3 canales digitales",
      "16 piezas de contenido estratégico",
      "Integración de pauta publicitaria",
      "Análisis de audiencia y conversión",
    ],
    cta: "Seleccionar Crecimiento Digital",
    highlight: false,
  },
  {
    tier: "Adquisición Integral",
    tagline: "Arquitectura de Conversión",
    features: [
      "Cobertura omnicanal activa",
      "Estrategia combinada (Meta/Google Ads)",
      "Optimización SEO on-page",
      "Despliegue de Funnel automatizado",
    ],
    cta: "Implementar Adquisición Integral",
    highlight: true,
  },
  {
    tier: "Partner Corporativo",
    tagline: "Solución a la Medida",
    features: [
      "Auditoría y reestructuración de marca",
      "Ecosistema de captación 360°",
      "Desarrollo de identidad corporativa",
      "Consultoría estratégica continua",
    ],
    cta: "Agendar diagnóstico corporativo",
    highlight: false,
  },
];

const WA_NUMBER = "593997963617";

function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

/* ─── Componentes internos de página ─────────────────────── */

function CheckIcon({ highlight }: { highlight?: boolean }) {
  return (
    <div className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full ${highlight ? 'bg-golden-pollen text-neutral-900' : 'bg-neutral-900 text-golden-pollen'}`}>
      <svg viewBox="0 0 16 16" className="size-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 8l3.5 3.5L13 4" />
      </svg>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────── */

export default function ServiciosPage() {
  return (
    <main id="contenido">

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="px-6 pb-16 pt-20 text-center sm:pb-24 sm:pt-28">
        <div className="mx-auto max-w-4xl">
          <p className="mb-5 inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider">
            ECOSISTEMA DE SOLUCIONES
          </p>
          <h1 className="text-balance font-heading text-4xl font-black leading-[1.05] text-text-main sm:text-5xl lg:text-6xl">
            Tecnología diseñada para adaptarse al negocio, no al revés.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-text-muted">
            La complejidad tecnológica no debe ser una carga operativa. Diseñamos infraestructuras, automatizaciones y sistemas resilientes que traducen inversión en tiempo recuperado, seguridad y crecimiento escalable.
          </p>
        </div>
      </section>

      {/* ── Sección 1: Desarrollo a la Medida ────────────── */}
      <SectionShell
        id="desarrollo"
        eyebrow="Arquitectura de Software"
        title="Construimos sistemas preparados para evolucionar."
        className="scroll-mt-24"
      >
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">

          {/* Columna problema */}
          <div className="rounded-xl border border-text-main/10 bg-background p-8 sm:p-10">
            <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-text-muted">
              La Tensión Operativa
            </span>
            <p className="font-heading text-2xl font-black leading-snug text-text-main sm:text-3xl">
              Procesos manuales, sistemas desconectados y tecnologías rígidas que limitan el potencial del negocio.
            </p>
            <p className="mt-5 text-base leading-7 text-text-muted">
              Cuando el equipo operativo debe adaptarse a un software cerrado, se generan ineficiencias críticas. Nosotros analizamos tu flujo real de trabajo para diseñar una infraestructura modular que se integra de manera transparente, erradicando cuellos de botella y permitiendo que la empresa crezca sin multiplicar su complejidad.
            </p>
            <a
              href={waLink("Hola equipo de Beeploy. Quiero agendar un diagnóstico tecnológico para analizar mi infraestructura.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-golden-pollen px-7 py-3 text-sm font-black text-text-main transition hover:bg-golden-hover"
            >
              Agendar diagnóstico estructural →
            </a>
          </div>

          {/* Columna soluciones */}
          <ul className="grid gap-5 sm:grid-cols-2" role="list">
            {devSolutions.map((s) => (
              <li
                key={s.title}
                className="flex flex-col gap-3 rounded-xl border border-text-main/10 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="flex min-h-[56px] items-center gap-4">
                  <div className="relative grid size-14 shrink-0 place-items-center bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 shadow-md" style={{ clipPath: hexClip }}>
                    <div className="absolute inset-0 h-[55%] pointer-events-none bg-gradient-to-b from-white/65 via-white/10 to-transparent mix-blend-overlay"></div>
                    <div className="absolute inset-x-0 bottom-0 h-[40%] pointer-events-none bg-gradient-to-t from-amber-800/35 to-transparent"></div>
                    <span className="relative z-10">{s.icon}</span>
                  </div>
                  <h3 className="font-heading text-lg font-black leading-tight text-text-main">
                    {s.title}
                  </h3>
                </div>
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
            <p className="text-sm font-black uppercase tracking-[0.22em] text-golden-pollen">
              Ciberseguridad Resiliente
            </p>
            <h2 className="mt-3 font-heading text-3xl font-black leading-tight text-white sm:text-4xl">
              Protegemos la continuidad y reputación de tu empresa.
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/90">
              Una arquitectura de software no es confiable si es vulnerable. Un incidente de seguridad detiene operaciones y destruye confianza. Nosotros detectamos, analizamos y cerramos brechas estructurales antes de que representen un riesgo financiero.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {cyberCards.map((card) => (
              <article
                key={card.num}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-golden-pollen/30 hover:bg-white/8"
              >
                <span className="mb-5 font-heading text-4xl font-black text-golden-pollen/80 transition-colors duration-300 group-hover:text-golden-pollen">
                  {card.num}
                </span>
                <h3 className="font-heading text-xl font-black text-white">
                  {card.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-white/90">
                  {card.body}
                </p>
                <a
                  href={waLink(`Hola Beeploy, necesitamos evaluar la seguridad de nuestra infraestructura mediante una ${card.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-bold text-white/90 transition hover:border-golden-pollen hover:bg-golden-pollen hover:text-text-main"
                >
                  Solicitar auditoría técnica
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sección 3: Visibilidad y Adquisición Digital ──────── */}
      <SectionShell
        id="datos-ia"
        eyebrow="Estrategia de Visibilidad"
        title="Tecnología que impulsa la adquisición comercial."
        intro="Una infraestructura robusta necesita visibilidad para polinizar el mercado. Integramos canales digitales, automatización y métricas claras para que cada esfuerzo de comunicación se convierta en una oportunidad medible."
        className="scroll-mt-24"
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
                  Estrategia Recomendada
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
                    plan.highlight ? "text-white/85" : "text-text-muted"
                  }`}
                >
                  {plan.tagline}
                </p>

                <ul className="mt-6 flex flex-1 flex-col gap-3" role="list">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <CheckIcon highlight={plan.highlight} />
                      <span
                        className={`text-[15px] font-medium leading-relaxed ${
                          plan.highlight ? "text-white/90" : "text-neutral-800"
                        }`}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(`Hola equipo Beeploy, me interesa evaluar la integración de la estrategia de ${plan.tier}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex h-auto min-h-[3rem] w-full items-center justify-center rounded-[2rem] px-4 py-3 text-center text-sm font-black leading-tight transition hover:scale-[1.02] ${
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
            La complejidad no debe ser una barrera para el crecimiento de tu organización.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-text-muted">
            Cuéntanos sobre los cuellos de botella operativos de tu empresa. En menos de 24 horas propondremos un blueprint arquitectónico claro para resolverlos.
          </p>
          <a
            href={waLink("Hola Beeploy, buscamos escalar nuestra operación y necesitamos asesoría sobre infraestructura tecnológica.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-golden-pollen px-10 py-3 text-sm font-black text-text-main transition hover:bg-golden-hover"
          >
            Contactar al equipo de arquitectura →
          </a>
        </div>
      </section>

    </main>
  );
}
