import Image from "next/image";
import Button from "./Button";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { howWeWork } from "@/lib/content";

export default function HowWeWork() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-base">
        <Reveal>
          <SectionLabel>{howWeWork.label}</SectionLabel>
        </Reveal>

        <div className="mt-7 flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <h2 className="max-w-2xl font-display text-3xl font-light leading-[1.15] tracking-tight text-ink md:text-5xl">
              {howWeWork.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Button href={howWeWork.cta.href} variant="outline">
              {howWeWork.cta.label}
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            {/* 6/7 matches the source's native 610x712 — no crop. */}
            <div className="relative aspect-6/7 overflow-hidden rounded-3xl bg-cream">
              <Image
                src={howWeWork.image}
                alt=""
                fill
                sizes="(min-width: 992px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <ol className="lg:col-span-7">
            {howWeWork.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <li className="flex gap-6 border-b border-ink/10 py-7 first:pt-0 last:border-0">
                  <span className="font-display text-sm tabular-nums text-brand/50">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-normal text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-grey">
                      {step.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
