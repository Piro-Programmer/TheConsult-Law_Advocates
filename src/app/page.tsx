import Hero from "@/components/Hero";
import AboutIntro from "@/components/AboutIntro";
import Industries from "@/components/Industries";
import Values from "@/components/Values";
import HowWeWork from "@/components/HowWeWork";
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
 * Consult's extra sections (How we work, Sectors, Blogs, FAQ, closing CTA) have
 * no Advocacy counterpart, so they follow that spine rather than interrupting
 * it, in the same language.
 *
 * How we work keeps its list form here. It briefly used the Values panel, which
 * became the wrong call once Values existed in its own right — two tabbed
 * photo panels one after another read as a bug rather than a rhythm.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <AboutIntro />
      <Industries />
      <Values />
      <LegalExpertise tone="ink" />
      <Advisors />
      <HowWeWork tone="ink" />
      <Sectors />
      <Blogs />
      <Faq tone="ink" />
      <BookCta tone="ink" />
    </>
  );
}
