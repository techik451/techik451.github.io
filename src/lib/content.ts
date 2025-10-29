export type Program = {
  id: string;
  name: string;
  description: string;
  image: string;
  theme: 'health' | 'technology' | 'education';
};

export type Story = {
  id: string;
  title: string;
  summary: string;
  image: string;
  quote: string;
  author: string;
};

export type Event = {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  cta?: string;
};

export type Partner = {
  id: string;
  name: string;
  logo: string;
};

export const fallbackPrograms: Program[] = [
  {
    id: 'imt',
    name: 'IMT Fellowship',
    description:
      'A year-long fellowship connecting students with mentors and resources to build technology solutions for community challenges.',
    image: '/images/IMT2024Banner.webp',
    theme: 'technology'
  },
  {
    id: 'health',
    name: 'Global Health Access',
    description:
      'Scholarships, telehealth labs, and community clinics that expand access to quality care across underserved regions.',
    image: '/images/global-health-access.svg',
    theme: 'health'
  },
  {
    id: 'innovation-lab',
    name: 'Future Africa Innovation Lab',
    description:
      'Immersive bootcamps and accelerators for product teams building solutions in energy, fintech, and education.',
    image: '/images/future-africa.svg',
    theme: 'education'
  }
];

export const fallbackStories: Story[] = [
  {
    id: 'gifty',
    title: 'Building a Support Network for Women in Tech',
    summary:
      'Gifty and her team launched a digital platform to support women transitioning into software engineering careers.',
    image: '/images/students2-696x729.webp',
    quote:
      'The fellowship surrounded us with mentors who believed in our ideas. We now support 2,400 women advancing in tech roles.',
    author: 'Gifty U., IMT Innovation Scholar'
  },
  {
    id: 'solomon',
    title: 'Reimagining Healthcare Access in Edo',
    summary:
      "Solomon and his team designed a hybrid telemedicine model that now serves 18 local communities every week.",
    image: '/images/student-753x734.webp',
    quote: 'We combined data and empathy to design the solution families told us they needed most.',
    author: 'Solomon A., Global Health Access Fellow'
  },
  {
    id: 'vanessa',
    title: 'From Idea to Venture Investment',
    summary:
      'Vanessa leveraged the Future Africa Innovation Lab to refine her edtech platform and secure pre-seed funding.',
    image: '/images/winnersawsrd2-904x806.webp',
    quote:
      'The lab gave us room to experiment, fail fast, and ultimately build something funders and schools trusted.',
    author: 'Vanessa O., Future Africa Innovator'
  }
];

export const fallbackEvents: Event[] = [
  {
    id: 'global-summit',
    title: 'Global Fellows Innovation Summit',
    date: 'July 26, 2024',
    location: 'Lagos & Virtual',
    description:
      'A hybrid convening of fellows, mentors, and investors sharing prototypes, research, and policy ideas for inclusive growth.',
    image: '/images/IMT24_1.jpg',
    cta: 'Reserve your seat'
  },
  {
    id: 'scholarship',
    title: '2025 Scholarship Applications',
    date: 'Opens September 1, 2024',
    location: 'Pan-African',
    description:
      'Undergraduate and graduate students can apply for tuition support, research funding, and mentorship resources.',
    image: '/images/IMT2024b.jpg',
    cta: 'Join the interest list'
  }
];

export const fallbackPartners: Partner[] = [
  { id: 'edo', name: 'Edo Innovates', logo: '/images/edo-innovates.svg' },
  { id: 'future-africa', name: 'Future Africa', logo: '/images/future-africa.svg' }
];
