"use client";

import clsx from "clsx";
import { useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#story", label: "Story" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-rose/30 via-noir/20 to-transparent blur-2xl" aria-hidden />
      <div className="section-shell py-4">
        <div className="flex items-center justify-between rounded-full border border-white/5 bg-noir/70 px-6 py-3 shadow-soft">
          <a href="#top" className="text-sm font-semibold uppercase tracking-[0.28em] text-rose hover:text-gold transition-colors">
            Serene Atelier
          </a>
          <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.2em] text-rose/80 md:flex">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-gold transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-rose/30 bg-rose/5 text-rose shadow-glow outline-none transition hover:border-rose hover:text-gold focus-visible:ring-2 focus-visible:ring-rose/50 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="sr-only">Toggle navigation</span>
            <span
              className={clsx(
                "absolute block h-[2px] w-6 rounded-full bg-current transition-all duration-300",
                open ? "translate-y-0 rotate-45" : "-translate-y-1.5"
              )}
            />
            <span
              className={clsx(
                "absolute block h-[2px] w-6 rounded-full bg-current transition-all duration-300",
                open ? "opacity-0" : "opacity-100"
              )}
            />
            <span
              className={clsx(
                "absolute block h-[2px] w-6 rounded-full bg-current transition-all duration-300",
                open ? "translate-y-0 -rotate-45" : "translate-y-1.5"
              )}
            />
          </button>
        </div>
      </div>

      <div
        className={clsx(
          "section-shell md:hidden",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <div
          className={clsx(
            "mt-2 origin-top rounded-3xl border border-rose/25 bg-noir/90 p-6 shadow-soft backdrop-blur-xl transition duration-300",
            open ? "scale-100 opacity-100" : "scale-95 opacity-0"
          )}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.24em] text-rose/70">Navigate</p>
          <div className="flex flex-col divide-y divide-rose/10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-3 text-lg font-semibold text-rose hover:text-gold"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
