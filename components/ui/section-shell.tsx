import { Eyebrow } from "@/components/ui/eyebrow";

type SectionShellProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark";
};

export function SectionShell({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
  variant = "light",
}: SectionShellProps) {
  const isDark = variant === "dark";

  return (
    <section
      id={id}
      className={`w-full px-4 sm:px-6 lg:px-8 py-24 ${isDark ? "section-dark text-white" : "section-light"} ${className}`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="w-full max-w-3xl">
          {eyebrow ? <Eyebrow dark={isDark}>{eyebrow}</Eyebrow> : null}
          <div className="mt-4 mb-10">
            <h2
              className={`text-left text-balance font-heading text-3xl font-black leading-tight sm:text-4xl ${
                isDark ? "text-white" : "text-text-main"
              }`}
            >
              {title}
            </h2>
            {intro ? (
              <p
                className={`mt-4 text-lg leading-relaxed ${
                  isDark ? "text-white/90" : "text-text-muted"
                }`}
              >
                {intro}
              </p>
            ) : null}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
