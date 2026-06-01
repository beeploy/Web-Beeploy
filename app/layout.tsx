import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ReactNode, JSX } from "react";

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
  title: "Beeploy | Tecnología de élite para hacer crecer tu empresa",
  description: "Desarrollo a la medida, automatizaciones con IA y ciberseguridad corporativa. Construimos sistemas que escalan operaciones y protegen tu información.",
  openGraph: {
    title: "Beeploy | Tecnología de Élite",
    description: "Sistemas a la medida, IA y Ciberseguridad para empresas.",
    url: "https://beeploy.com", 
    siteName: "Beeploy",
    locale: "es_EC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beeploy | Tecnología de Élite",
    description: "Sistemas a la medida, IA y Ciberseguridad para empresas.",
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
    <html lang="es" className={`${rubik.variable} ${inter.variable}`}>
      <body className="bg-background font-body text-text-main antialiased">
        <a
          href="#contenido"
          className="skip-link rounded-full bg-text-main px-4 py-3 text-sm font-semibold text-white shadow-soft"
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
