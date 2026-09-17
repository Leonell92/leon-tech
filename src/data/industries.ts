export interface Industry {
  slug: string;
  title: string;
  description: string;
  icon: string;
  challenges: string[];
  solutions: string[];
  services: string[];
}

export const industries: Industry[] = [
  {
    slug: "financial-services",
    title: "Financial Services",
    description:
      "Systems for organizations where accuracy, permissions, auditability and reliable financial data matter.",
    icon: "trending-up",
    challenges: [
      "Manual loan or account management processes prone to error",
      "Regulatory reporting that requires significant manual preparation",
      "Customer portals and onboarding processes that aren't digital",
      "Disconnected systems across branches or departments",
      "Risk of data errors in financial calculations and records",
    ],
    solutions: [
      "Loan management and tracking systems",
      "Customer account management portals",
      "Automated financial reporting",
      "Payment processing integration",
      "Staff operations dashboards",
      "Audit trail and access control systems",
    ],
    services: ["software-development", "data-analytics", "api-integration", "business-automation"],
  },
  {
    slug: "logistics",
    title: "Logistics & Transportation",
    description:
      "Tools for managing fleets, dispatch, trips, customers and operational reporting.",
    icon: "truck",
    challenges: [
      "Fleet operations managed through phone calls and paper-based systems",
      "No real-time visibility into vehicle location or delivery status",
      "Manual dispatch and routing processes",
      "Billing and invoicing that's disconnected from operations",
      "Driver and vehicle records managed in spreadsheets",
    ],
    solutions: [
      "Fleet management and tracking platforms",
      "Dispatch and routing systems",
      "Delivery management and customer notification",
      "Driver and vehicle administration",
      "Operational reporting and analytics",
    ],
    services: ["software-development", "web-development", "mobile-development", "data-analytics"],
  },
  {
    slug: "education",
    title: "Education",
    description:
      "Systems that simplify administration, records, fees, reporting and communication.",
    icon: "graduation-cap",
    challenges: [
      "Student records and administration managed manually or in spreadsheets",
      "Fee collection and financial tracking without centralized software",
      "Communication between school and parents through informal channels",
      "Timetabling and attendance tracking done manually",
      "Staff administration without adequate HR systems",
    ],
    solutions: [
      "School or institution management systems",
      "Student portal and parent communication platform",
      "Fee management and financial tracking",
      "Timetabling and attendance systems",
      "E-learning or assessment platforms",
      "Administrative reporting and analytics",
    ],
    services: ["software-development", "web-development", "business-automation", "data-analytics"],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    description:
      "Technology for appointments, records, reporting, inventory and secure access to information.",
    icon: "heart-pulse",
    challenges: [
      "Patient records managed on paper or in disconnected systems",
      "Appointment booking and scheduling done manually",
      "Billing and payment tracking without integrated software",
      "Pharmacy inventory not linked to prescriptions or dispensing",
      "Reporting requirements met through manual data compilation",
    ],
    solutions: [
      "Patient management and electronic health records",
      "Appointment booking and scheduling system",
      "Billing and payments integration",
      "Pharmacy and inventory management",
      "Clinical reporting and analytics",
    ],
    services: ["software-development", "data-analytics", "api-integration", "it-support"],
  },
  {
    slug: "retail",
    title: "Retail & E-Commerce",
    description:
      "Systems that help businesses manage products, orders, inventory, branches and customer operations.",
    icon: "shopping-bag",
    challenges: [
      "Inventory not tracked in real time across locations",
      "Online and offline sales not reconciled effectively",
      "Order management through informal or manual processes",
      "Customer data not organized for retention or marketing",
      "No clear visibility into sales performance and trends",
    ],
    solutions: [
      "Point-of-sale and inventory management systems",
      "E-commerce platform development",
      "Order management and fulfillment tracking",
      "Customer relationship management",
      "Sales analytics and reporting dashboards",
    ],
    services: ["software-development", "web-development", "data-analytics", "api-integration"],
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    description:
      "Software for client management, documents, billing, workflows and internal operations.",
    icon: "briefcase",
    challenges: [
      "Client and matter management through email and spreadsheets",
      "Time tracking and billing managed manually",
      "Document management without a structured system",
      "No visibility into utilization, revenue or project status",
      "Proposal and engagement letter processes that are manual and slow",
    ],
    solutions: [
      "Practice management and CRM systems",
      "Client portal with document access",
      "Time tracking and billing integration",
      "Matter or project management platform",
      "Business development and pipeline tracking",
    ],
    services: ["software-development", "web-development", "data-analytics", "business-automation"],
  },
];
