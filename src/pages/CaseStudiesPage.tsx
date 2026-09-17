import { Link } from "react-router";
import { caseStudies } from "@/data/caseStudies";
import CTASection from "@/components/sections/CTASection";

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-3">Case Studies</p>
            <h1 className="font-display text-4xl sm:text-5xl text-navy-900 mb-5">
              Real problems. Practical solutions.
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Every project we take on starts with a business operational challenge — manual tasks draining productive hours, systems that don't share data, reports that require days of spreadsheet consolidation, or software that fails to serve the team using it.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Below is a selection of recent projects showing how we diagnosed the problem, architected the solution and delivered measurable improvements. Client names and identifying details are kept confidential under non-disclosure agreements.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                to={`/case-studies/${cs.slug}`}
                className="group border border-gray-100 rounded-xl overflow-hidden hover:border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="relative h-52 overflow-hidden bg-gray-100">
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
                    <span className="text-[10px] text-teal-300 font-medium bg-teal-950/90 px-2.5 py-1 rounded border border-teal-800/80 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                      Explore Case →
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-teal-600 font-medium">
                      {cs.services[0] || cs.industry}
                    </span>
                    <span className="text-xs text-gray-400">{cs.timeline}</span>
                  </div>
                  <h2 className="text-base font-semibold text-navy-900 mb-2 group-hover:text-teal-700 transition-colors leading-snug">
                    {cs.title}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3">{cs.summary}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cs.technologies.slice(0, 4).map((t) => (
                      <span key={t} className="text-[10px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded border border-gray-100">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Working on something similar?"
        subheading="We're happy to discuss your project and whether our experience is relevant to your situation."
      />
    </>
  );
}
