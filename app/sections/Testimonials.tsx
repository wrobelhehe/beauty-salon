import { testimonials } from "../lib/data";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Reveal } from "../components/animations/Reveal";

export function Testimonials() {
  return (
    <section className="section-shell py-16 sm:py-24" id="testimonials">
      <SectionHeader
        eyebrow="Voices"
        title="Quiet praise from those who lingered longer."
        description="Testimonials glide with subtle float to mirror the weightlessness of each ritual."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <Reveal key={item.author} delay={index * 0.1} y={24}>
            <article className="glass-panel h-full p-6 sm:p-8">
              <p className="text-lg text-rose/90">“{item.quote}”</p>
              <div className="mt-6 flex items-center justify-between text-sm text-rose/70">
                <span className="font-semibold text-rose">{item.author}</span>
                <span>{item.role}</span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
