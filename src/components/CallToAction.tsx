'use client';

import Link from 'next/link';
import { SectionHeader } from './SectionHeader';
import { useContent } from '@/context/ContentContext';

export function CallToAction() {
  const { content } = useContent();
  const cta = content.callToAction;

  return (
    <section className="bg-gradient-to-br from-igf-blue via-igf-slate to-black py-20 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="rounded-3xl border border-white/10 bg-white/10 p-10 backdrop-blur">
          <SectionHeader title={cta.title} subtitle={cta.description} eyebrow="Take action" />
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="https://paystack.com/pay/igiehonfoundation"
              className="inline-flex items-center justify-center rounded-full bg-igf-gold px-8 py-3 text-igf-blue shadow-xl shadow-igf-gold/40"
            >
              {cta.primaryCta}
            </Link>
            <Link
              href="#connect"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3 text-white"
            >
              {cta.secondaryCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
