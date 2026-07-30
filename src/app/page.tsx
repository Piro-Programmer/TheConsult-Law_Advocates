import Hero from "@/components/Hero";
import AboutIntro from "@/components/AboutIntro";
import Industries from "@/components/Industries";
import HowWeWorkTabs from "@/components/HowWeWorkTabs";
import LegalExpertise from "@/components/LegalExpertise";
import Advisors from "@/components/Advisors";
import Sectors from "@/components/Sectors";
import Blogs from "@/components/Blogs";
import Faq from "@/components/Faq";
import BookCta from "@/components/BookCta";

/**
 * Advocacy's homepage spine, mapped onto Consult's equivalents:
 *   Hero → About → Services → Values → Statistics → Team → CTA
 *
 * Advocacy paints everything below the hero on one near-black canvas rather
 * than alternating tones, so every section here is #0b0b0b and the rhythm
 * comes from spacing and photography instead of background changes. The
 * interior pages still alternate — this scheme is the homepage's alone.
 *
 * Consult's four extra sections (Sectors, Blogs, FAQ, closing CTA) have no
 * Advocacy counterpart; they follow the shared spine in the same language.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <AboutIntro />
      <Industries />
      <HowWeWorkTabs />
      <LegalExpertise tone="ink" />
      <Advisors />
      <Sectors />
      <Blogs />
      <Faq tone="ink" />
      <BookCta tone="ink" />
    </>
  );
}
