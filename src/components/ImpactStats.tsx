const stats = [
  { label: 'Communities Reached', value: '42+', detail: 'Across West, East, and Southern Africa' },
  { label: 'Innovators Supported', value: '5.4k', detail: 'Students, fellows, and founders mentored' },
  { label: 'Scholarship Funding', value: '$2.1M', detail: 'In tuition relief and research grants' },
  { label: 'Ventures Launched', value: '87', detail: 'Startups addressing social challenges' }
];

export function ImpactStats() {
  return (
    <section id="impact" className="bg-igf-cream">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl bg-white p-10 shadow-xl shadow-igf-blue/10">
          <div className="mb-10 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-igf-blue/60">Our Impact</span>
              <h2 className="mt-2 text-3xl font-semibold text-igf-blue">Powering the next decade of African innovation</h2>
            </div>
            <p className="max-w-xl text-sm text-igf-blue/70">
              From early stage mentorship to global venture showcases, the Imoukhuede Global Foundation equips young leaders with
              the capital, community, and coaching needed to deliver lasting solutions.
            </p>
          </div>
          <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-igf-blue/10 p-6">
                <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/50">{stat.label}</dt>
                <dd className="mt-3 text-4xl font-semibold text-igf-blue">{stat.value}</dd>
                <p className="mt-2 text-sm text-igf-blue/60">{stat.detail}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
