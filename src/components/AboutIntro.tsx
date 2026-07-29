import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { aboutIntro } from "@/lib/content";

export default function AboutIntro() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-base">
        <Reveal>
          <SectionLabel>{aboutIntro.label}</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-5xl font-display text-2xl font-light leading-[1.35] tracking-tight text-ink md:text-3xl lg:text-[2.25rem]">
            {aboutIntro.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
