'use client';

import { Fragment } from 'react';

const navSections = [
  { id: 'dashboard', label: 'Overview' },
  { id: 'programs', label: 'Programs' },
  { id: 'stories', label: 'Stories' },
  { id: 'events', label: 'Events' },
  { id: 'partners', label: 'Partners' }
];

export function AdminNav({ activeSection, onSelect }: { activeSection: string; onSelect: (section: string) => void }) {
  return (
    <aside className="h-fit rounded-3xl border border-igf-blue/10 bg-white p-6 shadow">
      <nav className="space-y-4">
        {navSections.map((section, index) => (
          <Fragment key={section.id}>
            <button
              type="button"
              onClick={() => onSelect(section.id)}
              className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                activeSection === section.id
                  ? 'bg-igf-blue text-igf-cream shadow-lg shadow-igf-blue/30'
                  : 'text-igf-blue hover:bg-igf-cream/60'
              }`}
            >
              {section.label}
            </button>
            {index === 0 ? <div className="border-b border-igf-blue/10" /> : null}
          </Fragment>
        ))}
      </nav>
    </aside>
  );
}
