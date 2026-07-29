import type { Metadata } from "next";
import Button from "@/components/Button";
import HowWeWork from "@/components/HowWeWork";
import LegalExpertise from "@/components/LegalExpertise";
import BookCta from "@/components/BookCta";
import SectionLabel from "@/components/SectionLabel";
import { aboutPage, hero } from "@/lib/content";

export const metadata: Metadata = {
  title: "About | The Consult Law",
  description: aboutPage.body,
};

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/60 to-brand/30" />
        <div className="container-base relative">
          <SectionLabel tone="light">{aboutPage.label}</SectionLabel>
          <h1 className="mt-7 max-w-4xl font-display text-4xl font-light leading-[1.08] tracking-tight text-white md:text-6xl">
            {aboutPage.heading}
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
            {aboutPage.body}
          </p>
          <div className="mt-9">
            <Button href={hero.primaryCta.href} variant="light">
              {hero.primaryCta.label}
            </Button>
          </div>
        </div>
      </section>

      <LegalExpertise variant="light" />
      <HowWeWork />
      <BookCta />
    </>
  );
}
