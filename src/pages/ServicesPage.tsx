import { Link } from "react-router";
import { services } from "@/data/services";
import CTASection from "@/components/sections/CTASection";
import ServiceIcon from "@/components/ui/ServiceIcon";

export default function ServicesPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-3">Our Services</p>
            <h1 className="font-display text-4xl sm:text-5xl text-navy-900 mb-6">
              Software, automation and technology built for the way you operate
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Every business has unique operational needs. We don't believe in forcing standard solutions onto problems that require specific thinking.
            </p>
            <p className="text-base text-gray-600 leading-relaxed mb-8">
              We design, build and maintain software, connect systems that should be working together, automate processes that drain your team's time, and provide ongoing technical support so your operations run smoothly.
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
                to="/industries"
                className="inline-flex items-center gap-2 border border-gray-200 text-navy-900 px-7 py-3.5 rounded text-sm font-medium hover:border-navy-300 hover:bg-gray-50 transition-colors"
              >
                Browse by Sector
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, i) => (
              <div
                key={service.slug}
                className={`grid lg:grid-cols-5 gap-8 items-start py-10 ${
                  i < services.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-4">
                    <ServiceIcon slug={service.slug} size="lg" interactive />
                    <div>
                      <h2 className="text-xl font-semibold text-navy-900 mb-2">{service.title}</h2>
                      <p className="text-sm text-teal-600 font-medium">{service.tagline}</p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{service.description}</p>
                  <div className="space-y-1.5">
                    {service.useCases.slice(0, 3).map((uc) => (
                      <div key={uc} className="flex items-start gap-2">
                        <svg className="w-3.5 h-3.5 text-teal-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span className="text-xs text-gray-500">{uc}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-1 flex lg:justify-end">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 border border-navy-900 text-navy-900 px-5 py-2.5 rounded text-sm font-medium hover:bg-navy-900 hover:text-white transition-colors"
                  >
                    Learn more
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.2 ENGAGEMENT MODELS */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-3">Engagement Models</p>
            <h2 className="font-display text-3xl sm:text-4xl text-navy-900 mb-4">
              How we work with clients
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Choose the engagement model that fits your project, team structure and operational needs:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "End-to-End Delivery",
                description:
                  "We handle the entire project lifecycle — discovery, architecture, development, testing, deployment and post-launch support. Best for new systems or major rebuilds.",
              },
              {
                num: "02",
                title: "Targeted Sprints",
                description:
                  "We tackle specific, high-priority problems — an integration, an automation workflow, a reporting dashboard, or a performance fix. Fast, focused delivery.",
              },
              {
                num: "03",
                title: "Ongoing Technology Support",
                description:
                  "Regular maintenance, monitoring, updates, troubleshooting and minor feature enhancements on a monthly retainer. Peace of mind for critical systems.",
              },
              {
                num: "04",
                title: "Technical Advisory",
                description:
                  "Architecture review, technology selection guidance, feasibility assessment, or system audits. Senior technical perspective before major investments.",
              },
            ].map((model) => (
              <div
                key={model.num}
                className="bg-white border border-gray-100 rounded-xl p-6 shadow-2xs hover:shadow-md transition-shadow"
              >
                <div className="text-xs font-mono font-bold text-teal-600 mb-3">{model.num}</div>
                <h3 className="text-base font-semibold text-navy-900 mb-2">{model.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
