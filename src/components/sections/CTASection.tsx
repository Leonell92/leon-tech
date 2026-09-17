import { Link } from "react-router";

interface CTASectionProps {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  dark?: boolean;
}

export default function CTASection({
  eyebrow = "Let's talk",
  heading = "Have a problem worth solving?",
  subheading = "Tell us what you're working with. We'll help you work out whether technology is the right answer — and what that answer could look like.",
  primaryLabel = "Start a Conversation",
  primaryHref = "/contact",
  secondaryLabel = "Explore Our Services",
  secondaryHref = "/services",
  dark = true,
}: CTASectionProps) {
  return (
    <section className={`py-20 ${dark ? "bg-navy-900" : "bg-gray-50 border-t border-gray-100"}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {eyebrow && (
          <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${dark ? "text-teal-400" : "text-teal-700"}`}>
            {eyebrow}
          </p>
        )}
        <h2
          className={`font-display text-3xl sm:text-4xl mb-4 ${dark ? "text-white" : "text-navy-900"}`}
        >
          {heading}
        </h2>
        <p className={`text-lg mb-8 max-w-xl mx-auto ${dark ? "text-gray-300" : "text-gray-600"}`}>
          {subheading}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to={primaryHref}
            className={`inline-flex items-center gap-2 px-7 py-3.5 rounded text-sm font-medium transition-colors ${
              dark
                ? "bg-teal-500 text-white hover:bg-teal-600"
                : "bg-navy-900 text-white hover:bg-navy-800"
            }`}
          >
            {primaryLabel}
          </Link>
          <Link
            to={secondaryHref}
            className={`inline-flex items-center gap-2 px-7 py-3.5 rounded text-sm font-medium transition-colors ${
              dark
                ? "border border-white/20 text-white hover:bg-white/5"
                : "border border-gray-200 text-navy-900 hover:border-navy-300 hover:bg-white"
            }`}
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
