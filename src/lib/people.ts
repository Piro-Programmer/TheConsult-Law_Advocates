/** Advisor profiles, verbatim from theconsult.vercel.app. */

export type Person = {
  slug: string;
  name: string;
  role: string;
  image: string;
  /** Optional strapline shown under the name on the profile page. */
  strapline?: string;
  quote: string;
  bio: string[];
  leads: string[];
  /** Extra grouped lists — present on Abhijeet's profile only. */
  lists?: { heading: string; items: string[] }[];
};

export const people: Person[] = [
  {
    slug: "ryan-singh",
    name: "Ryan Singh",
    role: "Partner",
    image: "/images/team/ryan-singh.png",
    quote:
      "Intellectual property is rarely won at the point of filing — it is won in the diligence that precedes it and the vigilance that follows. My role is to see that clients are protected before a dispute arises, not merely defended after one begins.",
    bio: [
      "Ryan Singh is an accomplished legal professional with extensive expertise in Intellectual Property Rights (IPR) law, technology law, construction law, and litigation. As an advocate enrolled since 2019, Ryan has consistently demonstrated in-depth knowledge and versatility across multiple legal domains.",
      "In IPR, he has effectively handled trademark registration, defense, and opposition, representing clients before the Registrar of Trademarks. His expertise in technology law includes tackling issues in digital and data-centric cases.",
      "Ryan has also developed significant experience in construction law, particularly within the ambit of arbitration, addressing complex contractual disputes and assisting in landmark cases. His skills span commercial litigation, civil litigation, and criminal matters, making him a trusted advisor for both individual and corporate clients.",
      "Ryan holds a B.A. LL.B. (Hons.) degree from Damodaram Sanjivayya National Law University and has distinguished academic and research contributions. Known for his sharp analytical abilities and client-focused approach, Ryan Singh offers holistic legal solutions tailored to meet the unique needs of his clientele.",
    ],
    leads: ["Intellectual Property Rights", "Technology Law"],
  },
  {
    slug: "abhijeet-singh-chauhaan",
    name: "Abhijeet Singh Chauhan",
    role: "Associate Partner",
    image: "/images/team/abhijeet-singh-chauhan.png",
    strapline: "Strategic Legal Solutions Across Complex Business Landscapes",
    quote:
      "Sound legal strategy is not about winning an argument after the fact — it is about structuring a client's position so precisely at the outset that the dispute never has room to take hold. That discipline is what I bring to every matter.",
    bio: [
      "A distinguished legal professional from National Law University, Jodhpur, and NALSAR University of Law, Advocate Abhijeet Singh Chauhan delivers nuanced, strategic legal solutions that address the multifaceted challenges of modern business environments.",
      "Combining rigorous legal training with practical expertise, he has established himself as a versatile legal professional capable of navigating complex legal terrains.",
    ],
    leads: ["Dispute Resolution", "Corporate"],
    lists: [
      {
        heading: "Core Practice Areas",
        items: [
          "Commercial Dispute Resolution",
          "Corporate Compliance and Governance",
          "International Trade and Business Law",
          "Arbitration and Alternative Dispute Resolution",
          "Intellectual Property and Technology Law",
          "Regulatory Compliance",
        ],
      },
      {
        heading: "Distinctive Professional Approach",
        items: [
          "Comprehensive legal strategy development",
          "Innovative problem-solving techniques",
          "In-depth research and meticulous preparation",
          "Proactive risk management",
          "Strategic legal advisory services",
        ],
      },
      {
        heading: "Proven Track Record",
        items: [
          "Extensive work with the Supreme Court of India",
          "Comprehensive support in high-stakes litigation",
          "Advanced research in complex legal domains",
          "Strategic advisory for corporate and individual clients",
        ],
      },
    ],
  },
];

export function getPerson(slug: string) {
  return people.find((p) => p.slug === slug);
}
