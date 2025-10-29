import Image from 'next/image';
import { fallbackPartners, type Partner } from '@/lib/content';

export function PartnerMarquee({ partners = fallbackPartners }: { partners?: Partner[] }) {
  return (
    <section id="partners" className="bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl bg-igf-cream/60 p-10">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/50">Partners</span>
            <h2 className="mt-2 text-2xl font-semibold text-igf-blue">We co-create impact with leading organisations</h2>
          </div>
          <div className="mt-8 grid items-center justify-items-center gap-8 sm:grid-cols-2">
            {partners.map((partner) => (
              <div key={partner.id} className="flex h-24 w-full items-center justify-center rounded-2xl bg-white p-6 shadow">
                <Image src={partner.logo} alt={partner.name} width={180} height={64} className="h-auto w-40 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
