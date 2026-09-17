import { useState } from "react";
import { Link } from "react-router";

const steps = [
  {
    num: "01",
    title: "Understand",
    subtitle: "Understanding how your business operates",
    description:
      "We start with how your business actually operates — your processes, tools, constraints and goals. We don't write a line of code until we understand the problem.",
    deliverables: [
      "Workflow & Process Mapping",
      "Technical Requirements Scope",
      "Clear Milestone Architecture",
    ],
    badge: "Discovery & Alignment",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&auto=format",
    alt: "African software architecture leads and consultants reviewing workflow discovery around conference table",
    location: "Initial Alignment & Scoping",
    stageTag: "Phase 01: Understand",
    metric: "Problem First",
    actionNote:
      "Reviewing existing workflows, constraints, and business goals with your key operators before architecting code.",
  },
  {
    num: "02",
    title: "Design",
    subtitle: "Architecture, workflows, and specifications",
    description:
      "We map out the architecture, user workflows and technical requirements. You see and approve what will be built before development begins.",
    deliverables: [
      "System Architecture Plan",
      "User Interface & Data Flows",
      "Documented Milestone Roadmap",
    ],
    badge: "System Design",
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop&auto=format",
    alt: "Digital system architecture plan, user flow blueprints, and technical wireframing on laptop",
    location: "Technical Architecture & Design",
    stageTag: "Phase 02: Design",
    metric: "Approved Blueprint",
    actionNote:
      "System schemas, security boundaries, and milestone roadmaps reviewed and agreed on before development starts.",
  },
  {
    num: "03",
    title: "Build",
    subtitle: "Focused, iterative engineering sprints",
    description:
      "We develop in focused, iterative sprints with regular updates and working demos. You see progress as it happens, not at a distant deadline.",
    deliverables: [
      "Iterative Working Demos",
      "Clean, Documented Code",
      "Weekly Progress Reviews",
    ],
    badge: "Engineering",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&auto=format",
    alt: "Focused developer writing clean, well-architected code on laptop in modern workspace",
    location: "Core Software Engineering",
    stageTag: "Phase 03: Build",
    metric: "Working Software",
    actionNote:
      "Clean, maintainable code with regular progress demonstrations and direct access to the engineers doing the work.",
  },
  {
    num: "04",
    title: "Launch",
    subtitle: "Careful deployment and onboarding",
    description:
      "We handle deployment, data migration, testing and team onboarding carefully to ensure a smooth transition from day one.",
    deliverables: [
      "Production Environment Setup",
      "Safe Data Migration",
      "Team Onboarding & Handoff",
    ],
    badge: "Deployment",
    image:
      "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&h=600&fit=crop&auto=format",
    alt: "African software engineering team conducting live deployment and cloud cutover on laptops",
    location: "Deployment & Go-Live",
    stageTag: "Phase 04: Launch",
    metric: "Smooth Transition",
    actionNote:
      "Carefully planned deployment, data validation, system testing, and team training to ensure operational continuity.",
  },
  {
    num: "05",
    title: "Support",
    subtitle: "Maintenance, monitoring, and improvements",
    description:
      "We don't disappear after launch. We provide ongoing maintenance, monitoring, troubleshooting and iterative improvements.",
    deliverables: [
      "Direct Support Channels",
      "System Monitoring & Backups",
      "Ongoing Maintenance & Updates",
    ],
    badge: "Long-Term Partnership",
    image:
      "https://images.unsplash.com/photo-1603969409447-ba86143a03f6?w=800&h=600&fit=crop&auto=format",
    alt: "Black male IT systems specialist at computer monitor providing rapid technical support",
    location: "Ongoing Advisory & Support",
    stageTag: "Phase 05: Support",
    metric: "Beyond Launch",
    actionNote:
      "Direct communication with our technical team, system monitoring, issue resolution, and iterative enhancements.",
  },
];

