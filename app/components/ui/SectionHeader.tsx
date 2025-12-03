interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="space-y-5 text-center">
      {eyebrow ? (
        <p className="inline-flex items-center gap-3 rounded-full border border-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-gold/80 bg-white/5 backdrop-blur-sm">
          <span className="h-[1px] w-6 bg-gradient-to-r from-transparent via-gold/60 to-transparent" aria-hidden />
          {eyebrow}
          <span className="h-[1px] w-6 bg-gradient-to-r from-transparent via-gold/60 to-transparent" aria-hidden />
        </p>
      ) : null}
      <div className="space-y-3">
        <h2 className="text-3xl sm:text-4xl font-serif text-blush drop-shadow-soft">{title}</h2>
        <div className="flex justify-center">
          <span className="h-px w-28 bg-gradient-to-r from-transparent via-gold/70 to-transparent" aria-hidden />
        </div>
      </div>
      {description ? <p className="mx-auto max-w-2xl text-rose/80 sm:text-lg">{description}</p> : null}
    </div>
  );
}
