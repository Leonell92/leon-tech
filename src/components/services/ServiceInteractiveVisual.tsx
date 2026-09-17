import { useState } from "react";
import { Link } from "react-router";

interface ServiceVisualData {
  title: string;
  tagline: string;
  badge: string;
  metricBadge: string;
  image: string;
  alt: string;
  teamNote: string;
  overview: string;
  deliverables: string[];
  specs: { label: string; value: string }[];
}

const serviceVisualMap: Record<string, ServiceVisualData> = {
  "software-development": {
    title: "Custom Software Engineering",
    tagline: "Nigerian Tech Talent · Reliable Code",
    badge: "Production Engineering",
    metricBadge: "Production-Ready",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop&auto=format",
    alt: "Black male software engineer writing code on laptop in modern tech office",
    teamNote: "Engineered in Nigeria for reliability, data integrity, and scalable business operations.",
    overview:
      "Dedicated full-stack software engineers building responsive web systems, internal operations portals, and resilient transactional databases tailored to your business rules.",
    deliverables: [
      "Custom React / Next.js Web Portals",
      "FastAPI / Python Services",
      "Relational PostgreSQL Schemas with Data Integrity",
      "Automated Deployment & Full Testing",
    ],
    specs: [
      { label: "Code Ownership", value: "100% Client IP Transfer" },
      { label: "Delivery", value: "Regular Sprint Demos" },
      { label: "Timezone", value: "West Africa Time (WAT / UTC+1)" },
    ],
  },
  "business-automation": {
    title: "Business Process Automation",
    tagline: "Automated Workflows · Less Manual Effort",
    badge: "Process Automation",
    metricBadge: "Workflow Automation",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop&auto=format",
    alt: "Black tech professionals collaborating on automated business workflows",
    teamNote: "Streamlining operations across Nigerian supply chains, logistics, and financial workflows.",
    overview:
      "Eliminate repetitive spreadsheets and manual phone chasing with reliable background pipelines, automated notifications, and real-time syncing between your operational databases.",
    deliverables: [
      "Automated Notification Pipelines",
      "Accounting & Operations Reconciliation",
      "Invoice & Receipt Auto-Generation",
      "Multi-Step Approval Workflows",
    ],
    specs: [
      { label: "Execution", value: "Event-Driven & Scheduled" },
      { label: "Reliability", value: "Automatic Retries & Alerts" },
      { label: "Audit Trail", value: "Event Logs & Tracking" },
    ],
  },
  "web-development": {
    title: "Web Application Development",
    tagline: "Fast, Responsive & Clear",
    badge: "Responsive Web Engineering",
    metricBadge: "High Performance",
    image: "https://images.unsplash.com/photo-1758519288735-93631d504920?w=800&h=600&fit=crop&auto=format",
    alt: "Black male software engineers reviewing responsive web platform on laptop",
    teamNote: "High-performance web applications built to load efficiently across networks and mobile devices.",
    overview:
      "Clean, responsive websites and authenticated portals designed for high user adoption, fast load times, and frictionless client self-service.",
    deliverables: [
      "Modern React / TypeScript Applications",
      "Secure Client Portals with Role-Based Access",
      "Speed Optimization for Variable Bandwidth",
      "Content Management for Easy Updates",
    ],
    specs: [
      { label: "Architecture", value: "Modern Web Standards" },
      { label: "Design System", value: "Custom Tailwind CSS Components" },
      { label: "Experience", value: "Fully Responsive" },
    ],
  },
  "mobile-development": {
    title: "Mobile & Cross-Platform Apps",
    tagline: "iOS & Android Apps for Field & Client Operations",
    badge: "Cross-Platform Mobile",
    metricBadge: "Mobile-First",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&h=600&fit=crop&auto=format",
    alt: "Modern tech workspace with laptop, tablet, and mobile device testing setup",
    teamNote: "Built with offline capabilities for reliable field operations across Nigeria.",
    overview:
      "Cross-platform mobile applications engineered with React Native and modern frameworks, providing fluid user interfaces and offline reliability for field personnel and clients.",
    deliverables: [
      "Cross-Platform iOS & Android Apps",
      "Offline Data Sync for Variable Connectivity",
      "Push Notification & Alert Channels",
      "App Store Deployment Assistance",
    ],
    specs: [
      { label: "Offline Mode", value: "Local Data Synchronization" },
      { label: "Security", value: "Encrypted Local Storage" },
      { label: "Data Efficiency", value: "Optimized Network Payloads" },
    ],
  },
  "data-analytics": {
    title: "Data Analytics & Reporting",
    tagline: "Operational Clarity · Clear Dashboards",
    badge: "Business Intelligence",
    metricBadge: "Clear Dashboards",
    image: "https://images.unsplash.com/photo-1758519289013-9442fb2aeac6?w=800&h=600&fit=crop&auto=format",
    alt: "Black male tech professionals analyzing business intelligence charts on laptop",
    teamNote: "Transforming fragmented spreadsheets into centralized, automated management dashboards.",
    overview:
      "Consolidate dispersed company metrics into interactive executive dashboards and automated summaries for confident, data-backed decision-making.",
    deliverables: [
      "Executive KPI & Operational Dashboards",
      "Automated SQL Data Pipelines & Cleaners",
      "Scheduled Email & PDF Summaries",
      "Operational & Financial Reporting",
    ],
    specs: [
      { label: "Data Pipeline", value: "Scheduled Ingestion" },
      { label: "Tools", value: "PostgreSQL, Power BI, Metabase" },
      { label: "Access Control", value: "Role-Based Permissions" },
    ],
  },
  "api-integration": {
    title: "API Development & System Integrations",
    tagline: "Unified Systems · Automated Data Flow",
    badge: "Systems Integration",
    metricBadge: "Secure & Connected",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&h=600&fit=crop&auto=format",
    alt: "Black male backend engineer configuring payment and API integrations at modern desk with laptop",
    teamNote: "Connecting payment gateways, accounting tools, and internal systems securely.",
    overview:
      "Reliable integrations that connect disjointed software systems, payment gateways, and logistics providers with clean, documented APIs.",
    deliverables: [
      "Payment Gateway Integration (Paystack, Flutterwave)",
      "Messaging & Notification Webhooks",
      "ERP & Accounting Synchronization",
      "Secure REST APIs & Webhooks",
    ],
    specs: [
      { label: "Security", value: "Authenticated & Encrypted Endpoints" },
      { label: "Reliability", value: "Queueing & Automatic Retries" },
      { label: "Documentation", value: "Clear API Specifications" },
    ],
  },
  "it-support": {
    title: "Technology Advisory & Support",
    tagline: "Dedicated Technical Team · Reliable Assistance",
    badge: "Technical Support",
    metricBadge: "Direct Support",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&auto=format",
    alt: "Systems engineer managing cloud server infrastructure and network monitoring",
    teamNote: "Dependable technical assistance and system maintenance for growing businesses.",
    overview:
      "Keep your critical systems running smoothly. Our technical team handles routine monitoring, scheduled updates, troubleshooting and ongoing guidance.",
    deliverables: [
      "Direct Communication Channels",
      "Proactive System Health Monitoring",
      "Scheduled Security & Dependency Updates",
      "Automated Cloud Backups",
    ],
    specs: [
      { label: "Communication", value: "Direct Email & Scheduled Calls" },
      { label: "Backups", value: "Automated Off-Site Backups" },
      { label: "Coverage", value: "Nigeria & Remote Worldwide" },
    ],
  },
  "ai-implementation": {
    title: "AI & Intelligent Automation",
    tagline: "Practical AI Solutions · Private & Grounded",
    badge: "AI & Automation",
    metricBadge: "Private & Grounded",
    image: "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?w=800&h=600&fit=crop&auto=format",
    alt: "Black male software engineer developing intelligent automation workflows on laptop",
    teamNote: "Deploying intelligent assistants grounded strictly on your business data.",
    overview:
      "Integrate practical AI capabilities into operational workflows — document data extraction, internal knowledge retrieval, and intelligent support inquiry triage.",
    deliverables: [
      "Internal Knowledge Retrieval (RAG)",
      "Document & Form Data Extraction",
      "Customer Inquiry Routing & Triage",
      "Privacy-Preserving Data Architecture",
    ],
    specs: [
      { label: "Data Privacy", value: "Zero External Model Retraining" },
      { label: "Integration", value: "Internal API & Database Hooks" },
      { label: "Deployment", value: "Cloud or Managed Infrastructure" },
    ],
  },
};

