import Image from "next/image";
import dynamic from "next/dynamic";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";

const HeroMotion = dynamic(() => import("../components/animations/HeroMotion").then(mod => mod.HeroMotion), {
  ssr: false
});

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-hero-gradient pt-28 pb-28 sm:pt-32" id="top">
      <div className="absolute inset-0 bg-gradient-to-b from-rose/10 via-transparent to-noir" aria-hidden />
      <HeroMotion>
        <div className="relative">
          <div className="absolute -left-24 top-4 h-80 w-80 rounded-full bg-rose/22 blur-3xl" data-glow aria-hidden />
          <div className="absolute right-2 top-10 h-64 w-64 rounded-full bg-gold/25 blur-3xl" data-glow aria-hidden />
          <div className="section-shell relative">
          <div
            data-hero-shell
            className="relative overflow-hidden rounded-[40px] border border-rose/10 bg-gradient-to-br from-white/5 via-white/0 to-noir/70 p-8 sm:p-12 shadow-soft backdrop-blur-xl"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,187,210,0.15),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(255,214,232,0.18),transparent_36%)]" aria-hidden />
            <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-6">
                <Badge>Serene Atelier</Badge>
                <div className="space-y-4">
                  <h1 data-hero-text className="text-4xl font-serif leading-tight text-blush sm:text-5xl lg:text-6xl">
                    Radiant rituals, orchestrated for women who glow.
                  </h1>
                  <p data-hero-text className="max-w-2xl text-rose/80">
                    Enter a cinematic sanctuary drenched in blush light — couture skincare, silk-soft ambiance, and motion-crafted arrival moments inspired by haute parfumeries.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-4" data-hero-text>
                  <Button label="Book a ritual" />
                  <Button label="Explore the house" variant="ghost" href="#services" />
                </div>
                <div className="flex gap-6 text-sm text-rose/70" data-hero-text>
                  <span className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-gold" aria-hidden />
                    Award-winning direction
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-gold" aria-hidden />
                    GSAP-crafted motion
                  </span>
                </div>
              </div>

              <div className="relative h-[440px] overflow-hidden rounded-[32px] border border-white/5" data-layer>
                <div className="absolute inset-0 bg-gradient-to-b from-rose/20 via-transparent to-noir/80" aria-hidden />
                <Image
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80"
                  alt="Salon portrait"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-x-8 bottom-8 rounded-full bg-white/10 px-5 py-3 text-center text-sm text-blush backdrop-blur-md" data-layer>
                  "We choreograph every entrance like a whispered runway."
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </HeroMotion>
    </section>
  );
}
