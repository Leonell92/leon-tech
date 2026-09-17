import { Link } from "react-router";
import { industries } from "@/data/industries";
import CTASection from "@/components/sections/CTASection";

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-3">Sectors We Serve</p>
            <h1 className="font-display text-4xl sm:text-5xl text-navy-900 mb-5">
              Technology shaped by the way your industry operates
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-3">
              Software that works in a logistics warehouse won't work in a school, and a clinic has different data requirements than a retail chain.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              We take the time to understand the regulations, operating conditions and daily workflows specific to your sector before we propose or build anything.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                to={`/industries/${industry.slug}`}
                className="group border border-gray-100 rounded-xl p-6 hover:border-gray-200 hover:shadow-md transition-all"
              >
                <h2 className="text-base font-semibold text-navy-900 mb-3 group-hover:text-teal-700 transition-colors">
                  {industry.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {industry.description}
                </p>
                <div className="space-y-1.5">
                  {industry.solutions.slice(0, 3).map((s) => (
                    <div key={s} className="flex items-start gap-2">
                      <svg className="w-3 h-3 text-teal-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-xs text-gray-500">{s}</span>
                    </div>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 mt-4 text-xs text-teal-600 font-medium">
                  View solutions
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Working in a different sector?"
        subheading="Operational challenges — manual tasks, disconnected systems, data visibility — exist in every industry. If your sector isn't listed here, we'd still be glad to discuss your specific requirements."
        primaryLabel="Start a Conversation"
        primaryHref="/contact"
      />
    </>
  );
}
