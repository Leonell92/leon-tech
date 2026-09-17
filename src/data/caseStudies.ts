export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  serviceSlug: string;
  services: string[];
  summary: string;
  situation?: string;
  challenge: string;
  solution: string;
  implementation: string;
  outcome: string;
  technologies: string[];
  features: string[];
  timeline: string;
  image: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "operations-management-platform",
    title: "Operations Management Platform",
    client: "Confidential Client",
    industry: "Logistics & Transportation",
    serviceSlug: "software-development",
    services: ["Custom Software Development", "API Integration"],
    summary:
      "A centralized operations platform replacing a combination of spreadsheets, WhatsApp groups and phone calls used to manage daily fleet operations.",
    challenge:
      "A regional logistics company was coordinating daily operations — dispatch, vehicle tracking, driver management and client billing — through a combination of spreadsheets, WhatsApp messages and manual phone calls. This made it difficult to maintain oversight, produced frequent errors and meant that generating a complete picture of operations required hours of manual consolidation.",
    solution:
      "We designed and built a centralized operations management platform that brought dispatch, driver management, trip records and client billing into a single system. The platform provided role-based access for operations staff, dispatchers and management, with a real-time dashboard giving supervisors a clear view of the day's operations.",
    implementation:
      "The project began with a structured discovery phase, mapping current processes and identifying the key pain points. We designed the system architecture, built incrementally with regular client reviews, and migrated historical data during a parallel-run period before full cutover.",
    outcome:
      "The organization moved from fragmented, manual coordination to a structured system with full operational visibility. Data entry time reduced significantly, billing errors dropped, and management gained a reliable view of fleet utilization and performance.",
    technologies: ["Python", "Django", "React", "PostgreSQL", "Docker"],
    features: [
      "Real-time operations dashboard",
      "Driver and vehicle management",
      "Trip and dispatch tracking",
      "Client and billing management",
      "Automated reporting",
      "Role-based access control",
    ],
    timeline: "14 weeks",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop&auto=format",
  },
  {
    slug: "school-management-system",
    title: "School Management System",
    client: "Confidential Client",
    industry: "Education",
    serviceSlug: "software-development",
    services: ["Custom Software Development", "Business Automation"],
    summary:
      "A comprehensive school management platform covering student records, fee management, academic tracking and parent communication for a private secondary school.",
    challenge:
      "A private secondary school was managing student records in paper files, collecting fees through manual receipts, tracking academic performance in spreadsheets and communicating with parents through informal channels. Administrative staff were spending excessive time on routine data management and reconciliation.",
    solution:
      "We built a school management system covering the full student lifecycle — from admission through graduation — with integrated fee management, academic records, timetabling, attendance tracking and a parent communication portal. Administrative workflows were automated to reduce manual data handling.",
    implementation:
      "We worked closely with the school's administrative team to understand existing processes before designing the system. We built the platform in phases, beginning with the core student and fee management modules before expanding to academic tracking and the parent portal.",
    outcome:
      "Administrative staff reported significantly reduced time on routine tasks. Fee collection became trackable in real time, academic records became centralized and auditable, and parent communication improved through the structured portal.",
    technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Student registration and records",
      "Fee management and receipting",
      "Academic performance tracking",
      "Timetabling and attendance",
      "Parent portal and communication",
      "Staff management",
      "School reporting and analytics",
    ],
    timeline: "18 weeks",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=500&fit=crop&auto=format",
  },
  {
    slug: "automated-reporting-platform",
    title: "Automated Reporting Platform",
    client: "Confidential Client",
    industry: "Financial Services",
    serviceSlug: "business-automation",
    services: ["Business Process Automation", "Data Analytics"],
    summary:
      "Automated financial reporting system that replaced weekly manual report preparation with scheduled, accurate reports delivered directly to management.",
    challenge:
      "A microfinance organization was spending two to three staff days each week manually compiling loan portfolio reports, arrears summaries and management information from multiple spreadsheets. The process was slow, error-prone and meant that management was often working from data that was several days out of date.",
    solution:
      "We built an automated reporting system that connected to the organization's operational database, applied the required business logic and generated accurate, formatted reports on a scheduled basis. Reports were delivered automatically to the appropriate stakeholders.",
    implementation:
      "We mapped the existing manual reporting process in detail, identified the data sources and business rules involved, and designed automated pipelines that replicated the logic reliably. The system was validated against manually produced reports before replacing the manual process.",
    outcome:
      "Weekly report preparation time reduced from two to three days to automated delivery within minutes. Management gained daily access to accurate portfolio data rather than weekly, and the risk of manual calculation errors was eliminated.",
    technologies: ["Python", "pandas", "PostgreSQL", "FastAPI", "Celery"],
    features: [
      "Scheduled automated report generation",
      "Portfolio performance dashboards",
      "Arrears and delinquency tracking",
      "Stakeholder report delivery",
      "Data validation and reconciliation",
    ],
    timeline: "8 weeks",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&auto=format",
  },
  {
    slug: "internal-knowledge-assistant",
    title: "Internal Knowledge Assistant",
    client: "Confidential Client",
    industry: "Professional Services",
    serviceSlug: "ai-implementation",
    services: ["AI Implementation", "Custom Software Development"],
    summary:
      "An AI-powered internal knowledge assistant enabling staff to search and retrieve information from a large library of policy documents, procedures and guidelines.",
    challenge:
      "A professional services firm with an extensive library of internal policies, procedures and knowledge documents found that staff spent significant time searching for specific information — often ending up with outdated documents or escalating simple questions unnecessarily.",
    solution:
      "We built an internal knowledge assistant that allowed staff to ask questions in natural language and receive accurate answers with source references from the document library. The system was designed to surface the correct document section and indicate when information might be incomplete.",
    implementation:
      "We indexed the document library using a retrieval-augmented generation approach, built a secure internal interface for staff access, and implemented monitoring to track query patterns and quality over time.",
    outcome:
      "Staff were able to locate relevant policy information significantly faster. The volume of internal escalations for simple policy questions reduced, and staff reported higher confidence in the accuracy of information they were working from.",
    technologies: ["Python", "LLM APIs", "vector database", "RAG", "FastAPI", "React"],
    features: [
      "Natural language document search",
      "Source citation and references",
      "Role-based document access",
      "Query history and feedback",
      "Administrative document management",
    ],
    timeline: "10 weeks",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop&auto=format",
  },
  {
    slug: "hotel-management-system",
    title: "Hotel Management System",
    client: "Confidential Client",
    industry: "Hospitality",
    serviceSlug: "software-development",
    services: ["Custom Software Development", "API Integration"],
    summary:
      "A property management system for a boutique hotel covering reservations, front desk operations, housekeeping and revenue reporting.",
    challenge:
      "A boutique hotel was managing reservations through a combination of a manual ledger and email, with no integrated system connecting front desk, housekeeping and management. Overbooking occurred occasionally, and generating a revenue summary required significant manual effort.",
    solution:
      "We built a property management system covering the full guest lifecycle — from reservation through checkout — with integrated front desk operations, housekeeping task management and a revenue dashboard. The system also integrated with the hotel's online booking presence to prevent overbooking.",
    implementation:
      "The system was designed around the hotel's actual operational workflow, with extensive input from front desk staff during the design phase. We ran a parallel operation period to ensure staff were confident before full cutover.",
    outcome:
      "Overbooking incidents were eliminated. Front desk check-in and check-out became structured and faster. Management gained access to daily and monthly revenue reports without manual compilation.",
    technologies: ["React", "Node.js", "PostgreSQL", "REST APIs"],
    features: [
      "Reservation and availability management",
      "Front desk and check-in/out",
      "Room and housekeeping management",
      "Guest records and communication",
      "Revenue reporting and analytics",
      "Online booking integration",
    ],
    timeline: "16 weeks",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop&auto=format",
  },
  {
    slug: "data-analytics-dashboard",
    title: "Sales & Operations Analytics Dashboard",
    client: "Confidential Client",
    industry: "Retail",
    serviceSlug: "data-analytics",
    services: ["Data Analytics", "Business Intelligence"],
    summary:
      "A business intelligence dashboard consolidating sales, inventory and operations data from multiple sources into a single, accessible view for management.",
    challenge:
      "A retail business with multiple product lines and locations was producing management reports manually from a combination of point-of-sale exports, inventory spreadsheets and financial data. Report production was slow and the data was often inconsistent between reports.",
    solution:
      "We built a data analytics dashboard that consolidated data from the business's existing systems, applied consistent business rules and provided management with daily visibility into sales performance, inventory levels and operational metrics — without requiring manual report preparation.",
    implementation:
      "We mapped data sources and designed a data pipeline that normalized and consolidated data daily. We built a dashboard interface accessible to management from any device, with appropriate access controls for different user roles.",
    outcome:
      "Management gained daily access to consistent business data. Manual report preparation time was eliminated. The business was able to identify stock issues and sales trends more quickly and take action based on reliable, timely information.",
    technologies: ["Python", "PostgreSQL", "pandas", "React", "Recharts"],
    features: [
      "Multi-location sales performance",
      "Inventory and stock analytics",
      "Revenue trends and forecasting",
      "Product performance analysis",
      "Automated daily data refresh",
      "Exportable management reports",
    ],
    timeline: "10 weeks",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&auto=format",
  },
];
