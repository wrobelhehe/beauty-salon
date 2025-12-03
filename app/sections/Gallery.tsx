import Image from "next/image";
import { galleryImages } from "../lib/data";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Reveal } from "../components/animations/Reveal";

export function Gallery() {
  return (
    <section className="section-shell py-16 sm:py-24">
      <SectionHeader
        eyebrow="Gallery"
        title="Scenes of soft light and tactile calm."
        description="Slow horizontal glide to echo the gentle parallax and cinematic pace."
      />
      <div className="mt-10 flex gap-6 overflow-x-auto pb-4">
        {galleryImages.map((image, index) => (
          <Reveal key={image.alt} delay={index * 0.06}>
            <div className="relative h-[320px] w-[260px] flex-shrink-0 overflow-hidden rounded-[22px] shadow-soft">
              <Image src={image.src} alt={image.alt} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-noir/20 via-transparent to-noir/40" aria-hidden />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
