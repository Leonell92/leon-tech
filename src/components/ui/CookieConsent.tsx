import { useState, useEffect } from "react";
import { Link } from "react-router";

const STORAGE_KEY = "bt_cookie_consent";

type ConsentState = "accepted" | "rejected" | null;

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ConsentState;
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 z-50 max-w-lg sm:left-6 sm:bottom-6 sm:right-auto"
    >
      <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-5">
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          We use essential cookies to make this website work. We may also use analytics cookies to understand how visitors use the site — these are only set with your consent.{" "}
          <Link to="/cookie-policy" className="text-teal-600 hover:underline">
            Cookie Policy
          </Link>
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={accept}
            className="text-sm font-medium bg-navy-900 text-white px-4 py-2 rounded hover:bg-navy-800 transition-colors"
          >
            Accept all
          </button>
          <button
            onClick={reject}
            className="text-sm text-gray-500 border border-gray-200 px-4 py-2 rounded hover:border-gray-300 transition-colors"
          >
            Essential only
          </button>
        </div>
      </div>
    </div>
  );
}
