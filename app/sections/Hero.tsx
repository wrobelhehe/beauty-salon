import Image from "next/image";
import dynamic from "next/dynamic";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";

const HeroMotion = dynamic(() => import("../components/animations/HeroMotion").then(mod => mod.HeroMotion), {
  ssr: false
});

export function Hero() {
  return (
    <section className="section-shell pt-16 pb-24 sm:pt-24 lg:pt-28" id="top">
      <HeroMotion>
        <div className="relative overflow-hidden rounded-[32px] bg-hero-gradient p-8 sm:p-12 shadow-soft">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-gold/10" aria-hidden />
          <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div className="space-y-6">
              <Badge>Serene Atelier</Badge>
              <div className="space-y-4">
                <h1 data-hero-text className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight text-rose">
                  Cinematic beauty rituals sculpted in light.
                </h1>
                <p data-hero-text className="max-w-2xl text-rose/80">
                  An editorial sanctuary blending couture skincare, slow luxury, and tactile calm — choreographed with GSAP motion for a signature arrival.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4" data-hero-text>
                <Button label="Book a ritual" />
                <Button label="Explore the house" variant="ghost" href="#services" />
              </div>
              <div className="flex gap-6 text-sm text-rose/70" data-hero-text>
                <span className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-gold" aria-hidden />Award-winning direction</span>
                <span className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-gold" aria-hidden />GSAP-crafted motion</span>
              </div>
            </div>

            <div className="relative h-[420px] sm:h-[520px] rounded-[28px] overflow-hidden" data-layer>
              <div className="absolute inset-0 bg-gradient-to-br from-noir/40 via-transparent to-noir/60" aria-hidden />
              <Image
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80"
                alt="Salon portrait"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </HeroMotion>
    </section>
  );
}
