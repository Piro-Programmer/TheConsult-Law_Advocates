import Image from "next/image";
import Link from "next/link";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { industries } from "@/lib/content";

/**
 * Advocacy's service cards: the photograph fills the whole card behind a 60%
 * black wash, with the number and title pinned to the top edge and the
 * description and its CTA to the bottom.
 *
 * The template runs three cards at a fixed 452x600 holding one- or two-line
 * descriptions. Ours are four to a row and several lines long, so height must
 * not be derived from width: narrowing the window would shrink the card at the
 * same moment the text wrapped to more lines, collapsing the gap between title
 * and description and pushing the CTA out through the bottom edge.
 *
 * Height therefore comes from the content, with a minimum for presence. The
 * grid stretches every card in a row to the tallest, and the gap on the
 * content column guarantees the two blocks can never meet.
 */
export default function Industries() {
  return (
    <section className="bg-ink-deep py-[100px] xl:py-[150px]">
      <div className="container-wide flex flex-col gap-[70px]">
        <Reveal className="flex flex-col gap-5">
          <Eyebrow>Industries</Eyebrow>
          <h2 className="max-w-3xl font-display text-[32px] leading-[1.2] font-light tracking-[-1.26px] text-white lg:text-[38px] xl:text-[42px]">
            Comprehensive legal solutions across every practice.
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {industries.map((industry, i) => (
            <Reveal key={industry.slug} delay={(i % 4) * 0.08} className="h-full">
              <Link
                href={`/practice-areas/${industry.slug}`}
                className="group relative flex h-full min-h-[420px] overflow-hidden xl:min-h-[500px] 2xl:min-h-[600px]"
              >
                <Image
                  src={industry.image}
                  alt=""
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Advocacy's "BG Color" wash, plus a foot of extra shade — its
                    photography is uniformly dark, ours ranges from a black suit
                    to a sunlit office, and the flat 60% alone left white text
                    on the brightest of them hard to read. */}
                <div className="absolute inset-0 bg-black/60 transition-colors duration-300 group-hover:bg-black/70" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent to-60%" />

                <div className="relative flex w-full flex-col justify-between gap-12 p-7 2xl:p-10">
                  <div className="flex flex-col gap-4 2xl:gap-[30px]">
                    <p className="font-display text-[16px] leading-[1.5] font-light tracking-[-0.54px] text-white xl:text-[18px]">
                      0{i + 1}
                    </p>
                    <h3 className="font-display text-[22px] leading-[1.2] font-light tracking-[-0.9px] text-white xl:text-[24px] 2xl:text-[30px]">
                      {industry.title}
                    </h3>
                  </div>

                  <div className="flex flex-col items-start gap-6 2xl:gap-10">
                    <p className="font-display text-[15px] leading-[1.5] font-light tracking-[-0.54px] text-white 2xl:text-[18px]">
                      {industry.description}
                    </p>
                    <span className="rounded-full bg-white px-5 py-2.5 text-[14px] leading-[1.2] font-normal tracking-[-0.42px] text-ink-deep uppercase">
                      Learn more
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
