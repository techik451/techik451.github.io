import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-plus-jakarta' });

export const metadata: Metadata = {
  title: 'Imoukhuede Global Foundation',
  description:
    'Imoukhuede Global Foundation empowers students and young innovators across Africa with mentorship, scholarships, and access to global opportunities.',
  openGraph: {
    title: 'Imoukhuede Global Foundation',
    description:
      'Discover initiatives, stories, and programs that expand access to education, technology, and healthcare for African youth.',
    url: 'https://imoukhuedefoundation.org',
    siteName: 'Imoukhuede Global Foundation',
    images: [{ url: '/images/IMT2024Banner.webp', width: 1200, height: 630, alt: 'Imoukhuede Global Foundation impact banner' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Imoukhuede Global Foundation',
    description:
      'A hub for African youth programs in technology, healthcare, and leadership powered by the Imoukhuede Global Foundation.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body>{children}</body>
    </html>
  );
}
