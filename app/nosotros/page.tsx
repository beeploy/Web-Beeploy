import type { Metadata } from "next";
import { hexClip } from "@/components/ui/hexClip";
import {
  Banknote,
  Brain,
  Cpu,
  Database,
  Hexagon,
  Network,
  Rocket,
  Workflow,
  MessageSquareText,
  Blocks,
  LineChart,
  Wrench,
  Leaf,
  Waypoints
} from "lucide-react";

export const metadata: Metadata = {
  title: "Nosotros | Manifiesto Beeploy",
  description:
    "Conoce la historia, filosofía y framework de Beeploy: tecnología sin aguijón para transformar complejidad en oportunidades reales de crecimiento.",
  openGraph: {
    title: "Nosotros | Manifiesto Beeploy",
    description:
      "Beeploy transforma complejidad tecnológica en crecimiento sostenible para empresas, organizaciones y profesionales de Latinoamérica.",
    url: "/nosotros",
    type: "website",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Nosotros | Manifiesto Beeploy",
  description:
    "La página de nosotros de Beeploy explica su origen, tensión fundacional, filosofía melipona y metodología para construir tecnología accesible, confiable y escalable.",
  about: {
    "@type": "Organization",
    name: "Beeploy",
    slogan: "Transformamos complejidad tecnológica en oportunidades reales de crecimiento.",
  },
};

const originBlocks = [
  {
    kicker: "Problema",
    title: "La historia que justifica nuestra existencia",
    body: "Beeploy nace de una realidad sistémica en América Latina: existe talento en abundancia, pero el acceso a tecnología avanzada y habilitadora sigue concentrado en las grandes corporaciones. El comerciante conoce a sus clientes, el profesional domina su oficio y el fundador entiende su mercado. Sin embargo, quedan atrapados porque crecer les exige entender desarrollo de software, arquitectura cloud y ciberseguridad antes de poder competir. Esa exigencia operativa es insostenible e injusta.",
  },
  {
    kicker: "Consecuencia",
    title: "La brecha que invisibiliza el potencial",
    body: "Cuando la tecnología se vuelve inaccesible, la pérdida no es solo técnica; es financiera y estructural. Se pierden ventas porque los procesos siguen manuales. Se toman decisiones por intuición porque los datos están aislados. Se posterga la innovación porque las soluciones genéricas del mercado no se adaptan a la realidad operativa del negocio. Como consecuencia, organizaciones con gran capacidad para generar empleo terminan compitiendo en desventaja frente a corporaciones con departamentos enteros de innovación.",
  },
  {
    kicker: "Solución",
    title: "Primero entender, luego construir",
    body: "Beeploy existe como el puente arquitectónico para cerrar esta distancia. Antes de escribir una sola línea de código, entendemos el modelo de negocio, el flujo operativo y el resultado que debe producir la tecnología. Diseñamos ecosistemas digitales bajo arquitectura hexagonal: plataformas a medida, automatizaciones seguras e IA escalable. No somos una fábrica transaccional ni instalamos herramientas por inercia; traducimos la complejidad en decisiones empresariales ejecutables.",
  },
  {
    kicker: "Resultado",
    title: "Tecnología diseñada para prosperar contigo",
    body: "El resultado no es simplemente código desplegado; es prosperidad tangible. Nos enfocamos en generar mayor rentabilidad, reducción de errores operativos, procesos sincronizados y equipos de trabajo empoderados. Cuando una empresa comprende cómo y por qué se estructuró su sistema, la tecnología deja de percibirse como un gasto y se consolida como un activo estratégico. La promesa es clara: infraestructura sólida que respalda tu crecimiento.",
  },
];

const meliponaInsights = [
  {
    icon: <Leaf className="size-6 text-text-main" aria-hidden="true" />,
    title: "Tecnología sin aguijón",
    body: "La melipona inspira una tecnología libre de fricciones innecesarias. Implementar software no debería generar incertidumbre ni atrapar al cliente en un modelo de dependencia artificial. En Beeploy, documentamos cada paso y explicamos cada decisión de arquitectura. Logramos una potencia técnica indiscutible respaldada por una experiencia de implementación transparente y humana.",
  },
  {
    icon: <Network className="size-6 text-text-main" aria-hidden="true" />,
    title: "Inteligencia colectiva",
    body: "Los mejores sistemas no surgen de imponer herramientas cerradas, sino de la integración del conocimiento experto. La inteligencia colectiva de Beeploy combina estrategia B2B, arquitectura de datos y la experiencia operativa del cliente. Analizamos el día a día para respetar los cuellos de botella reales, las excepciones y los hábitos de adopción del equipo.",
  },
  {
    icon: <Hexagon className="size-6 text-text-main" aria-hidden="true" />,
    title: "Construcción eficiente",
    body: "Un panal no desperdicia recursos; cada celda aporta resiliencia estructural. Así desarrollamos nuestra infraestructura. Empleamos arquitectura de puertos y adaptadores para entregar módulos definidos y sistemas desacoplados que permiten escalar o pivotar sin generar deuda técnica masiva que colapse el núcleo del negocio.",
  },
  {
    icon: <Waypoints className="size-6 text-text-main" aria-hidden="true" />,
    title: "Polinización digital",
    body: "Beeploy orquesta la integración de datos y procesos previamente aislados. La polinización digital ocurre cuando la información abandona silos (como hojas de cálculo desconectadas o ERPs fragmentados) y comienza a interactuar mediante APIs robustas, habilitando flujos de trabajo asíncronos que devuelven tiempo estratégico a la organización.",
  },
];

const frameworkSteps = [
  {
    title: "Descubrir",
    body: "Investigamos el modelo de negocio antes de proponer arquitectura. Diagnosticamos procesos, medimos ineficiencias y aislamos síntomas de causas estructurales para evitar automatizar un proceso roto.",
  },
  {
    title: "Diseñar",
    body: "Convertimos el diagnóstico en un blueprint tecnológico claro. Seleccionamos el stack, definimos flujos de datos y diseñamos integraciones bajo la premisa de que la tecnología se adapta a la empresa.",
  },
  {
    title: "Construir",
    body: "Ejecutamos bajo estándares de escalabilidad y seguridad. Desarrollamos microservicios, bases de datos resilientes y automatizaciones que funcionen de forma silenciosa e ininterrumpida.",
  },
  {
    title: "Acompañar",
    body: "Traducimos la entrega en adopción operativa. El sistema solo tiene valor cuando el equipo lo utiliza y lo domina; por eso brindamos capacitación y soporte como parte fundamental del despliegue.",
  },
  {
    title: "Evolucionar",
    body: "Monitoreamos el desempeño y preparamos iteraciones proactivas. Hemos creado cimientos flexibles que permiten a tu empresa responder a nuevas demandas de mercado sin tener que reconstruir su ecosistema digital.",
  },
];

const principles = [
  {
    icon: <MessageSquareText className="size-5 text-text-main" aria-hidden="true" />,
    title: "Explicar es parte de la ingeniería",
    body: "Un cliente no tiene la obligación de entender código. Nosotros tenemos el deber profesional de traducirlo a decisiones e impacto financiero medible.",
  },
  {
    icon: <Blocks className="size-5 text-text-main" aria-hidden="true" />,
    title: "Arquitectura adaptativa",
    body: "Evitamos empaquetados rígidos que forzan a una empresa a alterar procesos rentables. Construimos software que se integra a la naturaleza de tu operación.",
  },
  {
    icon: <LineChart className="size-5 text-text-main" aria-hidden="true" />,
    title: "Confianza respaldada por datos",
    body: "El retorno de inversión es nuestro indicador de éxito: horas recuperadas, fallos mitigados, ventas canalizadas y control absoluto de la información.",
  },
  {
    icon: <Wrench className="size-5 text-text-main" aria-hidden="true" />,
    title: "Cero deuda técnica disfrazada",
    body: "Implementar parches temporales destruye la escalabilidad. Priorizamos soluciones estructurales que garanticen el crecimiento sin bloqueos futuros.",
  },
];

const audienceMessages = [
  {
    label: "Dirección (CEO)",
    title: "Rentabilidad y crecimiento sostenido",
    body: "Transformamos la inversión en desarrollo de software en un motor de ingresos, garantizando competitividad y resiliencia frente a competidores digitalizados.",
  },
  {
    label: "Tecnología (CTO)",
    title: "Arquitectura limpia y escalabilidad",
    body: "Desplegamos infraestructuras basadas en principios sólidos (SOLID, hexagonal), código mantenible y seguridad robusta para proteger la evolución del ecosistema.",
  },
  {
    label: "Operaciones (COO)",
    title: "Automatización y fluidez",
    body: "Reducimos fricciones operativas eliminando tareas redundantes y silos de información. Devolvemos el enfoque humano a las decisiones de alto nivel estratégico.",
  },
  {
    label: "Fundadores",
    title: "Velocidad y control del negocio",
    body: "Creamos herramientas tecnológicas que actúan como una extensión directa de tu visión comercial, permitiéndote tomar decisiones informadas sin depender de terceros.",
  },
];

const values = [
  "Prosperidad tangible",
  "Confianza y transparencia",
  "Accesibilidad estructural",
  "Excelencia arquitectónica",
  "Adaptabilidad B2B",
  "Responsabilidad técnica",
  "Inteligencia colectiva",
  "Ecosistema resiliente",
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.22em] text-text-main">
      <span className="h-1.5 w-1.5 rounded-full bg-golden-pollen" />
      {children}
    </p>
  );
}

