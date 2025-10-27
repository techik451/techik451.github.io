'use client';

import { SectionHeader } from './SectionHeader';
import { useContent } from '@/context/ContentContext';

export function Mission() {
  const { content } = useContent();
  const mission = content.mission;

  return (
    <section id="mission" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader title={mission.title} subtitle={mission.description} eyebrow="What we believe" />
        <div className="grid gap-8 md:grid-cols-3">
          {mission.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-3xl border border-igf-blue/10 bg-igf-cream/60 p-6 shadow-lg shadow-igf-blue/5"
            >
              <h3 className="mb-4 text-xl font-semibold text-igf-blue">{pillar.title}</h3>
              <p className="mb-6 text-sm text-igf-slate/80">{pillar.description}</p>
              <ul className="flex flex-wrap gap-2 text-xs">
                {pillar.focusAreas.map((focus) => (
                  <li key={focus} className="rounded-full bg-white px-3 py-1 text-igf-blue shadow-sm">
                    {focus}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
