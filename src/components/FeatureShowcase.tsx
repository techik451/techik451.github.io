const features = [
  {
    title: 'Mentorship & Leadership Labs',
    description:
      'Personalised coaching, leadership residencies, and design sprints delivered with executive mentors and partners from across the globe.',
    icon: '🎓'
  },
  {
    title: 'Funding Pathways',
    description:
      'Seed and growth-stage capital, research grants, and scholarships that empower teams to scale solutions in their communities.',
    icon: '💡'
  },
  {
    title: 'Global Exchange',
    description:
      'Cross-continent immersions, demo tours, and policy convenings showcasing African innovation to global stakeholders.',
    icon: '🌍'
  }
];

export function FeatureShowcase() {
  return (
    <section className="bg-gradient-to-br from-igf-cream via-white to-igf-cream">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-igf-blue/60">Why it matters</span>
          <h2 className="mt-3 text-3xl font-semibold text-igf-blue">A vibrant ecosystem designed around founders and fellows</h2>
          <p className="mt-4 text-sm text-igf-blue/70">
            We combine community, coaching, and capital so that students can launch solutions that change lives and inspire the
            next generation of innovators.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-3xl border border-igf-blue/10 bg-white p-8 shadow-sm">
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-igf-blue">{feature.title}</h3>
              <p className="mt-3 text-sm text-igf-blue/70">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
