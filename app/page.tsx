import { Footer } from "./sections/Footer";
import { Gallery } from "./sections/Gallery";
import { Hero } from "./sections/Hero";
import { Pricing } from "./sections/Pricing";
import { Services } from "./sections/Services";
import { Story } from "./sections/Story";
import { Testimonials } from "./sections/Testimonials";

export default function HomePage() {
  return (
    <main className="space-y-4 pb-12">
      <Hero />
      <Services />
      <Story />
      <Testimonials />
      <Pricing />
      <Gallery />
      <Footer />
    </main>
  );
}
