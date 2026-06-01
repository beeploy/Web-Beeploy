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
    default: "Beeploy | Tecnología para hacer crecer tu empresa",
    template: "%s | Beeploy",
  },
  description:
    "Beeploy crea apps, webs, sistemas, ciberseguridad y soluciones de Datos e IA para que empresas en Ecuador y Latam vendan mas, reduzcan riesgos y decidan mejor.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Beeploy | Tecnología para hacer crecer tu empresa",
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
