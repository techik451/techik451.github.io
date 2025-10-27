import { NewsletterForm } from './NewsletterForm';

export function Footer() {
  return (
    <footer className="bg-igf-blue py-16 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[2fr,1fr] md:px-6">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-xl font-semibold">IF</span>
            <div>
              <p className="text-lg font-semibold">Igiehon Foundation</p>
              <p className="text-sm text-white/60">Investing in people, powering communities.</p>
            </div>
          </div>
          <p className="mt-6 max-w-xl text-sm text-white/70">
            We design sustainable solutions with local leaders to create measurable change across Africa.
          </p>
          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">Stay in the loop</p>
            <div className="mt-3 max-w-md">
              <NewsletterForm />
            </div>
          </div>
        </div>
        <div className="grid gap-3 text-sm text-white/70">
          <p className="font-semibold text-white">Contact</p>
          <p>hello@igiehonfoundation.org</p>
          <p>Benin City • Lagos • Kigali</p>
          <div className="mt-4 grid grid-cols-2 gap-3 text-xs uppercase tracking-[0.2em] text-white/50">
            <span>Privacy</span>
            <span>Terms</span>
            <span>LinkedIn</span>
            <span>Instagram</span>
          </div>
          <p className="mt-6 text-xs text-white/40">© {new Date().getFullYear()} Igiehon Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
