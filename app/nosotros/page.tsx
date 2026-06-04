import type { Metadata } from "next";
import {
  Banknote,
  Brain,
  Cpu,
  Database,
  Hexagon,
  Network,
  Rocket,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Nosotros | Manifiesto Beeploy",
  description:
    "Conoce la historia, filosofia y framework de Beeploy: tecnologia sin aguijon para transformar complejidad en oportunidades reales de crecimiento.",
  openGraph: {
    title: "Nosotros | Manifiesto Beeploy",
    description:
      "Beeploy transforma complejidad tecnologica en crecimiento sostenible para empresas, organizaciones y profesionales de Latinoamerica.",
    url: "/nosotros",
    type: "website",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Nosotros | Manifiesto Beeploy",
  description:
    "La pagina de nosotros de Beeploy explica su origen, tension fundacional, filosofia melipona y metodologia para construir tecnologia accesible, confiable y escalable.",
  about: {
    "@type": "Organization",
    name: "Beeploy",
    slogan: "Transformamos complejidad tecnologica en oportunidades reales de crecimiento.",
  },
};

const originBlocks = [
  {
    kicker: "Problema",
    title: "Historia que justifica la existencia",
    body: "Beeploy nace de una realidad que se repite en toda Latinoamerica: existe talento en abundancia, pero el acceso a tecnologia avanzada sigue concentrado en pocas manos. El comerciante conoce a sus clientes, el profesional domina su oficio, el fundador entiende su mercado y el equipo operativo sabe donde se pierde tiempo cada semana. Sin embargo, muchos negocios quedan atrapados porque crecer les exige entender desarrollo de software, arquitectura cloud, ciberseguridad, automatizacion, datos e inteligencia artificial antes de poder competir. Esa exigencia es injusta. La tecnologia deberia trabajar para las personas, no obligarlas a hablar un idioma que nunca eligieron aprender.",
  },
  {
    kicker: "Consecuencia",
    title: "La brecha que vuelve invisible el potencial",
    body: "Cuando la tecnologia se vuelve inaccesible, el problema no es solo tecnico. Se pierden ventas porque los procesos siguen manuales. Se pierden horas porque los sistemas no conversan entre si. Se toman decisiones por intuicion porque los datos estan dispersos. Se posterga la innovacion porque cada proveedor habla en jerga, vende modulos desconectados o promete una transformacion que nunca baja a tierra. La consecuencia final es mas profunda: empresas con capacidad real de generar empleo, prosperidad y autonomia quedan compitiendo con herramientas menores frente a organizaciones que si pueden financiar equipos completos de innovacion.",
  },
  {
    kicker: "Solucion",
    title: "Primero entender, luego construir",
    body: "Beeploy existe para cerrar esa distancia. Antes de escribir codigo, entendemos el negocio, el flujo operativo, el costo de la friccion y el resultado que debe producir la tecnologia. Despues disenamos sistemas que se adaptan al contexto real del cliente: plataformas a medida, automatizaciones, integraciones, analitica, inteligencia artificial y arquitectura preparada para evolucionar. No vendemos horas como un commodity ni instalamos herramientas por moda. Traducimos complejidad en decisiones comprensibles y convertimos esas decisiones en infraestructura digital util, medible y sostenible.",
  },
  {
    kicker: "Resultado",
    title: "Tecnologia que prospera contigo",
    body: "El resultado que buscamos no es una pantalla bonita ni un repositorio lleno de codigo. Buscamos mas ingresos, mas tiempo libre, menos errores, mejor visibilidad, procesos integrados, datos accionables y equipos capaces de operar con confianza. Cuando una empresa entiende por que se construyo cada pieza de su sistema, la tecnologia deja de sentirse como gasto y se convierte en una capacidad interna. Esa es la promesa central de Beeploy: tu crecimiento estara respaldado por tecnologia disenada para prosperar contigo.",
  },
];

const meliponaInsights = [
  {
    icon: <Cpu className="size-6 text-text-main" aria-hidden="true" />,
    title: "Tecnologia sin aguijon",
    body: "La melipona inspira una tecnologia sin friccion innecesaria. Implementar software no deberia doler, intimidar ni dejar al cliente atrapado en dependencia artificial. En Beeploy, cada decision se explica, cada entrega busca reducir ansiedad y cada sistema se disena para que el equipo pueda adoptarlo sin sentir que la complejidad le esta ganando. Sin aguijon no significa simpleza ingenua; significa potencia tecnica con una experiencia de implementacion humana, clara y acompanada.",
  },
  {
    icon: <Network className="size-6 text-text-main" aria-hidden="true" />,
    title: "Inteligencia colectiva",
    body: "Una solucion fuerte no nace de imponer tecnologia desde afuera. Nace cuando el conocimiento del negocio y el conocimiento tecnico trabajan juntos. La inteligencia colectiva de Beeploy combina estrategia, arquitectura, desarrollo, datos y la experiencia viva del cliente. Escuchamos a quienes operan todos los dias porque ahi estan las senales que un sistema debe respetar: excepciones, cuellos de botella, oportunidades, riesgos y habitos reales de adopcion.",
  },
  {
    icon: <Hexagon className="size-6 text-text-main" aria-hidden="true" />,
    title: "Construccion eficiente",
    body: "El panal no desperdicia estructura. Cada celda existe por una razon y aporta estabilidad al conjunto. Asi entendemos la arquitectura digital: modulos definidos, responsabilidades claras, integraciones limpias y bases preparadas para cambiar sin romper el nucleo del negocio. La metafora hexagonal se vuelve tecnica cuando hablamos de sistemas desacoplados, dominios protegidos, APIs coherentes y componentes que pueden crecer sin convertirse en deuda.",
  },
  {
    icon: <Database className="size-6 text-text-main" aria-hidden="true" />,
    title: "Polinizacion digital",
    body: "Beeploy conecta personas, procesos, datos y oportunidades. La polinizacion digital ocurre cuando la informacion deja de vivir aislada en hojas de calculo, chats, ERPs incompletos o bases desconectadas, y empieza a circular con sentido. Un dato de ventas puede activar inventario, una solicitud puede generar seguimiento, un patron puede anticipar demanda y un sistema puede liberar tiempo para que el equipo piense en crecimiento, no en copiar y pegar.",
  },
];

const frameworkSteps = [
  {
    title: "Descubrir",
    body: "Investigamos el problema antes de escribir codigo. Entrevistamos, observamos procesos, medimos fricciones y separamos sintomas de causas. Esta etapa evita construir soluciones elegantes para problemas mal definidos. Aqui convertimos intuicion empresarial en un mapa claro de prioridades, riesgos y oportunidades.",
  },
  {
    title: "Diseñar",
    body: "Traducimos el diagnostico en un blueprint tecnologico. Definimos arquitectura, flujos, datos, integraciones, roles de usuario y criterios de exito. La tecnologia se adapta al negocio, no al reves. Si una decision no mejora adopcion, escalabilidad o resultado, se revisa antes de convertirse en costo.",
  },
  {
    title: "Construir",
    body: "Ejecutamos con modularidad, seguridad y mantenibilidad. Construimos interfaces claras, servicios desacoplados, automatizaciones confiables y bases de datos pensadas para crecer. El objetivo no es entregar codigo rapido para salir del paso, sino crear infraestructura que soporte ventas, operaciones, aprendizaje y evolucion.",
  },
  {
    title: "Acompañar",
    body: "Explicar es parte del trabajo. Por eso acompanamos la adopcion con lenguaje humano, documentacion util y soporte cercano. Un sistema solo genera valor cuando el equipo lo entiende, lo usa y lo incorpora a su forma de operar. La entrega no termina en el lanzamiento; empieza cuando la organizacion empieza a capturar valor.",
  },
  {
    title: "Evolucionar",
    body: "Los negocios cambian, y la tecnologia debe cambiar con ellos. Medimos uso, observamos nuevas necesidades, optimizamos procesos y preparamos mejoras progresivas. Evolucionar no significa reconstruir todo cada ano; significa haber creado una base flexible para responder al mercado sin colapsar.",
  },
];

const principles = [
  {
    icon: <Brain className="size-5 text-text-main" aria-hidden="true" />,
    title: "Explicar es parte del trabajo",
    body: "Un cliente no tiene la obligacion de entender tecnologia. Nosotros si tenemos la obligacion de explicarla con precision, paciencia y lenguaje de negocio.",
  },
  {
    icon: <Workflow className="size-5 text-text-main" aria-hidden="true" />,
    title: "La tecnologia debe adaptarse",
    body: "No todos los negocios operan igual. Por eso rechazamos soluciones rigidas que fuerzan al equipo a cambiar procesos valiosos solo para encajar en una herramienta.",
  },
  {
    icon: <Banknote className="size-5 text-text-main" aria-hidden="true" />,
    title: "La confianza se construye con resultados",
    body: "Las promesas abren conversaciones; los resultados sostienen relaciones. Medimos el valor por tiempo recuperado, riesgo reducido, ventas habilitadas y decisiones mejor informadas.",
  },
  {
    icon: <Rocket className="size-5 text-text-main" aria-hidden="true" />,
    title: "No construimos deuda disfrazada de rapidez",
    body: "Una urgencia mal resuelta se convierte en un problema futuro. Preferimos avanzar con criterio, priorizar bien y entregar bases que no castiguen el crecimiento.",
  },
];

const audienceMessages = [
  {
    label: "CEO",
    title: "Rentabilidad y crecimiento",
    body: "Para la direccion general, la tecnologia debe responder una pregunta concreta: como ayuda a crecer sin multiplicar complejidad. Beeploy conecta inversion tecnologica con productividad, visibilidad comercial, escalabilidad operativa y decisiones respaldadas por datos.",
  },
  {
    label: "CTO",
    title: "Arquitectura y escalabilidad",
    body: "Para liderazgos tecnicos, construimos sistemas preparados para evolucionar: dominios separados, integraciones claras, seguridad razonable, codigo mantenible y decisiones documentadas. La arquitectura importa porque protege el futuro del negocio.",
  },
  {
    label: "COO",
    title: "Eficiencia y procesos",
    body: "Para operaciones, reducimos friccion donde mas duele: tareas repetitivas, aprobaciones lentas, datos duplicados, reportes manuales y sistemas que no se sincronizan. Automatizar no es reemplazar criterio humano; es devolverle tiempo.",
  },
  {
    label: "Emprendedor",
    title: "Tiempo e ingresos",
    body: "Para fundadores y profesionales, hacemos que la tecnologia trabaje a favor de la ambicion, no en contra de ella. Un buen sistema permite vender mejor, responder mas rapido, ordenar clientes y competir con menos desgaste.",
  },
];

const values = [
  "Prosperidad tangible",
  "Confianza transparente",
  "Accesibilidad tecnica",
  "Excelencia sostenible",
  "Adaptabilidad real",
  "Responsabilidad operativa",
  "Colaboracion profunda",
  "Humanidad en cada entrega",
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
              Manifiesto Beeploy
            </p>
            <h1 className="text-balance font-heading text-4xl font-black leading-[1.04] text-text-main sm:text-6xl lg:text-7xl">
              La tecnologia no deberia ser un privilegio. Deberia ser una oportunidad.
            </h1>
          </div>
          <div className="max-w-2xl lg:pb-3">
            <p className="text-xl leading-9 text-text-main">
              Beeploy es un ecosistema tecnologico latinoamericano creado para reducir
              la distancia entre el talento humano y las oportunidades que la tecnologia
              puede abrir. No nacimos para vender software; nacimos para convertir
              complejidad en crecimiento, confianza y prosperidad sostenible.
            </p>
            <blockquote className="mt-8 border-l-4 border-golden-pollen bg-white px-6 py-5 text-lg font-semibold leading-8 text-text-main shadow-soft">
              &quot;Talento + Tecnologia + Acceso = Prosperidad&quot;
            </blockquote>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <Eyebrow>Origen y tension</Eyebrow>
            <h2 className="mt-4 text-balance font-heading text-3xl font-black leading-tight text-text-main sm:text-5xl">
              Tensión Fundacional: mucho talento, poco acceso.
            </h2>
            <p className="mt-6 text-lg leading-8 text-text-muted">
              Toda marca poderosa nace de una tension que considera inaceptable.
              La nuestra es clara: las personas tienen talento, las empresas tienen
              potencial, pero las herramientas que necesitan para crecer suelen estar
              fuera de su alcance.
            </p>
          </aside>
          <div className="grid gap-5">
            {originBlocks.map((block) => (
              <article
                key={block.title}
                className="rounded-lg border border-text-main/10 bg-white p-7 shadow-[0_10px_32px_rgba(26,26,26,0.05)] sm:p-8"
              >
                <p className="text-xs font-black uppercase tracking-[0.2em] text-golden-hover">
                  {block.kicker}
                </p>
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
            <div>
              <p className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.22em] text-golden-pollen">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                La metafora melipona
              </p>
              <h2 className="mt-4 text-balance font-heading text-3xl font-black leading-tight sm:text-5xl">
                Tecnologia nativa, colaborativa y sin miedo.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/72">
                Beeploy adopta la abeja melipona porque expresa una forma distinta
                de entender la tecnologia: cercana sin perder rigor, modular sin
                perder direccion, eficiente sin volverse fria. La melipona no es
                un adorno visual; es una declaracion sobre como queremos construir.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {meliponaInsights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-lg border border-white/10 bg-white p-6 text-text-main shadow-[0_18px_60px_rgba(0,0,0,0.18)]"
                >
                  <div className="mb-5 flex size-12 items-center justify-center rounded-lg bg-golden-pollen">
                    {item.icon}
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
              <Eyebrow>Arquitectura y criterio</Eyebrow>
              <h2 className="mt-4 text-balance font-heading text-3xl font-black leading-tight text-text-main sm:text-5xl">
                Mientras otros venden herramientas, nosotros construimos ecosistemas.
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-text-muted">
                <p>
                  Una fabrica de software suele preguntar que hay que programar. Una agencia
                  suele preguntar como debe verse. Beeploy empieza en otro lugar: pregunta
                  que obstaculo limita el crecimiento, que proceso esta drenando margen,
                  que dato falta para decidir mejor y que parte de la operacion debe quedar
                  preparada para escalar.
                </p>
                <p>
                  Por eso nuestra conversacion no gira alrededor de lenguajes de moda,
                  pantallas aisladas o entregables cosmeticos. Hablamos de arquitectura,
                  adopcion, seguridad, modularidad, integracion y retorno. El software es
                  el medio. La prosperidad es el objetivo.
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-text-main/10 bg-white p-8 shadow-soft">
              <p className="font-heading text-6xl font-black text-golden-pollen">5</p>
              <h3 className="mt-4 font-heading text-2xl font-black text-text-main">
                principios de decision
              </h3>
              <ul className="mt-6 grid gap-3" role="list">
                {[
                  "Genera valor real para el negocio.",
                  "Es sostenible despues del lanzamiento.",
                  "Reduce complejidad en lugar de esconderla.",
                  "Puede explicarse en lenguaje humano.",
                  "Ayuda a crecer sin crear dependencia artificial.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm font-semibold text-text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-golden-pollen" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <Eyebrow>Framework Beeploy</Eyebrow>
            <h2 className="mt-4 text-balance font-heading text-3xl font-black leading-tight text-text-main sm:text-5xl">
              Cinco etapas para transformar complejidad en crecimiento.
            </h2>
            <p className="mt-6 text-lg leading-8 text-text-muted">
              Nuestro metodo organiza el trabajo para que la estrategia no se pierda
              en ejecucion y la ejecucion no pierda rigor tecnico. Cada etapa conecta
              un problema del negocio con una decision de arquitectura y un resultado
              verificable.
            </p>
          </div>
          <ol className="mt-12 grid gap-5 lg:grid-cols-5">
            {frameworkSteps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-lg border border-text-main/10 bg-background p-6 shadow-[0_10px_28px_rgba(26,26,26,0.045)]"
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-text-main px-3 py-1 text-xs font-black uppercase tracking-widest text-golden-pollen">
                  0{index + 1}
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
              <Eyebrow>Como hablamos</Eyebrow>
              <h2 className="mt-4 text-balance font-heading text-3xl font-black leading-tight text-text-main sm:text-5xl">
                Arquitectos para construir, expertos para explicar, aliados para acompanar.
              </h2>
              <p className="mt-6 text-lg leading-8 text-text-muted">
                Beeploy habla con claridad, seguridad y humanidad. No infantilizamos al
                cliente, pero tampoco usamos la jerga como barrera. Una buena explicacion
                reduce riesgo, acelera decisiones y permite que la empresa participe en
                su propia evolucion tecnologica.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {principles.map((principle) => (
                <article
                  key={principle.title}
                  className="rounded-lg border border-text-main/10 bg-white p-6 shadow-[0_10px_30px_rgba(26,26,26,0.05)]"
                >
                  <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-golden-pollen">
                    {principle.icon}
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
                <Eyebrow>Mensaje por audiencia</Eyebrow>
                <h2 className="mt-4 text-balance font-heading text-3xl font-black leading-tight text-text-main sm:text-4xl">
                  La misma promesa, traducida al resultado que cada rol necesita.
                </h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {audienceMessages.map((message) => (
                  <article key={message.label} className="border-t border-text-main/10 pt-5">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-golden-hover">
                      {message.label}
                    </p>
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
            <Eyebrow>Manifiesto</Eyebrow>
            <h2 className="mt-4 text-balance font-heading text-3xl font-black leading-tight text-text-main sm:text-5xl">
              Creemos que el talento esta distribuido de forma mucho mas amplia que las oportunidades.
            </h2>
            <div className="mt-7 space-y-5 text-lg leading-8 text-text-muted">
              <p>
                Creemos que la tecnologia puede reducir esa distancia. Creemos que la
                complejidad no deberia impedir el crecimiento. Creemos que entender es tan
                importante como construir, porque un sistema que nadie comprende termina
                convirtiendose en una nueva forma de dependencia.
              </p>
              <p>
                Creemos que toda empresa merece acceso a herramientas que le permitan
                competir con mas informacion, mejores procesos y menos incertidumbre.
                Creemos que las soluciones deben adaptarse a las personas y no las personas
                a las soluciones. Creemos que la confianza se gana con resultados, pero
                tambien con presencia, transparencia y responsabilidad cuando aparecen
                preguntas dificiles.
              </p>
              <p>
                Y creemos que si dentro de muchos anos alguien pregunta que represento
                Beeploy para Latinoamerica, la respuesta deberia ser simple: ayudo a que
                mas personas pudieran vivir mejor de su trabajo gracias a la tecnologia.
                No por hacerla mas ruidosa, sino por hacerla mas comprensible, mas util y
                mas cercana a quienes ya tenian el talento para construir prosperidad.
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
            El Ecosistema
          </p>
          <h2 className="mt-4 font-heading text-3xl font-black leading-tight text-white sm:text-5xl">
            Desarrollamos con conocimiento, desplegamos con compromiso tangible.
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/70">
            Nuestro valor agregado es único: el capital invertido en optimizar su
            sistema financia directamente Cameyapp, nuestra plataforma matriz. Al
            elegirnos, no solo cura los problemas técnicos de su empresa; está
            construyendo la infraestructura tecnológica que devuelve trabajo y
            dignidad a miles de profesionales en Latinoamérica.
          </p>
          <a
            href="https://wa.me/593997963617?text=Hola%20equipo%20de%20Beeploy.%20Me%20interesa%20conocer%20m%C3%A1s%20sobre%20su%20prop%C3%B3sito%20y%20agendar%20un%20diagn%C3%B3stico."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex min-h-12 items-center justify-center rounded-full bg-golden-pollen px-8 py-3 text-sm font-black text-text-main transition hover:bg-golden-hover"
          >
            Agendar un diagnóstico
          </a>
        </div>
      </section>
    </main>
  );
}
