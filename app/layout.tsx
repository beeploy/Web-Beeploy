import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

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
  metadataBase: new URL("https://beeploy.com"),
  title: {
    default: "Beeploy | Arquitectura que cuida",
    template: "%s | Beeploy",
  },
  description:
    "Beeploy construye ciberseguridad, datos y software a medida para organizaciones que necesitan rigor tecnico e impacto humano.",
  openGraph: {
    title: "Beeploy | Arquitectura que cuida",
    description:
      "Casa ecuatoriana de desarrollo de software: ciberseguridad, datos y soluciones a medida con proposito social.",
    url: "https://beeploy.com",
    siteName: "Beeploy",
    locale: "es_EC",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${rubik.variable} ${inter.variable}`}>
      <body className="bg-background font-body text-text-main antialiased">
        <a
          href="#contenido"
          className="skip-link rounded-xl bg-text-main px-4 py-3 text-sm font-semibold text-white shadow-soft"
        >
          Saltar al contenido
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
