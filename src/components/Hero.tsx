import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-igf-blue via-igf-slate to-igf-blue text-igf-cream">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <Image
          src="/images/IMT2024Banner.webp"
          alt="Fellows collaborating"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-24 lg:flex-row lg:items-center lg:py-32">
        <div className="max-w-xl space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-igf-cream/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]">
            Africa Future Leaders
          </span>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            We invest in bold ideas that unlock the potential of Africa&apos;s young innovators.
          </h1>
          <p className="text-lg text-igf-cream/80">
            The Imoukhuede Global Foundation convenes partners across technology, healthcare, and education to help students design
            solutions that scale impact across the continent.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#programs"
              className="rounded-full bg-igf-gold px-6 py-3 text-center font-semibold text-igf-blue shadow-lg shadow-igf-gold/40 transition hover:-translate-y-0.5 hover:bg-yellow-400"
            >
              Explore Programs
            </Link>
            <Link
              href="#newsletter"
              className="rounded-full border border-igf-cream/40 px-6 py-3 text-center font-semibold text-igf-cream transition hover:bg-igf-cream/10"
            >
              Partner with Us
            </Link>
          </div>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-4">
          <Image
            src="/images/IMT2024c.jpg"
            alt="Students celebrating"
            width={420}
            height={520}
            className="h-full w-full rounded-3xl border border-igf-cream/20 object-cover shadow-xl"
          />
          <Image
            src="/images/winnersawsrd2-904x806.webp"
            alt="Award celebration"
            width={420}
            height={520}
            className="h-full w-full rounded-3xl border border-igf-cream/20 object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
