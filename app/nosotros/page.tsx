import type { Metadata } from "next";
import { SectionShell } from "@/components/ui/section-shell";
import { Cpu, Banknote, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "Nosotros | El Manifiesto",
  description:
    "Esto Necesita un rework entero en texto (se acompañará con visuales cuando esté listo para su respectiva actualización)",
};

const pillars = [
  {
    icon: <Cpu className="w-6 h-6 text-neutral-900 stroke-[2px]" />,
    title: "Soberanía Digital",
    body: "Creamos independencia técnica para el cliente corporativo.",
  },
  {
    icon: <Banknote className="w-6 h-6 text-neutral-900 stroke-[2px]" />,
    title: "Ingeniería al Retorno",
    body: "Código que funciona como inversión, no como un gasto.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-neutral-900 stroke-[2px]" />,
    title: "Despliegue Estratégico",
    body: "Entregas ágiles, metódicas y sin fricción.",
  },
];

export default function NosotrosPage() {
  return (
    <main id="contenido">

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="px-6 pb-16 pt-20 text-center sm:pb-24 sm:pt-28">
        <div className="mx-auto max-w-4xl">
          <p className="mb-5 inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider">
            MANIFIESTO BEEPLOY
          </p>
          <h1 className="text-balance font-heading text-4xl font-black leading-[1.05] text-text-main sm:text-5xl lg:text-6xl">
            El software sin propósito humano es solo texto en una pantalla.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-text-muted">
            Somos una casa de desarrollo tecnológico de élite 100% ecuatoriana.
            Construimos sistemas a la medida que escalan empresas y protegen operaciones.
          </p>
        </div>
      </section>

      {/* ── Sección 2: El Orgullo Neotropical ────────────── */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-16">

            {/* Texto */}
            <div>
              <p className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.22em] text-text-main">
                <span className="h-1.5 w-1.5 rounded-full bg-golden-pollen" />
                El Orgullo Neotropical
              </p>
              <h2 className="mt-3 font-heading text-3xl font-black leading-tight text-text-main sm:text-4xl">
                La Metáfora de la Abeja
              </h2>
              <div className="mt-6 flex flex-col gap-5 text-lg leading-relaxed text-text-muted">
                <p>
                  Inspirados en las abejas meliponas nativas, entendemos que un código
                  debe ser tan estructurado como un panal y el producto final de tan
                  alta calidad como la miel (nuestro Golden Pollen).
                </p>
                <p>
                  Trabajamos con la sincronía de una mente colmena: resolvemos problemas
                  globales con el contexto y la urgencia de nuestra región.
                </p>
              </div>
            </div>

            {/* Visual abstracto */}
            <div className="relative mx-auto flex w-full max-w-md aspect-square items-center justify-center">
              <div className="absolute inset-0 opacity-[0.03]">
                <svg viewBox="0 0 32 32" className="h-full w-full" fill="none">
                  <path d="M16 3 27 9.5v13L16 29 5 22.5v-13L16 3Z" stroke="#FFCC33" strokeWidth="0.5" />
                  <path d="M11 14h10M11 18h10M16 9v14" stroke="#FFCC33" strokeWidth="0.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="hexagon relative z-10 flex h-40 w-40 items-center justify-center bg-golden-pollen/10 border-2 border-golden-pollen/20 shadow-soft">
                <div className="hexagon flex h-32 w-32 items-center justify-center bg-golden-pollen/20 border border-golden-pollen/30">
                  <div className="hexagon h-24 w-24 bg-golden-pollen"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sección 3: Nuestros Pilares ──────────────────── */}
      <SectionShell
        eyebrow="La Mente Colmena"
        title="Nuestros Pilares"
        className=""
      >
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((pilar) => (
            <article
              key={pilar.title}
              className="flex flex-col gap-4 rounded-2xl border border-neutral-100 bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-colors duration-300 hover:border-golden-pollen/50"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-amber-400 rounded-xl shrink-0">
                {pilar.icon}
              </div>
              <div>
                <h3 className="font-heading text-xl font-black text-text-main">
                  {pilar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {pilar.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      {/* ── Sección Final: El Gran Porqué ─────────────────── */}
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
