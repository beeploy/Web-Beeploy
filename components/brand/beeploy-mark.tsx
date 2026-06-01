import Image from "next/image";

type BeeployMarkProps = {
  inverse?: boolean;
};

export function BeeployMark({ inverse = false }: BeeployMarkProps) {
  return (
    <span className="inline-flex items-center" aria-label="Beeploy">
      <Image
        src="/logo-beeploy.svg"
        alt="Beeploy Logo"
        width={150}
        height={45}
        className={`object-contain ${inverse ? "brightness-0 invert" : ""}`}
        priority
      />
    </span>
  );
}
