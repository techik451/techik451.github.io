'use client';

import { useState } from 'react';
import Image from 'next/image';
import { fallbackStories, type Story } from '@/lib/content';

export function StoriesCarousel({ stories = fallbackStories }: { stories?: Story[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStory = stories[activeIndex];

  return (
    <section id="stories" className="bg-igf-blue text-igf-cream">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-igf-cream/70">Stories</span>
            <h2 className="text-3xl font-semibold">Transforming bold ideas into real-world impact</h2>
            <p className="text-sm text-igf-cream/70">
              Meet the fellows, scholars, and founders advancing solutions in climate action, education, and global health.
            </p>
            <div className="rounded-3xl bg-igf-cream/10 p-8 shadow-lg">
              <div className="flex items-center gap-6">
                <div className="relative h-24 w-24 overflow-hidden rounded-3xl border border-igf-cream/40">
                  <Image
                    src={activeStory.image}
                    alt={activeStory.title}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-igf-cream">{activeStory.title}</h3>
                  <p className="text-sm text-igf-cream/70">{activeStory.summary}</p>
                </div>
              </div>
              <blockquote className="mt-6 border-l-2 border-igf-gold pl-6 text-sm italic text-igf-cream/80">
                “{activeStory.quote}”
              </blockquote>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.3em] text-igf-gold">{activeStory.author}</p>
            </div>
            <div className="flex gap-3">
              {stories.map((story, index) => (
                <button
                  key={story.id}
                  type="button"
                  aria-label={`Show story ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 w-12 rounded-full transition ${
                    index === activeIndex ? 'bg-igf-gold' : 'bg-igf-cream/30 hover:bg-igf-cream/50'
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Image
              src="/images/IMT2024Banner.webp"
              alt="Students collaborating"
              width={720}
              height={520}
              className="h-full w-full rounded-3xl border border-igf-cream/20 object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
