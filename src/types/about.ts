export interface CaseStudy {
  id: number;
  company: string;
  industry: string;
  title: string;
  description: string;
  icon: string;
  results: {
    metric: string;
    label: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
  };
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
}
