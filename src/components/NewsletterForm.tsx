'use client';

import { FormEvent, useState } from 'react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) return;

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  return (
    <section id="newsletter" className="bg-igf-blue text-igf-cream">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl bg-igf-slate/60 p-10 shadow-2xl shadow-igf-blue/40">
          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-cream/60">Stay connected</span>
            <h2 className="text-3xl font-semibold">Receive invitations, stories, and funding alerts</h2>
            <p className="max-w-2xl text-sm text-igf-cream/70">
              Subscribe to our monthly briefing featuring new program launches, fellow spotlights, and partnership opportunities.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setStatus('idle');
                }}
                placeholder="you@example.com"
                className="flex-1 rounded-full border border-igf-cream/30 bg-white/10 px-6 py-3 text-sm text-igf-cream placeholder:text-igf-cream/40 focus:border-igf-gold focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-igf-gold px-6 py-3 text-sm font-semibold text-igf-blue transition hover:-translate-y-0.5 hover:bg-yellow-400"
              >
                {status === 'loading' ? 'Submitting…' : status === 'success' ? 'Added!' : 'Join the list'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
