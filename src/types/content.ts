export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export type ImpactMetric = {
  label: string;
  value: string;
};

export type Program = {
  title: string;
  description: string;
  focusAreas: string[];
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export type Partner = {
  name: string;
  description: string;
  logoUrl: string;
};

export type HeroContent = {
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  backgroundVideoUrl: string;
};

export type MissionContent = {
  title: string;
  description: string;
  pillars: Program[];
};

export type ProgramsContent = {
  title: string;
  description: string;
  programs: Program[];
};

export type ImpactContent = {
  title: string;
  description: string;
  metrics: ImpactMetric[];
};

export type TimelineContent = {
  title: string;
  description: string;
  items: TimelineItem[];
};

export type TestimonialsContent = {
  title: string;
  description: string;
  testimonials: Testimonial[];
};

export type PartnersContent = {
  title: string;
  description: string;
  partners: Partner[];
};

export type CallToActionContent = {
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
};

export type SiteContent = {
  hero: HeroContent;
  mission: MissionContent;
  programs: ProgramsContent;
  impact: ImpactContent;
  timeline: TimelineContent;
  testimonials: TestimonialsContent;
  partners: PartnersContent;
  callToAction: CallToActionContent;
};
