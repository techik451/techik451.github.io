'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '#programs', label: 'Programs' },
  { href: '#impact', label: 'Impact' },
  { href: '#stories', label: 'Stories' },
  { href: '#events', label: 'Events' },
  { href: '#newsletter', label: 'Newsletter' }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-igf-cream/95 backdrop-blur border-b border-igf-blue/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/igfLOGO.JPG" alt="Imoukhuede Global Foundation" width={56} height={56} className="rounded-full" />
          <span className="text-lg font-semibold tracking-tight">Imoukhuede Global Foundation</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-igf-blue/80 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-igf-blue">
              {link.label}
            </a>
          ))}
          <Link
            href="/admin"
            className="rounded-full bg-igf-blue px-5 py-2 text-igf-cream shadow-sm transition hover:-translate-y-0.5 hover:bg-igf-slate"
          >
            Admin Dashboard
          </Link>
        </nav>
        <button
          type="button"
          className="lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-8 bg-igf-blue" />
          <span className="mt-2 block h-0.5 w-8 bg-igf-blue" />
        </button>
      </div>
      {isOpen ? (
        <div className="border-t border-igf-blue/10 bg-igf-cream px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium text-igf-blue/80">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="transition hover:text-igf-blue">
                {link.label}
              </a>
            ))}
            <Link
              href="/admin"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-igf-blue px-5 py-2 text-center text-igf-cream"
            >
              Admin Dashboard
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
