import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { ContentProvider } from '@/context/ContentContext';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta'
});

export const metadata: Metadata = {
  title: 'Igiehon Foundation',
  description:
    'Empowering communities through education, entrepreneurship, and healthcare initiatives across Africa.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body>
        <ContentProvider>{children}</ContentProvider>
      </body>
    </html>
  );
}
