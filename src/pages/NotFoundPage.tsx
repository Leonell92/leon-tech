import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-display text-gray-100 mb-6 select-none">404</div>
        <h1 className="font-display text-2xl text-navy-900 mb-3">Page not found</h1>
        <p className="text-gray-600 text-sm leading-relaxed mb-8">
          The page you're looking for may have moved or no longer exists. If you followed a link that brought you here, please let us know.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-navy-900 text-white px-6 py-2.5 rounded text-sm font-medium hover:bg-navy-800 transition-colors"
          >
            Back to Home
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 border border-gray-200 text-navy-900 px-6 py-2.5 rounded text-sm font-medium hover:border-gray-300 transition-colors"
          >
            Explore Services
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-gray-200 text-navy-900 px-6 py-2.5 rounded text-sm font-medium hover:border-gray-300 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
