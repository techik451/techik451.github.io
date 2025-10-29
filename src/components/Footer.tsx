import Link from 'next/link';

const footerLinks = [
  {
    title: 'Foundation',
    links: [
      { label: 'About', href: '#programs' },
      { label: 'Partners', href: '#partners' },
      { label: 'Careers', href: '#newsletter' }
    ]
  },
  {
    title: 'Programs',
    links: [
      { label: 'IMT Fellowship', href: '#programs' },
      { label: 'Global Health Access', href: '#programs' },
      { label: 'Future Africa Lab', href: '#programs' }
    ]
  },
  {
    title: 'Connect',
    links: [
      { label: 'Contact', href: 'mailto:hello@imoukhuedefoundation.org' },
      { label: 'Press', href: '#events' },
      { label: 'Support', href: '#newsletter' }
    ]
  }
];

export function Footer() {
  return (
    <footer className="bg-igf-blue text-igf-cream">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <p className="text-2xl font-semibold">Imoukhuede Global Foundation</p>
            <p className="text-sm text-igf-cream/70">
              Building an inclusive future where African innovators are resourced to solve the continent&apos;s greatest challenges.
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-igf-gold">Lagos • Abuja • London</p>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-igf-cream/80">{section.title}</h3>
              <ul className="space-y-2 text-sm text-igf-cream/70">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('mailto:') ? (
                      <a href={link.href} className="transition hover:text-igf-gold">
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="transition hover:text-igf-gold">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-igf-cream/10 pt-6 text-xs text-igf-cream/50">
          © {new Date().getFullYear()} Imoukhuede Global Foundation. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
