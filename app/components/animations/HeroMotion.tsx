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
      const shell = element.querySelector("[data-hero-shell]");
      const glows = element.querySelectorAll("[data-glow]");

      if (shell) {
        gsap.set(shell, { scale: 0.96, opacity: 0, filter: "blur(8px)" });
      }
      if (glows.length) {
        gsap.set(glows, { yPercent: -10, opacity: 0, scale: 0.92 });
      }
      gsap.set(layers, { yPercent: (index) => (index - 1) * 6, opacity: 0 });
      gsap.set(text, { y: 32, opacity: 0 });

      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (shell) {
        timeline.to(shell, { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.1, ease: "expo.out" }, 0);
      }

      if (glows.length) {
        timeline.to(glows, { opacity: 1, yPercent: 0, scale: 1, duration: 1.2, stagger: 0.12 }, 0.08);
      }

      timeline
        .to(layers, { opacity: 1, duration: 0.8, stagger: 0.1 }, 0.1)
        .to(layers, { yPercent: 0, duration: 1.4, stagger: 0.08 }, 0.1)
        .to(text, { opacity: 1, y: 0, duration: 1.1, stagger: 0.08 }, 0.32)
        .to(element, { scale: 1.015, duration: 1.2, ease: "power1.out" }, 0.28);
    }, ref);

    return () => ctx.revert();
  }, []);

  return <div ref={ref}>{children}</div>;
}
