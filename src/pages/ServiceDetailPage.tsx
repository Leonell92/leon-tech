import { useParams, Link } from "react-router";
import { usePageMeta } from "@/hooks/usePageMeta";
import { services } from "@/data/services";
import { caseStudies } from "@/data/caseStudies";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/sections/CTASection";
import ServiceIcon from "@/components/ui/ServiceIcon";
import ServiceInteractiveVisual from "@/components/services/ServiceInteractiveVisual";
import { useState } from "react";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  usePageMeta({
    title: service ? service.title : "Service",
    description: service?.description,
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl text-navy-900 mb-4">Service not found</h1>
          <Link to="/services" className="text-teal-600 hover:underline">View all services</Link>
        </div>
      </div>
    );
  }

  const relatedCaseStudies = caseStudies.filter((cs) => cs.serviceSlug === slug).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: service.shortTitle }]} />
          <div className="mt-8 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 flex flex-col sm:flex-row sm:items-start gap-6">
              <ServiceIcon slug={service.slug} size="xl" interactive className="mt-1" />
              <div className="max-w-2xl">
                <h1 className="font-display text-4xl sm:text-5xl text-navy-900 mb-4">{service.title}</h1>
                <p className="text-xl text-teal-600 font-medium mb-5">{service.tagline}</p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">{service.description}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-navy-900 text-white px-7 py-3.5 rounded text-sm font-medium hover:bg-navy-800 transition-colors"
                >
                  {service.ctaText || "Start a Conversation"}
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 w-full">
              <ServiceInteractiveVisual slug={service.slug} />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-14">
            {/* Problems we solve */}
            <div>
              <h2 className="font-display text-2xl text-navy-900 mb-6">Business problems we solve</h2>
              <div className="space-y-3">
                {service.problems.map((p) => (
                  <div key={p} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <svg className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700">{p}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What's included */}
            <div>
              <h2 className="font-display text-2xl text-navy-900 mb-6">Services included</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.included.map((item) => (
                  <div key={item.title} className="border border-gray-100 rounded-lg p-5">
                    <h3 className="text-sm font-semibold text-navy-900 mb-2">{item.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Typical use cases */}
            <div>
              <h2 className="font-display text-2xl text-navy-900 mb-6">Typical use cases</h2>
              <div className="grid sm:grid-cols-2 gap-2">
                {service.useCases.map((uc) => (
                  <div key={uc} className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-sm text-gray-700">{uc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Our approach */}
            <div>
              <h2 className="font-display text-2xl text-navy-900 mb-4">Our approach</h2>
              <p className="text-gray-600 leading-relaxed">{service.approach}</p>
            </div>

            {/* Expected outcomes */}
            <div>
              <h2 className="font-display text-2xl text-navy-900 mb-6">Expected outcomes</h2>
              <div className="space-y-3">
                {service.outcomes.map((o) => (
                  <div key={o} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700">{o}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            {service.faqs.length > 0 && (
              <div>
                <h2 className="font-display text-2xl text-navy-900 mb-6">Frequently asked questions</h2>
                <div className="divide-y divide-gray-100 border border-gray-100 rounded-lg overflow-hidden">
                  {service.faqs.map((faq, i) => (
                    <div key={i}>
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="flex items-center justify-between w-full px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                        aria-expanded={openFaq === i}
                      >
                        <span className="text-sm font-medium text-navy-900 pr-4">{faq.question}</span>
                        <svg
                          className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openFaq === i && (
                        <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed bg-gray-50">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Related case studies */}
            {relatedCaseStudies.length > 0 && (
              <div>
                <h2 className="font-display text-2xl text-navy-900 mb-6">Related case studies</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {relatedCaseStudies.map((cs) => (
                    <Link
                      key={cs.slug}
                      to={`/case-studies/${cs.slug}`}
                      className="group border border-gray-100 rounded-lg overflow-hidden hover:border-gray-200 hover:shadow-sm transition-all"
                    >
                      <img src={cs.image} alt={cs.title} className="w-full h-36 object-cover" loading="lazy" />
                      <div className="p-4">
                        <span className="text-xs text-gray-400">{cs.industry}</span>
                        <h3 className="text-sm font-medium text-navy-900 mt-1 group-hover:text-teal-700 transition-colors">{cs.title}</h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-24 space-y-5">
              <div className="border border-gray-100 rounded-xl p-6 bg-gray-50">
                <h3 className="text-sm font-semibold text-navy-900 mb-2">Have a problem in this area?</h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Tell us what you're working with. We'll be direct about how we can help and whether technology is the right answer.
                </p>
                <Link
                  to="/contact"
                  className="block text-center bg-navy-900 text-white px-5 py-2.5 rounded text-sm font-medium hover:bg-navy-800 transition-colors"
                >
                  {service.ctaText || "Start a Conversation"}
                </Link>
              </div>

              <div className="border border-gray-100 rounded-xl p-6">
                <h3 className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-1.5">
                  {service.technologies.map((t) => (
                    <span key={t} className="text-xs bg-gray-50 border border-gray-100 text-gray-700 px-2.5 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border border-gray-100 rounded-xl p-6">
                <h3 className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">Other Services</h3>
                <div className="space-y-2">
                  {services.filter((s) => s.slug !== slug).slice(0, 5).map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="flex items-center gap-3 text-sm text-gray-600 hover:text-navy-900 transition-colors py-1.5 group"
                    >
                      <ServiceIcon slug={s.slug} size="sm" interactive />
                      <span className="group-hover:text-teal-600 transition-colors">{s.shortTitle}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTASection />
    </>
  );
}
