'use client';

import { ProgramGrid } from '@/components/ProgramGrid';
import { ImpactStats } from '@/components/ImpactStats';
import { FeatureShowcase } from '@/components/FeatureShowcase';
import { StoriesCarousel } from '@/components/StoriesCarousel';
import { EventsSpotlight } from '@/components/EventsSpotlight';
import { PartnerMarquee } from '@/components/PartnerMarquee';
import { NewsletterForm } from '@/components/NewsletterForm';
import { useFirestoreCollection } from '@/hooks/useFirestoreCollection';
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

export function HomeContent() {
  const {
    items: programItems,
    loading: programLoading
  } = useFirestoreCollection<Program>({ path: 'programs', defaultValues: fallbackPrograms[0], orderByField: 'name' });

  const {
    items: storyItems,
    loading: storyLoading
  } = useFirestoreCollection<Story>({ path: 'stories', defaultValues: fallbackStories[0], orderByField: 'title' });

  const {
    items: eventItems,
    loading: eventLoading
  } = useFirestoreCollection<Event>({ path: 'events', defaultValues: fallbackEvents[0], orderByField: 'date' });

  const {
    items: partnerItems,
    loading: partnerLoading
  } = useFirestoreCollection<Partner>({ path: 'partners', defaultValues: fallbackPartners[0], orderByField: 'name' });

  const programs = programItems.length ? programItems : fallbackPrograms;
  const stories = storyItems.length ? storyItems : fallbackStories;
  const events = eventItems.length ? eventItems : fallbackEvents;
  const partners = partnerItems.length ? partnerItems : fallbackPartners;

  return (
    <>
      <ProgramGrid programs={programs} />
      <ImpactStats />
      <FeatureShowcase />
      <StoriesCarousel stories={stories} />
      <EventsSpotlight events={events} />
      <PartnerMarquee partners={partners} />
      <NewsletterForm />
      {(programLoading || storyLoading || eventLoading || partnerLoading) && (
        <div className="bg-igf-cream py-10 text-center text-sm text-igf-blue/60">Loading live updates…</div>
      )}
    </>
  );
}
