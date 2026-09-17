import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { company } from "@/data/company";
import SearchModal from "@/components/ui/SearchModal";

const navLinks = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Custom Software Development", href: "/services/software-development" },
      { label: "Business Automation", href: "/services/business-automation" },
      { label: "Web Application Development", href: "/services/web-development" },
      { label: "Mobile Development", href: "/services/mobile-development" },
      { label: "Data Analytics", href: "/services/data-analytics" },
      { label: "API Integration", href: "/services/api-integration" },
      { label: "IT Support", href: "/services/it-support" },
      { label: "AI Implementation", href: "/services/ai-implementation" },
    ],
  },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? "bg-white border-b border-gray-100 shadow-sm"
            : "bg-white/95 border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 bg-navy-900 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-white font-display text-sm font-normal italic">B</span>
              </div>
              <span className="font-semibold text-navy-900 text-[15px] tracking-tight hidden sm:block">
                {company.shortName} <span className="text-gray-400 font-normal">Technologies</span>
              </span>
              <span className="font-semibold text-navy-900 text-[15px] tracking-tight sm:hidden">
                {company.shortName}
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.label} className="relative group">
                  {link.children ? (
                    <>
                      <button
                        className="flex items-center gap-1 text-sm text-gray-600 hover:text-navy-900 px-3 py-2 rounded transition-colors"
                        onMouseEnter={() => setOpenDropdown(link.label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {link.label}
                        <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div
                        className={`absolute top-full left-0 pt-1 transition-all duration-150 ${openDropdown === link.label ? "opacity-100 visible" : "opacity-0 invisible"}`}
                        onMouseEnter={() => setOpenDropdown(link.label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <div className="bg-white border border-gray-100 shadow-lg rounded-lg py-2 w-64">
                          <Link
                            to={link.href}
                            className="block px-4 py-2 text-xs font-medium text-teal-600 hover:text-teal-700 hover:bg-gray-50 border-b border-gray-50 mb-1"
                          >
                            All Services →
                          </Link>
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:text-navy-900 hover:bg-gray-50"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className={`text-sm px-3 py-2 rounded transition-colors ${
                        location.pathname === link.href
                          ? "text-navy-900 font-medium"
                          : "text-gray-600 hover:text-navy-900"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Search site"
                className="flex items-center gap-2 text-xs text-gray-400 border border-gray-200 px-3 py-1.5 rounded hover:border-gray-300 transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                Search
                <kbd className="text-[10px] border border-gray-200 px-1 rounded">⌘K</kbd>
              </button>
              <Link
                to="/client-login"
                className="text-sm text-gray-500 hover:text-navy-900 transition-colors"
              >
                Client Portal
              </Link>
              <Link
                to="/contact"
                className="text-sm font-medium bg-navy-900 text-white px-4 py-2 rounded hover:bg-navy-800 transition-colors"
              >
                Start a Conversation
              </Link>
            </div>

            {/* Mobile search */}
            <button
              onClick={() => setSearchOpen(true)}
              className="lg:hidden p-2 text-gray-500 hover:text-navy-900 transition-colors"
              aria-label="Search"
            >
              <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-navy-900 transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-200 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/20" onClick={() => setMobileOpen(false)} />
        <div
          className={`absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-xl overflow-y-auto max-h-[calc(100vh-4rem)] transition-transform duration-200 ${
            mobileOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  to={link.href}
                  className="block text-base font-medium text-navy-900 py-2.5 border-b border-gray-50"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-3 space-y-0.5 py-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block text-sm text-gray-600 py-2 hover:text-navy-900"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 space-y-2">
              <Link
                to="/contact"
                className="block text-center font-medium bg-navy-900 text-white py-3 rounded text-sm"
              >
                Start a Conversation
              </Link>
              <div className="flex gap-2">
                <Link
                  to="/client-login"
                  className="flex-1 block text-center text-sm text-gray-600 py-2 border border-gray-200 rounded"
                >
                  Client Portal
                </Link>
                <Link
                  to="/search"
                  className="flex-1 block text-center text-sm text-gray-600 py-2 border border-gray-200 rounded"
                >
                  Search
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
