'use client';

import { SectionHeader } from './SectionHeader';
import { useContent } from '@/context/ContentContext';

export function Testimonials() {
  const { content } = useContent();
  const testimonials = content.testimonials;

  return (
    <section id="testimonials" className="bg-igf-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          title={testimonials.title}
          subtitle={testimonials.description}
          eyebrow="Community voices"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="rounded-3xl border border-igf-blue/10 bg-white p-6 shadow-xl shadow-igf-blue/10"
            >
              <p className="text-sm text-igf-slate/80">“{testimonial.quote}”</p>
              <footer className="mt-4">
                <p className="text-sm font-semibold text-igf-blue">{testimonial.name}</p>
                <p className="text-xs uppercase tracking-widest text-igf-blue/60">{testimonial.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
