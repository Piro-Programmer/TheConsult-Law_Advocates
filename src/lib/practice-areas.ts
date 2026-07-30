/** Practice area detail content, verbatim from theconsult.vercel.app. */

export type Topic = { number: string; title: string; body: string };

export type PracticeArea = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  topics: Topic[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "intellectual-property-rights",
    title: "Intellectual Property Rights",
    description:
      "Protecting patents, copyrights, designs, and trademarks with strategic, business-focused counsel.",
    tags: ["Patents", "Copyright", "Designs", "Trademarks"],
    topics: [
      {
        number: "01",
        title: "Patents",
        body: "A patent gives you the right to stop someone else from making, using, or selling your invention — for up to 20 years, under the Patents Act, 1970. Miss that filing window and the protection is effectively gone, no matter how original the idea was.",
      },
      {
        number: "02",
        title: "Copyright",
        body: "Copyright protects original creative work the moment you make it — including software — under the Copyright Act, 1957. No registration is required for that protection to exist, but if someone copies your code, registration is what makes enforcing your rights in court far less painful.",
      },
      {
        number: "03",
        title: "Designs",
        body: "A design registration protects the way a product looks — its shape, pattern, or ornamentation — for up to 10 years, under the Designs Act, 2000. It's easy to underestimate how much of a brand's identity sits in that visual signature until a near-identical knockoff shows up on the same shelf.",
      },
      {
        number: "04",
        title: "Trademarks",
        body: "A trademark — logo, name, slogan, or packaging — is the one thing a customer actually recognizes about your business. The Trade Marks Act, 1999 gives you the exclusive right to that mark once it's registered, and the right to stop anyone using something confusingly similar.",
      },
    ],
  },
  {
    slug: "dispute-resolution",
    title: "Dispute Resolution",
    description:
      "Strategic representation in arbitration, litigation, and economic offences across Indian courts and tribunals.",
    tags: ["Arbitration", "Litigation", "Economic Offences"],
    topics: [
      {
        number: "01",
        title: "Arbitration",
        body: "Arbitration exists because courtroom litigation is often the wrong tool for a commercial dispute — too slow, too public, and too disconnected from how the parties actually do business. In India, it runs under the Arbitration and Conciliation Act, 1996, and it's usually the faster, more confidential route for construction, infrastructure, and cross-border commercial disputes.",
      },
      {
        number: "02",
        title: "Litigation",
        body: "Litigation in India can run for years, across District Courts, High Courts, and the Supreme Court, and the cases that drag on longest are usually the ones where the early strategy was wrong — the wrong forum, a weak first filing, an underestimated opponent. We handle commercial, civil, and corporate disputes with that timeline in mind from day one.",
      },
      {
        number: "03",
        title: "Economic Offences",
        body: "Economic offence cases — fraud, money laundering, tax evasion, securities violations — move fast once a regulator gets involved, and the early hours of an investigation often matter more than anything that happens in court later. We represent individuals, companies, and financial institutions from the moment enforcement action starts, not just after charges are framed.",
      },
    ],
  },
  {
    slug: "technology-law",
    title: "Technology Law",
    description:
      "Regulatory and compliance counsel for AI, cybersecurity, FinTech, e-commerce, and data protection.",
    tags: [
      "AI Regulation",
      "Cyber Security",
      "FinTech",
      "E-commerce",
      "Data Protection and Privacy",
    ],
    topics: [
      {
        number: "01",
        title: "AI Regulation",
        body: "India doesn't yet have a standalone AI law, which puts most companies deploying AI in a gray zone — bound by existing data protection, consumer protection, and sectoral rules that were never written with machine learning in mind. We were one of the first firms in India to build a dedicated AI regulatory practice for exactly that reason.",
      },
      {
        number: "02",
        title: "Cyber Security",
        body: "A data breach is a legal event as much as a technical one — breach notification deadlines, regulator reporting, and customer liability all kick in the moment something goes wrong, and most companies find that out for the first time during an actual incident. We'd rather get that framework in place before it's tested.",
      },
      {
        number: "03",
        title: "FinTech",
        body: "FinTech in India sits at the intersection of RBI guidelines, the Payment and Settlement Systems Act, and a steady stream of new rules on lending, crypto, and digital payments — several of which have shut down business models overnight with very little warning. Staying ahead of that is most of what a good FinTech legal practice actually does.",
      },
      {
        number: "04",
        title: "E-commerce",
        body: "E-commerce in India sits under the Consumer Protection (E-commerce) Rules, FDI policy restrictions on inventory-based models, and the IT Act, often all three at once for the same transaction. Getting the structure wrong at the start — the wrong FDI route, an unclear return policy — tends to surface as a regulatory problem much later, when it's expensive to fix.",
      },
      {
        number: "05",
        title: "Data Protection and Privacy",
        body: "The Digital Personal Data Protection Act, 2023 changed what “compliant” means for any Indian company handling personal data, and a lot of businesses are still running on privacy policies written for a pre-DPDPA world. We help close that gap, alongside GDPR compliance where clients have EU users.",
      },
    ],
  },
  {
    slug: "corporate",
    title: "Corporate",
    description:
      "Governance, transactions, competition compliance, audits, and policy drafting for growing businesses.",
    tags: [
      "Anti-Trust and Competition",
      "Corporate Law",
      "Commercial Law",
      "Legal Audit & Due Diligence",
      "Report & Policy Drafting",
    ],
    topics: [
      {
        number: "01",
        title: "Anti-Trust and Competition",
        body: "The Competition Act, 2002 governs mergers, cartel conduct, and abuse of market dominance in India, and the CCI has gotten considerably more active in recent years — merger notifications that would have cleared quietly a decade ago now draw real scrutiny. We help clients navigate that shift rather than get caught by it.",
      },
      {
        number: "02",
        title: "Corporate Law",
        body: "Corporate law is the unglamorous work that determines whether a company survives its own growth — proper incorporation, clean shareholder agreements, governance that holds up when a board disagrees. Most founders don't think about it until a dispute or a due diligence process forces the issue.",
      },
      {
        number: "03",
        title: "Commercial Law",
        body: "Every business relationship — with a vendor, a distributor, a client — eventually comes down to what the contract actually says, and most disputes we see stem from an agreement that was signed without anyone reading the fine print closely enough. Commercial law is where we make sure that fine print protects you.",
      },
      {
        number: "04",
        title: "Legal Audit & Due Diligence",
        body: "A legal audit is a structured check for the gaps that don't show up until they've already caused a problem — an expired registration, a compliance filing missed two years ago, a contract clause nobody's reviewed since it was signed. We run these audits before they surface as a liability, not after.",
      },
      {
        number: "05",
        title: "Report & Policy Drafting",
        body: "Internal policies only work if someone can actually follow them — a POSH policy, a code of conduct, an ESG framework that reads like it was written for a compliance checklist rather than the people who have to use it. We draft these to be usable first and defensible second, because a policy nobody reads doesn't protect you either way.",
      },
    ],
  },
];

export function getPracticeArea(slug: string) {
  return practiceAreas.find((a) => a.slug === slug);
}

/**
 * Topics are sections of their practice area's page, not routes of their own,
 * so the nav menu deep-links to them by anchor. Shared with the detail page so
 * the id it renders and the href the menu builds can never drift apart.
 */
export function topicSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
