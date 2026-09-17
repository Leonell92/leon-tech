export interface ClientValue {
  title: string;
  description: string;
}

export const clientValues: ClientValue[] = [
  {
    title: "Clear communication",
    description: "You know what's happening, what's next and what we need from you.",
  },
  {
    title: "Software that fits",
    description: "We build around your processes instead of forcing your business into a generic workflow.",
  },
  {
    title: "Useful software",
    description: "We focus on building systems people can actually use.",
  },
  {
    title: "Straight answers",
    description: "If custom software isn't the right solution, we'll tell you.",
  },
  {
    title: "Support after launch",
    description: "We remain available when the system needs maintenance, improvements or troubleshooting.",
  },
];

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  organization: string;
  industry: string;
}

// Strictly no unverified fictional quotations per the critical credibility rule
export const testimonials: Testimonial[] = [];
