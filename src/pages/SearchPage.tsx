import { useState } from "react";
import { services } from "@/data/services";
import { caseStudies } from "@/data/caseStudies";
import { blogPosts } from "@/data/blog";
import { faqs } from "@/data/faqs";
import { Link } from "react-router";
import { usePageMeta } from "@/hooks/usePageMeta";

type Result = {
  type: string;
  title: string;
  description: string;
  href: string;
  label: string;
};

function buildIndex(): Result[] {
  return [
    ...services.map((s) => ({ type: "service", title: s.title, description: s.tagline, href: `/services/${s.slug}`, label: "Service" })),
    ...caseStudies.map((cs) => ({ type: "case-study", title: cs.title, description: cs.summary, href: `/case-studies/${cs.slug}`, label: "Case Study" })),
    ...blogPosts.map((p) => ({ type: "insight", title: p.title, description: p.excerpt, href: `/insights/${p.slug}`, label: "Insight" })),
    ...faqs.map((f) => ({ type: "faq", title: f.question, description: f.answer, href: `/faq`, label: "FAQ" })),
  ];
}

const index = buildIndex();

export default function SearchPage() {
  usePageMeta({ title: "Search", description: "Search services, case studies, insights and FAQs." });
  const [query, setQuery] = useState("");

  const results =
    query.length >= 2
      ? index.filter(
          (item) =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase())
        )
      : [];

  const typeColors: Record<string, string> = {
    service: "bg-teal-50 text-teal-700",
    "case-study": "bg-blue-50 text-blue-700",
    insight: "bg-purple-50 text-purple-700",
    faq: "bg-gray-100 text-gray-600",
  };

  return (
    <section className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-3">Search</p>
          <h1 className="font-display text-4xl text-navy-900 mb-6">Search the site</h1>
          <div className="relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services, case studies, insights, FAQs…"
              autoFocus
              className="w-full border border-gray-200 rounded-lg pl-11 pr-4 py-3.5 text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>

        {query.length >= 2 && results.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-2">No results for "{query}"</p>
            <p className="text-sm text-gray-400">Try searching for software, automation, analytics, or support.</p>
          </div>
        )}

        {results.length > 0 && (
          <div className="space-y-2">
            <p className="text-xs text-gray-400 mb-4">{results.length} result{results.length !== 1 ? "s" : ""} for "{query}"</p>
            {results.map((result, i) => (
              <Link
                key={`${result.href}-${i}`}
                to={result.href}
                className="flex items-start gap-4 p-4 border border-gray-100 rounded-lg hover:border-gray-200 hover:shadow-sm transition-all group"
              >
                <span className={`text-[10px] font-medium px-2 py-1 rounded flex-shrink-0 mt-0.5 ${typeColors[result.type]}`}>
                  {result.label}
                </span>
                <div>
                  <div className="text-sm font-medium text-navy-900 group-hover:text-teal-700 transition-colors">{result.title}</div>
                  <div className="text-xs text-gray-500 mt-1 line-clamp-2">{result.description}</div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {query.length < 2 && (
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            {[
              { label: "Browse Services", href: "/services" },
              { label: "View Case Studies", href: "/case-studies" },
              { label: "Read Insights", href: "/insights" },
              { label: "Frequently Asked Questions", href: "/faq" },
            ].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:border-gray-200 hover:bg-gray-50 transition-all text-sm text-navy-900 font-medium"
              >
                {link.label}
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
