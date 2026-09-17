import { useParams, Link } from "react-router";
import { industries } from "@/data/industries";
import { services } from "@/data/services";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/sections/CTASection";

export default function IndustryDetailPage() {
  const { slug } = useParams();
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl text-navy-900 mb-4">Industry not found</h1>
          <Link to="/industries" className="text-teal-600 hover:underline">Back to industries</Link>
        </div>
      </div>
    );
  }

  const relatedServices = services.filter((s) => industry.services.includes(s.slug));

  return (
    <>
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <Breadcrumb items={[{ label: "Industries", href: "/industries" }, { label: industry.title }]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl text-navy-900 mb-4">{industry.title}</h1>
            <p className="text-lg text-gray-600 leading-relaxed">{industry.description}</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Challenges */}
            <div>
              <h2 className="font-display text-2xl text-navy-900 mb-6">Typical technology challenges</h2>
              <div className="space-y-3">
                {industry.challenges.map((c) => (
                  <div key={c} className="flex items-start gap-3 p-4 border border-gray-100 rounded-lg bg-gray-50">
                    <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                    <span className="text-sm text-gray-700">{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h2 className="font-display text-2xl text-navy-900 mb-6">Solutions we build</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {industry.solutions.map((s) => (
                  <div key={s} className="flex items-start gap-2.5 p-3 border border-gray-100 rounded-lg">
                    <svg className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-sm text-gray-700">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Relevant services */}
            <div>
              <h2 className="font-display text-2xl text-navy-900 mb-6">Relevant services</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {relatedServices.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="group border border-gray-100 rounded-xl p-4 hover:border-gray-200 hover:shadow-sm transition-all"
                  >
                    <h3 className="text-sm font-semibold text-navy-900 mb-1 group-hover:text-teal-700 transition-colors">
                      {s.shortTitle}
                    </h3>
                    <p className="text-xs text-gray-500">{s.tagline}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-24 space-y-5">
              <div className="border border-navy-900 bg-navy-900 rounded-xl p-6">
                <h3 className="text-sm font-semibold text-white mb-2">Working in {industry.title}?</h3>
                <p className="text-xs text-gray-300 mb-4 leading-relaxed">
                  Tell us about your organization and the problem you're trying to solve. We'll be direct about whether we can help.
                </p>
                <Link
                  to="/contact"
                  className="block text-center bg-teal-500 text-white px-5 py-2.5 rounded text-sm font-medium hover:bg-teal-600 transition-colors"
                >
                  Start a Conversation
                </Link>
              </div>

              <div className="border border-gray-100 rounded-xl p-5">
                <h3 className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">Other Industries</h3>
                <div className="space-y-2">
                  {industries.filter((i) => i.slug !== slug).map((i) => (
                    <Link
                      key={i.slug}
                      to={`/industries/${i.slug}`}
                      className="block text-sm text-gray-600 hover:text-navy-900 transition-colors py-1"
                    >
                      {i.title}
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
