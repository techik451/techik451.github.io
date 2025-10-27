'use client';

import { SectionHeader } from './SectionHeader';
import { useContent } from '@/context/ContentContext';

export function Programs() {
  const { content } = useContent();
  const programs = content.programs;

  return (
    <section id="programs" className="bg-igf-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader title={programs.title} subtitle={programs.description} eyebrow="What we do" />
        <div className="grid gap-6 md:grid-cols-3">
          {programs.programs.map((program) => (
            <article
              key={program.title}
              className="group flex flex-col gap-4 rounded-3xl border border-igf-blue/10 bg-white/80 p-6 shadow-lg shadow-igf-blue/5 transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-igf-blue/10 text-igf-blue font-semibold">
                  {program.title
                    .split(' ')
                    .map((word) => word.charAt(0))
                    .join('')
                    .slice(0, 3)}
                </span>
                <h3 className="text-xl font-semibold text-igf-blue">{program.title}</h3>
              </div>
              <p className="text-sm text-igf-slate/80">{program.description}</p>
              <div className="mt-auto">
                <p className="text-xs font-semibold uppercase tracking-widest text-igf-blue/70">Focus areas</p>
                <ul className="mt-2 flex flex-wrap gap-2 text-xs">
                  {program.focusAreas.map((area) => (
                    <li key={area} className="rounded-full bg-igf-blue/10 px-3 py-1 text-igf-blue">
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
