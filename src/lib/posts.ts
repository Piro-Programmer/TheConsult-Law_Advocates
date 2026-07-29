/** Blog articles, verbatim from theconsult.vercel.app. */

export type Block =
  | { type: "h2" | "h3" | "p"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  lede: string;
  body: Block[];
};

export const authorBio = {
  name: "Ryan singh",
  role: "Managing Partner",
  line: "Lawyered up, teched out, and always two steps ahead.",
} as const;

export const newsletter = {
  heading: "Don't miss the next one",
  body: "We publish when there's something worth saying, not on a fixed schedule. Leave your email and we'll let you know when a new article goes up.",
  cta: "Subscribe",
} as const;

export const blogCategories = [
  "All",
  "Audit & Evaluation",
  "Corporate & Governance",
  "Data Privacy & Cybersecurity",
  "FinTech & Digital Payments",
  "Intellectual Property",
  "Litigation & Courtroom",
  "Startups, MSMEs & Business",
  "Legal Guides",
  "Technology, AI & Emerging Law",
] as const;

export const posts: Post[] = [
  {
    slug: "starting-a-business-in-india-legal-checklist-for-entrepreneurs",
    category: "Audit & Evaluation",
    title: "Starting a Business in India: Legal Checklist for Entrepreneurs",
    excerpt:
      "India’s startup ecosystem is booming, and entrepreneurs are building innovative solutions across every industry. But in the excitement of launching a new venture, many overlook the legal foundation required to build a compliant, protected, and scalable business.",
    author: "Ryan singh",
    date: "July 25, 2026",
    lede: "Starting Up in India? Don’t Skip the Legal Basics",
    body: [
      {
        type: "p",
        text: "At The Consult Law Advocates & Solicitors, we’ve walked alongside entrepreneurs from napkin sketches to IPO bells. If you’re building in India, the legal side isn’t just paperwork — it’s the foundation that keeps your dream from collapsing under its own weight. Here’s the checklist every founder should keep close.",
      },
      { type: "h3", text: "1. Pick the Right Structure" },
      {
        type: "p",
        text: "Your business structure decides how you’re taxed, how much liability you carry, and how investors look at you.",
      },
      {
        type: "ul",
        items: [
          "Sole Proprietorship: Quick to start, but you’re personally on the hook.",
          "Partnership Firm: Works for small setups with multiple owners.",
          "LLP: Flexibility plus limited liability — a sweet spot for many.",
          "Private Limited Company: The darling of startups and VCs.",
          "OPC: For solo founders who still want corporate perks.",
        ],
      },
      {
        type: "p",
        text: "Choose based on your long-term goals, not just what’s easiest today.",
      },
      { type: "h3", text: "2. Register It Properly" },
      {
        type: "p",
        text: "Once you’ve chosen the structure, registration is next. MCA for companies, Registrar of Firms for partnerships, GST and Shops & Establishments for everyone else. Expect filings like DIN, DSC, and incorporation through SPICe+. Skip this, and you’ll be stuck explaining to banks and investors why your paperwork isn’t in order.",
      },
      { type: "h3", text: "3. PAN, TAN, GST — The Trio You Can’t Ignore" },
      {
        type: "ul",
        items: [
          "PAN: Needed for taxes and bank accounts.",
          "TAN: If you’re deducting TDS.",
          "GST: Mandatory once you cross ₹40 lakhs (₹20 lakhs for services) or trade across states.",
        ],
      },
      { type: "h3", text: "4. Put Your Agreements in Place" },
      {
        type: "p",
        text: "Founders’ agreements, NDAs, employment contracts, T&Cs — these aren’t “nice-to-haves.” They’re what prevent disputes and build investor confidence.",
      },
      { type: "h3", text: "5. Separate Your Money" },
      {
        type: "p",
        text: "Open a current account in the company’s name. Mixing personal and business funds is a compliance nightmare waiting to happen.",
      },
      { type: "h3", text: "6. Licenses & Permits" },
      {
        type: "p",
        text: "Depending on your industry, you may need FSSAI, IEC, trade licenses, or MSME registration. Rules vary by state, so don’t assume one-size-fits-all.",
      },
      { type: "h3", text: "7. Labour Law Compliance" },
      {
        type: "p",
        text: "Hiring? Then you’re bound by PF, ESI, minimum wages, gratuity, and POSH requirements. Ignoring these can land you in serious trouble.",
      },
      { type: "h3", text: "8. Protect Your IP Early" },
      {
        type: "p",
        text: "Your brand name, logo, product design — they’re assets. Register trademarks, copyrights, and patents before someone else does. Delay here can cost you dearly.",
      },
      { type: "h3", text: "9. Accounting & Tax Systems" },
      {
        type: "p",
        text: "Bookkeeping, GST returns, TDS filings, ROC filings — set up systems from day one. Outsource if you must, but keep legal oversight tight.",
      },
      { type: "h3", text: "10. Fundraising Readiness" },
      {
        type: "p",
        text: "If you plan to raise capital, make sure your cap table is clean, shares are properly allotted, and MCA filings are in order. Investors will look for term sheets, SHA, SSA — and they’ll expect everything to check out.",
      },
    ],
  },
  {
    slug: "mergers-and-acquisitions-m-a-are-among-the-most-powerful-strategic-tools-available-to-ceos-today-whether-you-re-acquiring-a-competitor-merging-with-a-synergistic-partner-or-preparing-for-an-exit-m-a-can-redefine-the-trajectory-of-your-business-",
    category: "Audit & Evaluation",
    title: "The Legal Side of Mergers and Acquisitions: What Every CEO Must Know",
    excerpt:
      "Mergers and acquisitions (M&A) are among the most powerful strategic tools available to CEOs today. Whether you’re acquiring a competitor, merging with a synergistic partner, or preparing for an exit, M&A can redefine the trajectory of your business.",
    author: "Ryan singh",
    date: "July 25, 2026",
    lede: "The Legal Side of M&A: What Every CEO Needs to Keep in Mind",
    body: [
      {
        type: "p",
        text: "With high reward comes high risk — and nowhere is that truer than in mergers and acquisitions. One slip in the process can spiral into disputes, regulatory headaches, or even erosion of the very value you set out to create. At The Consult Law Advocates & Solicitors, we’ve seen CEOs and boards wrestle with these complexities firsthand. The good news? With the right legal guidance, M&A can be both strategically sound and risk-mitigated. Here’s the practical side of what leaders should know before diving in.",
      },
      { type: "h3", text: "1. Know Your Transaction Type" },
      {
        type: "p",
        text: "Not all deals are created equal. A merger blends two companies into one. An acquisition is a buyout — either assets or shares. A slump sale transfers a business unit wholesale. And a joint venture? That’s about shared ownership and control. The choice isn’t just legal jargon — it impacts tax, regulatory approvals, and commercial outcomes. CEOs should lean on counsel to pick the structure that actually fits their goals.",
      },
      { type: "h3", text: "2. Due Diligence Isn’t Optional" },
      {
        type: "p",
        text: "Think of due diligence as the flashlight in a dark room. Litigation history, IP rights, employee liabilities, compliance gaps, contracts, environmental issues — all of it needs to be surfaced before signing. Skipping this step is like buying a house without checking for termites.",
      },
      { type: "h3", text: "3. Regulatory Approvals Can’t Be Ignored" },
      {
        type: "p",
        text: "Depending on deal size and sector, approvals may be needed from CCI, RBI, SEBI, or sectoral regulators like IRDAI or TRAI. Even private company deals can trigger scrutiny. Assuming you’re “too small” or “too private” to attract attention is a mistake.",
      },
      { type: "h3", text: "4. Agreements: Every Clause Counts" },
      {
        type: "p",
        text: "From the LOI to the SPA/APA, SHA, and employment agreements — every document shapes the deal. Representations, warranties, indemnities, exit clauses… they’re not boilerplate. They’re the safety net.",
      },
      { type: "h3", text: "5. Tax & Stamp Duty: Plan Ahead" },
      {
        type: "p",
        text: "Share purchase vs. asset sale, cash vs. equity consideration, carry-forward of losses — the tax implications can make or break efficiency. CEOs should align tax advisors and legal teams early, not as an afterthought.",
      },
      { type: "h3", text: "6. Post-Deal Integration Is Real Work" },
      {
        type: "p",
        text: "Closing isn’t the finish line. ROC filings, contract transfers, HR transitions, compliance harmonization — integration is where deals succeed or fail. Ignore it, and you’ll invite inefficiencies.",
      },
      { type: "h3", text: "7. Warranties & Indemnities = Risk Shield" },
      {
        type: "p",
        text: "Warranties are promises. Indemnities are remedies. Survival periods, caps, escrows — negotiate them well, or risk carrying liabilities long after the champagne is gone.",
      },
      { type: "h3", text: "8. Protect Against Leaks & Poaching" },
      {
        type: "p",
        text: "Confidentiality, non-compete, and non-solicitation clauses aren’t just legalese. They’re guardrails against sellers leaking sensitive info, competing immediately, or poaching your talent and clients.",
      },
      { type: "h2", text: "Final Word" },
      {
        type: "p",
        text: "M&A is exciting, but it’s also a minefield. CEOs who treat the legal side as a checklist often find themselves firefighting later. Those who treat it as strategy — with the right counsel — unlock real value.",
      },
    ],
  },
  {
    slug: "key-clauses-every-business-contract-must-include",
    category: "Audit & Evaluation",
    title: "Key Clauses Every Business Contract Must Include",
    excerpt:
      "Contracts are the backbone of any business relationship. Whether you’re hiring a vendor, partnering with another company, or onboarding a new client, a well-drafted agreement protects your interests and minimizes risk.",
    author: "Ryan singh",
    date: "July 25, 2026",
    lede: "Contracts are the backbone of any business relationship.",
    body: [
      {
        type: "p",
        text: "Whether you’re hiring a vendor, partnering with another company, or onboarding a new client, a well-drafted agreement protects your interests and minimizes risk. Yet, many businesses sign or draft contracts without fully understanding the implications of missing or poorly worded clauses. At The Consult Law Advocates & Solicitors, we’ve seen how one overlooked clause can lead to costly disputes. Here are the essential clauses every business contract should include — and why they matter:",
      },
      { type: "h3", text: "1. Parties to the Contract" },
      {
        type: "p",
        text: "Clearly define who the contracting parties are, including legal names, addresses, and designations. Ambiguity here can render the contract unenforceable or make enforcement difficult. Example: “ABC Pvt. Ltd., a company incorporated under the Companies Act, 2013, having its registered office at [address]…”",
      },
      { type: "h3", text: "2. Scope of Work / Deliverables" },
      {
        type: "p",
        text: "This clause outlines what exactly is being exchanged — whether it’s services, products, or a combination. Be specific and detailed. Avoid vague terms like “reasonable quality” without definitions. Why it matters: This section becomes your point of reference in case of disagreement over expectations.",
      },
      { type: "h3", text: "3. Payment Terms" },
      {
        type: "ul",
        items: [
          "Total amount",
          "Payment schedule (e.g., advance, milestone-based, final settlement)",
          "Late payment penalties",
          "Mode of payment (bank transfer, cheque, etc.)",
        ],
      },
      {
        type: "p",
        text: "Tip: Mention applicable taxes (GST, TDS) to avoid future conflicts with tax authorities.",
      },
      { type: "h3", text: "4. Term and Termination" },
      {
        type: "ul",
        items: [
          "Start and end dates of the contract",
          "Conditions for renewal",
          "Grounds for termination (e.g., breach, insolvency, force majeure)",
          "Notice period required before termination",
        ],
      },
      {
        type: "p",
        text: "Why it matters: A clear exit route helps both parties avoid being locked into unfavorable terms.",
      },
      { type: "h3", text: "5. Confidentiality Clause" },
      {
        type: "p",
        text: "If sensitive information is being shared, include a clause restricting its use and disclosure. Optional Add-on: Include a Non-Disclosure Agreement (NDA) or embed confidentiality as a section within the contract.",
      },
      { type: "h3", text: "6. Intellectual Property Rights" },
      {
        type: "p",
        text: "In contracts involving content creation, software development, branding, or innovation — clarify who owns the IP. Example: “All intellectual property developed during the engagement shall be the sole property of [Party A].”",
      },
      { type: "h3", text: "7. Indemnity & Limitation of Liability" },
      {
        type: "p",
        text: "This clause protects you from damages caused by the other party’s negligence or wrongdoing. Indemnity: The party causing harm must cover the losses. Limitation of liability: Caps the amount either party is liable to pay in case of breach.",
      },
      { type: "h3", text: "8. Dispute Resolution" },
      {
        type: "ul",
        items: [
          "Jurisdiction: Which court has the authority to hear the matter?",
          "Arbitration: Many businesses prefer arbitration over litigation for confidentiality and speed.",
          "Mediation: Optional pre-arbitration step to resolve issues amicably.",
        ],
      },
      {
        type: "p",
        text: "Clause example: “Any dispute arising out of this agreement shall be referred to a sole arbitrator appointed as per the Arbitration and Conciliation Act, 1996…”",
      },
      { type: "h3", text: "9. Force Majeure" },
      {
        type: "p",
        text: "This protects both parties in case of unforeseeable events like natural disasters, war, pandemic, or government action that prevents contract performance. Pro Tip: Define timelines and what happens once the event is over.",
      },
      { type: "h3", text: "10. Amendment Clause" },
      {
        type: "p",
        text: "Specify that any changes to the contract must be in writing and signed by both parties. This prevents one-sided claims of verbal amendments later.",
      },
      { type: "h2", text: "Final Thoughts" },
      {
        type: "p",
        text: "Business contracts are more than just formalities — they are risk management tools. A strong contract with these clauses can help avoid costly litigation, preserve business relationships, and build trust. At The Consult Law Advocates & Solicitors, we specialize in business contract drafting and review, ensuring our clients’ interests are fully protected. Whether you’re a startup or an established enterprise, our legal team can help you craft contracts that work for you — not against you.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
