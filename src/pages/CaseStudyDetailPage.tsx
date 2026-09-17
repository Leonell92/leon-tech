import { useParams, Link } from "react-router";
import { caseStudies } from "@/data/caseStudies";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/sections/CTASection";

export default function CaseStudyDetailPage() {
  const { slug } = useParams();
  const cs = caseStudies.find((c) => c.slug === slug);
  const related = caseStudies.filter((c) => c.slug !== slug).slice(0, 2);

  if (!cs) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl text-navy-900 mb-4">Case study not found</h1>
          <Link to="/case-studies" className="text-teal-600 hover:underline">Back to case studies</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb items={[{ label: "Case Studies", href: "/case-studies" }, { label: cs.title }]} />
          <div className="mt-6 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs bg-gray-50 text-gray-600 border border-gray-100 px-2.5 py-1 rounded">
                {cs.industry}
              </span>
              <span className="text-xs text-gray-400">{cs.client}</span>
              <span className="text-gray-200">·</span>
              <span className="text-xs text-gray-400">{cs.timeline}</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl text-navy-900 mb-4">{cs.title}</h1>
            <p className="text-lg text-gray-600 leading-relaxed">{cs.summary}</p>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="h-80 sm:h-96 rounded-xl overflow-hidden bg-gray-100">
            <img src={cs.image} alt={cs.title} className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Challenge */}
            <div>
              <h2 className="font-display text-2xl text-navy-900 mb-4 pb-3 border-b border-gray-100">
                Business Challenge
              </h2>
              <p className="text-gray-700 leading-relaxed">{cs.challenge}</p>
            </div>

            {/* Solution */}
            <div>
              <h2 className="font-display text-2xl text-navy-900 mb-4 pb-3 border-b border-gray-100">
                Solution
              </h2>
              <p className="text-gray-700 leading-relaxed">{cs.solution}</p>
            </div>

            {/* Implementation */}
            <div>
              <h2 className="font-display text-2xl text-navy-900 mb-4 pb-3 border-b border-gray-100">
                Implementation
              </h2>
              <p className="text-gray-700 leading-relaxed">{cs.implementation}</p>
            </div>

            {/* Key features */}
            <div>
              <h2 className="font-display text-2xl text-navy-900 mb-6 pb-3 border-b border-gray-100">
                Key Features
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {cs.features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-sm text-gray-700">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcome */}
            <div className="bg-teal-50 border border-teal-100 rounded-xl p-6">
              <h2 className="font-display text-xl text-navy-900 mb-3">Outcome</h2>
              <p className="text-gray-700 leading-relaxed">{cs.outcome}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-24 space-y-5">
              <div className="border border-gray-100 rounded-xl p-5">
                <h3 className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">Project Details</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">Client</div>
                    <div className="text-sm text-navy-900">{cs.client}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">Industry</div>
                    <div className="text-sm text-navy-900">{cs.industry}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">Timeline</div>
                    <div className="text-sm text-navy-900">{cs.timeline}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Services</div>
                    <div className="space-y-1">
                      {cs.services.map((s) => (
                        <div key={s} className="text-xs text-gray-600">{s}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-gray-100 rounded-xl p-5">
                <h3 className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-1.5">
                  {cs.technologies.map((t) => (
                    <span key={t} className="text-xs bg-gray-50 border border-gray-100 text-gray-700 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border border-navy-900 rounded-xl p-5 bg-navy-900">
                <h3 className="text-sm font-semibold text-white mb-2">Similar project in mind?</h3>
                <p className="text-xs text-gray-300 mb-4 leading-relaxed">
                  We'd be happy to discuss your situation and whether this kind of approach is right for you.
                </p>
                <Link
                  to="/contact"
                  className="block text-center bg-teal-500 text-white px-5 py-2.5 rounded text-sm font-medium hover:bg-teal-600 transition-colors"
                >
                  Request a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-20 pt-10 border-t border-gray-100">
            <h2 className="font-display text-2xl text-navy-900 mb-8">Other case studies</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((c) => (
                <Link
                  key={c.slug}
                  to={`/case-studies/${c.slug}`}
                  className="group border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-all flex"
                >
                  <div className="w-36 flex-shrink-0 overflow-hidden bg-gray-100">
                    <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-gray-400">{c.industry}</span>
                    <h3 className="text-sm font-medium text-navy-900 mt-1 group-hover:text-teal-700 transition-colors leading-snug">{c.title}</h3>
                    <p className="text-xs text-gray-400 mt-2">{c.timeline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <CTASection />
    </>
  );
}
