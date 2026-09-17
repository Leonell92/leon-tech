import { useState } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { company, budgetOptions, timelineOptions, referralOptions } from "@/data/company";
import { services } from "@/data/services";

type FormState = "idle" | "loading" | "success" | "error";

const industries = [
  "Financial Services", "Logistics & Transportation", "Education", "Healthcare",
  "Retail & E-commerce", "Professional Services", "Hospitality", "Nonprofits & NGOs",
  "Corporate Organization", "Other",
];

export default function ContactPage() {
  usePageMeta({ title: "Request a Consultation", description: "Submit a project inquiry to Bridgeway Technologies. Tell us about your organization and what you're trying to solve." });
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", industry: "",
    service: "", budget: "", timeline: "", description: "", referral: "",
  });

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (!form.description.trim()) e.description = "Please describe your project.";
    if (form.description.trim().length < 20) e.description = "Please provide a bit more detail.";
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((err) => { const n = { ...err }; delete n[name]; return n; });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length) { setErrors(validation); return; }
    setFormState("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setFormState("success");
      } else {
        if (data.errors) {
          setErrors(data.errors);
        }
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Left */}
          <div>
            <p className="text-xs font-medium text-teal-600 uppercase tracking-widest mb-3">Contact</p>
            <h1 className="font-display text-3xl sm:text-4xl text-navy-900 mb-5">
              Request a Consultation
            </h1>
            <p className="text-gray-600 leading-relaxed mb-8">
              Tell us about your organization and what you're trying to solve. We'll review your inquiry and respond within one business day.
            </p>

            <div className="space-y-6">
              <div>
                <div className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-1.5">General Inquiries</div>
                <a href={`mailto:${company.email}`} className="text-sm font-medium text-navy-900 hover:text-teal-600 transition-colors">
                  {company.email}
                </a>
              </div>

              <div>
                <div className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-1.5">Technical Support</div>
                <a href={`mailto:${company.supportEmail || "support@bridgeway.tech"}`} className="text-sm font-medium text-navy-900 hover:text-teal-600 transition-colors">
                  {company.supportEmail || "support@bridgeway.tech"}
                </a>
              </div>

              {company.phone && (
                <div>
                  <div className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-1.5">Phone</div>
                  <a href={`tel:${company.phone}`} className="text-sm font-medium text-navy-900 hover:text-teal-600 transition-colors">
                    {company.phone}
                  </a>
                </div>
              )}

              <div>
                <div className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-1.5">Location</div>
                <p className="text-sm text-navy-900">{company.location}</p>
              </div>

              <div>
                <div className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-1.5">Business Hours</div>
                <p className="text-sm text-navy-900">{company.businessHours}</p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500 leading-relaxed">
                  When you consult with us, you speak directly with people who build and architect software, not a high-pressure sales team.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {formState === "success" ? (
              <div className="min-h-[500px] flex items-center justify-center">
                <div className="text-center max-w-md">
                  <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-5">
                    <svg className="w-7 h-7 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="font-display text-2xl text-navy-900 mb-3">Inquiry received</h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Thank you for getting in touch. We'll review your project inquiry and respond within one business day.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name" name="name" type="text" value={form.name} onChange={handleChange}
                      placeholder="Your full name"
                      className={`w-full border rounded px-3 py-2.5 text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition ${errors.name ? "border-red-300" : "border-gray-200"}`}
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-xs font-medium text-gray-700 mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      id="company" name="company" type="text" value={form.company} onChange={handleChange}
                      placeholder="Your organization"
                      className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1.5">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email" name="email" type="email" value={form.email} onChange={handleChange}
                      placeholder="you@company.com"
                      className={`w-full border rounded px-3 py-2.5 text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 ${errors.email ? "border-red-300" : "border-gray-200"}`}
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1.5">
                      Phone Number <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <input
                      id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
                      placeholder="e.g. +234 801 234 5678"
                      className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  {/* Industry */}
                  <div>
                    <label htmlFor="industry" className="block text-xs font-medium text-gray-700 mb-1.5">Industry</label>
                    <select
                      id="industry" name="industry" value={form.industry} onChange={handleChange}
                      className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
                    >
                      <option value="">Select your industry</option>
                      {industries.map((i) => <option key={i} value={i}>{i}</option>)}
                    </select>
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className="block text-xs font-medium text-gray-700 mb-1.5">Service Required</label>
                    <select
                      id="service" name="service" value={form.service} onChange={handleChange}
                      className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => <option key={s.slug} value={s.slug}>{s.shortTitle}</option>)}
                      <option value="not_sure">Not sure yet</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label htmlFor="budget" className="block text-xs font-medium text-gray-700 mb-1.5">Estimated Budget</label>
                    <select
                      id="budget" name="budget" value={form.budget} onChange={handleChange}
                      className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
                    >
                      <option value="">Select a range (optional)</option>
                      {budgetOptions.map((b) => <option key={b.value} value={b.value}>{b.label}</option>)}
                    </select>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label htmlFor="timeline" className="block text-xs font-medium text-gray-700 mb-1.5">Desired Timeline</label>
                    <select
                      id="timeline" name="timeline" value={form.timeline} onChange={handleChange}
                      className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
                    >
                      <option value="">Select a timeline (optional)</option>
                      {timelineOptions.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-xs font-medium text-gray-700 mb-1.5">
                    Project Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="description" name="description" rows={5} value={form.description} onChange={handleChange}
                    placeholder="Describe your organization, the problem you're trying to solve, and what kind of solution you have in mind..."
                    className={`w-full border rounded px-3 py-2.5 text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none ${errors.description ? "border-red-300" : "border-gray-200"}`}
                  />
                  {errors.description && <p className="text-xs text-red-500 mt-1">{errors.description}</p>}
                </div>

                {/* Referral */}
                <div>
                  <label htmlFor="referral" className="block text-xs font-medium text-gray-700 mb-1.5">How did you hear about us?</label>
                  <select
                    id="referral" name="referral" value={form.referral} onChange={handleChange}
                    className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
                  >
                    <option value="">Select an option (optional)</option>
                    {referralOptions.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)}
                  </select>
                </div>

                {formState === "error" && (
                  <div className="bg-red-50 border border-red-100 rounded-lg p-4 text-sm text-red-600">
                    Something went wrong. Please try again or contact us directly at {company.email}.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-navy-900 text-white px-8 py-3.5 rounded text-sm font-medium hover:bg-navy-800 disabled:opacity-50 disabled:pointer-events-none transition-colors"
                >
                  {formState === "loading" ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Submitting...
                    </>
                  ) : "Submit Project Inquiry"}
                </button>
                <p className="text-xs text-gray-400">
                  We respond to all inquiries within one business day. Your information is handled securely and not shared with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
