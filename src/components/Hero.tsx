'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useContent } from '@/context/ContentContext';

export function Hero() {
  const { content } = useContent();
  const hero = content.hero;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-igf-blue via-igf-slate to-black text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-30"
        autoPlay
        loop
        muted
        playsInline
        src={hero.backgroundVideoUrl}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-igf-blue/90 via-igf-blue/60 to-igf-slate/80" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-24 md:px-6 md:py-32">
        <motion.span
          className="w-fit rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Empowering futures
        </motion.span>
        <motion.h1
          className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
        >
          {hero.title}
        </motion.h1>
        <motion.p
          className="max-w-2xl text-lg text-white/80 md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          {hero.subtitle}
        </motion.p>
        <motion.div
          className="flex flex-col gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <Link
            href="#connect"
            className="inline-flex items-center justify-center rounded-full bg-igf-gold px-8 py-3 text-igf-blue shadow-xl shadow-igf-gold/40"
          >
            {hero.ctaPrimary}
          </Link>
          <Link
            href="#impact"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 text-white"
          >
            {hero.ctaSecondary}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
