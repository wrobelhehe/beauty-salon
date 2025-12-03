import { Reveal } from "../components/animations/Reveal";
import { Button } from "../components/ui/Button";

const tiers = [
  {
    name: "Prelude",
    price: "$180",
    includes: ["60-minute signature treatment", "Complimentary tea ceremony", "Sculpted massage finale"],
    accent: "Included cushion mask upgrade"
  },
  {
    name: "Symphony",
    price: "$320",
    includes: ["90-minute ritual", "LED phototherapy glow", "Gold-infused finishing veil"],
    accent: "Priority lounge access"
  },
  {
    name: "Nocturne",
    price: "$480",
    includes: ["120-minute immersive suite", "Private suite with sound bath", "Personalized skincare curation"],
    accent: "Chilled champagne departure"
  }
];

export function Pricing() {
  return (
    <section className="section-shell py-16 sm:py-24">
      <div className="glass-panel gradient-border p-8 sm:p-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-rose/60">Investment</p>
            <h3 className="text-3xl font-serif text-rose sm:text-4xl">Choose your cadence.</h3>
            <p className="max-w-2xl text-rose/75">Modular pricing designed for repeat rituals and curated self-care journeys.</p>
          </div>
          <Button label="Curate your plan" href="#contact" />
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {tiers.map((tier, index) => (
            <Reveal key={tier.name} delay={index * 0.08}>
              <article className="rounded-3xl border border-rose/15 bg-white/5 p-6 shadow-soft">
                <div className="flex items-center justify-between text-sm text-rose/70">
                  <span className="uppercase tracking-[0.2em]">{tier.name}</span>
                  <span className="text-2xl font-serif text-gold">{tier.price}</span>
                </div>
                <ul className="mt-4 space-y-2 text-rose/75">
                  {tier.includes.map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-[3px] w-6 rounded-full bg-gold" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-gold/90">{tier.accent}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
