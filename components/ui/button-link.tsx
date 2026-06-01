import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "gold" | "light";
  target?: string;
  rel?: string;
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
  target,
  rel,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 text-sm font-bold transition ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}