export default function NosotrosPage() {
  return (
    <main id="contenido">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      <section className="relative isolate overflow-hidden px-6 pb-16 pt-20 sm:pb-24 sm:pt-28">

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <p className="mb-5 inline-flex items-center justify-center rounded-full border border-amber-200 bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-900">
              Manifiesto Estratégico
            </p>
            <h1 className="text-balance font-heading text-4xl font-black leading-[1.04] text-text-main sm:text-6xl lg:text-7xl">
              La tecnología debe ser un multiplicador de oportunidades, no un obstáculo.
            </h1>
          </div>
          <div className="max-w-2xl lg:pb-3">
            <p className="text-xl leading-9 text-text-main">
              Beeploy se consolida como el ecosistema tecnológico que acorta la
              brecha entre la capacidad de tu negocio y la complejidad digital. 
              No transaccionamos horas de código; diseñamos infraestructura para que
              empresas y organizaciones avancen con seguridad y escalabilidad.
            </p>
            <blockquote className="mt-8 border-l-4 border-golden-pollen bg-white px-6 py-5 text-lg font-semibold leading-8 text-text-main shadow-soft">
              &quot;Talento + Tecnología + Acceso = Prosperidad Sistémica&quot;
            </blockquote>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <Eyebrow>Tensión y Origen</Eyebrow>
            <h2 className="mt-4 text-balance font-heading text-3xl font-black leading-tight text-text-main sm:text-5xl">
              Invertir el paradigma de la adopción tecnológica.
            </h2>
            <p className="mt-6 text-lg leading-8 text-text-muted">
              Toda empresa líder surge al identificar un problema sistémico. 
              Nuestra meta es erradicar el aislamiento tecnológico de las organizaciones 
              y dotarlas de la misma potencia arquitectónica que poseen las grandes corporaciones.
            </p>
          </aside>
          <div className="grid gap-5">
            {originBlocks.map((block) => (
              <article
                key={block.title}
                className="rounded-lg border border-text-main/10 bg-white p-7 shadow-[0_10px_32px_rgba(26,26,26,0.05)] sm:p-8"
              >
                <span className="mb-2 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-neutral-800 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-golden-pollen" />
                  {block.kicker}
                </span>
                <h3 className="mt-3 font-heading text-2xl font-black leading-tight text-text-main">
                  {block.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-text-muted">
                  {block.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-technical-grid bg-text-main px-6 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="lg:sticky lg:top-32 lg:h-fit">
              <p className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.22em] text-golden-pollen">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                Filosofía de Ingeniería
              </p>
              <h2 className="mt-4 text-balance font-heading text-3xl font-black leading-tight sm:text-5xl">
                Inspiración natural, ejecución técnica rigurosa.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/72">
                La abeja melipona es nativa, no posee aguijón, construye panales eficientes 
                y actúa mediante inteligencia colectiva. Beeploy interioriza estos atributos biológicos 
                como principios fundacionales para desarrollar software modular, resiliente y colaborativo.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {meliponaInsights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-lg border border-white/10 bg-white p-6 text-text-main shadow-[0_18px_60px_rgba(0,0,0,0.18)]"
                >
                  <div
                    className="mb-5 relative grid size-14 shrink-0 place-items-center bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 shadow-lg"
                    style={{ clipPath: hexClip }}
                  >
                    <div className="absolute inset-0 h-[55%] bg-gradient-to-b from-white/65 via-white/10 to-transparent mix-blend-overlay pointer-events-none" />
                    <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-amber-800/35 to-transparent pointer-events-none" />
                    <span className="relative z-10">{item.icon}</span>
                  </div>
                  <h3 className="font-heading text-xl font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-text-muted">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.86fr] lg:items-center">
            <div>
              <Eyebrow>Visión Estratégica</Eyebrow>
              <h2 className="mt-4 text-balance font-heading text-3xl font-black leading-tight text-text-main sm:text-5xl">
                Mientras otros venden proyectos aislados, nosotros construimos ecosistemas corporativos.
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-text-muted">
                <p>
                  No somos una fábrica de software ni una agencia superficial. Somos el 
                  arquitecto de tu transformación digital. Abordamos cada reto desde el 
                  núcleo: qué fricción afecta tus márgenes, qué proceso ineficiente 
                  lastra a tu equipo operativo y cómo los datos pueden revelar el próximo paso a dar.
                </p>
                <p>
                  Hablamos de adopción, seguridad y retorno porque comprendemos que 
                  el código es solo la infraestructura; la autonomía comercial es el verdadero objetivo.
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-text-main/10 bg-white p-8 shadow-soft">
              <div className="mb-2 relative inline-grid size-14 place-items-center bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 shadow-lg" style={{ clipPath: hexClip }}>
                <div className="absolute inset-0 h-[55%] bg-gradient-to-b from-white/65 via-white/10 to-transparent mix-blend-overlay pointer-events-none"></div>
                <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-amber-800/35 to-transparent pointer-events-none"></div>
                <span className="relative z-10 font-heading text-3xl font-black text-amber-950">5</span>
              </div>
              <h3 className="mt-4 font-heading text-2xl font-black text-text-main">
                Filtros de decisión B2B
              </h3>
              <ul className="mt-6 grid gap-3" role="list">
                {[
                  "Garantiza el crecimiento operativo.",
                  "Mantiene solidez y resiliencia futura.",
                  "Aporta simplicidad estructural, no desorden.",
                  "Se explica y traduce a lenguaje de negocio.",
                  "Otorga autonomía, no dependencia tecnológica.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm font-semibold text-text-muted">
                    <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border-[1.5px] border-text-main bg-golden-pollen" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <Eyebrow>Metodología Beeploy</Eyebrow>
            <h2 className="mt-4 text-balance font-heading text-3xl font-black leading-tight text-text-main sm:text-5xl">
              De la auditoría operativa al crecimiento tangible.
            </h2>
            <p className="mt-6 text-lg leading-8 text-text-muted">
              Un despliegue tecnológico sin método se convierte en deuda técnica. 
              Nuestro framework asegura que cada decisión arquitectónica resuelva un cuello de botella real de tu operación.
            </p>
          </div>
          <ol className="mt-12 grid gap-5 lg:grid-cols-5">
            {frameworkSteps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-lg border border-text-main/10 bg-background p-6 shadow-[0_10px_28px_rgba(26,26,26,0.045)]"
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-text-main px-3 py-1 text-xs font-black uppercase tracking-widest text-golden-pollen">
                  Fase 0{index + 1}
                </div>
                <h3 className="font-heading text-2xl font-black text-text-main">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <Eyebrow>Lenguaje corporativo</Eyebrow>
              <h2 className="mt-4 text-balance font-heading text-3xl font-black leading-tight text-text-main sm:text-5xl">
                Arquitectos para diseñar, expertos para asesorar, aliados para escalar.
              </h2>
              <p className="mt-6 text-lg leading-8 text-text-muted">
                Comunicamos la complejidad tecnológica con total transparencia.
                Evitamos condescendencia técnica para integrar al liderazgo de la empresa 
                en el control y visión del sistema que estamos construyendo.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {principles.map((principle) => (
                <article
                  key={principle.title}
                  className="rounded-lg border border-text-main/10 bg-white p-6 shadow-[0_10px_30px_rgba(26,26,26,0.05)]"
                >
                  <div
                    className="mb-4 relative grid size-12 shrink-0 place-items-center bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 shadow-lg"
                    style={{ clipPath: hexClip }}
                  >
                    <div className="absolute inset-0 h-[55%] bg-gradient-to-b from-white/65 via-white/10 to-transparent mix-blend-overlay pointer-events-none" />
                    <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-amber-800/35 to-transparent pointer-events-none" />
                    <span className="relative z-10">{principle.icon}</span>
                  </div>
                  <h3 className="font-heading text-xl font-black text-text-main">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-text-muted">
                    {principle.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-lg border border-text-main/10 bg-white p-8 shadow-soft sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <Eyebrow>Impacto estructural</Eyebrow>
                <h2 className="mt-4 text-balance font-heading text-3xl font-black leading-tight text-text-main sm:text-4xl">
                  Una infraestructura, múltiples resultados estratégicos.
                </h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {audienceMessages.map((message) => (
                  <article key={message.label} className="border-t border-text-main/10 pt-5">
                    <div className="mb-1">
                      <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-neutral-800 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-golden-pollen" />
                        {message.label}
                      </span>
                    </div>
                    <h3 className="mt-2 font-heading text-xl font-black text-text-main">
                      {message.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-text-muted">
                      {message.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 sm:pb-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <Eyebrow>El Manifiesto Central</Eyebrow>
            <h2 className="mt-4 text-balance font-heading text-3xl font-black leading-tight text-text-main sm:text-5xl">
              La prosperidad económica de una empresa no debe quedar atrapada por la falta de herramientas.
            </h2>
            <div className="mt-7 space-y-5 text-lg leading-8 text-text-muted">
              <p>
                Construir sistemas herméticos y generar dependencia tecnológica es el error de la vieja industria. En Beeploy, la tecnología democratiza; no aísla. Creemos que una solución corporativa bien diseñada devuelve control, aumenta visibilidad y abre nuevos márgenes de beneficio.
              </p>
              <p>
                Toda empresa, sin importar la complejidad de su operación, merece un ecosistema que soporte sus aspiraciones sin forzarle a cambiar su identidad. 
              </p>
              <p>
                Si en el futuro se documenta nuestro legado en Latinoamérica, la afirmación más contundente debería ser esta: Beeploy proveyó la arquitectura y la inteligencia necesaria para que miles de negocios pudiesen competir con confianza y solidez en una economía hiperconectada.
              </p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {values.map((value, index) => (
              <div
                key={value}
                className="rounded-lg border border-text-main/10 bg-white p-5 shadow-[0_10px_30px_rgba(26,26,26,0.045)]"
              >
                <div className="mb-4 inline-flex size-9 items-center justify-center hexagon bg-text-main text-xs font-black text-golden-pollen">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="font-heading text-lg font-black text-text-main">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-technical-grid bg-text-main px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="flex items-center justify-center gap-3 text-sm font-black uppercase tracking-[0.22em] text-golden-pollen">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Compromiso Social Tecnológico
          </p>
          <h2 className="mt-4 font-heading text-3xl font-black leading-tight text-white sm:text-5xl">
            Tu inversión tecnológica también edifica infraestructuras de equidad.
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/70">
            Cameyapp es el brazo de visibilidad e inclusión de nuestro ecosistema corporativo.
            Al implementar soluciones empresariales con Beeploy, permites que continuemos expandiendo la plataforma tecnológica que conecta el talento latinoamericano con oportunidades reales de empleo digno.
          </p>
          <a
            href="https://wa.me/593997963617?text=Hola%20equipo%20de%20Beeploy.%20Me%20interesa%20iniciar%20un%20diagn%C3%B3stico%20estructural."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex min-h-12 items-center justify-center rounded-full bg-golden-pollen px-8 py-3 text-sm font-black text-text-main transition hover:bg-golden-hover"
          >
            Agendar diagnóstico estructural
          </a>
        </div>
      </section>
    </main>
  );
}
