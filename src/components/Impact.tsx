'use client';

import { SectionHeader } from './SectionHeader';
import { useContent } from '@/context/ContentContext';

export function Impact() {
  const { content } = useContent();
  const impact = content.impact;

  return (
    <section id="impact" className="bg-gradient-to-br from-igf-blue via-igf-slate to-black py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader title={impact.title} subtitle={impact.description} eyebrow="Impact" />
        <div className="grid gap-6 md:grid-cols-4">
          {impact.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-xl shadow-black/20"
            >
              <p className="text-4xl font-semibold text-igf-gold">{metric.value}</p>
              <p className="mt-2 text-sm text-white/80">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
