"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { howWeWork } from "@/lib/content";

/**
 * Advocacy's "Our values" section, carrying our How we work steps: the step
 * names stack as oversized toggles on the left, and the selected one's copy
 * sits in a frosted card over the photograph on the right.
 *
 * Advocacy sets those toggles at 60px, which its one-word values can afford.
 * Ours are up to three words, so they step down through the breakpoints
 * instead of overflowing the column.
 *
 * Only the homepage uses this. /about and /services keep the plain HowWeWork
 * list, which suits a light page better than a photo panel does.
 */
export default function HowWeWorkTabs() {
  const [active, setActive] = useState(0);
  const step = howWeWork.steps[active];

  return (
    <section className="bg-ink-deep py-[100px] xl:py-[150px]">
      <div className="container-wide flex flex-col gap-[70px]">
        <Reveal>
          <Eyebrow>{howWeWork.label}</Eyebrow>
        </Reveal>

        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <Reveal className="flex flex-1 flex-col items-start gap-10">
            <h3 className="max-w-xl font-display text-[24px] leading-[1.2] font-light tracking-[-0.9px] text-white xl:text-[30px]">
              {howWeWork.heading}
            </h3>

            <ul className="flex flex-col gap-5 xl:gap-10">
              {howWeWork.steps.map((s, i) => (
                <li key={s.title}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={i === active}
                    className={`cursor-pointer text-left font-display text-[28px] leading-[1.1] font-light tracking-[-1.8px] transition-colors duration-300 lg:text-[36px] xl:text-[42px] ${
                      i === active ? "text-white" : "text-grey hover:text-white/70"
                    }`}
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>

            <Button href={howWeWork.cta.href} variant="light" size="sm">
              {howWeWork.cta.label}
            </Button>
          </Reveal>

          <Reveal delay={0.1} className="w-full lg:w-[440px] lg:shrink-0">
            <div className="relative flex aspect-[440/540] items-end overflow-hidden p-3.5">
              <Image
                src={howWeWork.image}
                alt=""
                fill
                sizes="(min-width: 992px) 440px, 100vw"
                className="object-cover"
              />

              {/* Advocacy's frosted panel — white at 70% over a 74px blur */}
              <div className="relative flex w-full flex-col gap-2.5 bg-white/70 p-5 backdrop-blur-[74px]">
                <div className="flex items-center justify-between gap-3">
                  <h4 className="font-display text-[18px] leading-[1.2] font-light tracking-[-0.54px] text-ink-deep">
                    {step.title}
                  </h4>
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
                  {step.body}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
