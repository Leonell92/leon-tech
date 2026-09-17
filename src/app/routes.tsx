import { createBrowserRouter } from "react-router";
import { lazy, Suspense } from "react";
import Layout from "@/components/layout/Layout";

const lazyPage = (factory: () => Promise<{ default: React.ComponentType }>) => {
  const Page = lazy(factory);
  return () => (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-6 h-6 border-2 border-gray-200 border-t-teal-500 rounded-full animate-spin" /></div>}>
      <Page />
    </Suspense>
  );
};

const HomePage = lazyPage(() => import("@/pages/HomePage"));
const AboutPage = lazyPage(() => import("@/pages/AboutPage"));
const ServicesPage = lazyPage(() => import("@/pages/ServicesPage"));
const ServiceDetailPage = lazyPage(() => import("@/pages/ServiceDetailPage"));
const SolutionsPage = lazyPage(() => import("@/pages/SolutionsPage"));
const IndustriesPage = lazyPage(() => import("@/pages/IndustriesPage"));
const IndustryDetailPage = lazyPage(() => import("@/pages/IndustryDetailPage"));
const CaseStudiesPage = lazyPage(() => import("@/pages/CaseStudiesPage"));
const CaseStudyDetailPage = lazyPage(() => import("@/pages/CaseStudyDetailPage"));
const TestimonialsPage = lazyPage(() => import("@/pages/TestimonialsPage"));
const TeamPage = lazyPage(() => import("@/pages/TeamPage"));
const CareersPage = lazyPage(() => import("@/pages/CareersPage"));
const InsightsPage = lazyPage(() => import("@/pages/InsightsPage"));
const ArticlePage = lazyPage(() => import("@/pages/ArticlePage"));
const FAQPage = lazyPage(() => import("@/pages/FAQPage"));
const ContactPage = lazyPage(() => import("@/pages/ContactPage"));
const SupportPage = lazyPage(() => import("@/pages/SupportPage"));
const PartnershipsPage = lazyPage(() => import("@/pages/PartnershipsPage"));
const ClientLoginPage = lazyPage(() => import("@/pages/ClientLoginPage"));
const LegalPage = lazyPage(() => import("@/pages/LegalPages"));
const PricingPage = lazyPage(() => import("@/pages/PricingSection"));
const SearchPage = lazyPage(() => import("@/pages/SearchPage"));
const NotFoundPage = lazyPage(() => import("@/pages/NotFoundPage"));

export const router = createBrowserRouter([
  {
    path: "/client-login",
    Component: ClientLoginPage,
  },
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "services", Component: ServicesPage },
      { path: "services/:slug", Component: ServiceDetailPage },
      { path: "solutions", Component: SolutionsPage },
      { path: "industries", Component: IndustriesPage },
      { path: "industries/:slug", Component: IndustryDetailPage },
      { path: "case-studies", Component: CaseStudiesPage },
      { path: "case-studies/:slug", Component: CaseStudyDetailPage },
      { path: "testimonials", Component: TestimonialsPage },
      { path: "team", Component: TeamPage },
      { path: "careers", Component: CareersPage },
      { path: "insights", Component: InsightsPage },
      { path: "insights/:slug", Component: ArticlePage },
      { path: "faq", Component: FAQPage },
      { path: "contact", Component: ContactPage },
      { path: "support", Component: SupportPage },
      { path: "partnerships", Component: PartnershipsPage },
      { path: "pricing", Component: PricingPage },
      { path: "search", Component: SearchPage },
      { path: "privacy-policy", Component: LegalPage },
      { path: "terms", Component: LegalPage },
      { path: "cookie-policy", Component: LegalPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
