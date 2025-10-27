'use client';

import { SectionHeader } from './SectionHeader';
import { useContent } from '@/context/ContentContext';

export function Timeline() {
  const { content } = useContent();
  const timeline = content.timeline;

  return (
    <section id="story" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader title={timeline.title} subtitle={timeline.description} eyebrow="Our story" />
        <div className="relative border-s-2 border-dashed border-igf-blue/20 pl-8">
          {timeline.items.map((item, index) => (
            <div key={item.year} className="relative mb-10 last:mb-0">
              <span className="absolute -left-[42px] top-1 h-5 w-5 rounded-full border-2 border-white bg-igf-gold shadow-lg shadow-igf-gold/40" />
              <div className="rounded-3xl border border-igf-blue/10 bg-igf-cream/70 p-6 shadow-lg shadow-igf-blue/5">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-igf-blue/70">{item.year}</p>
                <h3 className="mt-2 text-xl font-semibold text-igf-blue">{item.title}</h3>
                <p className="mt-3 text-sm text-igf-slate/80">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
