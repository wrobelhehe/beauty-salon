import { Button } from "../components/ui/Button";

export function Footer() {
  return (
    <footer id="contact" className="section-shell pb-16 sm:pb-20">
      <div className="glass-panel gradient-border flex flex-col gap-6 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-rose/60">Visit</p>
          <h4 className="text-2xl font-serif text-rose">Serene Atelier, 19 Rue des Fleurs, Paris</h4>
          <p className="text-rose/70">By appointment only. Open Tue–Sat.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button label="Reserve" />
          <Button label="Call concierge" variant="ghost" href="tel:+33123456789" />
        </div>
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-between text-sm text-rose/60">
        <p>© 2024 Serene Atelier — Crafted with tactile calm.</p>
        <div className="flex gap-4">
          <a href="#top" className="hover:text-gold">Top</a>
          <a href="https://www.instagram.com" className="hover:text-gold">Instagram</a>
          <a href="https://www.behance.net" className="hover:text-gold">Behance</a>
        </div>
      </div>
    </footer>
  );
}
