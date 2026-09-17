import { usePageMeta } from "@/hooks/usePageMeta";
import CTASection from "@/components/sections/CTASection";

const valueCards = [
  {
    num: "01",
    title: "Direct access to the people doing the work",
    description:
      "When you work with Bridgeway, you talk to the engineers actually writing your code and designing your systems. No layers of account managers, no distorted requirements, no delays in getting technical answers.",
  },
  {
    num: "02",
    title: "Realistic planning and predictable delivery",
    description:
      "We scope projects carefully before work begins. If a deadline or requirement changes, we tell you immediately — not at the final milestone. You see working software as it's built, not on launch day.",
  },
  {
    num: "03",
    title: "Software designed for real users",
    description:
      "We build software that respects how people actually work. That means intuitive interfaces, fast load times, minimal training requirements, and features that solve genuine operational bottlenecks.",
  },
  {
    num: "04",
    title: "Honest advice — even when it means less work for us",
    description:
      "If a problem can be solved with a simple tool, an existing platform, or a process change rather than custom software, we'll say so. We're interested in solving the problem, not maximizing project scope.",
  },
  {
    num: "05",
    title: "We stay after the launch",
    description:
      "A launch is the beginning of a system's life, not the end of our involvement. We provide ongoing support, monitoring, maintenance and iterative improvements so your systems continue to perform as your business evolves.",
  },
];

export default function TestimonialsPage() {
  usePageMeta({
    title: "What Clients Value — Bridgeway Technologies",
    description:
      "Technology projects succeed or fail based on how well the team executes, communicates and solves real problems. What clients appreciate about working with Bridgeway.",
  });

  return (
    <>
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-3">
              What clients value
            </p>
            <h1 className="font-display text-4xl sm:text-5xl text-navy-900 mb-5">
              A straightforward way to work
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Technology projects succeed or fail based on how well the team executes, communicates and solves real problems. Here is what clients appreciate most about working with Bridgeway:
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valueCards.map((card) => (
              <div
                key={card.num}
                className="bg-white border border-gray-100 rounded-xl p-8 shadow-2xs hover:shadow-md transition-shadow"
              >
                <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center font-mono text-xs font-bold mb-5">
                  {card.num}
                </div>
                <h2 className="text-lg font-semibold text-navy-900 mb-3 leading-snug">
                  {card.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
