interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="space-y-4 text-center">
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.3em] text-rose/60">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl sm:text-4xl font-serif text-rose drop-shadow-soft">{title}</h2>
      {description ? <p className="mx-auto max-w-2xl text-rose/80">{description}</p> : null}
    </div>
  );
}
