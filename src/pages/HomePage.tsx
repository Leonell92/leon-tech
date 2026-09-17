import { Link } from "react-router";
import { usePageMeta } from "@/hooks/usePageMeta";
import { services } from "@/data/services";
import { caseStudies } from "@/data/caseStudies";
import { faqs, solutions } from "@/data/faqs";
import { company } from "@/data/company";
import { blogPosts } from "@/data/blog";
import { industries } from "@/data/industries";
import CTASection from "@/components/sections/CTASection";
import ServiceIcon from "@/components/ui/ServiceIcon";
import HeroInteractiveShowcase from "@/components/home/HeroInteractiveShowcase";
import InteractiveProcessSection from "@/components/home/InteractiveProcessSection";
import { useState } from "react";

const techGroups = [
  { label: "Languages", items: ["Python", "TypeScript", "JavaScript", "SQL"] },
  { label: "Frameworks & Libraries", items: ["Django", "FastAPI", "React", "Next.js", "Node.js"] },
  { label: "Data & Databases", items: ["PostgreSQL", "Redis", "Supabase", "Power BI"] },
  { label: "Infrastructure & Tools", items: ["Docker", "Git", "Linux", "Cloud Hosting"] },
];

export default function HomePage() {
  usePageMeta({
    title: "Bridgeway Technologies — Software Built Around Your Business",
    description: "Software that works the way your business works. Custom software, automation and technology services for businesses across Nigeria and internationally.",
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const featuredCaseStudies = caseStudies.slice(0, 3);
  const featuredPosts = blogPosts.slice(0, 3);
  const homeFaqs = faqs.slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="relative bg-white pt-16 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-24">
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 text-xs font-medium px-3 py-1.5 rounded mb-6 border border-teal-100">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                Software &amp; Technology Services · Nigeria · Remote Worldwide
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-navy-900 leading-[1.1] mb-6">
                Software that works the way your business works.
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
                We design, build and support custom software, automate business processes and connect the systems your team relies on every day.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-navy-900 text-white px-7 py-3.5 rounded text-sm font-medium hover:bg-navy-800 transition-colors"
                >
                  Start a Conversation
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 border border-gray-200 text-navy-900 px-7 py-3.5 rounded text-sm font-medium hover:border-navy-300 hover:bg-gray-50 transition-colors"
                >
                  Explore Our Services
                </Link>
              </div>
              <div className="mt-10 pt-8 border-t border-gray-100 flex flex-wrap gap-2.5">
                {company.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-navy-900 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-md"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                    {cap}
                  </span>
                ))}
              </div>
            </div>
            {/* Hero visual */}
            <div className="relative hidden lg:block">
              <HeroInteractiveShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBILITY STRIP */}
      <section className="bg-gray-50 border-y border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium text-gray-500 text-center mb-6 max-w-xl mx-auto">
            Software, automation and technology services for businesses across Nigeria and internationally.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-8">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="flex flex-col items-center text-center gap-1.5 p-3 rounded hover:bg-white hover:border-gray-100 hover:shadow-sm border border-transparent transition-all group"
              >
                <ServiceIcon slug={s.slug} size="sm" interactive />
                <span className="text-xs text-gray-600 group-hover:text-navy-900 leading-tight transition-colors">{s.shortTitle}</span>
              </Link>
            ))}
          </div>
          {/* Industry sector chips */}
          <div className="border-t border-gray-200 pt-7">
            <p className="text-xs text-gray-500 text-center mb-4">
              Experience working across key sectors — financial services, logistics, education, healthcare, retail and professional services.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {["Financial Services", "Logistics & Transportation", "Education", "Healthcare", "Retail & E-Commerce", "Professional Services"].map((name) => (
                <span
                  key={name}
                  className="h-8 px-4 bg-white border border-gray-200 rounded flex items-center justify-center text-xs text-navy-800 font-medium shadow-2xs"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION / WHAT WE DO - REFINED IMMERSIVE WORKSPACE */}
      <section className="relative py-20 lg:py-24 overflow-hidden text-white">
        {/* Workspace Photo Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/workspace-bg.png"
            alt="Modern technology workspace with laptops, whiteboard, and city skyline"
            className="w-full h-full object-cover object-[65%_center] sm:object-[center_35%] lg:object-center"
          />
          {/* Directional Gradient Overlay: darker on left for headline legibility, lighter on right to reveal the workspace */}
          <div
            className="absolute inset-0 pointer-events-none lg:hidden"
            style={{
              background:
                "linear-gradient(180deg, rgba(8, 15, 20, 0.86) 0%, rgba(8, 15, 20, 0.74) 45%, rgba(8, 15, 20, 0.58) 100%)",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none hidden lg:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(8, 15, 20, 0.84) 0%, rgba(8, 15, 20, 0.70) 38%, rgba(8, 15, 20, 0.54) 70%, rgba(8, 15, 20, 0.46) 100%)",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Eyebrow, Refined Serif Headline, Supporting Paragraph, CTA */}
            <div className="lg:col-span-6 lg:max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-teal-400 text-xs font-semibold uppercase tracking-widest mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                What we do
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-[2.75rem] text-white font-medium tracking-tight mb-6 leading-[1.18] drop-shadow-sm">
                We build software that removes manual work, connects your systems and gives your team better visibility into day-to-day operations.
              </h2>

              <p className="text-slate-200 text-base sm:text-[17px] leading-relaxed mb-8 font-normal max-w-lg">
                Too many businesses are held back by repetitive administrative tasks, tools that don't talk to each other, and reports that take hours to put together. We build technology that solves those specific problems — simply, reliably and without unnecessary complexity.
              </p>

              <Link
                to="/solutions"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-navy-950 font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400 group"
              >
                <span>See how we solve common business problems</span>
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            {/* Right Column: Refined 2x2 Service Cards */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Custom Software Development",
                    description:
                      "Web applications, internal tools, portals and mobile software designed around your specific workflows and business rules.",
                  },
                  {
                    title: "Business Process Automation",
                    description:
                      "Automated workflows that eliminate repetitive manual data entry, approvals, notifications and reconciliations.",
                  },
                  {
                    title: "Systems Integration & APIs",
                    description:
                      "Connecting payment gateways, accounting platforms, inventory tools and third-party services so information flows automatically.",
                  },
                  {
                    title: "Data & Reporting Systems",
                    description:
                      "Centralized databases, dashboards and operational reports that give leadership and team members clear, accurate data.",
                  },
                ].map((s) => (
                  <div
                    key={s.title}
                    className="rounded-xl p-5 sm:p-6 border border-white/10 hover:border-white/25 hover:-translate-y-[3px] hover:shadow-lg transition-all duration-200 ease-out group"
                    style={{
                      backgroundColor: "rgba(20, 25, 27, 0.82)",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                      <div className="text-[11px] font-semibold text-teal-400 uppercase tracking-wider">
                        {s.title}
                      </div>
                    </div>
                    <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-3">Services</p>
            <h2 className="font-display text-3xl sm:text-4xl text-navy-900 mb-4">
              Technology built for your specific requirements
            </h2>
            <p className="text-gray-600">
              Every project is different. We don't push one-size-fits-all platforms — we recommend and build what makes sense for your operational reality.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 rounded-xl overflow-hidden border border-gray-100">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="bg-white p-6 hover:bg-gray-50 transition-colors group"
              >
                <div className="mb-4">
                  <ServiceIcon slug={s.slug} size="md" interactive />
                </div>
                <h3 className="text-sm font-semibold text-navy-900 mb-2 group-hover:text-teal-700 transition-colors">
                  {s.shortTitle}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">{s.tagline}</p>
                <span className="inline-flex items-center gap-1 mt-4 text-xs text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border border-gray-200 text-navy-900 px-6 py-2.5 rounded text-sm font-medium hover:border-navy-300 hover:bg-white transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div className="max-w-xl">
              <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-3">Case Studies</p>
              <h2 className="font-display text-3xl sm:text-4xl text-navy-900 mb-3">
                Real problems. Practical solutions.
              </h2>
              <p className="text-gray-600 text-sm">
                A look at recent projects we've delivered and the operational improvements they created. Client details kept strictly confidential.
              </p>
            </div>
            <Link
              to="/case-studies"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm text-navy-900 font-medium hover:text-teal-600 transition-colors"
            >
              View All Case Studies
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredCaseStudies.map((cs) => (
              <Link
                key={cs.slug}
                to={`/case-studies/${cs.slug}`}
                className="group border border-gray-100 rounded-xl overflow-hidden hover:border-gray-200 hover:shadow-md transition-all"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-navy-950/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="text-[11px] font-medium text-white bg-navy-900/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 shadow-xs flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                      {cs.industry}
                    </span>
                    <span className="text-[10px] text-teal-300 font-medium bg-teal-950/90 px-2 py-0.5 rounded border border-teal-800/80 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                      View Case →
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-semibold text-navy-900 mb-2 group-hover:text-teal-700 transition-colors">
                    {cs.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">{cs.summary}</p>
                  <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {cs.technologies.slice(0, 3).map((t) => (
                        <span key={t} className="text-[10px] text-gray-400 bg-gray-50 px-1.5 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-teal-600 font-medium">
                      {cs.timeline}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8 sm:hidden">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 border border-gray-200 text-navy-900 px-6 py-2.5 rounded text-sm font-medium"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div className="max-w-xl">
              <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-3">Industries</p>
              <h2 className="font-display text-3xl sm:text-4xl text-navy-900">
                Built for how specific industries work
              </h2>
            </div>
            <Link
              to="/industries"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm text-navy-900 font-medium hover:text-teal-600 transition-colors"
            >
              All industries →
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                to={`/industries/${industry.slug}`}
                className="group flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 hover:border-teal-300 hover:text-teal-700 hover:bg-teal-50 transition-all"
              >
                {industry.title}
                <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            ))}
          </div>
          <div className="mt-6 p-5 bg-gray-50 border border-gray-100 rounded-lg">
            <p className="text-sm text-gray-600">
              We build solutions suitable for any organization with operational processes that benefit from technology.{" "}
              <Link to="/contact" className="text-teal-600 hover:underline font-medium">
                Tell us about your specific situation →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <InteractiveProcessSection />

      {/* TECHNOLOGIES */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-10">
            <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-3">Technologies</p>
            <h2 className="font-display text-2xl sm:text-3xl text-navy-900 mb-3">
              The right technology for the job.
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              We choose programming languages, frameworks and infrastructure based on what will serve your system best over time — focusing on stability, maintainability and available talent.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {techGroups.map((group) => (
              <div key={group.label}>
                <div className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-3">{group.label}</div>
                <div className="space-y-2">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="text-sm text-navy-900 bg-gray-50 border border-gray-100 px-3 py-2 rounded"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT CLIENTS VALUE (REPLACING UNVERIFIED TESTIMONIALS) */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-3">
              How we work with you
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-navy-900 mb-4">
              A straightforward way to work
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Clients choose Bridgeway because we focus on the practical details that make technology projects succeed.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Direct Communication",
                description:
                  "You communicate directly with the engineers building your solution. No layers of account managers, no distorted messages.",
              },
              {
                title: "Realistic Timelines",
                description:
                  "We provide realistic schedules with defined milestones. If something changes, you know immediately — not at the deadline.",
              },
              {
                title: "Software Built to Fit",
                description:
                  "We don't try to force your processes into someone else's template. We build around how your business actually runs.",
              },
              {
                title: "Support Beyond Launch",
                description:
                  "Launch is where software begins its real life. We stay engaged to maintain, update and support your systems.",
              },
            ].map((card, idx) => (
              <div
                key={card.title}
                className="bg-white border border-gray-100 rounded-xl p-6 shadow-2xs hover:shadow-md transition-shadow"
              >
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center font-mono text-xs font-bold mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-semibold text-navy-900 mb-2">{card.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 border border-gray-200 text-navy-900 px-6 py-2.5 rounded text-sm font-medium hover:border-navy-300 hover:bg-white transition-colors"
            >
              Learn more about how we work
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT SNAPSHOT */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1758519288548-046187014c85?w=800&h=600&fit=crop&auto=format"
                  alt="Nigerian software engineering team collaborating on laptop"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-3">About Bridgeway</p>
              <h2 className="font-display text-3xl sm:text-4xl text-navy-900 mb-5">
                A technology company that understands how businesses actually run.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Bridgeway Technologies was founded on a simple observation: most businesses don't need more complicated technology — they need technology that actually fits the way they work.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Based in Nigeria and working with organizations nationally and internationally, we combine strong engineering capabilities with practical business sense. We care as much about whether your team can use a system as whether the code is well-architected.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 border border-navy-900 text-navy-900 px-6 py-2.5 rounded text-sm font-medium hover:bg-navy-900 hover:text-white transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div className="max-w-xl">
              <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-3">Insights</p>
              <h2 className="font-display text-3xl sm:text-4xl text-navy-900">
                Perspectives on technology and business operations
              </h2>
            </div>
            <Link
              to="/insights"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm text-navy-900 font-medium hover:text-teal-600 transition-colors"
            >
              View all
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/insights/${post.slug}`}
                className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-gray-200 hover:shadow-md transition-all"
              >
                <div className="h-44 overflow-hidden bg-gray-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-teal-600 font-medium">{post.category}</span>
                    <span className="text-gray-200">·</span>
                    <span className="text-xs text-gray-400">{post.readTime} read</span>
                  </div>
                  <h3 className="text-sm font-semibold text-navy-900 mb-2 group-hover:text-teal-700 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-3">Frequently Asked Questions</p>
            <h2 className="font-display text-3xl sm:text-4xl text-navy-900">Common questions about working with us</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {homeFaqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex items-center justify-between w-full py-5 text-left group"
                  aria-expanded={openFaq === i}
                >
                  <span className="text-sm font-medium text-navy-900 pr-4 group-hover:text-teal-700 transition-colors">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="pb-5 text-sm text-gray-600 leading-relaxed">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/faq"
              className="text-sm text-teal-600 font-medium hover:text-teal-700 transition-colors"
            >
              View All Frequently Asked Questions →
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
