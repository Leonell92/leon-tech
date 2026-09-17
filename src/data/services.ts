export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  overviewDescription: string;
  ctaText: string;
  icon: string;
  problems: string[];
  included: { title: string; description: string }[];
  useCases: string[];
  approach: string;
  technologies: string[];
  outcomes: string[];
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: "software-development",
    title: "Custom Software Development",
    shortTitle: "Software Development",
    tagline: "Software built around your business.",
    description:
      "When off-the-shelf software doesn't fit your processes, we design and build systems around your users, workflows and business rules.",
    overviewDescription:
      "Software built around your processes, users and business rules — from internal systems and management platforms to customer-facing applications.",
    ctaText: "Discuss Your Project",
    icon: "code",
    problems: [
      "Your existing software doesn't fit the way your team works.",
      "Your operation depends heavily on spreadsheets and manual processes.",
      "Different teams use disconnected tools.",
      "You need a system built around specific business rules.",
      "Existing software needs to be extended or rebuilt.",
    ],
    included: [
      { title: "Internal Business Systems", description: "Centralized systems designed around your team's day-to-day operations and workflows." },
      { title: "Management Platforms", description: "Role-based platforms for operations, staff coordination and performance tracking." },
      { title: "Customer Portals", description: "Secure portals for clients to access services, documents and status updates." },
      { title: "Workflow & Operations Tools", description: "Bespoke software targeting specific operational bottlenecks and procedures." },
      { title: "Dashboards & Reporting", description: "Real-time visibility into your business data and key operating metrics." },
      { title: "API-Driven Systems", description: "Extensible backends built with clean architecture and structured data models." },
    ],
    useCases: [
      "Internal business systems",
      "Management platforms",
      "Customer portals",
      "Operations platforms",
      "Workflow applications",
      "Dashboards",
      "Custom web applications",
      "API-driven systems",
    ],
    approach:
      "We start with the problem, define the requirements, design the system and build it in stages so you can review working software throughout the project.",
    technologies: ["Python", "Django", "FastAPI", "React", "Next.js", "PostgreSQL", "Docker", "REST APIs"],
    outcomes: [
      "A system built around how your organization actually works",
      "Less reliance on scattered spreadsheets and manual handoffs",
      "Clear visibility for leadership and staff",
      "Software you own and can maintain over time",
    ],
    faqs: [
      { question: "How long does custom software development take?", answer: "A focused project may take several weeks, while a larger platform can take several months. We'll provide a realistic timeline once we understand the requirements." },
      { question: "Will we own the software?", answer: "Yes. Ownership and intellectual property are defined clearly in the project agreement." },
      { question: "Can you work with our existing software?", answer: "Yes. We can integrate with, extend, refactor or replace existing systems depending on what makes the most sense." },
    ],
  },
  {
    slug: "business-automation",
    title: "Business Process Automation",
    shortTitle: "Business Automation",
    tagline: "Less repetitive work. Fewer manual errors.",
    description:
      "We identify repetitive processes and automate them — from data movement and reporting to notifications, approvals, document generation and reconciliation.",
    overviewDescription:
      "Remove repetitive manual work by automating data movement, reporting, notifications, approvals and other operational processes.",
    ctaText: "Automate a Process",
    icon: "zap",
    problems: [
      "Staff spend too much time on repetitive tasks.",
      "Information has to be copied between systems.",
      "Reports take hours to prepare.",
      "Notifications and approvals are handled manually.",
      "Administrative processes contain too many steps.",
    ],
    included: [
      { title: "Reporting Automation", description: "Automated report compilation and scheduled delivery from operational data." },
      { title: "Data Synchronization", description: "Keeping records consistent between databases and third-party tools automatically." },
      { title: "Approval & Notification Workflows", description: "Structured routing for reviews, approvals and instant updates." },
      { title: "Document & Invoice Generation", description: "Automating document creation, receipts and invoices from system events." },
      { title: "Reconciliation & Scheduled Tasks", description: "Reliable background jobs that verify figures and handle periodic routines." },
    ],
    useCases: [
      "Reporting",
      "Data synchronization",
      "Notifications",
      "Approval workflows",
      "Invoice generation",
      "Document processing",
      "Reconciliation",
      "Scheduled tasks",
    ],
    approach:
      "We first identify where time and errors are being lost. Then we design automation that is reliable, visible and understandable rather than a collection of scripts nobody wants to touch later.",
    technologies: ["Python", "FastAPI", "n8n", "PostgreSQL", "Celery", "Redis", "REST APIs", "Webhooks"],
    outcomes: [
      "Reduced time spent on routine data entry and admin tasks",
      "Fewer manual transcription and calculation errors",
      "Faster response and operational turnaround times",
      "Clear visibility and logs when automated processes run",
    ],
    faqs: [
      { question: "Can you automate processes across our existing tools?", answer: "Yes. We can connect your current databases, spreadsheets and SaaS tools without requiring you to replace them." },
      { question: "What happens when an automated task fails?", answer: "We build proper error handling, retry logic and notifications so issues are flagged immediately." },
    ],
  },
  {
    slug: "web-development",
    title: "Web Application Development",
    shortTitle: "Web Development",
    tagline: "Web applications designed to do useful work.",
    description:
      "We build websites, portals, dashboards and web applications that are fast, responsive and built around a clear business purpose.",
    overviewDescription:
      "Websites, portals, dashboards and web applications designed around clear business and user needs.",
    ctaText: "Build a Web Application",
    icon: "globe",
    problems: [
      "Your website no longer represents the quality of your business.",
      "Customers or staff need secure online access.",
      "You need a web application for a specific workflow.",
      "Your current website is slow or difficult to maintain.",
      "Your team needs to manage content without relying on developers.",
    ],
    included: [
      { title: "Corporate Websites", description: "Clear, fast-loading company websites built around your business goals." },
      { title: "Client & Staff Portals", description: "Secure environments for document sharing, account management and communication." },
      { title: "Dashboards & Business Apps", description: "Web-based software for managing operations, workflows and internal records." },
      { title: "Directories & Booking Tools", description: "Structured web systems for scheduling, catalogues and client self-service." },
      { title: "E-Commerce Platforms", description: "Online store management, payment processing and order handling." },
    ],
    useCases: [
      "Corporate websites",
      "Client portals",
      "Staff portals",
      "Dashboards",
      "Business applications",
      "Directories",
      "Booking systems",
      "E-commerce platforms",
    ],
    approach:
      "We design around the people using the application and the job they need it to do.",
    technologies: ["React", "Next.js", "TypeScript", "Python", "FastAPI", "PostgreSQL"],
    outcomes: [
      "A fast, responsive web application that serves a clear business purpose",
      "Secure online access for clients and internal teams",
      "Straightforward content management without developer dependency",
      "Clean, modern design that accurately reflects your business quality",
    ],
    faqs: [
      { question: "Can we update content without technical help?", answer: "Yes. We design content management workflows so your team can easily update information without needing a developer." },
      { question: "Are your web applications mobile-responsive?", answer: "Yes. All applications are built and tested to perform smoothly across desktop, tablet and mobile screen sizes." },
    ],
  },
  {
    slug: "mobile-development",
    title: "Mobile Applications",
    shortTitle: "Mobile Applications",
    tagline: "Mobile software for people who need to get things done.",
    description:
      "We build mobile and cross-platform applications for customers, staff and field teams, including applications designed for real-world connectivity and operating conditions.",
    overviewDescription:
      "Mobile and cross-platform applications for customers, staff and field teams, including workflows designed for real-world connectivity.",
    ctaText: "Discuss a Mobile Project",
    icon: "smartphone",
    problems: [
      "Customers need access to services on mobile.",
      "Field teams need to capture or access information away from the office.",
      "Staff need a mobile workflow.",
      "Existing mobile software needs improvement.",
      "You need one application across multiple platforms.",
    ],
    included: [
      { title: "Customer Applications", description: "Engaging, reliable mobile applications that provide direct access to your services." },
      { title: "Staff & Field Applications", description: "Purpose-built tools for team members operating in the field or away from desks." },
      { title: "Data Collection Tools", description: "Fast, accurate mobile data entry with support for variable connectivity." },
      { title: "Cross-Platform Development", description: "Unified iOS and Android applications built for consistent performance." },
    ],
    useCases: [
      "Customer apps",
      "Staff applications",
      "Field applications",
      "Service applications",
      "Data collection tools",
      "Cross-platform applications",
    ],
    approach:
      "We focus on the actual mobile workflow, usability, connectivity and reliability before choosing the implementation approach.",
    technologies: ["Flutter", "React Native", "TypeScript", "REST APIs", "SQLite"],
    outcomes: [
      "Reliable mobile access for customers and field staff",
      "Workflows engineered to handle intermittent connectivity gracefully",
      "Reduced paperwork and manual reporting from remote teams",
      "Consistent experience across iOS and Android devices",
    ],
    faqs: [
      { question: "Do you build for both iOS and Android?", answer: "Yes. We build cross-platform applications that operate natively on both iOS and Android from a shared codebase." },
      { question: "Can the app work offline?", answer: "Yes. For field and remote use cases, we design offline caching and data synchronization that syncs when connection returns." },
    ],
  },
  {
    slug: "data-analytics",
    title: "Data Analytics & Business Intelligence",
    shortTitle: "Data Analytics",
    tagline: "Turn your data into something people can use.",
    description:
      "We help organizations bring together data from spreadsheets, databases and operational systems and turn it into dashboards, reports and analysis that support better decisions.",
    overviewDescription:
      "Turn spreadsheets, databases and operational data into dashboards, reports and analysis that people can actually use.",
    ctaText: "Make Better Use of Your Data",
    icon: "bar-chart",
    problems: [
      "Important information is scattered across spreadsheets.",
      "Reports take too long to prepare.",
      "Management lacks a clear view of operations.",
      "Different reports produce conflicting numbers.",
      "Teams spend more time preparing data than analyzing it.",
    ],
    included: [
      { title: "Management & Operational Dashboards", description: "Real-time, interactive dashboards giving visibility into key operating numbers." },
      { title: "Automated Reporting", description: "Scheduled reports delivered directly to leadership and departmental teams." },
      { title: "Data Cleaning & Consolidation", description: "Pipelines that bring together disparate data sources into a reliable format." },
      { title: "Business Intelligence Solutions", description: "Accessible analytics designed for non-technical managers and operators." },
      { title: "Spreadsheet Automation", description: "Upgrading fragile Excel models into robust, automated reporting workflows." },
    ],
    useCases: [
      "Management dashboards",
      "Operational dashboards",
      "Automated reports",
      "Data cleaning workflows",
      "Business intelligence solutions",
      "Spreadsheet automation",
      "Data analysis pipelines",
    ],
    approach:
      "Good analytics starts with understanding what decisions the data needs to support.",
    technologies: ["Python", "pandas", "SQL", "PostgreSQL", "Power BI", "Excel", "Metabase"],
    outcomes: [
      "Operational numbers that leadership can review with confidence",
      "Hours saved every week on manual report assembly",
      "Single source of truth replacing contradictory spreadsheets",
      "Analysis workflows built around decisions, not vanity metrics",
    ],
    faqs: [
      { question: "Can you work with our existing spreadsheets?", answer: "Yes. Many projects start by auditing and automating existing spreadsheets before transitioning data to structured databases." },
      { question: "How often do dashboards update?", answer: "Dashboards can update in real time or on an automated schedule (daily, weekly, monthly) depending on operational needs." },
    ],
  },
  {
    slug: "api-integration",
    title: "API Development & Systems Integration",
    shortTitle: "API Integration",
    tagline: "Make your systems work together.",
    description:
      "We connect applications, databases and third-party services so information can move between systems without unnecessary manual work.",
    overviewDescription:
      "Connect your applications, databases and third-party services so information moves where it needs to without manual intervention.",
    ctaText: "Connect Your Systems",
    icon: "git-merge",
    problems: [
      "Your systems don't share data.",
      "Staff repeatedly copy information between applications.",
      "You need to connect a third-party service.",
      "Existing APIs need improvement.",
      "Different parts of the business rely on disconnected software.",
    ],
    included: [
      { title: "REST & Backend APIs", description: "Secure, structured APIs designed for clean data exchange between systems." },
      { title: "Third-Party SaaS Integrations", description: "Connecting tools such as CRM, accounting, shipping and communication services." },
      { title: "Payment & Financial Integrations", description: "Integrating payment gateways and transaction verification endpoints." },
      { title: "Webhooks & Event Sync", description: "Automated event delivery and reliable data synchronization between platforms." },
      { title: "Internal Service Connections", description: "Bridging legacy databases and modern business tools." },
    ],
    useCases: [
      "REST APIs",
      "Third-party integrations",
      "Database integrations",
      "Payment integrations",
      "Webhooks",
      "Data synchronization",
      "Internal service integrations",
    ],
    approach:
      "We map how information needs to move, define the interfaces and build integrations that are reliable and maintainable.",
    technologies: ["Python", "FastAPI", "Django", "REST", "PostgreSQL", "Webhooks"],
    outcomes: [
      "Automated information transfer without manual double-entry",
      "Reliable error handling so failed transactions are logged and flagged",
      "Connected systems that scale as your operation adds new tools",
      "Well-documented endpoints your team can maintain over time",
    ],
    faqs: [
      { question: "Can you integrate older legacy software?", answer: "Yes, provided the legacy system allows database access, file exports, or network communication." },
      { question: "How do you handle connection drops or API downtime?", answer: "We implement queueing, retry logic and alerting so temporary drops do not cause lost transactions." },
    ],
  },
  {
    slug: "it-support",
    title: "IT Support & Technical Services",
    shortTitle: "IT Support",
    tagline: "Technical support when your business needs it.",
    description:
      "We provide technical support, troubleshooting, maintenance and documentation for software and systems your business relies on.",
    overviewDescription:
      "Ongoing technical support, maintenance, troubleshooting and documentation for the systems your business relies on.",
    ctaText: "Talk to Technical Support",
    icon: "headphones",
    problems: [
      "Recurring technical problems slow down your team.",
      "Existing software needs maintenance.",
      "Your internal team needs additional technical support.",
      "Systems need monitoring and updates.",
      "Technical knowledge is concentrated in one person.",
    ],
    included: [
      { title: "Troubleshooting & Maintenance", description: "Resolving software errors, configuration issues and keeping applications healthy." },
      { title: "System Monitoring", description: "Observability for server uptime, resource utilization and error states." },
      { title: "Technical Documentation", description: "Standard operating procedures and system guides so knowledge isn't locked in one head." },
      { title: "Updates & Backups", description: "Regular database backups, security patches and environment updates." },
      { title: "Deployment Support", description: "Assistance with production rollouts, cloud configurations and migrations." },
    ],
    useCases: [
      "Troubleshooting",
      "Software maintenance",
      "System monitoring",
      "Technical documentation",
      "Updates",
      "Backups",
      "Deployment support",
      "Technical consultation",
    ],
    approach:
      "We focus on resolving the immediate problem while helping reduce the chance of the same problem returning.",
    technologies: ["Linux", "Docker", "PostgreSQL", "Nginx", "Cloud Platforms"],
    outcomes: [
      "Immediate troubleshooting when issues arise",
      "Reduced risk of recurring operational interruptions",
      "Properly documented systems your organization understands",
      "Consistent maintenance and reliable backup routines",
    ],
    faqs: [
      { question: "Do you support software built by other developers?", answer: "Yes. We can review existing codebases and provide maintenance, refactoring and troubleshooting." },
      { question: "What support channels do you offer?", answer: "We provide email support, WhatsApp support for clients with active agreements, and scheduled phone reviews." },
    ],
  },
  {
    slug: "ai-implementation",
    title: "AI Implementation",
    shortTitle: "AI Implementation",
    tagline: "AI that solves a real business problem.",
    description:
      "AI is useful when it improves a specific part of the work. We help organizations identify practical use cases and implement AI for tasks such as internal knowledge search, document processing, customer support and workflow assistance.",
    overviewDescription:
      "Practical AI for specific business problems, including document processing, internal knowledge search, support and workflow assistance.",
    ctaText: "Explore an AI Use Case",
    icon: "cpu",
    problems: [
      "Staff spend too much time searching through documents.",
      "Large amounts of text or documents need processing.",
      "Teams need help finding internal information.",
      "Customer or staff support involves repetitive questions.",
      "You want to use AI but aren't sure where it actually makes sense.",
    ],
    included: [
      { title: "Internal Knowledge Search", description: "Assistants that query your internal documentation, procedures and policy manuals." },
      { title: "Document Processing", description: "Structured extraction of information from invoices, forms and reports." },
      { title: "Support & Triage Assistance", description: "Categorizing incoming client requests and drafting context-aware responses." },
      { title: "Workflow Assistants", description: "Contextual tools integrated into internal systems to accelerate repetitive writing and reviews." },
      { title: "AI Integrations", description: "Connecting tested language models into your existing applications securely." },
    ],
    useCases: [
      "Internal AI assistants",
      "Knowledge search",
      "Document processing",
      "AI-powered support tools",
      "Workflow assistants",
      "AI integrations",
    ],
    approach:
      "We focus on controlled, useful applications of AI, with appropriate evaluation, access controls and human oversight where required.",
    technologies: ["Python", "Vector Databases", "Retrieval-Augmented Generation (RAG)", "LLM APIs"],
    outcomes: [
      "Significant time saved on manual document reading and searching",
      "Controlled AI implementations with human oversight",
      "Internal data kept private and securely handled",
      "Practical utility focused on specific operational bottlenecks",
    ],
    faqs: [
      { question: "Can AI access our private business data securely?", answer: "Yes. We configure private retrieval systems where your data is processed securely with appropriate access controls." },
      { question: "How do you ensure accuracy?", answer: "We implement grounded retrieval (RAG) against your verified internal documents, provide source references, and design workflows with human verification where required." },
    ],
  },
];
