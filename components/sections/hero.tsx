import { ButtonLink } from "@/components/ui/button-link";
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
    <div className="relative w-full h-full min-h-[480px] flex items-center justify-center bg-surface overflow-hidden rounded-2xl border border-text-main/10 shadow-soft">
      <div className="relative w-[380px] h-[380px] flex items-center justify-center">
        {honeycombNodes.map((node, index) => {
          const isCenter = node.center;
          const Icon = node.icon;
          
          return (
            <div 
              key={node.id}
              className="absolute flex items-center justify-center transition-all duration-500 hover:scale-110 hover:z-20 group drop-shadow-[0_4px_12px_rgba(217,119,6,0.15)]"
              style={{ 
                width: 144, 
                height: 126,
                transform: `translate(${node.x}px, ${node.y}px)`,
                animation: `fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s both`
              }}
            >
              {/* Outer Border (Darker Honey/Amber) */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700"
                style={{ clipPath: hexClip }}
              ></div>
              
              {/* Inner Honey Fill */}
              <div 
                className={`absolute inset-[2.5px] ${isCenter ? 'bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600' : 'bg-gradient-to-br from-amber-200 via-amber-300 to-amber-500'}`}
                style={{ clipPath: hexClip }}
              >
                {/* Glossy Top Shine */}
                <div className="absolute inset-0 h-[55%] bg-gradient-to-b from-white/70 via-white/10 to-transparent mix-blend-overlay"></div>
                {/* Bottom Rich Glow */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-amber-800/40 to-transparent mix-blend-multiply"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center gap-1.5 p-2 transition-transform duration-300 group-hover:-translate-y-1">
                <Icon className={`size-8 ${isCenter ? 'text-amber-950' : 'text-amber-900/90'}`} strokeWidth={isCenter ? 2.5 : 2} />
                <span className={`text-[11px] font-black uppercase tracking-wider ${isCenter ? 'text-amber-950' : 'text-amber-900/90'}`}>
                  {node.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Decorative background lines */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #D97706 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent pointer-events-none opacity-50"></div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-12 sm:pb-24 sm:pt-18">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.92fr]">
        <div className="relative z-10 max-w-3xl">
          <p className="mb-6 inline-block px-6 py-2 rounded-full border border-amber-300 bg-amber-100 text-amber-950 font-bold uppercase tracking-wide text-xs text-center cursor-default">
            Ecosistema Tecnológico B2B
          </p>
          <h1 className="text-balance font-heading text-5xl font-black leading-[1.02] text-text-main sm:text-6xl lg:text-7xl">
            Arquitectura digital que convierte complejidad en crecimiento.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted">
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
