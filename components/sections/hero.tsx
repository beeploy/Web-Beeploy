import { ButtonLink } from "@/components/ui/button-link";
import { SectionBadge } from "@/components/ui/eyebrow";
import { BrainCircuit, ShieldCheck, Zap, Blocks, Waypoints, Users, Hexagon } from "lucide-react";
import { hexClip } from "@/components/ui/hexClip";

const honeycombNodes = [
  { id: 'center', x: 0, y: 0, icon: Hexagon, label: "Ecosistema", center: true },
  { id: 'ia', x: 0, y: -128, icon: BrainCircuit, label: "Datos & IA" },
  { id: 'arquitectura', x: 112, y: -64, icon: Blocks, label: "Arquitectura" },
  { id: 'integracion', x: 112, y: 64, icon: Waypoints, label: "Integración" },
  { id: 'automatizacion', x: 0, y: 128, icon: Zap, label: "Flujos" },
  { id: 'cameyapp', x: -112, y: 64, icon: Users, label: "Cameyapp" },
  { id: 'ciberseguridad', x: -112, y: -64, icon: ShieldCheck, label: "Seguridad" },
];

function HeroHoneycomb() {
  return (
    <div className="relative flex h-full min-h-[480px] w-full items-center justify-center overflow-hidden">
      <div className="relative flex h-[380px] w-[380px] items-center justify-center">
        {honeycombNodes.map((node, index) => {
          const isCenter = node.center;
          const Icon = node.icon;

          return (
            <div
              key={node.id}
              className="group absolute flex items-center justify-center drop-shadow-[0_4px_12px_rgba(217,119,6,0.15)] transition-all duration-300 ease-in-out hover:z-20 hover:scale-110"
              style={{
                width: 144,
                height: 126,
                transform: `translate(${node.x}px, ${node.y}px)`,
                animation: `fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s both`,
              }}
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700"
                style={{ clipPath: hexClip }}
              />
              <div
                className={`absolute inset-[2.5px] ${isCenter ? "bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600" : "bg-gradient-to-br from-amber-200 via-amber-300 to-amber-500"}`}
                style={{ clipPath: hexClip }}
              >
                <div className="absolute inset-0 h-[55%] bg-gradient-to-b from-white/70 via-white/10 to-transparent mix-blend-overlay" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-amber-800/40 to-transparent mix-blend-multiply" />
              </div>
              <div className="relative z-10 flex flex-col items-center justify-center gap-1.5 p-2 transition-transform duration-300 group-hover:-translate-y-1">
                <Icon className="size-8 text-text-main" strokeWidth={isCenter ? 2.5 : 2} />
                <span className="text-[11px] font-black uppercase tracking-wider text-text-main">
                  {node.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="section-light page-intro w-full px-6 py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.92fr]">
        <div className="relative z-10 max-w-3xl">
          <div className="mb-6">
            <SectionBadge>Ecosistema Tecnológico B2B</SectionBadge>
          </div>
          <h1 className="text-balance font-heading text-5xl font-black leading-[1.02] text-text-main sm:text-6xl lg:text-7xl">
            Arquitectura digital que convierte complejidad en crecimiento.
          </h1>
          <p className="mr-auto ml-0 mt-6 max-w-3xl text-lg leading-relaxed text-text-muted">
            No somos una fábrica de software que opera por inercia. Diseñamos e implementamos infraestructura tecnológica modular, automatizamos flujos operativos y garantizamos la seguridad de tu información para que escales con autonomía técnica.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/servicios" variant="gold">
              Conocer el Ecosistema
            </ButtonLink>
            <ButtonLink href="/nosotros" variant="dark">
              Descubrir el Manifiesto
            </ButtonLink>
          </div>
        </div>
        <HeroHoneycomb />
      </div>
    </section>
  );
}
