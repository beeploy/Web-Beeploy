import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ReactNode, JSX } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://beeploy.netlify.app"),
  alternates: {
    canonical: '/',
  },
  title: "Beeploy | Tecnología de élite para hacer crecer tu empresa",
  description: "Desarrollo a la medida, automatizaciones con IA y ciberseguridad corporativa. Construimos sistemas que escalan operaciones y protegen tu información.",
  openGraph: {
    title: "Beeploy | Tecnología de Élite",
    description: "Sistemas a la medida, IA y Ciberseguridad para empresas.",
    url: "/",
    siteName: "Beeploy",
    images: [
      {
        url: "/banner-beeploy-v2.png",
        width: 3523,
        height: 1035,
        alt: "Beeploy — logo sobre fondo negro",
      },
    ],
    locale: "es_EC",
    type: "website",
  },
  icons: {
    icon: '/favicon.png',
  },
  twitter: {
    card: "summary_large_image",
    title: "Beeploy | Tecnología de Élite",
    description: "Sistemas a la medida, IA y Ciberseguridad para empresas.",
    images: ["/banner-beeploy-v2.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): JSX.Element {
  return (
    <html lang="es" className={`scroll-smooth ${rubik.variable} ${inter.variable}`}>
      <body className="section-light font-body text-text-main antialiased">
        <GoogleAnalytics gaId="G-GGMDHT7EXL" />
        <a
          href="#contenido"
          className="skip-link rounded-full bg-text-main px-4 py-3 text-sm font-semibold text-white shadow-soft"
        >
          Saltar al contenido
        </a>
        <SiteHeader />
        <div className="pt-20">
          {children}
        </div>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Beeploy",
              "url": "https://beeploy.netlify.app",
              "description": "Desarrollo de software a la medida, automatizaciones con IA y ciberseguridad corporativa en Guayaquil, Ecuador.",
              "telephone": "+593997963617",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Guayaquil",
                "addressRegion": "Guayas",
                "addressCountry": "EC"
              },
              "image": "https://beeploy.netlify.app/logo-beeploy-rounded-final.png",
              "areaServed": "Guayaquil",
              "priceRange": "$$"
            })
          }}
        />
      </body>
    </html>
  );
}
