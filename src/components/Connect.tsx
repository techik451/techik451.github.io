'use client';

import { ContactForm } from './ContactForm';

export function Connect() {
  return (
    <section id="connect" className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:px-6">
        <div>
          <span className="inline-flex rounded-full bg-igf-blue/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-igf-blue">
            Connect
          </span>
          <h2 className="mt-6 text-3xl font-semibold text-igf-blue md:text-4xl">Let’s build something transformative together</h2>
          <p className="mt-4 text-sm text-igf-slate/80">
            Share your ideas, partnerships, or volunteer interests. Our team responds within two business days.
          </p>
          <div className="mt-8 grid gap-4 text-sm text-igf-slate/70">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-igf-blue/60">Email</p>
              <p>hello@igiehonfoundation.org</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-igf-blue/60">Locations</p>
              <p>Benin City • Lagos • Kigali</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-igf-blue/60">Social</p>
              <div className="flex gap-3 text-igf-blue">
                <a href="https://www.linkedin.com" className="underline">
                  LinkedIn
                </a>
                <a href="https://www.instagram.com" className="underline">
                  Instagram
                </a>
                <a href="https://www.youtube.com" className="underline">
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-igf-blue/10 bg-igf-cream/70 p-8 shadow-lg shadow-igf-blue/5">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
