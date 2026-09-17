import { Link } from "react-router";
import { company } from "@/data/company";

export default function SupportPage() {
  return (
    <section className="bg-white min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-3">Support</p>
          <h1 className="font-display text-4xl sm:text-5xl text-navy-900 mb-5">
            Technical support for Bridgeway clients
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-3">
            We provide dedicated technical support for organizations using software and systems we've built or manage.
          </p>
          <p className="text-base text-gray-500 leading-relaxed">
            Whether you need assistance with an operational issue, a scheduled update, or ongoing maintenance, our engineering team is available through the channels below.
          </p>
        </div>

        {/* 13.2 Support Channels */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="border border-gray-100 rounded-xl p-6 bg-white shadow-2xs">
            <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600 mb-4 font-bold text-xs">
              01
            </div>
            <h2 className="text-base font-semibold text-navy-900 mb-2">Priority Client Support (Email)</h2>
            <p className="text-xs text-gray-600 mb-4 leading-relaxed">
              For all technical support requests, bug reports, system maintenance inquiries and feature requests.
            </p>
            <div className="space-y-2 border-t border-gray-50 pt-3">
              <a href="mailto:support@bridgeway.tech" className="text-sm text-teal-600 hover:text-teal-700 font-medium block">
                support@bridgeway.tech
              </a>
              <p className="text-[11px] text-gray-400">
                Acknowledged within 4 business hours; resolution timeline based on severity.
              </p>
            </div>
          </div>

          <div className="border border-gray-100 rounded-xl p-6 bg-white shadow-2xs">
            <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600 mb-4 font-bold text-xs">
              02
            </div>
            <h2 className="text-base font-semibold text-navy-900 mb-2">Scheduled Technical Calls</h2>
            <p className="text-xs text-gray-600 mb-4 leading-relaxed">
              For architectural reviews, sprint planning, system walk-throughs or quarterly technology reviews.
            </p>
            <div className="border-t border-gray-50 pt-3">
              <p className="text-xs text-navy-900 font-medium">Access:</p>
              <p className="text-[11px] text-gray-500 mt-0.5">
                Available to clients with active retainer or project agreements. Book through your designated project lead.
              </p>
            </div>
          </div>

          <div className="border border-gray-100 rounded-xl p-6 bg-white shadow-2xs">
            <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600 mb-4 font-bold text-xs">
              03
            </div>
            <h2 className="text-base font-semibold text-navy-900 mb-2">Direct Project Channels</h2>
            <p className="text-xs text-gray-600 mb-4 leading-relaxed">
              Active project teams have direct access to our engineers through dedicated messaging and project tracking channels established during onboarding.
            </p>
            <div className="border-t border-gray-50 pt-3">
              <p className="text-xs text-navy-900 font-medium">Availability:</p>
              <p className="text-[11px] text-gray-500 mt-0.5">
                Configured individually for active client engineering sprints.
              </p>
            </div>
          </div>
        </div>

        {/* 13.3 What to include when requesting support */}
        <div className="border border-gray-100 rounded-xl p-8 bg-gray-50 mb-12">
          <h2 className="font-display text-xl text-navy-900 mb-4">
            What to include when requesting support
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Description of the issue or requirement",
                desc: "What happened, what was expected, and what impact it has on operations.",
              },
              {
                title: "Steps to reproduce",
                desc: "How our team can see and analyze the issue firsthand.",
              },
              {
                title: "Screenshots or error messages",
                desc: "Any visual or text error details captured from the system.",
              },
              {
                title: "Urgency level",
                desc: "Normal, high, or critical (affecting live operations).",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-gray-200/60 rounded-lg p-4">
                <div className="text-xs font-semibold text-navy-900 mb-1">{item.title}</div>
                <div className="text-xs text-gray-600 leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 13.4 Non-client inquiries */}
        <div className="border border-gray-100 rounded-xl p-8 max-w-2xl bg-white shadow-2xs">
          <h2 className="font-display text-xl text-navy-900 mb-2">Not a current client?</h2>
          <p className="text-sm text-gray-600 mb-5 leading-relaxed">
            If you're interested in exploring how Bridgeway can build, automate or support technology for your organization, start with a consultation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-navy-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-navy-800 transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </div>
    </section>
  );
}
