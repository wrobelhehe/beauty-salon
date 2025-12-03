import clsx from "clsx";

interface ButtonProps {
  label: string;
  variant?: "primary" | "ghost";
  href?: string;
}

export function Button({ label, variant = "primary", href = "#" }: ButtonProps) {
  const styles = clsx(
    "group relative inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-transform duration-300",
    variant === "primary"
      ? "bg-gold text-noir shadow-glow hover:-translate-y-0.5"
      : "border border-rose/40 bg-white/5 text-rose hover:-translate-y-0.5"
  );

  return (
    <a className={styles} href={href}>
      {label}
      <span className="ml-3 h-[1px] w-6 bg-current transition-all duration-300 group-hover:w-10" aria-hidden />
    </a>
  );
}
