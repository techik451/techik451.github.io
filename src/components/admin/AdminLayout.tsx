import Link from 'next/link';

export function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-igf-cream">
      <header className="border-b border-igf-blue/10 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/60">Admin</p>
            <h1 className="text-xl font-semibold text-igf-blue">Imoukhuede Global Foundation Control Center</h1>
          </div>
          <Link href="/" className="text-sm font-semibold text-igf-blue hover:text-igf-gold">
            ← Back to site
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          {children}
        </div>
      </main>
    </div>
  );
}
