import { FinalCta } from "@/components/sections/final-cta";
import { FitSignals } from "@/components/sections/fit-signals";
import { Hero } from "@/components/sections/hero";
import { MethodTimeline } from "@/components/sections/method-timeline";
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
    "Casa ecuatoriana de desarrollo de software especializada en ciberseguridad, datos y software a medida.",
  areaServed: ["Ecuador", "Latam"],
  knowsAbout: ["Ciberseguridad", "Datos", "Software a medida"],
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
      <PurposeBridge />
      <FinalCta />
    </main>
  );
}
