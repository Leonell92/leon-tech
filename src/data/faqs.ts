export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    question: "What does Bridgeway Technologies do?",
    answer:
      "We design, build and support software, automation, analytics and technology systems for businesses and organizations.",
    category: "Services",
  },
  {
    question: "Where are you based?",
    answer:
      "We're based in Nigeria and work with clients across Nigeria and remotely.",
    category: "Services",
  },
  {
    question: "How is custom software priced?",
    answer:
      "Pricing depends on the scope, complexity, integrations, users and infrastructure involved. We define the requirements before providing a project quote.",
    category: "Pricing",
  },
  {
    question: "How long does a project take?",
    answer:
      "A focused project may take several weeks. Larger systems can take several months. We'll give you a realistic estimate once we understand the requirements.",
    category: "Process",
  },
  {
    question: "Can you work with our existing software?",
    answer:
      "Yes. We can integrate with, extend, refactor or replace existing systems depending on what makes the most sense.",
    category: "Services",
  },
  {
    question: "Can you work with our internal IT team?",
    answer:
      "Yes. We can work alongside an existing technical team or take responsibility for a complete project.",
    category: "Services",
  },
  {
    question: "Who owns the software?",
    answer:
      "Ownership and intellectual property are defined in the project agreement before development begins.",
    category: "Process",
  },
  {
    question: "What happens after launch?",
    answer:
      "We can provide maintenance, troubleshooting, updates, improvements and ongoing technical support.",
    category: "Support",
  },
  {
    question: "Do you work internationally?",
    answer:
      "Yes. We are based in Nigeria and can work remotely with organizations outside Nigeria.",
    category: "Services",
  },
];

export const solutions = [
  {
    title: "Too much manual work?",
    description:
      "We automate repetitive processes so your team spends less time copying, checking, compiling and chasing.",
    icon: "zap",
    homepageCardLabel: "WORKFLOW AUTOMATION",
    homepageCardCopy:
      "Automate repetitive work such as data entry, reporting, notifications, approvals and document generation.",
  },
  {
    title: "Your systems don't talk to each other?",
    description:
      "We connect applications and data sources so information moves where it needs to go.",
    icon: "git-merge",
    homepageCardLabel: "SYSTEM INTEGRATION",
    homepageCardCopy:
      "Connect disconnected applications so information moves where it needs to go without manual intervention.",
  },
  {
    title: "Everything lives in spreadsheets?",
    description:
      "We turn spreadsheet-heavy processes into structured systems your team can actually manage.",
    icon: "layout-dashboard",
    homepageCardLabel: "INTERNAL BUSINESS SYSTEMS",
    homepageCardCopy:
      "Replace scattered spreadsheets and disconnected tools with software built around your team's actual workflows.",
  },
  {
    title: "Customers keep asking for updates?",
    description:
      "We build portals and self-service workflows that give customers access to the information they need.",
    icon: "users",
    homepageCardLabel: "CLIENT & CUSTOMER PORTALS",
    homepageCardCopy:
      "Give customers secure access to documents, services, updates and communication without relying on constant calls and emails.",
  },
  {
    title: "Management can't see what's happening?",
    description:
      "We turn operational data into dashboards and reporting that make important information easier to understand.",
    icon: "bar-chart-2",
    homepageCardLabel: "REPORTING & ANALYTICS",
    homepageCardCopy:
      "Turn operational data into useful information through dashboards, automated reports and decision-ready analytics.",
  },
  {
    title: "Documents are eating up staff time?",
    description:
      "We automate document processing, extraction and classification where it makes sense.",
    icon: "file-text",
    homepageCardLabel: "DOCUMENT PROCESSING",
    homepageCardCopy:
      "Automate document processing, extraction and classification where it makes sense.",
  },
];
