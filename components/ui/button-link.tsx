import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "gold" | "light";
};

const variants = {
  dark: "bg-text-main text-white hover:bg-golden-hover hover:text-text-main",
  gold: "bg-golden-pollen text-text-main hover:bg-golden-hover",
  light: "bg-white text-text-main hover:bg-golden-pollen",
};

export function ButtonLink({
  href,
  children,
  variant = "dark",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-xl px-6 py-3 text-sm font-bold transition ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}
