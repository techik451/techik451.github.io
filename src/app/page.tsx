import { CallToAction } from '@/components/CallToAction';
import { Connect } from '@/components/Connect';
import { Hero } from '@/components/Hero';
import { Impact } from '@/components/Impact';
import { Mission } from '@/components/Mission';
import { Navigation } from '@/components/Navigation';
import { Partners } from '@/components/Partners';
import { Programs } from '@/components/Programs';
import { Testimonials } from '@/components/Testimonials';
import { Timeline } from '@/components/Timeline';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-igf-cream">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Mission />
        <Programs />
        <Impact />
        <Timeline />
        <Testimonials />
        <Partners />
        <Connect />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
