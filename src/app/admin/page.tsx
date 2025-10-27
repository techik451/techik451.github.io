'use client';

import { useEffect, useState } from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { useContent } from '@/context/ContentContext';
import type { SiteContent } from '@/types/content';

const fieldClass =
  'w-full rounded-2xl border border-igf-blue/10 bg-white px-4 py-3 text-sm text-igf-blue focus:border-igf-blue focus:outline-none';

export default function AdminDashboard() {
  const { content, loading, error, saveContent } = useContent();
  const [localContent, setLocalContent] = useState<SiteContent>(content);
  const [status, setStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    setLocalContent(content);
  }, [content]);

  const handleHeroChange = (field: keyof SiteContent['hero'], value: string) => {
    setLocalContent((prev) => ({
      ...prev,
      hero: {
        ...prev.hero,
        [field]: value
      }
    }));
  };

  const handleMissionPillarChange = (
    index: number,
    field: 'title' | 'description' | 'focusAreas',
    value: string
  ) => {
    setLocalContent((prev) => {
      const nextPillars = [...prev.mission.pillars];
      const pillar = { ...nextPillars[index] };
      if (field === 'focusAreas') {
        pillar.focusAreas = value.split('\n').map((item) => item.trim()).filter(Boolean);
      } else {
        pillar[field] = value;
      }
      nextPillars[index] = pillar;
      return {
        ...prev,
        mission: {
          ...prev.mission,
          pillars: nextPillars
        }
      };
    });
  };

  const handleProgramChange = (
    index: number,
    field: 'title' | 'description' | 'focusAreas',
    value: string
  ) => {
    setLocalContent((prev) => {
      const programs = [...prev.programs.programs];
      const program = { ...programs[index] };
      if (field === 'focusAreas') {
        program.focusAreas = value.split('\n').map((item) => item.trim()).filter(Boolean);
      } else {
        program[field] = value;
      }
      programs[index] = program;
      return {
        ...prev,
        programs: {
          ...prev.programs,
          programs
        }
      };
    });
  };

  const handleMetricChange = (index: number, field: 'label' | 'value', value: string) => {
    setLocalContent((prev) => {
      const metrics = [...prev.impact.metrics];
      metrics[index] = { ...metrics[index], [field]: value };
      return {
        ...prev,
        impact: {
          ...prev.impact,
          metrics
        }
      };
    });
  };

  const handleTimelineChange = (index: number, field: 'year' | 'title' | 'description', value: string) => {
    setLocalContent((prev) => {
      const items = [...prev.timeline.items];
      items[index] = { ...items[index], [field]: value };
      return {
        ...prev,
        timeline: {
          ...prev.timeline,
          items
        }
      };
    });
  };

  const handleTestimonialChange = (
    index: number,
    field: 'name' | 'role' | 'quote',
    value: string
  ) => {
    setLocalContent((prev) => {
      const testimonials = [...prev.testimonials.testimonials];
      testimonials[index] = { ...testimonials[index], [field]: value };
      return {
        ...prev,
        testimonials: {
          ...prev.testimonials,
          testimonials
        }
      };
    });
  };

  const handlePartnerChange = (
    index: number,
    field: 'name' | 'description' | 'logoUrl',
    value: string
  ) => {
    setLocalContent((prev) => {
      const partners = [...prev.partners.partners];
      partners[index] = { ...partners[index], [field]: value };
      return {
        ...prev,
        partners: {
          ...prev.partners,
          partners
        }
      };
    });
  };

  const handleSave = async () => {
    setStatus('saving');
    setStatusMessage('Saving updates…');
    try {
      await saveContent(localContent);
      setStatus('success');
      setStatusMessage('Content saved to Firestore.');
    } catch (err) {
      console.error(err);
      setStatus('error');
      setStatusMessage(
        err instanceof Error ? err.message : 'Unable to save changes. Please check your Firebase configuration.'
      );
    }
  };

  return (
    <div className="min-h-screen bg-igf-cream">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <div className="mb-10 flex flex-col gap-2">
          <h1 className="text-3xl font-semibold text-igf-blue">Site content editor</h1>
          <p className="text-sm text-igf-slate/80">
            Update the website copy, hero media, program descriptions, and partner details. Press “Save changes” to publish to
            Firestore instantly.
          </p>
          <div className="flex items-center gap-2 rounded-2xl bg-white/60 p-4 text-sm text-igf-blue">
            <InformationCircleIcon className="h-5 w-5" />
            <span>
              {error
                ? error
                : 'Need Firebase? Create a Firestore database and add your NEXT_PUBLIC_FIREBASE_* keys in Vercel or a local .env file.'}
            </span>
          </div>
        </div>

        {loading ? (
          <p className="text-sm text-igf-slate/70">Loading content…</p>
        ) : (
          <div className="grid gap-10">
            <section className="rounded-3xl border border-igf-blue/10 bg-white p-6 shadow-lg shadow-igf-blue/5">
              <h2 className="text-xl font-semibold text-igf-blue">Hero</h2>
              <div className="mt-6 grid gap-4">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/60">Title</label>
                  <input
                    className={fieldClass}
                    value={localContent.hero.title}
                    onChange={(event) => handleHeroChange('title', event.target.value)}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/60">Subtitle</label>
                  <textarea
                    className={fieldClass}
                    value={localContent.hero.subtitle}
                    onChange={(event) => handleHeroChange('subtitle', event.target.value)}
                    rows={3}
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="md:col-span-1">
                    <label className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/60">Primary CTA</label>
                    <input
                      className={fieldClass}
                      value={localContent.hero.ctaPrimary}
                      onChange={(event) => handleHeroChange('ctaPrimary', event.target.value)}
                    />
                  </div>
                  <div className="md:col-span-1">
                    <label className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/60">Secondary CTA</label>
                    <input
                      className={fieldClass}
                      value={localContent.hero.ctaSecondary}
                      onChange={(event) => handleHeroChange('ctaSecondary', event.target.value)}
                    />
                  </div>
                  <div className="md:col-span-1">
                    <label className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/60">Background video URL</label>
                    <input
                      className={fieldClass}
                      value={localContent.hero.backgroundVideoUrl}
                      onChange={(event) => handleHeroChange('backgroundVideoUrl', event.target.value)}
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-igf-blue/10 bg-white p-6 shadow-lg shadow-igf-blue/5">
              <h2 className="text-xl font-semibold text-igf-blue">Mission</h2>
              <div className="mt-6 grid gap-4">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/60">Section title</label>
                  <input
                    className={fieldClass}
                    value={localContent.mission.title}
                    onChange={(event) =>
                      setLocalContent((prev) => ({
                        ...prev,
                        mission: { ...prev.mission, title: event.target.value }
                      }))
                    }
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/60">Description</label>
                  <textarea
                    className={fieldClass}
                    value={localContent.mission.description}
                    onChange={(event) =>
                      setLocalContent((prev) => ({
                        ...prev,
                        mission: { ...prev.mission, description: event.target.value }
                      }))
                    }
                    rows={3}
                  />
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                  {localContent.mission.pillars.map((pillar, index) => (
                    <div key={pillar.title} className="rounded-2xl border border-igf-blue/10 bg-igf-cream/40 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/60">Pillar {index + 1}</p>
                      <input
                        className={`${fieldClass} mt-2`}
                        value={pillar.title}
                        onChange={(event) => handleMissionPillarChange(index, 'title', event.target.value)}
                      />
                      <textarea
                        className={`${fieldClass} mt-3`}
                        value={pillar.description}
                        onChange={(event) => handleMissionPillarChange(index, 'description', event.target.value)}
                        rows={3}
                      />
                      <textarea
                        className={`${fieldClass} mt-3`}
                        value={pillar.focusAreas.join('\n')}
                        onChange={(event) => handleMissionPillarChange(index, 'focusAreas', event.target.value)}
                        rows={3}
                        placeholder={'Focus area per line'}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-igf-blue/10 bg-white p-6 shadow-lg shadow-igf-blue/5">
              <h2 className="text-xl font-semibold text-igf-blue">Programs</h2>
              <div className="mt-6 grid gap-4">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/60">Section title</label>
                  <input
                    className={fieldClass}
                    value={localContent.programs.title}
                    onChange={(event) =>
                      setLocalContent((prev) => ({
                        ...prev,
                        programs: { ...prev.programs, title: event.target.value }
                      }))
                    }
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/60">Description</label>
                  <textarea
                    className={fieldClass}
                    value={localContent.programs.description}
                    onChange={(event) =>
                      setLocalContent((prev) => ({
                        ...prev,
                        programs: { ...prev.programs, description: event.target.value }
                      }))
                    }
                    rows={3}
                  />
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                  {localContent.programs.programs.map((program, index) => (
                    <div key={program.title} className="rounded-2xl border border-igf-blue/10 bg-igf-cream/40 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/60">Program {index + 1}</p>
                      <input
                        className={`${fieldClass} mt-2`}
                        value={program.title}
                        onChange={(event) => handleProgramChange(index, 'title', event.target.value)}
                      />
                      <textarea
                        className={`${fieldClass} mt-3`}
                        value={program.description}
                        onChange={(event) => handleProgramChange(index, 'description', event.target.value)}
                        rows={3}
                      />
                      <textarea
                        className={`${fieldClass} mt-3`}
                        value={program.focusAreas.join('\n')}
                        onChange={(event) => handleProgramChange(index, 'focusAreas', event.target.value)}
                        rows={3}
                        placeholder={'Focus area per line'}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-igf-blue/10 bg-white p-6 shadow-lg shadow-igf-blue/5">
              <h2 className="text-xl font-semibold text-igf-blue">Impact metrics</h2>
              <div className="mt-6 grid gap-4">
                {localContent.impact.metrics.map((metric, index) => (
                  <div key={metric.label} className="grid gap-3 rounded-2xl border border-igf-blue/10 bg-igf-cream/40 p-4 md:grid-cols-2">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/60">Label</label>
                      <input
                        className={fieldClass}
                        value={metric.label}
                        onChange={(event) => handleMetricChange(index, 'label', event.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/60">Value</label>
                      <input
                        className={fieldClass}
                        value={metric.value}
                        onChange={(event) => handleMetricChange(index, 'value', event.target.value)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-igf-blue/10 bg-white p-6 shadow-lg shadow-igf-blue/5">
              <h2 className="text-xl font-semibold text-igf-blue">Timeline</h2>
              <div className="mt-6 grid gap-4">
                {localContent.timeline.items.map((item, index) => (
                  <div key={`${item.year}-${index}`} className="grid gap-3 rounded-2xl border border-igf-blue/10 bg-igf-cream/40 p-4">
                    <div className="grid gap-2 md:grid-cols-3">
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/60">Year</label>
                        <input
                          className={fieldClass}
                          value={item.year}
                          onChange={(event) => handleTimelineChange(index, 'year', event.target.value)}
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/60">Title</label>
                        <input
                          className={fieldClass}
                          value={item.title}
                          onChange={(event) => handleTimelineChange(index, 'title', event.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/60">Description</label>
                      <textarea
                        className={fieldClass}
                        value={item.description}
                        onChange={(event) => handleTimelineChange(index, 'description', event.target.value)}
                        rows={3}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-igf-blue/10 bg-white p-6 shadow-lg shadow-igf-blue/5">
              <h2 className="text-xl font-semibold text-igf-blue">Testimonials</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {localContent.testimonials.testimonials.map((testimonial, index) => (
                  <div key={testimonial.name} className="rounded-2xl border border-igf-blue/10 bg-igf-cream/40 p-4">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/60">Name</label>
                      <input
                        className={fieldClass}
                        value={testimonial.name}
                        onChange={(event) => handleTestimonialChange(index, 'name', event.target.value)}
                      />
                    </div>
                    <div className="mt-3">
                      <label className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/60">Role</label>
                      <input
                        className={fieldClass}
                        value={testimonial.role}
                        onChange={(event) => handleTestimonialChange(index, 'role', event.target.value)}
                      />
                    </div>
                    <div className="mt-3">
                      <label className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/60">Quote</label>
                      <textarea
                        className={fieldClass}
                        value={testimonial.quote}
                        onChange={(event) => handleTestimonialChange(index, 'quote', event.target.value)}
                        rows={3}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-igf-blue/10 bg-white p-6 shadow-lg shadow-igf-blue/5">
              <h2 className="text-xl font-semibold text-igf-blue">Partners</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {localContent.partners.partners.map((partner, index) => (
                  <div key={partner.name} className="rounded-2xl border border-igf-blue/10 bg-igf-cream/40 p-4">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/60">Name</label>
                      <input
                        className={fieldClass}
                        value={partner.name}
                        onChange={(event) => handlePartnerChange(index, 'name', event.target.value)}
                      />
                    </div>
                    <div className="mt-3">
                      <label className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/60">Description</label>
                      <textarea
                        className={fieldClass}
                        value={partner.description}
                        onChange={(event) => handlePartnerChange(index, 'description', event.target.value)}
                        rows={3}
                      />
                    </div>
                    <div className="mt-3">
                      <label className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/60">Logo URL</label>
                      <input
                        className={fieldClass}
                        value={partner.logoUrl}
                        onChange={(event) => handlePartnerChange(index, 'logoUrl', event.target.value)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-igf-blue/10 bg-white p-6 shadow-lg shadow-igf-blue/5">
              <h2 className="text-xl font-semibold text-igf-blue">Call to action</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/60">Headline</label>
                  <input
                    className={fieldClass}
                    value={localContent.callToAction.title}
                    onChange={(event) =>
                      setLocalContent((prev) => ({
                        ...prev,
                        callToAction: { ...prev.callToAction, title: event.target.value }
                      }))
                    }
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/60">Description</label>
                  <textarea
                    className={fieldClass}
                    value={localContent.callToAction.description}
                    onChange={(event) =>
                      setLocalContent((prev) => ({
                        ...prev,
                        callToAction: { ...prev.callToAction, description: event.target.value }
                      }))
                    }
                    rows={3}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/60">Primary CTA label</label>
                  <input
                    className={fieldClass}
                    value={localContent.callToAction.primaryCta}
                    onChange={(event) =>
                      setLocalContent((prev) => ({
                        ...prev,
                        callToAction: { ...prev.callToAction, primaryCta: event.target.value }
                      }))
                    }
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/60">Secondary CTA label</label>
                  <input
                    className={fieldClass}
                    value={localContent.callToAction.secondaryCta}
                    onChange={(event) =>
                      setLocalContent((prev) => ({
                        ...prev,
                        callToAction: { ...prev.callToAction, secondaryCta: event.target.value }
                      }))
                    }
                  />
                </div>
              </div>
            </section>
          </div>
        )}

        <div className="sticky bottom-6 mt-12 flex items-center justify-between rounded-full border border-igf-blue/10 bg-white/90 px-6 py-4 shadow-2xl shadow-igf-blue/10 backdrop-blur">
          <div className="text-sm text-igf-slate/80">
            {status === 'idle' && 'Changes are not yet saved.'}
            {status === 'saving' && statusMessage}
            {status === 'success' && statusMessage}
            {status === 'error' && <span className="text-red-500">{statusMessage}</span>}
          </div>
          <button
            type="button"
            onClick={handleSave}
            disabled={status === 'saving'}
            className="rounded-full bg-igf-blue px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-igf-blue/20 disabled:cursor-not-allowed disabled:bg-igf-blue/50"
          >
            {status === 'saving' ? 'Saving…' : 'Save changes'}
          </button>
        </div>
      </div>
    </div>
  );
}
