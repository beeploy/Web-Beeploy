import Link from "next/link";
import { ReactNode, JSX } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "dark" | "gold" | "light";
  target?: string;
  rel?: string;
};

const variants: Record<"dark" | "gold" | "light", string> = {
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
}: ButtonLinkProps): JSX.Element {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`inline-flex min-h-12 items-center justify-center px-7 py-3 text-sm font-bold transition-all duration-300 ease-in-out hover:scale-105 ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}
