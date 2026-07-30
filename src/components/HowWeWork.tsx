import Image from "next/image";
import Button from "./Button";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { howWeWork } from "@/lib/content";

type Tone = "white" | "cream" | "dark" | "ink";

/**
 * Reused on the homepage, /about and /services. `tone` keeps the alternating
 * dark → light → cream section rhythm intact wherever it lands.
 *
 * "ink" is the homepage's near-black; it shares every treatment with "dark"
 * apart from the section colour and the wider container.
 */
export default function HowWeWork({ tone = "white" }: { tone?: Tone }) {
  const dark = tone === "dark" || tone === "ink";

  const t = {
    section:
      tone === "ink"
        ? "bg-ink-deep"
        : dark
          ? "bg-brand"
          : tone === "cream"
            ? "bg-cream"
            : "bg-white",
    heading: dark ? "text-white" : "text-ink",
    stepTitle: dark ? "text-white" : "text-ink",
    body: dark ? "text-white/70" : "text-grey",
    divider: dark ? "border-white/15" : "border-ink/10",
    number: dark ? "text-white/40" : "text-brand/50",
    imageBg: dark ? "bg-white/5" : tone === "cream" ? "bg-white" : "bg-cream",
  };

  const pad = tone === "ink" ? "py-[100px] xl:py-[150px]" : "py-24 md:py-32";
  const container = tone === "ink" ? "container-wide" : "container-base";

  return (
    <section className={`${t.section} ${pad}`}>
      <div className={container}>
        <Reveal>
          <SectionLabel tone={dark ? "light" : "dark"}>
            {howWeWork.label}
          </SectionLabel>
        </Reveal>

        <div className="mt-7 flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <h2
              className={`max-w-2xl font-display text-3xl font-light leading-[1.15] tracking-tight md:text-5xl ${t.heading}`}
            >
              {howWeWork.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Button
              href={howWeWork.cta.href}
              variant={dark ? "light" : "outline"}
            >
              {howWeWork.cta.label}
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            {/* 6/7 matches the source's native 610x712 — no crop. */}
            <div
              className={`relative aspect-6/7 overflow-hidden rounded-3xl ${t.imageBg}`}
            >
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
                <li
                  className={`flex gap-6 border-b py-7 first:pt-0 last:border-0 ${t.divider}`}
                >
                  <span
                    className={`font-display text-sm tabular-nums ${t.number}`}
                  >
                    0{i + 1}
                  </span>
                  <div>
                    <h3
                      className={`font-display text-xl font-normal ${t.stepTitle}`}
                    >
                      {step.title}
                    </h3>
                    <p className={`mt-2.5 text-sm leading-relaxed ${t.body}`}>
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
