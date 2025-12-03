"use client";

import type React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  once?: boolean;
  className?: string;
}

export function Reveal({ children, delay = 0, y = 40, once = true, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          delay,
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: once ? "play none none none" : "play reverse play reverse"
          }
        }
      );
    });

    return () => ctx.revert();
  }, [delay, once, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
