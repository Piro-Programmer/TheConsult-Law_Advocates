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
 * The template runs three cards at a fixed 452x600; we have four, so the cards
 * keep that proportion but flex with the column instead of being fixed.
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
            <Reveal key={industry.slug} delay={(i % 4) * 0.08}>
              <Link
                href={`/practice-areas/${industry.slug}`}
                className="group relative flex aspect-[452/600] overflow-hidden"
              >
                <Image
                  src={industry.image}
                  alt=""
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Advocacy's "BG Color" wash — verbatim */}
                <div className="absolute inset-0 bg-black/60 transition-colors duration-300 group-hover:bg-black/70" />

                <div className="relative flex h-full w-full flex-col justify-between p-7 xl:p-10">
                  <div className="flex flex-col gap-4 xl:gap-[30px]">
                    <p className="font-display text-[16px] leading-[1.5] font-light tracking-[-0.54px] text-white xl:text-[18px]">
                      0{i + 1}
                    </p>
                    <h3 className="font-display text-[24px] leading-[1.2] font-light tracking-[-0.9px] text-white xl:text-[30px]">
                      {industry.title}
                    </h3>
                  </div>

                  <div className="flex flex-col items-start gap-6 xl:gap-10">
                    <p className="font-display text-[15px] leading-[1.5] font-light tracking-[-0.54px] text-white xl:text-[18px]">
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
