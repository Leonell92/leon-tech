import { useState } from "react";

const heroViews = [
  {
    id: "engineering",
    label: "Engineering Team",
    image: "/images/hero-engineering-team.jpg",
    alt: "Nigerian software engineering team collaborating on laptops in modern office",
    tag: "Engineering Hub · Nigeria",
    title: "Dedicated Nigerian Engineering Team",
    metric: "Direct Collaboration",
    submetric: "Serving Businesses Across Nigeria & Internationally",
    footerLeft: "Active Engineering Capacity",
    footerRight: "Remote-Capable · Nigeria-Based",
  },
  {
    id: "development",
    label: "Software Development",
    image: "/images/hero-software-dev.jpg",
    alt: "Young Nigerian male software engineer writing code on laptop in workspace",
    tag: "Custom Systems",
    title: "Software Built Around Your Workflow",
    metric: "Production-Ready",
    submetric: "Python · TypeScript · React · Node.js · PostgreSQL",
    footerLeft: "Built for Reliability",
    footerRight: "Clean Architecture · Documented Code",
  },
  {
    id: "strategy",
    label: "How We Work",
    image: "/images/hero-how-we-work.jpg",
    alt: "Young Nigerian male tech lead and engineer collaborating on system architecture at modern workstation",
    tag: "Direct Engagement",
    title: "Clear Communication, Every Step",
    metric: "No Guesswork",
    submetric: "Structured Delivery · Direct Engineer Access",
    footerLeft: "Predictable Timelines",
    footerRight: "Regular Updates · Clear Milestones",
  },
];

export default function HeroInteractiveShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = heroViews[activeIdx];

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none group">
      {/* Ambient background glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-teal-500/25 via-navy-700/30 to-teal-400/25 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Main Showcase Container */}
      <div className="relative rounded-2xl bg-white border border-gray-100 shadow-2xl overflow-hidden">
        {/* Interactive View Switcher Bar */}
        <div className="px-4 py-3 bg-navy-900 border-b border-navy-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-gray-200">Bridgeway Technologies · Nigeria</span>
          </div>

          <div className="flex items-center bg-navy-950 p-1 rounded-lg border border-navy-800">
            {heroViews.map((view, idx) => (
              <button
                key={view.id}
                onClick={() => setActiveIdx(idx)}
                className={`px-2.5 py-1 text-[11px] font-medium rounded-md transition-all cursor-pointer ${
                  activeIdx === idx
                    ? "bg-teal-600 text-white shadow-xs"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {view.label}
              </button>
            ))}
          </div>
        </div>

        {/* Real Photographic Showcase Image Container */}
        <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-navy-950">
          <img
            src={current.image}
            alt={current.alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="eager"
          />
          {/* Subtle cinematic gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />

          {/* Top Tag Badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-navy-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 shadow-md">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              {current.tag}
            </span>
          </div>

          {/* Bottom Card Information Overlay */}
          <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-navy-900/85 backdrop-blur-md border border-white/10 text-white shadow-xl">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h4 className="text-sm sm:text-base font-semibold text-white leading-tight mb-1">
                  {current.title}
                </h4>
                <p className="text-xs text-gray-300">
                  {current.submetric}
                </p>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-xs text-teal-400 font-mono uppercase tracking-wider font-semibold">
                  Standard
                </div>
                <div className="text-xs font-bold text-white">
                  {current.metric}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Footer Banner with live stats */}
        <div className="px-5 py-3.5 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs text-navy-900">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-500" />
            <span className="font-medium">{current.footerLeft}</span>
          </div>
          <span className="text-gray-500">{current.footerRight}</span>
        </div>
      </div>

      {/* Floating Real-Time Credibility Badge */}
      <div className="absolute -bottom-5 -left-4 bg-white border border-gray-100 shadow-xl rounded-xl px-4 py-3 flex items-center gap-3 transition-transform duration-300 hover:scale-105">
        <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600 flex-shrink-0">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <div className="text-xs font-semibold text-navy-900">Nigeria-based · Remote Worldwide</div>
          <div className="text-[10px] text-gray-500">Direct communication · Documented delivery</div>
        </div>
      </div>
    </div>
  );
}
