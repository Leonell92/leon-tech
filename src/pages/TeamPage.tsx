import { teamRoles } from "@/data/team";
import { usePageMeta } from "@/hooks/usePageMeta";
import CTASection from "@/components/sections/CTASection";

const howWeWorkWithYou = [
  {
    title: "Direct access",
    description: "You communicate directly with the engineers working on your project. No account management telephone game.",
  },
  {
    title: "Clear ownership",
    description: "Every project has a dedicated technical lead who knows your system inside and out.",
  },
  {
    title: "Consistent communication",
    description: "Regular progress updates, working demos and transparent milestone tracking throughout the engagement.",
  },
  {
    title: "Context continuity",
    description: "The same team that builds your system is available to support and iterate on it after launch.",
  },
];

export default function TeamPage() {
  usePageMeta({
    title: "Our Team — Bridgeway Technologies",
    description:
      "Bridgeway is powered by experienced software engineers, systems architects and technology specialists based in Nigeria and working remotely.",
  });

  return (
    <>
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-3">Our Team</p>
            <h1 className="font-display text-4xl sm:text-5xl text-navy-900 mb-5">
              The people behind the work
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Bridgeway is powered by experienced software engineers, systems architects and technology specialists based in Nigeria and working remotely.
            </p>
            <p className="text-base text-gray-500 leading-relaxed">
              We keep our team structure lean so clients communicate directly with the people actually writing the code and architecting the systems.
            </p>
          </div>
        </div>
      </section>

      {/* 10.2 Core Disciplines */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-2">Technical Disciplines</p>
            <h2 className="font-display text-3xl text-navy-900">Our engineering disciplines</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teamRoles.map((role) => (
              <div
                key={role.discipline}
                className="bg-white border border-gray-100 rounded-xl p-8 shadow-2xs hover:shadow-sm transition-shadow"
              >
                <h3 className="text-xl font-semibold text-navy-900 mb-3">{role.discipline}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">{role.description}</p>
                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    Core Focus Areas:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {role.focus.map((item) => (
                      <span
                        key={item}
                        className="text-xs bg-gray-50 border border-gray-200 text-gray-700 px-3 py-1 rounded-md"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10.3 How our team works with you */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-2">Client Collaboration</p>
            <h2 className="font-display text-3xl text-navy-900">How our team works with you</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howWeWorkWithYou.map((item, idx) => (
              <div
                key={item.title}
                className="border border-gray-100 rounded-xl p-6 bg-gray-50/50 hover:bg-white hover:border-gray-200 hover:shadow-xs transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center font-mono text-xs font-bold mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Interested in joining the team?"
        subheading="We're always open to hearing from talented engineers and systems specialists based in Nigeria."
        primaryLabel="Explore Careers"
        primaryHref="/careers"
        secondaryLabel="Start a Conversation"
        secondaryHref="/contact"
      />
    </>
  );
}
