export interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  workMode: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export const jobs: Job[] = [];

export const whyWorkWithUs = [
  {
    title: "Do useful work",
    description: "Build systems that solve real operational problems.",
  },
  {
    title: "Keep learning",
    description: "Work with people who care about quality and continuous improvement.",
  },
  {
    title: "Communicate clearly",
    description: "Good engineering includes explaining decisions, documenting work and keeping people informed.",
  },
  {
    title: "Work with focus",
    description: "We value thoughtful work, reasonable autonomy and focused collaboration.",
  },
];
