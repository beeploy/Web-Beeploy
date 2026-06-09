import { FinalCta } from "@/components/sections/final-cta";
import { FitSignals } from "@/components/sections/fit-signals";
import { Hero } from "@/components/sections/hero";
import { MethodTimeline } from "@/components/sections/method-timeline";
import { MethodologyManifesto } from "@/components/sections/methodology-manifesto";
import { PrinciplesSection } from "@/components/sections/principles-section";
import { PurposeBridge } from "@/components/sections/purpose-bridge";
import { ServicePillars } from "@/components/sections/service-pillars";
import { TrustBar } from "@/components/sections/trust-bar";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Beeploy",
  url: "https://beeploy.com",
  description:
    "Ecosistema integral de soluciones tecnológicas diseñado para democratizar el acceso a software a medida, automatización e Inteligencia Artificial en Latinoamérica.",
  areaServed: ["Ecuador", "Latinoamérica"],
  knowsAbout: [
    "Arquitectura Hexagonal",
    "Desarrollo B2B",
    "Automatización de Procesos",
    "Ciberseguridad Resiliente",
    "Análisis de Datos e IA",
  ],
};

export default function Home() {
  return (
    <main id="contenido">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Hero />
      <TrustBar />
      <ServicePillars />
      <MethodTimeline />
      <FitSignals />
      <PrinciplesSection />
      <MethodologyManifesto />
      <section className="section-dark w-full px-6 py-24 text-white">
        <PurposeBridge />
        <FinalCta />
      </section>
    </main>
  );
}
