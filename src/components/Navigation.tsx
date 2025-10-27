'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Mission', href: '#mission' },
  { name: 'Programs', href: '#programs' },
  { name: 'Impact', href: '#impact' },
  { name: 'Story', href: '#story' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Partners', href: '#partners' }
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-white/20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="#" className="flex items-center gap-3">
          <span className="h-10 w-10 rounded-full bg-igf-blue text-white grid place-items-center font-semibold">
            IF
          </span>
          <span className="text-lg font-semibold tracking-wide text-igf-blue">
            Igiehon Foundation
          </span>
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-igf-blue md:flex">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="hover:text-igf-gold">
              {item.name}
            </a>
          ))}
          <Link
            href="#connect"
            className="rounded-full bg-igf-blue px-5 py-2 text-white shadow-lg shadow-igf-blue/20 hover:bg-igf-slate"
          >
            Connect
          </Link>
        </nav>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-md border border-igf-blue/20 p-2 text-igf-blue md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-igf-blue/10 bg-white md:hidden">
          <nav className="flex flex-col gap-3 px-4 py-4 text-sm text-igf-blue">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="py-2" onClick={() => setOpen(false)}>
                {item.name}
              </a>
            ))}
            <Link
              href="#connect"
              className="rounded-full bg-igf-blue px-5 py-2 text-center text-white shadow-lg shadow-igf-blue/20"
              onClick={() => setOpen(false)}
            >
              Connect
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
