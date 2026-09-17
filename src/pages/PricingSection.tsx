import { Link } from "react-router";
import CTASection from "@/components/sections/CTASection";

const engagementStructures = [
  {
    title: "Project-Based (Fixed Scope & Milestones)",
    bestFor: "New software development, system rebuilds, end-to-end automation projects",
    howItWorks:
      "We define the full scope, technical architecture and deliverables upfront. The project is broken into milestones with agreed deliverables and payment schedules. You pay for delivered, verified work.",
  },
  {
    title: "Targeted Sprints (Time-Boxed)",
    bestFor: "Specific feature additions, API integrations, performance optimization, workflow automation",
    howItWorks:
      "A focused, time-boxed sprint (typically 1–3 weeks) dedicated to solving a specific operational problem or building a particular capability. Fast turnaround with clear boundaries.",
  },
  {
    title: "Monthly Support Retainer",
    bestFor: "Organizations requiring dependable, ongoing technical support and system maintenance",
    howItWorks:
      "A predictable monthly retainer covering scheduled maintenance, system health monitoring, bug fixes, security patches, minor feature enhancements and direct engineer support.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-3">
              Pricing &amp; Engagements
            </p>
            <h1 className="font-display text-4xl sm:text-5xl text-navy-900 mb-5">
              Transparent pricing built around project scope
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              We don't publish flat rates because software projects vary significantly based on complexity, integrations, data requirements and operational scale.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              What we do commit to is complete pricing transparency: detailed, itemized scopes with defined milestones before work begins. No hidden fees, no unexpected overages.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl text-navy-900 mb-4">
                Factors that influence cost
              </h2>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                During our initial discovery conversation, we evaluate several key operational dimensions to provide a clear, accurate proposal:
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Scope and complexity",
                    desc: "The number of features, workflows and edge cases the system needs to handle.",
                  },
                  {
                    title: "Integrations",
                    desc: "Connecting with payment processors, ERPs, CRMs, logistics APIs or legacy systems.",
                  },
                  {
                    title: "Data requirements",
                    desc: "Database design complexity, migration of existing data, and reporting needs.",
                  },
                  {
                    title: "Deployment environment",
                    desc: "Cloud hosting setup, security configurations, and performance requirements.",
                  },
                  {
                    title: "Ongoing support needs",
                    desc: "Post-launch maintenance, monitoring, updates and dedicated technical support.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 p-3.5 border border-gray-100 rounded-lg bg-gray-50/50">
                    <svg className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <div>
                      <span className="text-sm font-semibold text-navy-900">{item.title}: </span>
                      <span className="text-xs text-gray-600 leading-relaxed">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-navy-900 text-white rounded-xl p-8 shadow-xl">
              <p className="text-xs font-mono text-teal-400 uppercase tracking-widest mb-2">Discovery &amp; Scoping</p>
              <h2 className="font-display text-2xl text-white mb-3">Request a project estimate</h2>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Tell us about your project and we'll provide a clear, itemized proposal with defined milestones and no obligation. We respond to all inquiries promptly.
              </p>
              <div className="space-y-3 text-xs text-gray-300 mb-8 border-t border-white/10 pt-4">
                <p>✓ Written scope and technical recommendations</p>
                <p>✓ Transparent milestone schedule</p>
                <p>✓ Fixed quote before work begins</p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-navy-950 px-6 py-3.5 rounded-lg text-sm font-semibold transition-colors"
              >
                Start a Conversation
              </Link>
            </div>
          </div>

          {/* 11.3 Engagement structures */}
          <div className="mb-16">
            <div className="max-w-2xl mb-8">
              <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-2">How we engage</p>
              <h2 className="font-display text-2xl sm:text-3xl text-navy-900 mb-3">
                Engagement structures
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                We offer three primary engagement models depending on your project type and operational goals:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {engagementStructures.map((structure) => (
                <div key={structure.title} className="border border-gray-100 rounded-xl p-6 bg-white shadow-2xs hover:shadow-md transition-shadow">
                  <h3 className="text-base font-semibold text-navy-900 mb-3">{structure.title}</h3>
                  <div className="mb-4">
                    <span className="text-[11px] font-semibold text-teal-700 uppercase tracking-wider block mb-1">Best For:</span>
                    <p className="text-xs text-gray-600 leading-relaxed">{structure.bestFor}</p>
                  </div>
                  <div className="pt-3 border-t border-gray-50">
                    <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider block mb-1">How It Works:</span>
                    <p className="text-xs text-gray-600 leading-relaxed">{structure.howItWorks}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 11.4 Payment terms & currency */}
          <div className="border border-gray-100 bg-gray-50 rounded-xl p-8">
            <h2 className="font-display text-xl text-navy-900 mb-3">Payment terms &amp; currency</h2>
            <div className="grid sm:grid-cols-3 gap-6 text-xs text-gray-600 leading-relaxed">
              <div>
                <span className="font-semibold text-navy-900 block mb-1">Currencies:</span>
                We quote in Nigerian Naira (NGN) for Nigeria-based organizations and US Dollars (USD) for international clients.
              </div>
              <div>
                <span className="font-semibold text-navy-900 block mb-1">Milestones:</span>
                Structured as an initial deposit to begin work, milestone payments tied to demonstrable progress, and a final payment upon handover.
              </div>
              <div>
                <span className="font-semibold text-navy-900 block mb-1">No surprises:</span>
                Any change to project scope is documented and agreed upon in writing before additional work is performed.
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
