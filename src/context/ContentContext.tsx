'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { firestore } from '@/lib/firebase';
import type { SiteContent } from '@/types/content';

const defaultContent: SiteContent = {
  hero: {
    title: 'Building resilient communities across Africa',
    subtitle:
      'The Igiehon Foundation invests in education, entrepreneurship, and healthcare so that every family can thrive.',
    ctaPrimary: 'Partner with us',
    ctaSecondary: 'Explore our impact',
    backgroundVideoUrl:
      'https://player.vimeo.com/progressive_redirect/playback/767568693/rendition/1080p/file.mp4?loc=external&signature=5ad2cdb6f007b1694cf347e1790f284127a87c00a084fb3795f2b4f232625e3d'
  },
  mission: {
    title: 'Our mission',
    description:
      'We unlock opportunities for young Africans by combining scholarships, innovation hubs, and community health programs that break cycles of poverty.',
    pillars: [
      {
        title: 'Education & Scholarships',
        description:
          'Full scholarships, mentorship, and digital literacy programs that prepare students for the future of work.',
        focusAreas: ['STEM scholarships', 'Leadership mentoring', 'Digital skills labs']
      },
      {
        title: 'Entrepreneurship',
        description:
          'Incubation, business acceleration, and micro-loans for founders that are creating jobs in underserved cities.',
        focusAreas: ['Startup accelerator', 'SME micro-finance', 'Women in business']
      },
      {
        title: 'Community Health',
        description:
          'Healthcare outreach, mobile clinics, and maternal support designed to strengthen families and save lives.',
        focusAreas: ['Mobile clinics', 'Maternal wellness', 'Nutrition education']
      }
    ]
  },
  programs: {
    title: 'Flagship initiatives',
    description:
      'From scholarship cohorts to scalable venture support, our programs are designed with local leaders and measurable results.',
    programs: [
      {
        title: 'Ignite Scholars',
        description:
          'A four-year scholarship and mentorship journey that equips brilliant students with world-class education and industry experience.',
        focusAreas: ['University tuition', 'Career mentorship', 'Leadership summits']
      },
      {
        title: 'Thrive Labs',
        description:
          'Innovation hubs that help founders test ideas, access capital, and launch inclusive products for their communities.',
        focusAreas: ['Startup studio', 'Access to capital', 'Product mentorship']
      },
      {
        title: 'Wellness on Wheels',
        description:
          'Mobile clinics that deliver preventative care, screenings, and health education to rural communities every month.',
        focusAreas: ['Community screenings', 'Telehealth', 'Nutrition coaching']
      }
    ]
  },
  impact: {
    title: 'Impact in numbers',
    description:
      'We measure success through empowered people, thriving ventures, and healthier families in every community we serve.',
    metrics: [
      { label: 'Scholarships awarded', value: '650+' },
      { label: 'Entrepreneurs supported', value: '220' },
      { label: 'Communities served', value: '38' },
      { label: 'Volunteer hours', value: '15k' }
    ]
  },
  timeline: {
    title: 'Our story',
    description:
      'A decade of investing in talent, innovation, and wellness across Africa.',
    items: [
      {
        year: '2014',
        title: 'Foundation launched',
        description:
          'Igiehon Foundation opens its first scholarship program with 20 pioneering students.'
      },
      {
        year: '2017',
        title: 'Entrepreneurship hub',
        description:
          'Thrive Labs launches in Benin City, powering startups with mentorship and seed funding.'
      },
      {
        year: '2020',
        title: 'Health expansion',
        description:
          'Wellness on Wheels delivers 12,000+ medical consultations across Edo and Delta states.'
      },
      {
        year: '2023',
        title: 'Regional scale',
        description:
          'New partnerships take our programs to Ghana and Rwanda, doubling community reach.'
      }
    ]
  },
  testimonials: {
    title: 'Voices from our community',
    description:
      'Students, founders, and partners share how the Igiehon Foundation is unlocking new possibilities.',
    testimonials: [
      {
        name: 'Osasu O.',
        role: 'Ignite Scholar, Class of 2022',
        quote:
          'The mentorship and network changed my life. I now run STEM camps for young girls in my hometown.'
      },
      {
        name: 'Ivie M.',
        role: 'Founder, Thrive Labs Cohort 5',
        quote:
          'Access to capital and coaching helped me scale my agritech startup to three new states.'
      },
      {
        name: 'Global Health Partners',
        role: 'Strategic partner',
        quote:
          'Together we designed mobile clinics that deliver critical care where hospitals are hours away.'
      }
    ]
  },
  partners: {
    title: 'Partners & collaborators',
    description:
      'We work with mission-driven institutions to unlock collective impact.',
    partners: [
      {
        name: 'Edo Innovates',
        description: 'Innovation partner for the Thrive Labs accelerator.',
        logoUrl: '/images/edo-innovates.svg'
      },
      {
        name: 'Global Health Access',
        description: 'Technical partner supporting our Wellness on Wheels clinics.',
        logoUrl: '/images/global-health-access.svg'
      },
      {
        name: 'Future Africa',
        description: 'Investment partner empowering high-growth founders.',
        logoUrl: '/images/future-africa.svg'
      }
    ]
  },
  callToAction: {
    title: 'Ready to build the future with us?',
    description:
      'Join our network of donors, mentors, and volunteers creating lasting change for African families.',
    primaryCta: 'Donate now',
    secondaryCta: 'Volunteer'
  }
};

const ContentContext = createContext<{
  content: SiteContent;
  loading: boolean;
  error: string | null;
  saveContent: (next: Partial<SiteContent>) => Promise<void>;
} | null>(null);

export const ContentProvider = ({ children }: { children: React.ReactNode }) => {
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      if (!firestore) {
        setLoading(false);
        return;
      }

      try {
        const contentRef = doc(firestore, 'cms', 'site');
        const snapshot = await getDoc(contentRef);

        if (snapshot.exists()) {
          const remoteContent = snapshot.data() as SiteContent;
          setContent({ ...defaultContent, ...remoteContent });
        } else {
          await setDoc(contentRef, defaultContent);
        }
      } catch (err) {
        console.error('Failed to load content', err);
        setError('Unable to load content from Firestore. Showing default content.');
      } finally {
        setLoading(false);
      }
    };

    void load();
  }, []);

  const saveContent = useCallback(
    async (nextContent: Partial<SiteContent>) => {
      if (!firestore) {
        throw new Error(
          'Firestore is not configured. Please add Firebase environment variables to enable content editing.'
        );
      }

      const contentRef = doc(firestore, 'cms', 'site');
      const updated = { ...content, ...nextContent } as SiteContent;
      await setDoc(contentRef, updated, { merge: true });
      setContent(updated);
    },
    [content]
  );

  const value = useMemo(
    () => ({
      content,
      loading,
      error,
      saveContent
    }),
    [content, error, loading, saveContent]
  );

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
};

export const useContent = () => {
  const ctx = useContext(ContentContext);
  if (!ctx) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return ctx;
};

export const defaultSiteContent = defaultContent;
