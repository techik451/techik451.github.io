'use client';

import { useMemo, useState } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { AdminNav } from '@/components/admin/AdminNav';
import { CollectionManager, type CollectionSchema } from '@/components/admin/CollectionManager';
import {
  fallbackEvents,
  fallbackPartners,
  fallbackPrograms,
  fallbackStories,
  type Event,
  type Partner,
  type Program,
  type Story
} from '@/lib/content';
import type { FirestoreRecord } from '@/hooks/useFirestoreCollection';

const programSchema: CollectionSchema<Program> = {
  title: 'Programs Library',
  description: 'Curate the fellowships, accelerators, and community initiatives displayed on the home page.',
  collectionPath: 'programs',
  defaultValues: fallbackPrograms[0],
  orderByField: 'name',
  fields: [
    { id: 'name', label: 'Program Title', type: 'text', placeholder: 'IMT Fellowship' },
    {
      id: 'description',
      label: 'Program Summary',
      type: 'textarea',
      placeholder: 'Describe the program impact and who it serves.'
    },
    { id: 'image', label: 'Featured Image', type: 'text', placeholder: '/images/IMT2024Banner.webp' },
    { id: 'theme', label: 'Program Theme', type: 'text', placeholder: 'technology' }
  ]
};

const storySchema: CollectionSchema<Story> = {
  title: 'Impact Stories',
  description: 'Showcase alumni quotes and achievements across continents.',
  collectionPath: 'stories',
  defaultValues: fallbackStories[0],
  orderByField: 'title',
  fields: [
    { id: 'title', label: 'Story Title', type: 'text' },
    {
      id: 'summary',
      label: 'Story Summary',
      type: 'textarea',
      placeholder: 'Explain the challenge and solution in 2-3 sentences.'
    },
    { id: 'quote', label: 'Quote', type: 'textarea', placeholder: 'A short quote to inspire visitors.' },
    { id: 'author', label: 'Author', type: 'text', placeholder: 'Jane D., IMT Scholar' },
    { id: 'image', label: 'Portrait Image', type: 'text', placeholder: '/images/students2-696x729.webp' }
  ]
};

const eventSchema: CollectionSchema<Event> = {
  title: 'Events & Deadlines',
  description: 'Manage upcoming events, demo days, and application timelines.',
  collectionPath: 'events',
  defaultValues: fallbackEvents[0],
  orderByField: 'date',
  fields: [
    { id: 'title', label: 'Event Name', type: 'text' },
    { id: 'date', label: 'Event Date', type: 'date' },
    { id: 'location', label: 'Location', type: 'text' },
    { id: 'description', label: 'Event Description', type: 'textarea' },
    { id: 'cta', label: 'Call to Action', type: 'text', placeholder: 'Reserve your seat' },
    { id: 'image', label: 'Hero Image', type: 'text', placeholder: '/images/IMT24_1.jpg' }
  ]
};

const partnerSchema: CollectionSchema<Partner> = {
  title: 'Partner Directory',
  description: 'Recognise the organisations funding and co-creating with the foundation.',
  collectionPath: 'partners',
  defaultValues: fallbackPartners[0],
  orderByField: 'name',
  fields: [
    { id: 'name', label: 'Partner Name', type: 'text' },
    { id: 'logo', label: 'Logo URL', type: 'text', placeholder: '/images/edo-innovates.svg' }
  ]
};

const fallbackProgramRecords: FirestoreRecord<Program>[] = fallbackPrograms.map((program) => ({ ...program, id: program.id }));
const fallbackStoryRecords: FirestoreRecord<Story>[] = fallbackStories.map((story) => ({ ...story, id: story.id }));
const fallbackEventRecords: FirestoreRecord<Event>[] = fallbackEvents.map((event) => ({ ...event, id: event.id }));
const fallbackPartnerRecords: FirestoreRecord<Partner>[] = fallbackPartners.map((partner) => ({ ...partner, id: partner.id }));

export default function AdminPage() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const activeModule = useMemo(() => {
    switch (activeSection) {
      case 'programs':
        return <CollectionManager schema={programSchema} fallbackItems={fallbackProgramRecords} />;
      case 'stories':
        return <CollectionManager schema={storySchema} fallbackItems={fallbackStoryRecords} />;
      case 'events':
        return <CollectionManager schema={eventSchema} fallbackItems={fallbackEventRecords} />;
      case 'partners':
        return <CollectionManager schema={partnerSchema} fallbackItems={fallbackPartnerRecords} />;
      default:
        return (
          <div className="space-y-6 rounded-3xl border border-igf-blue/10 bg-white p-8 shadow">
            <h2 className="text-3xl font-semibold text-igf-blue">Welcome back, team</h2>
            <p className="text-sm text-igf-blue/70">
              Use the navigation to update homepage programs, fellows&apos; stories, event schedules, and partner showcases. Content
              syncs instantly across the website once published.
            </p>
            <ul className="grid gap-4 md:grid-cols-2">
              <li className="rounded-3xl border border-igf-blue/10 bg-igf-cream/50 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/60">Programs</p>
                <p className="mt-2 text-sm text-igf-blue">
                  Curate fellowships and labs to keep our community informed about active opportunities.
                </p>
              </li>
              <li className="rounded-3xl border border-igf-blue/10 bg-igf-cream/50 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/60">Stories</p>
                <p className="mt-2 text-sm text-igf-blue">
                  Elevate alumni voices and inspire the next cohort with wins and lessons learned.
                </p>
              </li>
              <li className="rounded-3xl border border-igf-blue/10 bg-igf-cream/50 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/60">Events</p>
                <p className="mt-2 text-sm text-igf-blue">
                  Publish upcoming gatherings, application deadlines, and key milestones.
                </p>
              </li>
              <li className="rounded-3xl border border-igf-blue/10 bg-igf-cream/50 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/60">Partners</p>
                <p className="mt-2 text-sm text-igf-blue">
                  Highlight new coalitions and celebrate the organisations investing alongside us.
                </p>
              </li>
            </ul>
          </div>
        );
    }
  }, [activeSection]);

  return (
    <AdminLayout>
      <AdminNav activeSection={activeSection} onSelect={setActiveSection} />
      {activeModule}
    </AdminLayout>
  );
}
