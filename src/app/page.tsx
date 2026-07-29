import Hero from "@/components/Hero";
import AboutIntro from "@/components/AboutIntro";
import Industries from "@/components/Industries";
import HowWeWork from "@/components/HowWeWork";
import LegalExpertise from "@/components/LegalExpertise";
import Advisors from "@/components/Advisors";
import Sectors from "@/components/Sectors";
import Blogs from "@/components/Blogs";
import Faq from "@/components/Faq";
import BookCta from "@/components/BookCta";

/**
 * Follows the Advocacy template's homepage spine:
 *   Hero → About → Services → Values → Stats → Team → CTA
 * mapped onto Consult's equivalents, with Consult's three extra sections
 * (Sectors, Blogs, FAQ) carried after Advisors rather than dropped.
 *
 * Tones continue Advocacy's strict dark → white → cream cycle across all ten
 * sections, so no two neighbours share a background.
 */
export default function Home() {
  return (
    <>
      {/* dark  */} <Hero />
      {/* white */} <AboutIntro />
      {/* cream */} <Industries />
      {/* dark  */} <HowWeWork tone="dark" />
      {/* white */} <LegalExpertise tone="white" />
      {/* cream */} <Advisors />
      {/* dark  */} <Sectors />
      {/* white */} <Blogs />
      {/* cream */} <Faq />
      {/* dark  */} <BookCta />
    </>
  );
}
