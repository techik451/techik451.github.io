import type { ReactNode } from 'react';

export function SectionHeader({
  title,
  subtitle,
  eyebrow
}: {
  title: string;
  subtitle?: ReactNode;
  eyebrow?: string;
}) {
  return (
    <div className="mx-auto mb-12 flex max-w-3xl flex-col items-start gap-4 text-left">
      {eyebrow && (
        <span className="inline-flex rounded-full bg-igf-blue/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-igf-blue">
          {eyebrow}
        </span>
      )}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
