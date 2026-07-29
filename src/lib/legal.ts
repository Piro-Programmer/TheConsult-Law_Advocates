/** Legal pages, verbatim from theconsult.vercel.app. */

export type LegalBlock = { heading?: string; paragraphs: string[] };

export type LegalPage = {
  slug: string;
  title: string;
  intro: string;
  blocks: LegalBlock[];
};

export const legalPages: LegalPage[] = [
  {
    slug: "disclaimer",
    title: "Disclaimer",
    intro:
      "This website, www.theconsultlaw.com, has been designed solely for informational purposes to provide users with basic details about The Consult Law, its services, and other publicly available information.",
    blocks: [
      {
        paragraphs: [
          "We have made every effort to ensure that the information presented is accurate and up-to-date. However, The Consult Law does not guarantee the completeness, accuracy, or reliability of the information and is not responsible for any consequences arising from reliance on such content. Users are encouraged to verify the information independently and consult qualified professionals for specific advice.",
          "As per the rules of the Bar Council of India, The Consult Law does not engage in solicitation, advertisement, or inducement of any form. By accessing this website, you confirm that you have sought information about The Consult Law on your own accord without any solicitation or invitation from the firm or its members. Any transmission, receipt, or use of this website does not establish a lawyer-client relationship.",
          "The materials and content provided herein should not be construed as legal advice or legal opinions in any manner. If you require legal assistance, please seek advice from a qualified professional.",
          "All content on this website, including but not limited to text, images, and downloadable materials, is the intellectual property of The Consult Law and protected under applicable laws. Any unauthorized use, reproduction, or distribution of this material is prohibited.",
          "By using this website, you agree to our Terms of Use and Privacy Policy. We may use cookies to improve your experience. Please review our Cookie Policy for more details. Your use of this site constitutes acceptance of these terms. If you have any concerns or queries, we recommend reaching out to us or seeking independent legal guidance.",
        ],
      },
    ],
  },
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    intro:
      "This Privacy Policy explains how The Consult Law (“we”, “us”, “our”) collects, uses, and protects information when you visit www.theconsultlaw.com or contact us through this website. We are committed to handling your information responsibly and in line with the Digital Personal Data Protection Act, 2023 (DPDPA) and other applicable Indian law.",
    blocks: [
      {
        heading: "Information We Collect",
        paragraphs: [
          "When you use our contact form, your message is sent directly through your own email client to info@theconsultlaw.com — we do not store contact form submissions on our servers. If you subscribe to our newsletter, the email address you provide is shared only with our content platform provider to manage your subscription and deliver updates. We do not use cookies, analytics, or third-party advertising trackers on this website; for details on the limited browser storage we do use, see our Cookie Policy.",
        ],
      },
      {
        heading: "How We Use Information",
        paragraphs: [
          "We use the information you provide only to respond to your enquiry, manage your newsletter subscription, or communicate with you about matters you have raised with us. We do not sell, rent, or share your personal information with third parties for marketing purposes.",
        ],
      },
      {
        heading: "Your Rights",
        paragraphs: [
          "Under the Digital Personal Data Protection Act, 2023, you have the right to access, correct, or request erasure of your personal data that we hold, and to withdraw consent at any time. To exercise these rights, contact us at info@theconsultlaw.com.",
        ],
      },
      {
        heading: "Data Retention",
        paragraphs: [
          "We retain personal information only for as long as necessary to fulfil the purpose for which it was collected, or as required by law.",
        ],
      },
      {
        heading: "Third-Party Links",
        paragraphs: [
          "This website may contain links to third-party services such as WhatsApp and LinkedIn. We are not responsible for the privacy practices of those third parties.",
        ],
      },
      {
        heading: "Changes to This Policy",
        paragraphs: [
          "We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised date.",
        ],
      },
      {
        heading: "Contact Us",
        paragraphs: [
          "If you have questions about this Privacy Policy, please contact us at info@theconsultlaw.com or +91-6387257840.",
        ],
      },
    ],
  },
  {
    slug: "terms-and-conditions",
    title: "Terms and Conditions",
    intro:
      "These Terms and Conditions (“Terms”) govern your use of www.theconsultlaw.com (the “Website”), operated by The Consult Law — Advocates & Solicitors. By accessing or using this Website, you agree to be bound by these Terms.",
    blocks: [
      {
        heading: "No Legal Advice",
        paragraphs: [
          "Nothing on this Website constitutes legal advice. Information provided is general in nature and should not be relied upon as a substitute for advice from a qualified legal professional regarding your specific circumstances.",
        ],
      },
      {
        heading: "No Solicitation",
        paragraphs: [
          "As required under the Bar Council of India rules, this Website does not constitute advertising, solicitation, or inducement of any kind. Access to this Website is at your own initiative, and no lawyer-client relationship is created through your use of it.",
        ],
      },
      {
        heading: "Intellectual Property",
        paragraphs: [
          "All content on this Website, including text, graphics, logos, and images, is the property of The Consult Law and is protected under applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without our prior written consent.",
        ],
      },
      {
        heading: "Acceptable Use",
        paragraphs: [
          "You agree not to use this Website in any way that could damage, disable, or impair it, or interfere with any other party's use of it.",
        ],
      },
      {
        heading: "Third-Party Links",
        paragraphs: [
          "This Website may link to third-party services, including WhatsApp and LinkedIn. We do not control and are not responsible for the content or practices of those third-party services.",
        ],
      },
      {
        heading: "Limitation of Liability",
        paragraphs: [
          "The Consult Law makes no warranties regarding the accuracy or completeness of the information on this Website and shall not be liable for any loss or damage arising from its use.",
        ],
      },
      {
        heading: "Governing Law",
        paragraphs: [
          "These Terms are governed by the laws of India, and any disputes arising from them shall be subject to the exclusive jurisdiction of the courts at New Delhi.",
        ],
      },
      {
        heading: "Changes to These Terms",
        paragraphs: [
          "We may revise these Terms at any time. Continued use of the Website after changes are posted constitutes acceptance of the revised Terms.",
        ],
      },
      {
        heading: "Contact Us",
        paragraphs: [
          "For questions about these Terms, contact us at info@theconsultlaw.com.",
        ],
      },
    ],
  },
  {
    slug: "cookie-policy",
    title: "Cookie Policy",
    intro:
      "This Cookie Policy explains how The Consult Law uses browser storage technologies on www.theconsultlaw.com.",
    blocks: [
      {
        heading: "We Do Not Use Tracking Cookies",
        paragraphs: [
          "This Website does not use cookies for analytics, advertising, or third-party tracking purposes.",
        ],
      },
      {
        heading: "Local Storage",
        paragraphs: [
          "We use your browser's local storage — a small amount of data saved by your browser, separate from cookies — for one purpose only: to remember that you have acknowledged our Bar Council of India disclaimer, so it is not shown to you again on future visits. This information stays on your device and is not transmitted to us or any third party.",
        ],
      },
      {
        heading: "Third-Party Content",
        paragraphs: [
          "Links to third-party services such as WhatsApp and LinkedIn may set their own cookies if you choose to visit those platforms. Those cookies are governed by the respective third party's own cookie and privacy policies, not this one.",
        ],
      },
      {
        heading: "Changes to This Policy",
        paragraphs: [
          "If our use of cookies or similar technologies changes in the future, this page will be updated to reflect that.",
        ],
      },
      {
        heading: "Contact Us",
        paragraphs: [
          "If you have questions about this Cookie Policy, contact us at info@theconsultlaw.com.",
        ],
      },
    ],
  },
];

export function getLegalPage(slug: string) {
  return legalPages.find((p) => p.slug === slug);
}
