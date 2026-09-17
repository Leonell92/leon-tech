import { Link } from "react-router";
import CTASection from "@/components/sections/CTASection";

export default function PartnershipsPage() {
  return (
    <>
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-3">Partnerships</p>
            <h1 className="font-display text-4xl sm:text-5xl text-navy-900 mb-5">Work with us as a partner</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              We collaborate with technology vendors, consultancies, agencies and other organizations where there's a clear case for working together.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "Development Partners",
                desc: "Organizations that need dependable development capacity for their clients. We provide engineering and delivery for specific projects or on an ongoing basis.",
              },
              {
                title: "Technology Vendors",
                desc: "Software providers looking for reliable implementation partners to deploy their tools for Nigerian and African enterprise clients.",
              },
              {
                title: "Consulting Organizations",
                desc: "Management consultancies that uncover technical requirements in client engagements and need an execution partner.",
              },
              {
                title: "Digital Agencies",
                desc: "Creative and marketing agencies that require backend architecture, custom databases, and robust software engineering for client projects.",
              },
            ].map((item) => (
              <div key={item.title} className="border border-gray-100 rounded-xl p-6 hover:border-gray-200 transition-colors">
                <h2 className="text-base font-semibold text-navy-900 mb-2">{item.title}</h2>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* What we look for */}
          <div className="mb-16">
            <h2 className="font-display text-2xl text-navy-900 mb-6">What We Look For</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "High Standards", desc: "A commitment to quality engineering, reliable delivery, and sensible architecture." },
                { title: "Client-First Mindset", desc: "Prioritizing the client's real operational needs over unnecessary scope or complexity." },
                { title: "Direct Communication", desc: "Open, prompt, and transparent coordination between technical teams." },
                { title: "Complementary Strengths", desc: "Clear synergy where combined capabilities deliver measurable outcomes." },
              ].map((c) => (
                <div key={c.title} className="p-5 bg-gray-50 border border-gray-100 rounded-xl">
                  <h3 className="text-sm font-semibold text-navy-900 mb-1.5">{c.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-xl p-8 max-w-2xl">
            <h2 className="font-display text-2xl text-navy-900 mb-3">Discuss a Partnership</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              If there's a potential fit between your work and ours, we're happy to have a direct conversation about it.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-navy-900 text-white px-6 py-3 rounded text-sm font-medium hover:bg-navy-800 transition-colors"
            >
              Discuss a Partnership
            </Link>
          </div>
        </div>
      </section>

      <CTASection dark={false} />
    </>
  );
}
