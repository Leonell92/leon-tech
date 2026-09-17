import { Link } from "react-router";
import { usePageMeta } from "@/hooks/usePageMeta";
import { company } from "@/data/company";
import { teamRoles } from "@/data/team";
import CTASection from "@/components/sections/CTASection";

export default function AboutPage() {
  usePageMeta({
    title: "About Us — Bridgeway Technologies",
    description:
      "Bridgeway Technologies builds software around the way your business already operates. Sensible architectures, maintainable code, and direct communication.",
  });

  return (
    <>
      {/* 3.1 Hero */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-4">
                About Bridgeway
              </p>
              <h1 className="font-display text-4xl sm:text-5xl text-navy-900 mb-6 leading-tight">
                A technology company built for how businesses actually run.
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-5">
                Bridgeway Technologies was founded on a simple observation: most businesses don't need more complicated technology — they need technology that actually fits the way they work.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Too often, technology implementations create more problems than they solve: software nobody uses, automated workflows that break without warning, tools that cannot share data, and development agencies that vanish once the final invoice is paid.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                We take a different approach. We build software around the way your business already operates. We keep architectures sensible, code maintainable, and communication direct.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Based in Nigeria and working with organizations nationwide and internationally, we combine strong engineering capabilities with practical business sense.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-xl overflow-hidden border border-gray-100 shadow-md">
                <img
                  src="/images/hero-engineering-team.jpg"
                  alt="Nigerian software engineering team collaborating on laptops"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.2 Core Capabilities Summary */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-3">
              What we do
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-navy-900 mb-4">
              End-to-end technology capabilities
            </h2>
            <p className="text-gray-600">
              From initial problem definition through deployment, maintenance and long-term support:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Custom Software Development",
                desc: "Web applications, internal tools, portals and mobile software built to solve specific operational requirements.",
              },
              {
                title: "Business Process Automation",
                desc: "Automated workflows that eliminate repetitive manual tasks, reduce human error and speed up routine operations.",
              },
              {
                title: "Systems Integration & APIs",
                desc: "Connecting third-party platforms, payment gateways, accounting systems and internal databases so information flows freely.",
              },
              {
                title: "Data & Reporting Systems",
                desc: "Centralized databases, reporting pipelines and dashboards that turn raw operational data into clear management visibility.",
              },
              {
                title: "AI & Intelligent Automation",
                desc: "Practical AI implementation — document extraction, internal knowledge retrieval and customer inquiry triage — without unnecessary complexity.",
              },
              {
                title: "Technology Advisory & Support",
                desc: "Ongoing maintenance, monitoring, security updates and strategic technical guidance long after the initial launch.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-xl p-6 shadow-2xs">
                <h3 className="text-base font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.3 Our Approach */}
      <section id="how-we-work" className="py-16 bg-white border-b border-gray-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-3">
                How we work
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-navy-900 mb-6">
                Understand → Design → Build → Launch → Support
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                We start every engagement by spending time understanding the business — not the technology requirements, but the actual operational context, the users, the current systems and the real problem that needs solving.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Design comes next: defining the scope, architecture and implementation approach. We don't start building until there's a plan you've seen and agreed to.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We build incrementally, with regular reviews. By the time we deploy, nothing should surprise you. After launch, we remain available — for fixes, improvements and ongoing support.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { title: "Understand", text: "We start with your business — your workflows, constraints, team dynamics and goals. We don't write code until we understand the problem." },
                { title: "Design", text: "We plan the architecture, map user journeys and establish clear technical specifications. You review and sign off before development begins." },
                { title: "Build", text: "We develop iteratively, sharing working software regularly. You see progress as it happens, not at a distant deadline." },
                { title: "Launch", text: "We manage deployment, data migration and user onboarding carefully so operations continue without disruption." },
                { title: "Support", text: "We remain available after launch for maintenance, monitoring, updates and iterative improvements as your business grows." },
              ].map((step, i) => (
                <div key={step.title} className="flex items-start gap-4 p-3 rounded-lg border border-gray-100 bg-gray-50/60">
                  <div className="w-7 h-7 rounded-full bg-navy-900 text-white text-xs flex items-center justify-center flex-shrink-0 font-medium">
                    {i + 1}
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-navy-900">{step.title}: </span>
                    <span className="text-xs text-gray-700 leading-relaxed">{step.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3.4 Why Bridgeway */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-10">
            <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-3">Why work with us</p>
            <h2 className="font-display text-3xl sm:text-4xl text-navy-900">
              What makes our approach different
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Direct communication with engineers",
                desc: "You work directly with the technical team building your software. No account management telephone game.",
              },
              {
                title: "Technology that fits the business",
                desc: "We adapt our technology choices to your operational reality — not the other way around.",
              },
              {
                title: "Realistic planning and delivery",
                desc: "We set honest timelines with clear milestones. No inflated estimates, no sudden surprises.",
              },
              {
                title: "Clean, maintainable software",
                desc: "We write well-documented, sensibly architected code that your business can rely on and build upon for years.",
              },
              {
                title: "Support that outlasts the launch",
                desc: "We believe the real test of software happens after launch. We stay committed to keeping your systems running.",
              },
              {
                title: "Honest guidance",
                desc: "If a simple spreadsheet or an off-the-shelf tool solves your problem better than custom software, we'll tell you.",
              },
            ].map((reason) => (
              <div key={reason.title} className="bg-white border border-gray-100 rounded-xl p-6 shadow-2xs">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                  <h3 className="text-sm font-semibold text-navy-900">{reason.title}</h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.5 Our Journey (Replaces Timeline) */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-3">Our Journey</p>
            <h2 className="font-display text-3xl sm:text-4xl text-navy-900 mb-6">
              Built on solving real problems
            </h2>
          </div>
          <div className="space-y-5 text-gray-600 text-base leading-relaxed">
            <p>
              Bridgeway Technologies was started by software engineers who saw a consistent gap between what businesses needed from technology and what was typically delivered.
            </p>
            <p>
              Too many projects ended with expensive software that didn't match the company's workflows, integrations that broke constantly, or agencies that moved on before the system was truly stable.
            </p>
            <p>
              We built Bridgeway to do the opposite: take the time to understand the business first, build only what is genuinely needed, use proven and reliable technologies, and provide dependable support long after launch.
            </p>
            <p>
              Today, we work with businesses and organizations across Nigeria and remotely worldwide — delivering custom software, automating operations, integrating systems and providing ongoing technical support.
            </p>
          </div>
        </div>
      </section>

      {/* 3.6 Standards We Build By */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-12">
            <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-3">Engineering Standards</p>
            <h2 className="font-display text-3xl sm:text-4xl text-navy-900 mb-3">
              What you can count on in every project
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {company.standards.map((item) => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-xl p-6 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-xs mb-3">
                  ✓
                </div>
                <h3 className="text-sm font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Disciplines Preview */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-3">Team</p>
              <h2 className="font-display text-3xl sm:text-4xl text-navy-900">The people behind the work</h2>
              <p className="text-sm text-gray-600 mt-2 max-w-xl">
                Bridgeway is powered by experienced software engineers, systems architects and technology specialists based in Nigeria and working remotely.
              </p>
            </div>
            <Link to="/team" className="hidden sm:inline-flex items-center gap-1.5 text-sm text-navy-900 font-medium hover:text-teal-600 transition-colors">
              Explore Our Team →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamRoles.map((role) => (
              <div key={role.discipline} className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                <h3 className="text-base font-semibold text-navy-900 mb-2">{role.discipline}</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">{role.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {role.focus.map((f) => (
                    <span key={f} className="text-[10px] bg-white border border-gray-200 text-gray-700 px-2 py-0.5 rounded">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link to="/team" className="text-sm text-teal-600 font-medium hover:underline">
              Explore Our Team →
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
