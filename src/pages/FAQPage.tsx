import { useState } from "react";
import { faqs } from "@/data/faqs";
import CTASection from "@/components/sections/CTASection";

const categories = [
  "All",
  "Getting Started",
  "Technical & Delivery",
  "Pricing & Commercial",
  "Support & Maintenance",
];

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? faqs : faqs.filter((f) => f.category === activeCategory);

  return (
    <>
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-3">
              Frequently Asked Questions
            </p>
            <h1 className="font-display text-4xl sm:text-5xl text-navy-900 mb-5">
              Clear answers to common questions
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-3">
              We believe in straightforward communication from the start. Here are answers to the questions clients ask most frequently about our services, process, pricing and working relationship.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              If you have a question that isn't answered here, contact us directly and an engineer will reply.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 flex-wrap mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setOpenFaq(null); }}
                className={`text-xs sm:text-sm px-4 py-2 rounded-lg border transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? "bg-navy-900 text-white border-navy-900 shadow-xs"
                    : "border-gray-200 text-gray-600 hover:border-gray-300 bg-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="divide-y divide-gray-100 border border-gray-100 rounded-xl overflow-hidden">
            {filtered.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex items-center justify-between w-full px-6 py-5 text-left hover:bg-gray-50 transition-colors group cursor-pointer"
                  aria-expanded={openFaq === i}
                >
                  <span className="text-sm font-medium text-navy-900 pr-4 group-hover:text-teal-700 transition-colors">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed bg-gray-50 border-t border-gray-100">
                    <div className="pt-3">{faq.answer}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Have a question that isn't answered here?"
        subheading="Reach out to our team. We're happy to discuss your specific situation and give you a straight answer."
        primaryLabel="Start a Conversation"
        primaryHref="/contact"
        secondaryLabel="Explore Our Services"
        secondaryHref="/services"
      />
    </>
  );
}
