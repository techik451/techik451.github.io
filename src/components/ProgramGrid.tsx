import Image from 'next/image';
import { fallbackPrograms, type Program } from '@/lib/content';

export function ProgramGrid({ programs = fallbackPrograms }: { programs?: Program[] }) {
  return (
    <section id="programs" className="bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-igf-blue/60">Programs</span>
            <h2 className="mt-2 text-3xl font-semibold text-igf-blue">Catalysing brilliance at every stage of the journey</h2>
          </div>
          <p className="max-w-xl text-sm text-igf-blue/70">
            Discover fellowships, accelerators, and grant programs supporting scholars, researchers, founders, and community
            leaders.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {programs.map((program) => (
            <article
              key={program.id}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-igf-blue/10 bg-igf-cream/40 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-56">
                <Image
                  src={program.image}
                  alt={program.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <span className="inline-flex w-fit rounded-full bg-igf-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/70">
                  {program.theme}
                </span>
                <h3 className="text-xl font-semibold text-igf-blue">{program.name}</h3>
                <p className="text-sm text-igf-blue/70">{program.description}</p>
                <div className="mt-auto">
                  <button
                    type="button"
                    className="text-sm font-semibold text-igf-blue transition hover:text-igf-gold"
                  >
                    View curriculum →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
