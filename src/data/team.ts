export interface TeamRole {
  id: string;
  role: string;
  focus: string;
  description: string;
}

export const teamRoles: TeamRole[] = [
  {
    id: "1",
    role: "Software Engineering & Architecture",
    focus: "Application Architecture & Backend Systems",
    description: "Designing structured relational databases, clean APIs, and maintainable application code.",
  },
  {
    id: "2",
    role: "Automation & Integration",
    focus: "Workflows & API Connections",
    description: "Building reliable background automation pipelines, webhook handlers, and database integrations.",
  },
  {
    id: "3",
    role: "Data & Analytics",
    focus: "Dashboards & Business Intelligence",
    description: "Structuring operational data, automating reports, and developing decision-ready dashboards.",
  },
  {
    id: "4",
    role: "Technical Operations & Support",
    focus: "Deployment, Reliability & Maintenance",
    description: "Production infrastructure configuration, monitoring, ongoing troubleshooting, and maintenance.",
  },
];

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}

// Strictly no unverified fictional staff profiles per critical credibility rule
export const team: TeamMember[] = [];
