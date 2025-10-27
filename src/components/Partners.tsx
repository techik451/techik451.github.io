'use client';

import Image from 'next/image';
import { SectionHeader } from './SectionHeader';
import { useContent } from '@/context/ContentContext';

export function Partners() {
  const { content } = useContent();
  const partners = content.partners;

  return (
    <section id="partners" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader title={partners.title} subtitle={partners.description} eyebrow="Partners" />
        <div className="grid gap-6 md:grid-cols-3">
          {partners.partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-start gap-4 rounded-3xl border border-igf-blue/10 bg-igf-cream/60 p-6 shadow-lg shadow-igf-blue/5"
            >
              <div className="relative h-14 w-40">
                <Image
                  src={partner.logoUrl}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  sizes="160px"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-igf-blue">{partner.name}</h3>
                <p className="text-sm text-igf-slate/80">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
