import { jobs, whyWorkWithUs } from "@/data/careers";
import { usePageMeta } from "@/hooks/usePageMeta";
import CTASection from "@/components/sections/CTASection";

const whatWeLookFor = [
  {
    title: "Strong fundamentals",
    description: "Solid grounding in computer science principles, system architecture, database design and clean coding practices.",
  },
  {
    title: "Problem first, technology second",
    description: "You care more about whether the solution works for the user than what framework was used to build it.",
  },
  {
    title: "Clear, thoughtful communication",
    description: "You can explain technical decisions simply, write helpful documentation and collaborate directly with teammates and clients.",
  },
  {
    title: "Dependability and craft",
    description: "You take pride in work that works — well-tested, documented and reliable in production.",
  },
];

export default function CareersPage() {
  usePageMeta({
    title: "Careers — Bridgeway Technologies",
    description:
      "Build technology that actually gets used. Career opportunities for engineers and systems specialists at Bridgeway Technologies.",
  });

  return (
    <>
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-3">Careers</p>
            <h1 className="font-display text-4xl sm:text-5xl text-navy-900 mb-5 leading-tight">
              Build technology that actually gets used
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              We're a software engineering company based in Nigeria, building practical software, automation and integrations for organizations here and internationally.
            </p>
            <p className="text-base text-gray-600 leading-relaxed mb-4">
              We care about writing good software that solves genuine operational problems. We don't believe in vanity metrics, performative busyness, or building technology just because it's new.
            </p>
            <p className="text-base text-gray-500 leading-relaxed">
              If you're an engineer, architect or technical specialist who values craft, autonomy and direct problem-solving, we'd like to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* 14.2 What We Look For */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-2">Qualifications</p>
            <h2 className="font-display text-2xl sm:text-3xl text-navy-900">What we look for</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeLookFor.map((item) => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-xl p-6 shadow-2xs">
                <h3 className="text-base font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14.3 How We Work */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-2">Culture</p>
            <h2 className="font-display text-2xl sm:text-3xl text-navy-900">How we work</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyWorkWithUs.map((item) => (
              <div key={item.title} className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                <h3 className="text-base font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14.4 Open Applications */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl border border-gray-100 bg-white rounded-xl p-8 sm:p-10 shadow-2xs">
            <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-2">Open Applications</p>
            <h2 className="font-display text-2xl text-navy-900 mb-3">
              Don't see a matching role?
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              We're always interested in connecting with talented software engineers, backend developers, UI/UX engineers and systems specialists. Send your CV or portfolio to{" "}
              <a href="mailto:talent@bridgeway.tech" className="text-teal-600 font-medium hover:underline">
                talent@bridgeway.tech
              </a>{" "}
              with a brief note about what kind of work you do best.
            </p>
            <a
              href="mailto:talent@bridgeway.tech?subject=Open Application — Software Engineering"
              className="inline-flex items-center gap-2 bg-navy-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-navy-800 transition-colors"
            >
              Send an Open Application
            </a>
          </div>
        </div>
      </section>

      <CTASection
        heading="Have a problem worth solving?"
        subheading="Tell us what you're working with. We'll help you work out whether technology is the right answer — and what that answer could look like."
        primaryLabel="Start a Conversation"
        primaryHref="/contact"
        secondaryLabel="Learn More About Us"
        secondaryHref="/about"
      />
    </>
  );
}
