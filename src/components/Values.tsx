"use client";

import { useState } from "react";
import Image from "next/image";
import Eyebrow from "./Eyebrow";
import GridLines from "./GridLines";
import Reveal from "./Reveal";
import { valuesSection } from "@/lib/content";

/**
 * Advocacy's "Our values" section, rebuilt to the template's own structure.
 *
 * Three things there are easy to get wrong, and all three change the feel:
 *
 *   - the label is a narrow 120px column beside the content, not a row above it
 *   - the heading and toggles are capped at 340px. Letting that column run the
 *     full width is what opens the dead gap between the text and the picture
 *   - the panel is absolutely positioned against the widget's right edge and
 *     pulled 42px up, so it breaks the section's top line rather than sitting
 *     inside it. It also overhangs the bottom, which the section padding takes
 *
 * Below lg the template gives up the overlap: the panel returns to the flow at
 * full width and the label sits above.
 */
export default function Values() {
  const [active, setActive] = useState(0);
  const value = valuesSection.items[active];

  return (
    <section className="relative bg-ink-deep py-[100px] xl:py-[150px]">
      {/* Paired with the statistics section's own ruling — the two meet where
          the sections do, which is what makes the lines look continuous. */}
      <GridLines />

      <div className="relative z-1 container-wide">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:pt-[45px]">
          <Reveal className="w-full lg:max-w-[120px] lg:flex-1">
            <Eyebrow>{valuesSection.label}</Eyebrow>
          </Reveal>

          {/* Advocacy's values widget — the panel anchors to this box */}
          <div className="relative w-full lg:w-[780px] lg:shrink-0 xl:w-[920px]">
            <Reveal className="flex w-full flex-col items-start gap-[50px] lg:max-w-[340px] xl:gap-[70px]">
              <h2 className="w-full max-w-[430px] font-display text-[24px] leading-[1.2] font-light tracking-[-0.9px] text-white lg:max-w-[340px] xl:text-[30px]">
                {valuesSection.heading}
              </h2>

              <ul className="flex w-full flex-col items-start gap-10 lg:max-w-[340px]">
                {valuesSection.items.map((item, i) => (
                  <li key={item.title}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-pressed={i === active}
                      className={`cursor-pointer text-left font-display text-[36px] leading-[1.1] font-light tracking-[-1.8px] transition-colors duration-300 lg:text-[48px] xl:text-[60px] ${
                        i === active
                          ? "text-white"
                          : "text-grey hover:text-white/70"
                      }`}
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal
              delay={0.1}
              className="mt-12 lg:absolute lg:top-[-27px] lg:right-0 lg:z-1 lg:mt-0 xl:top-[-42px]"
            >
              <div className="relative flex h-[435px] w-full flex-col items-center justify-end overflow-hidden p-3.5 lg:h-[490px] lg:w-[360px] xl:h-[540px] xl:w-[440px]">
                <Image
                  src={valuesSection.image}
                  alt=""
                  fill
                  sizes="(min-width: 1280px) 440px, (min-width: 992px) 360px, 100vw"
                  className="object-cover"
                />

                {/* Advocacy's frosted panel — white at 70% over a 74px blur */}
                <div className="relative flex w-full flex-col items-start gap-2.5 bg-white/70 p-5 backdrop-blur-[74px]">
                  <div className="flex w-full items-center justify-between gap-3">
                    <h3 className="font-display text-[18px] leading-[1.2] font-light tracking-[-0.54px] text-ink-deep">
                      {value.title}
                    </h3>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 10 10"
                      fill="none"
                      aria-hidden="true"
                      className="shrink-0 text-ink-deep"
                    >
                      <path
                        d="M5 0 6.2 3.8 10 5 6.2 6.2 5 10 3.8 6.2 0 5l3.8-1.2z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-display text-[15px] leading-[1.5] font-light tracking-[-0.54px] text-ink-deep xl:text-[18px]">
                    {value.body}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
