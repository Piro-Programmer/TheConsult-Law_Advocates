import Button from "./Button";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { aboutIntro, aboutPage } from "@/lib/content";

/**
 * Advocacy's About Us section: the label and statement on the left, the
 * supporting paragraph and its CTA on the right, both columns sitting on a
 * shared baseline.
 *
 * The heading comes from aboutPage rather than aboutIntro — the template needs
 * a short statement above the longer body, and that is the firm's own.
 */
export default function AboutIntro() {
  return (
    <section className="bg-ink-deep py-[100px] xl:py-[150px]">
      <div className="container-wide flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
        <Reveal className="flex flex-col gap-5 lg:max-w-[734px]">
          <Eyebrow>{aboutIntro.label}</Eyebrow>
          <h2 className="font-display text-[32px] leading-[1.2] font-light tracking-[-1.26px] text-white lg:text-[38px] xl:text-[42px]">
            {aboutPage.heading}
          </h2>
        </Reveal>

        <Reveal
          delay={0.1}
          className="flex flex-col items-start gap-10 lg:w-[443px] lg:shrink-0"
        >
          <p className="font-display text-[16px] leading-[1.5] font-light tracking-[-0.54px] text-white/70 xl:text-[18px]">
            {aboutIntro.body}
          </p>
          <Button href="/about" variant="light" size="sm">
            About us
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
