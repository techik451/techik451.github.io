import Image from 'next/image';
import Link from 'next/link';
import { fallbackEvents, type Event } from '@/lib/content';

export function EventsSpotlight({ events = fallbackEvents }: { events?: Event[] }) {
  return (
    <section id="events" className="bg-igf-cream">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/60">Events</span>
            <h2 className="mt-2 text-3xl font-semibold text-igf-blue">Join the next gathering</h2>
          </div>
          <p className="max-w-xl text-sm text-igf-blue/70">
            From innovation summits to community build days, experience the energy and collaboration powering the foundation.
          </p>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {events.map((event) => (
            <article key={event.id} className="overflow-hidden rounded-3xl border border-igf-blue/10 bg-white shadow">
              <div className="relative h-64">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="space-y-4 p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/50">{event.date}</div>
                <h3 className="text-2xl font-semibold text-igf-blue">{event.title}</h3>
                <p className="text-sm text-igf-blue/70">{event.description}</p>
                <div className="flex items-center justify-between text-sm text-igf-blue/60">
                  <span>{event.location}</span>
                  {event.cta ? (
                    <Link href="#newsletter" className="font-semibold text-igf-blue hover:text-igf-gold">
                      {event.cta} →
                    </Link>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
