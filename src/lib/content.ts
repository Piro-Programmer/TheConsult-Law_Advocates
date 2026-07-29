/**
 * The Consult Law — site content, taken verbatim from theconsult.vercel.app.
 * Presentation lives in the components; nothing here is rewritten or invented.
 */

export const site = {
  name: "The Consult Law",
  legalName: "The Consult Law — Advocates & Solicitors",
  title: "The Consult Law — Advocates & Solicitors | Leaving the curve behind",
  description:
    "The Consult Law advises on intellectual property, technology law, dispute resolution, and corporate matters — for founders filing their first patent and enterprises managing a decade of litigation alike.",
  logo: "/images/logo/theconsultlaw.png",
} as const;

export const contact = {
  email: "info@theconsultlaw.com",
  phones: ["+91-6387257840", "+91-9355776931"],
  whatsapp: "https://wa.me/9355776931",
  addressLines: [
    "Chamber no. 401, Additional Building Complex",
    "Supreme Court of India – 110001",
  ],
  hours: ["Monday — Friday", "09:00 — 18:00"],
} as const;

export const nav = [
  { label: "About Us", href: "/about" },
  { label: "People", href: "/people" },
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerMenu = [
  { number: "001", label: "About Us", href: "/about" },
  { number: "002", label: "Services", href: "/services" },
  { number: "003", label: "People", href: "/people" },
  { number: "004", label: "Industries", href: "/practice-areas" },
  { number: "005", label: "Blogs", href: "/blogs" },
  { number: "006", label: "Contact", href: "/contact" },
  { number: "007", label: "Book a Consultation", href: "/book-consultation" },
] as const;

export const legalLinks = [
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Sitemap", href: "/sitemap.xml" },
] as const;

/* Bar Council of India requires this gate before a law firm's site content. */
export const disclaimer = {
  title: "Bar Council of India Disclaimer",
  body: "As per the rules of the Bar Council of India, The Consult Law does not engage in solicitation, advertisement, or inducement of any form. By accessing this website, you confirm that you have sought information about The Consult Law on your own accord, without any solicitation or invitation from the firm or its members. Any transmission, receipt, or use of this website does not create a lawyer-client relationship.",
  note: "The content on this website is for informational purposes only and should not be construed as legal advice.",
  linkLabel: "Read the full disclaimer.",
  linkHref: "/disclaimer",
  agree: "I Agree",
  decline: "Decline",
} as const;

export const hero = {
  eyebrow: "Leaving the curve behind",
  location: "New Delhi",
  heading: "Trusted partners in achieving legal success.",
  body: "The Consult Law advises on intellectual property, technology law, dispute resolution, and corporate matters — for founders filing their first patent and enterprises managing a decade of litigation alike.",
  primaryCta: { label: "Book Consultation", href: "/book-consultation" },
  secondaryCta: { label: "Explore our services", href: "/services" },
  /* Advocacy's hero banner (1932x2415). Its two per-breakpoint crops are
     applied as object-position in the component. From the template's bundled
     photography — see README. */
  image: "/images/stock/uYK7LEfTSMXgq76tSSgRQqLNHw.jpg",
  /* Advocacy's "BG Image Wrapper" — a transparent 1420x1610 overlay that sits
     behind the whole hero, giving the panel its soft arc. */
  backgroundShape: "/images/stock/iHS2dO88UwPR9MVEtgoa5JPI.webp",
} as const;

export const aboutIntro = {
  label: "About us",
  body: "We work across data protection, privacy, technology law, AI, construction law, and intellectual property rights. Most of it overlaps — a single dispute can touch three of these at once — which is why we built one team instead of six separate practices. Clients usually come to us once a problem is already underway, not while they're still deciding whether it matters.",
} as const;

export type Industry = {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  /** From the Advocacy template's bundled photography — see README. */
  image: string;
};

export const industries: Industry[] = [
  {
    title: "Intellectual Property Rights",
    slug: "intellectual-property-rights",
    description:
      "Protecting patents, copyrights, designs, and trademarks with strategic, business-focused counsel.",
    tags: ["Patents", "Copyright", "Designs", "Trademarks"],
    image: "/images/stock/LM45Wf7PSurC386bcvDhFYkh27E.jpg",
  },
  {
    title: "Dispute Resolution",
    slug: "dispute-resolution",
    description:
      "Strategic representation in arbitration, litigation, and economic offences across Indian courts and tribunals.",
    tags: ["Arbitration", "Litigation", "Economic Offences"],
    image: "/images/stock/n961Na8eh4CHMwT3xywOmrcwc.jpg",
  },
  {
    title: "Technology Law",
    slug: "technology-law",
    description:
      "Regulatory and compliance counsel for AI, cybersecurity, FinTech, e-commerce, and data protection.",
    tags: [
      "AI Regulation",
      "Cyber Security",
      "FinTech",
      "E-commerce",
      "Data Protection and Privacy",
    ],
    image: "/images/stock/PBDQircfSMVtw37dLDHUoMUsII.jpg",
  },
  {
    title: "Corporate",
    slug: "corporate",
    description:
      "Governance, transactions, competition compliance, audits, and policy drafting for growing businesses.",
    tags: [
      "Anti-Trust and Competition",
      "Corporate Law",
      "Commercial Law",
      "Legal Audit & Due Diligence",
      "Report & Policy Drafting",
    ],
    image: "/images/stock/chIcsMfcbyW9FJYxZOiWETlAY.jpg",
  },
];

export const sectorsSection = {
  label: "Sectors we serve",
  body: "With a reputation for excellence, The Consult Law — Advocates & Solicitors continues to evolve as a dynamic and client-focused legal entity, committed to delivering top-tier legal services across a broad spectrum of sectors.",
  rows: [
    ["Aviation Sector", "Core Industries", "Textile Industry", "Brewery Industry"],
    [
      "Pharmaceutical and Food Industry",
      "Corporates, Startups & MSMEs",
      "Automobile Sector",
      "IT & Data Protection",
    ],
    [
      "Real Estate, Infrastructure & Construction",
      "Media & Entertainment",
      "Hospitality & Tourism",
      "Education & EdTech",
    ],
  ],
} as const;

export const howWeWork = {
  label: "How we work",
  heading: "Legal clarity built on strategy and trust.",
  cta: { label: "Book Consultation", href: "/book-consultation" },
  image: "/images/how-we-work.png",
  steps: [
    {
      title: "Case Analysis",
      body: "We break down your situation in detail, identifying risks, opportunities, and legal priorities.",
    },
    {
      title: "Strategy Plannings",
      body: "We build a tailored legal roadmap that aligns with your business and long-term protection.",
    },
    {
      title: "Action Implementation",
      body: "We execute legal processes with precision, ensuring every step is handled correctly and on time.",
    },
    {
      title: "Outcome Optimization",
      body: "We review results and adjust strategy to secure the strongest possible legal position.",
    },
  ],
} as const;

export const advisorsSection = {
  label: "Our advisors",
  heading: "Our Advisors.",
  body: "As a full-service law firm, we represent individuals, businesses, and institutions across a broad spectrum of legal areas with a focus on practical solutions and strategic results.",
  /** From the Advocacy template's bundled photography — see README. */
  image: "/images/stock/YkDSIBKiPqbDr6chHpWAtgiOQ7s.jpg",
  people: [
    {
      name: "Ryan Singh",
      slug: "ryan-singh",
      role: "Partner",
      image: "/images/team/ryan-singh.png",
    },
    {
      name: "Abhijeet Singh Chauhan",
      slug: "abhijeet-singh-chauhaan",
      role: "Associate Partner",
      image: "/images/team/abhijeet-singh-chauhan.png",
    },
  ],
} as const;

export const legalExpertise = {
  label: "Legal expertise",
  heading: "Professional legal support with clarity and precision.",
  subheading: "Delivering legal clarity with trusted professional support.",
  image: "/images/legal-expertise.png",
  /* Figures are the live site's count-up targets — it server-renders 0 and
     animates up, which is why the raw HTML shows zeros. */
  stats: [
    {
      value: 50,
      suffix: "+",
      label: "Trusted Clients",
      body: "Supporting businesses, founders, and private clients with strategic legal guidance and long-term protection.",
    },
    {
      value: 10,
      suffix: "+",
      label: "Years of Experience",
      body: "Combining legal expertise, business understanding, and modern advisory solutions for every client.",
    },
    {
      value: 4,
      suffix: "",
      label: "Industries",
      body: "Comprehensive expertise across intellectual property, dispute resolution, technology law, and corporate practice.",
    },
  ],
} as const;

export const blogsSection = {
  label: "Blogs",
  heading: "Perspectives on the law that matters to your business.",
  cta: { label: "View all insights", href: "/blogs" },
  posts: [
    {
      category: "Audit & Evaluation",
      title: "Starting a Business in India: Legal Checklist for Entrepreneurs",
      excerpt:
        "India's startup ecosystem is booming, and entrepreneurs are building innovative solutions across every industry. But in the excitement of launching a new venture, many overlook the legal foundation required to build a compliant, protected, and scalable business.",
      author: "Ryan singh",
      date: "July 25, 2026",
      href: "/blogs/starting-a-business-in-india-legal-checklist-for-entrepreneurs",
    },
    {
      category: "Audit & Evaluation",
      title: "The Legal Side of Mergers and Acquisitions: What Every CEO Must Know",
      excerpt:
        "Mergers and acquisitions (M&A) are among the most powerful strategic tools available to CEOs today. Whether you're acquiring a competitor, merging with a synergistic partner, or preparing for an exit, M&A can redefine the trajectory of your business.",
      author: "Ryan singh",
      date: "July 25, 2026",
      href: "/blogs/mergers-and-acquisitions-m-a-are-among-the-most-powerful-strategic-tools-available-to-ceos-today-whether-you-re-acquiring-a-competitor-merging-with-a-synergistic-partner-or-preparing-for-an-exit-m-a-can-redefine-the-trajectory-of-your-business-",
    },
    {
      category: "Audit & Evaluation",
      title: "Key Clauses Every Business Contract Must Include",
      excerpt:
        "Contracts are the backbone of every commercial relationship — and the clauses inside them decide what happens when something goes wrong.",
      author: "Ryan singh",
      date: "July 25, 2026",
      href: "/blogs/key-clauses-every-business-contract-must-include",
    },
  ],
} as const;

/**
 * The live site server-renders only the first answer — the rest mount on
 * expand. All five were recovered from its client bundle, so this is the
 * firm's own copy verbatim.
 */
export const faqSection = {
  label: "FAQ",
  heading: "All you need to know about The Consult Law",
  items: [
    {
      q: "What areas of law does The Consult Law practice?",
      a: "We practice across Intellectual Property Rights, Dispute Resolution, Technology Law, and Corporate law — including patents, trademarks, arbitration, litigation, AI and data protection regulation, corporate governance, and legal audits. See our Industries for the full list.",
    },
    {
      q: "How can I schedule a consultation?",
      a: "Use our Book a Consultation page — three quick questions and we'll get back to you with next steps. You can also reach us directly by phone, WhatsApp, or email from our Contact page.",
    },
    {
      q: "Does The Consult Law take on both individual and corporate clients?",
      a: "Yes. We represent individuals, businesses, startups, and institutions, tailoring our approach to the scale and complexity of each matter.",
    },
    {
      q: "Where is The Consult Law located?",
      a: "Our chambers are at Additional Building Complex, Supreme Court of India, New Delhi – 110001. We also advise clients remotely across India.",
    },
    {
      q: "Do you assist with legal audits and policy drafting?",
      a: "Yes, our Corporate practice includes routine legal audits, compliance reviews, and drafting of internal policies, codes of conduct, and governance frameworks.",
    },
  ] as { q: string; a: string }[],
} as const;

export const bookCta = {
  label: "Book a consultation",
  heading: "Talk to us before you decide anything.",
  body: "Tell us what you're dealing with and we'll get back to you with clear next steps — no obligation, no jargon.",
  primaryCta: { label: "Book Consultation", href: "/book-consultation" },
  secondaryCta: { label: "WhatsApp us", href: "https://wa.me/9355776931" },
  /** From the Advocacy template's bundled photography — see README. */
  image: "/images/stock/4BDvYTH2rWiBZvU9dx8DQVTuc.jpg",
} as const;

export const footerIntro = {
  heading: "Trusted partners in achieving legal success",
  body: "The Consult Law advises on intellectual property, technology law, dispute resolution, and corporate matters — for founders filing their first patent and enterprises managing a decade of litigation alike.",
} as const;

/* ---------- /about ---------- */

export const aboutPage = {
  label: "About us",
  heading: "Full-Service Legal Solutions, Tailored To You.",
  body: "We work across data protection, privacy, technology law, AI regulation, construction law, and intellectual property — areas that often overlap in a single client's problem, which is why we don't split them into disconnected teams. Most clients come to us mid-problem, not at the planning stage, so our advice tends to be direct rather than exploratory.",
} as const;
