"use client";

import type React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function HeroMotion({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      const layers = element.querySelectorAll("[data-layer]");
      const text = element.querySelectorAll("[data-hero-text]");

      gsap.set(layers, { yPercent: (index) => (index - 1) * 6, opacity: 0 });
      gsap.set(text, { y: 32, opacity: 0 });

      gsap.timeline({ defaults: { ease: "power3.out" } })
        .to(layers, { opacity: 1, duration: 0.6, stagger: 0.1 })
        .to(layers, { yPercent: 0, duration: 1.4, stagger: 0.08 }, 0)
        .to(text, { opacity: 1, y: 0, duration: 1.1, stagger: 0.08 }, 0.2)
        .to(element, { scale: 1.01, duration: 1.2, ease: "power1.out" }, 0.3);
    }, ref);

    return () => ctx.revert();
  }, []);

  return <div ref={ref}>{children}</div>;
}
