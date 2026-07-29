import Hero from "@/components/Hero";
import AboutIntro from "@/components/AboutIntro";
import Industries from "@/components/Industries";
import Sectors from "@/components/Sectors";
import HowWeWork from "@/components/HowWeWork";
import Advisors from "@/components/Advisors";
import LegalExpertise from "@/components/LegalExpertise";
import Blogs from "@/components/Blogs";
import Faq from "@/components/Faq";
import BookCta from "@/components/BookCta";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutIntro />
      <Industries />
      <Sectors />
      <HowWeWork />
      <Advisors />
      <LegalExpertise />
      <Blogs />
      <Faq />
      <BookCta />
    </>
  );
}
