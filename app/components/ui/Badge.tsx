import type React from "react";

interface BadgeProps {
  children: React.ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-rose/40 bg-gradient-to-r from-white/10 via-rose/5 to-transparent px-4 py-2 text-xs uppercase tracking-[0.2em] text-rose shadow-glow">
      <span className="h-1 w-1 rounded-full bg-gold" aria-hidden />
      {children}
    </span>
  );
}
