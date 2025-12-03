import Image from "next/image";
import { Reveal } from "../components/animations/Reveal";

export function Story() {
  return (
    <section className="section-shell py-16 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="space-y-4">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-rose/60">The House Ritual</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h3 className="text-3xl font-serif text-rose sm:text-4xl">A narrative in three soft movements.</h3>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-rose/75">
              Arrival begins with whispered light, followed by a guided breathing ceremony. Mid-journey, textures layer softly — glass, silk, warmth —
              while GSAP-driven cues orchestrate each reveal. Closing moments slow to a golden hush, inviting you back with luminous calm.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="grid gap-3 sm:grid-cols-3 text-sm text-rose/70">
              <div>
                <p className="text-gold uppercase tracking-[0.2em]">Scene I</p>
                <p>Grounded entrance, perfumed mist, gentle parallax.</p>
              </div>
              <div>
                <p className="text-gold uppercase tracking-[0.2em]">Scene II</p>
                <p>Signature ritual with floating notes and color morphs.</p>
              </div>
              <div>
                <p className="text-gold uppercase tracking-[0.2em]">Scene III</p>
                <p>Soft landing with micro-interactions and amber glow.</p>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <div className="relative h-[420px] sm:h-[520px] overflow-hidden rounded-[28px] shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
              alt="Editorial portrait"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir/60 via-transparent to-noir/20" aria-hidden />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