export default function InteractiveProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const current = steps[activeStep];

  return (
    <section className="py-20 bg-navy-900 text-white relative overflow-hidden">
      {/* Subtle radial ambient gradient */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-medium text-teal-400 uppercase tracking-widest mb-3">
            How we work
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-white mb-4">
            A straightforward way to build software
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            We keep the process clear, predictable and collaborative. No mystery, no inflated timelines.
          </p>
        </div>

        {/* Step Navigation Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-10">
          {steps.map((s, idx) => (
            <button
              key={s.num}
              onClick={() => setActiveStep(idx)}
              className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                activeStep === idx
                  ? "bg-navy-800 border-teal-500 shadow-lg shadow-teal-500/10"
                  : "bg-navy-950/60 border-navy-800 hover:border-navy-700 text-gray-400 hover:text-gray-200"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span
                  className={`text-xs font-mono font-semibold ${
                    activeStep === idx ? "text-teal-400" : "text-gray-500"
                  }`}
                >
                  {s.num}
                </span>
                {activeStep === idx && (
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping" />
                )}
              </div>
              <div
                className={`text-sm font-semibold ${
                  activeStep === idx ? "text-white" : "text-gray-300"
                }`}
              >
                {s.title}
              </div>
            </button>
          ))}
        </div>

        {/* Interactive Visual Stage Showcase Canvas */}
        <div className="grid lg:grid-cols-12 gap-8 items-center bg-navy-950/90 border border-navy-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
          {/* Left: Stage Details & Deliverables */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-800 text-teal-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              Stage {current.num}: {current.badge}
            </div>

            <div>
              <h3 className="font-display text-2xl sm:text-3xl text-white mb-2">
                {current.title}
              </h3>
              <p className="text-teal-400 text-sm font-medium">{current.subtitle}</p>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">{current.description}</p>

            <div className="pt-3 border-t border-navy-800/80">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Key Deliverables in Stage {current.num}:
              </div>
              <div className="space-y-2">
                {current.deliverables.map((d) => (
                  <div key={d} className="flex items-center gap-2.5 text-xs text-gray-200">
                    <span className="w-4 h-4 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center text-[10px] font-bold">
                      ✓
                    </span>
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-teal-500 text-white px-5 py-2.5 rounded-lg text-xs font-medium hover:bg-teal-400 transition-colors"
              >
                Discuss a project in this phase →
              </Link>
              <span className="text-xs text-gray-400">Milestone-based billing</span>
            </div>
          </div>

          {/* Right: Authentic Real Photographic Showcase */}
          <div className="lg:col-span-6">
            <div className="group relative rounded-xl overflow-hidden bg-navy-900 border border-navy-800 shadow-xl">
              {/* Top Bar with Live Tag */}
              <div className="px-4 py-2.5 bg-navy-950 border-b border-navy-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono text-gray-300">
                    {current.location}
                  </span>
                </div>
                <span className="text-[10px] text-teal-300 bg-teal-950 px-2 py-0.5 rounded border border-teal-800">
                  {current.stageTag}
                </span>
              </div>

              {/* Photo Showcase Container */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-navy-950">
                <img
                  src={current.image}
                  alt={current.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />
                {/* Gradient darkening at base for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/40 to-transparent" />

                {/* Top Metric Badge */}
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-teal-900/80 backdrop-blur-md px-3 py-1 rounded-md border border-teal-500/40 shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-300" />
                    {current.metric}
                  </span>
                </div>

                {/* Bottom Overlay Info Card */}
                <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-navy-900/90 backdrop-blur-md border border-white/10 text-white shadow-lg">
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <div className="text-xs font-semibold text-teal-300">
                      Phase Action & Execution:
                    </div>
                    <span className="text-[10px] text-gray-400 font-mono">
                      Phase {current.num} of 05
                    </span>
                  </div>
                  <p className="text-xs text-gray-200 leading-relaxed">
                    {current.actionNote}
                  </p>
                </div>
              </div>

              {/* Bottom Footer Status */}
              <div className="px-4 py-2.5 bg-navy-950/80 border-t border-navy-800 flex items-center justify-between text-[11px] text-gray-400">
                <span>Direct Engineering Oversight & SLA</span>
                <span className="text-teal-400">Next: Click 0{((activeStep + 1) % 5) + 1} above →</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
