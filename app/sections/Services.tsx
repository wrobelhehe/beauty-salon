import { services } from "../lib/data";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Reveal } from "../components/animations/Reveal";

export function Services() {
  return (
    <section id="services" className="section-shell py-16 sm:py-24">
      <SectionHeader
        eyebrow="Ritual Suite"
        title="Tailored treatments with couture-grade care."
        description="Sensory rituals layered with science-driven efficacy. Each experience is timed to your breath, guided by slow luxury and precise technique."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.08}>
            <article className="glass-panel gradient-border h-full p-6 sm:p-8">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-rose/60">
                <span>{service.duration}</span>
                <span className="text-gold">{service.price}</span>
              </div>
              <h3 className="mt-4 text-xl font-serif text-rose">{service.title}</h3>
              <p className="mt-3 text-rose/75">{service.description}</p>
              <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" aria-hidden />
              <p className="mt-4 text-sm text-rose/70">Includes aromatic grounding, temperature-play towels, and tailored finishing veil.</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
