import { useState } from "react";
import { Link } from "react-router";
import { company } from "@/data/company";

export default function ClientLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState<{ email: string; name: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setUser(data.data.user);
        if (data.data.token) {
          localStorage.setItem("bw_auth_token", data.data.token);
        }
      } else {
        setError(data.message || "Failed to sign in. Please check your credentials.");
      }
    } catch {
      setError("Unable to connect to server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-9 h-9 bg-navy-900 rounded flex items-center justify-center">
              <span className="text-white font-display text-sm italic">B</span>
            </div>
            <span className="font-semibold text-navy-900">{company.shortName}</span>
          </Link>
          <h1 className="font-display text-2xl text-navy-900 mb-2">Client Portal</h1>
          <p className="text-sm text-gray-500">Sign in to your client account</p>
        </div>

        <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
          <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 mb-6">
            <p className="text-xs text-amber-700 leading-relaxed">
              The client portal is currently available to existing clients with active accounts. Contact us if you need access assistance.
            </p>
          </div>

          {user ? (
            <div className="text-center py-4">
              <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="font-display text-xl text-navy-900 mb-2">Welcome back</h2>
              <p className="text-xs text-gray-500 mb-5">Signed in as {user.email}</p>
              <button
                type="button"
                onClick={() => {
                  setUser(null);
                  localStorage.removeItem("bw_auth_token");
                }}
                className="text-xs text-teal-600 hover:underline"
              >
                Sign out
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {error && (
                <div className="bg-red-50 border border-red-100 rounded-lg p-3 text-xs text-red-600">
                  {error}
                </div>
              )}
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1.5">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  autoComplete="email"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="password" className="block text-xs font-medium text-gray-700">
                    Password
                  </label>
                  <Link to="/support" className="text-xs text-teal-600 hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your password"
                  className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  autoComplete="current-password"
                />
              </div>

              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                />
                <label htmlFor="remember" className="ml-2 block text-xs text-gray-600">
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-navy-900 text-white py-2.5 rounded text-sm font-medium hover:bg-navy-800 disabled:opacity-50 transition-colors"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </form>
          )}

          <div className="mt-5 pt-5 border-t border-gray-100 text-center">
            <p className="text-xs text-gray-500">
              Need portal assistance?{" "}
              <Link to="/support" className="text-teal-600 hover:underline">
                Contact Support
              </Link>
            </p>
          </div>
        </div>

        <div className="text-center mt-6">
          <Link to="/" className="text-xs text-gray-400 hover:text-navy-900 transition-colors">
            ← Back to website
          </Link>
        </div>
      </div>
    </div>
  );
}
