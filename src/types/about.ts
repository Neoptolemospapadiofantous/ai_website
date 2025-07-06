export interface CompanyMetrics {
  metric: string;
  label: string;
  // Add these missing properties:
  yearsInBusiness?: number;
  clientsServed?: number;
  averageROI?: number;
  successRate?: number;
}

export interface TeamMember {
  id: number; // Change from string to number
  name: string;
  role: string;
  bio: string;
  image: string;
  expertise?: string[];
  // Add missing properties:
  initials?: string;
  credentials?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  linkedin?: string;
  twitter?: string;
}
export interface CoreValue {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ExpertiseArea {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  icon: string;
}

export interface Differentiator {
  id: number;
  title: string;
  description: string;
  icon: string;
  metrics?: CompanyMetrics[];
}

export interface CaseStudy {
  id: number;
  company?: string;
  industry: string;
  title: string;
  description: string;
  challenge?: string;
  solution?: string;
  icon?: string;
  image?: string;
  technologies?: string[];
  results: CompanyMetrics[];
  testimonial?: {
    quote: string;
    author: string;
  };
}

export interface Testimonial {
  id: number;
  name?: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
  rating?: number;
}

export interface AboutUsData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    headline?: string; // Add this
    tagline?: string; // Add this
    metrics: CompanyMetrics[];
  };
  mission: string | { statement: string }; // Allow both types
  vision: string | { statement: string }; // Allow both types
  story?: { // Add story property
    title: string;
    content: string[];
  };
  values: CoreValue[];
  team: TeamMember[];
  expertise: ExpertiseArea[];
  differentiators: Differentiator[];
  caseStudies: CaseStudy[];
  testimonials: Testimonial[];
}
