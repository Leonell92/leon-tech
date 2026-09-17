import { useLocation } from "react-router";
import { company } from "@/data/company";

const currentYear = new Date().getFullYear();

const privacyContent = `
## Privacy Policy

Last updated: ${currentYear}

${company.name} ("we", "us" or "our") operates the website and provides technology services. This Privacy Policy describes how we collect, use and handle information in connection with our website and services.

## Information We Collect

We may collect the following types of information:

**Contact information.** When you submit an inquiry through our website, we collect the information you provide, including name, email address, phone number and any project details you share.

**Usage data.** We may collect information about how the website is accessed and used. This may include browser type, pages visited and time spent on pages.

**Cookies.** We use cookies to improve website functionality. See our Cookie Policy for details.

## How We Use Your Information

We use collected information to:

- Respond to inquiries and project requests
- Provide and improve our services
- Communicate with clients about active projects
- Comply with legal obligations

## Data Sharing

We do not sell personal information. We may share information with trusted third-party service providers who assist in operating our website and services, subject to appropriate confidentiality agreements.

## Data Retention

We retain personal information for as long as necessary to provide our services and comply with legal obligations.

## Your Rights

You have the right to request access to, correction of, or deletion of personal data we hold about you. Contact us at ${company.email} to exercise these rights.

## Contact

For privacy-related questions: ${company.email}
`;

const termsContent = `
## Terms of Service

Last updated: ${currentYear}

Please read these Terms of Service carefully before using the ${company.name} website or engaging our services.

## Use of Website

The content on this website is provided for general information purposes. By accessing this website, you agree to use it only for lawful purposes.

## Services

Technology services provided by ${company.name} are governed by separate engagement agreements agreed with each client. The information on this website does not constitute a contract or commitment to provide any specific service.

## Intellectual Property

The content, design and materials on this website are the property of ${company.name} and are protected by applicable intellectual property laws. You may not reproduce or distribute website content without written permission.

## Limitation of Liability

To the extent permitted by law, ${company.name} shall not be liable for indirect, incidental or consequential damages arising from use of this website.

## Changes

We reserve the right to modify these terms at any time. Continued use of the website after changes constitutes acceptance of the revised terms.

## Contact

For legal questions: ${company.email}
`;

const cookieContent = `
## Cookie Policy

Last updated: ${currentYear}

This Cookie Policy explains how ${company.name} uses cookies on our website.

## What Are Cookies

Cookies are small text files stored on your device when you visit a website. They allow the website to function correctly and help us understand how visitors use the site.

## Cookies We Use

**Essential cookies.** Required for basic website functionality. These cannot be disabled.

**Analytics cookies.** Help us understand how visitors interact with the website. These are only set if you consent.

## Managing Cookies

Most browsers allow you to control cookies through their settings. Disabling certain cookies may affect website functionality.

## Updates

We may update this Cookie Policy from time to time. The current version will always be available on this page.

## Contact

For questions about our use of cookies: ${company.email}
`;

const contentMap: Record<string, { title: string; content: string }> = {
  "/privacy-policy": { title: "Privacy Policy", content: privacyContent },
  "/terms": { title: "Terms of Service", content: termsContent },
  "/cookie-policy": { title: "Cookie Policy", content: cookieContent },
};

export default function LegalPage() {
  const { pathname } = useLocation();
  const page = contentMap[pathname];

  if (!page) return null;

  const paragraphs = page.content.trim().split("\n\n").filter(Boolean);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <h1 className="font-display text-4xl text-navy-900 mb-10">{page.title}</h1>
      <div className="space-y-4">
        {paragraphs.map((para, i) => {
          if (para.startsWith("## ")) {
            return <h2 key={i} className="font-display text-xl text-navy-900 mt-10 mb-2 first:mt-0">{para.slice(3)}</h2>;
          }
          if (para.includes("**")) {
            const parts = para.split(/\*\*(.*?)\*\*/g);
            return (
              <p key={i} className="text-sm text-gray-700 leading-relaxed">
                {parts.map((part, j) =>
                  j % 2 === 1 ? <strong key={j} className="font-semibold text-navy-900">{part}</strong> : part
                )}
              </p>
            );
          }
          return <p key={i} className="text-sm text-gray-700 leading-relaxed">{para}</p>;
        })}
      </div>
    </div>
  );
}