interface ServiceInteractiveVisualProps {
  slug: string;
}

export default function ServiceInteractiveVisual({ slug }: ServiceInteractiveVisualProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "deliverables" | "specs">("overview");

  const data = serviceVisualMap[slug] || serviceVisualMap["software-development"];

  return (
    <div className="relative w-full group">
      {/* Subtle glowing ambient back-layer */}
      <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 via-navy-700/20 to-teal-400/20 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Main Showcase Container */}
      <div className="relative rounded-xl overflow-hidden bg-white border border-gray-100 shadow-xl">
        {/* Top Control Bar with Live Status & Tab Switcher */}
        <div className="px-4 py-2.5 bg-navy-900 border-b border-navy-800 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-mono text-gray-200">
              Nigeria-Based · Remote Worldwide
            </span>
          </div>

          <div className="flex items-center bg-navy-950 p-0.5 rounded-lg border border-navy-800">
            {(
              [
                { key: "overview", label: "Overview" },
                { key: "deliverables", label: "Deliverables" },
                { key: "specs", label: "Standards" },
              ] as const
            ).map((t) => (
              <button
                key={t.key}
                onClick={() => setActiveTab(t.key)}
                className={`px-2.5 py-1 text-[10px] font-medium rounded transition-all cursor-pointer ${
                  activeTab === t.key
                    ? "bg-teal-600 text-white shadow-xs"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Real Photo Visual Frame */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-navy-950">
          <img
            src={data.image}
            alt={data.alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="eager"
          />
          {/* Subtle cinematic gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/40 to-transparent" />

          {/* Top Floating Badge */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white bg-navy-900/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/15 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              {data.badge}
            </span>
          </div>

          {/* Top Right Metric Badge */}
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-teal-300 bg-teal-950/80 backdrop-blur-md px-2 py-1 rounded-md border border-teal-700/50 shadow-md">
              ✓ {data.metricBadge}
            </span>
          </div>

          {/* Bottom Interactive Content Area Overlaid on Real Photo */}
          <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-lg bg-navy-900/90 backdrop-blur-md border border-white/10 text-white shadow-lg">
            {activeTab === "overview" && (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-semibold text-white tracking-wide">
                    {data.title}
                  </h4>
                  <span className="text-[10px] text-teal-400 font-mono">
                    WAT Timezone
                  </span>
                </div>
                <p className="text-[11px] text-gray-300 leading-relaxed line-clamp-2">
                  {data.overview}
                </p>
                <div className="pt-1 flex items-center gap-1.5 text-[10px] text-gray-400">
                  <span className="text-teal-400">📍</span>
                  <span>{data.teamNote}</span>
                </div>
              </div>
            )}

            {activeTab === "deliverables" && (
              <div className="space-y-1.5">
                <div className="text-[10px] uppercase font-semibold text-teal-400 tracking-wider">
                  Deliverables Included:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] text-gray-200">
                  {data.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <span className="w-3.5 h-3.5 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center text-[9px] flex-shrink-0">
                        ✓
                      </span>
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "specs" && (
              <div className="space-y-1.5">
                <div className="text-[10px] uppercase font-semibold text-teal-400 tracking-wider">
                  Operational Standards:
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  {data.specs.map((s, idx) => (
                    <div key={idx} className="p-1.5 rounded bg-navy-950/60 border border-white/5">
                      <div className="text-[9px] text-gray-400">{s.label}</div>
                      <div className="text-[10px] font-semibold text-teal-300 mt-0.5 truncate">
                        {s.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Bar with Action Link */}
        <div className="px-4 py-2.5 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-gray-600 text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
            <span>Software &amp; Technology Services</span>
          </div>
          <Link
            to="/contact"
            className="text-[11px] font-medium text-teal-700 hover:text-teal-800 transition-colors flex items-center gap-1"
          >
            Start a conversation →
          </Link>
        </div>
      </div>
    </div>
  );
}
