import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { HomeContent } from '@/components/HomeContent';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-igf-cream">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HomeContent />
      </main>
      <Footer />
    </div>
  );
}
