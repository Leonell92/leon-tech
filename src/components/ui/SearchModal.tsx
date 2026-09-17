import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router";
import { services } from "@/data/services";
import { caseStudies } from "@/data/caseStudies";
import { blogPosts } from "@/data/blog";
import { faqs } from "@/data/faqs";

interface SearchResult {
  type: "service" | "case-study" | "insight" | "faq";
  title: string;
  description: string;
  href: string;
  label: string;
}

function buildIndex(): SearchResult[] {
  return [
    ...services.map((s) => ({
      type: "service" as const,
      title: s.title,
      description: s.tagline,
      href: `/services/${s.slug}`,
      label: "Service",
    })),
    ...caseStudies.map((cs) => ({
      type: "case-study" as const,
      title: cs.title,
      description: cs.summary,
      href: `/case-studies/${cs.slug}`,
      label: "Case Study",
    })),
    ...blogPosts.map((p) => ({
      type: "insight" as const,
      title: p.title,
      description: p.excerpt,
      href: `/insights/${p.slug}`,
      label: "Insight",
    })),
    ...faqs.map((f) => ({
      type: "faq" as const,
      title: f.question,
      description: f.answer,
      href: `/faq`,
      label: "FAQ",
    })),
  ];
}

const index = buildIndex();

function search(query: string): SearchResult[] {
  if (!query.trim() || query.length < 2) return [];
  const q = query.toLowerCase();
  return index
    .filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
    )
    .slice(0, 8);
}

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

const typeColors: Record<string, string> = {
  service: "bg-teal-50 text-teal-700",
  "case-study": "bg-blue-50 text-blue-700",
  insight: "bg-purple-50 text-purple-700",
  faq: "bg-gray-100 text-gray-600",
};

export default function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      setQuery("");
      setResults([]);
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    setResults(search(query));
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
      }
      if (!open) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, results.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      }
      if (e.key === "Enter" && results[activeIndex]) {
        navigate(results[activeIndex].href);
        onClose();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, results, activeIndex, onClose, navigate]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
        {/* Input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
          <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services, case studies and insights..."
            className="flex-1 text-sm text-navy-900 placeholder-gray-400 outline-none bg-transparent"
          />
          <button onClick={onClose} className="text-xs text-gray-400 border border-gray-200 px-1.5 py-0.5 rounded hover:border-gray-300 transition-colors">
            Esc
          </button>
        </div>

        {/* Results */}
        {query.length >= 2 && (
          <div className="max-h-80 overflow-y-auto">
            {results.length === 0 ? (
              <div className="px-5 py-8 text-center">
                <p className="text-sm text-gray-500">No results for "{query}"</p>
                <p className="text-xs text-gray-400 mt-1">Try searching for software, automation, integration, or support.</p>
              </div>
            ) : (
              <ul>
                {results.map((result, i) => (
                  <li key={`${result.href}-${i}`}>
                    <Link
                      to={result.href}
                      onClick={onClose}
                      className={`flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition-colors ${i === activeIndex ? "bg-gray-50" : ""}`}
                    >
                      <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded flex-shrink-0 mt-0.5 ${typeColors[result.type]}`}>
                        {result.label}
                      </span>
                      <div className="min-w-0">
                        <div className="text-sm font-medium text-navy-900 truncate">{result.title}</div>
                        <div className="text-xs text-gray-500 truncate mt-0.5">{result.description}</div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Footer hint */}
        {query.length < 2 && (
          <div className="px-4 py-3 border-t border-gray-50 flex items-center gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 border border-gray-200 rounded text-[10px]">↑↓</kbd> navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 border border-gray-200 rounded text-[10px]">↵</kbd> open
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 border border-gray-200 rounded text-[10px]">Esc</kbd> close
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
