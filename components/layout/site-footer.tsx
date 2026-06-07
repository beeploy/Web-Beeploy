import Link from "next/link";
import { BeeployMark } from "@/components/brand/beeploy-mark";
import { Phone } from "lucide-react";

const Github = ({ className }: { className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></svg>);

const Instagram = ({ className }: { className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>);

const Linkedin = ({ className }: { className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>);

const Twitter = ({ className }: { className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export function SiteFooter() {
  return (
    <footer className="bg-text-main px-6 py-12 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3 md:gap-8">
        {/* Columna Izquierda: Marca */}
        <div className="flex flex-col items-start">
          <Link href="/" aria-label="Ir al inicio de Beeploy">
            <BeeployMark inverse />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/85">
            Inteligencia colectiva y arquitectura modular consolidada como catalizador de resiliencia empresarial.
          </p>
        </div>

        {/* Columna Central: Contacto */}
        <div className="flex flex-col">
          <h3 className="text-xs font-bold uppercase tracking-wider text-white/80 mb-4">
            Auditoría Estructural
          </h3>
          <a
            href="https://wa.me/593997963617"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-fit items-center gap-3 text-white/85 transition-colors duration-200 hover:text-amber-500"
          >
            <Phone className="w-5 h-5 transition-colors duration-200 group-hover:text-amber-500" />
            <span className="text-sm font-medium">+593 99 796 3617</span>
          </a>
        </div>

        {/* Columna Derecha: Redes Sociales */}
        <div className="flex flex-col">
          <h3 className="text-xs font-bold uppercase tracking-wider text-white/80 mb-4">
            Nodos del Ecosistema
          </h3>
          <div className="flex gap-5 items-center">
            <a
              href="https://github.com/beeploy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white/85 transition-all duration-200 hover:text-amber-500 hover:scale-110"
            >
              <Github className="w-[22px] h-[22px]" />
            </a>
            <a
              href="https://www.instagram.com/beeploy.dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/85 transition-all duration-200 hover:text-amber-500 hover:scale-110"
            >
              <Instagram className="w-[22px] h-[22px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/beeploy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white/85 transition-all duration-200 hover:text-amber-500 hover:scale-110"
            >
              <Linkedin className="w-[22px] h-[22px]" />
            </a>
            <a
              href="https://x.com/beeploy_dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="text-white/85 transition-all duration-200 hover:text-amber-500 hover:scale-110"
            >
              <Twitter className="w-[22px] h-[22px]" />
            </a>
            <a
              href="https://www.tiktok.com/@beeploy.dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-white/85 transition-all duration-200 hover:text-amber-500 hover:scale-110"
            >
              <TikTokIcon className="w-[26px] h-[26px]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
