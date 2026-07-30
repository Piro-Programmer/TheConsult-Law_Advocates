import CountUp from "./CountUp";
import Eyebrow from "./Eyebrow";
import GridLines from "./GridLines";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { legalExpertise } from "@/lib/content";

type Tone = "dark" | "white" | "cream" | "ink";

/**
 * Reused on the homepage and /about — `tone` keeps the alternating
 * dark → light → cream section rhythm intact wherever it lands.
 *
 * "ink" is the homepage's near-black, and it is not just a recolour: it lays the
 * figures out as Advocacy's Statistic section does, in one row with a white rule
 * on each column's leading edge over the ruled background. It also drops its top
 * padding, so its ruling meets the values section's and the two read as one
 * composition rather than two boxes.
 *
 * Advocacy's statistics carry a number and a short label only. Ours also carry a
 * sentence each, which is real copy, so it stays — smaller and dimmer, beneath
 * the label.
 */
export default function LegalExpertise({ tone = "dark" }: { tone?: Tone }) {
  const dark = tone === "dark" || tone === "ink";
  const ink = tone === "ink";

  const t = {
    section:
      ink
        ? "bg-ink-deep"
        : dark
          ? "bg-brand"
          : tone === "cream"
            ? "bg-cream"
            : "bg-white",
    heading: dark ? "text-white" : "text-ink",
    body: dark ? "text-white/70" : "text-grey",
    value: dark ? "text-white" : "text-brand",
    statLabel: dark ? "text-white/50" : "text-ink/50",
    statBody: dark ? "text-white/70" : "text-grey",
    divider: dark ? "border-white/10" : "border-ink/10",
  };

  const pad = ink ? "pb-[100px] xl:pb-[150px]" : "py-24 md:py-32";
  const container = ink ? "container-wide" : "container-base";

  return (
    <section className={`relative ${t.section} ${pad}`}>
      {ink && <GridLines count={legalExpertise.stats.length + 1} />}

      <div className={`relative z-1 ${container}`}>
        <Reveal>
          {ink ? (
            <Eyebrow>{legalExpertise.label}</Eyebrow>
          ) : (
            <SectionLabel tone={dark ? "light" : "dark"}>
              {legalExpertise.label}
            </SectionLabel>
          )}
        </Reveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <h2
              className={`font-display text-3xl font-light leading-[1.15] tracking-tight md:text-5xl ${t.heading}`}
            >
              {legalExpertise.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6">
            <p className={`text-base leading-relaxed md:text-lg ${t.body}`}>
              {legalExpertise.subheading}
            </p>
          </Reveal>
        </div>

        {ink ? (
          /* Advocacy's row: rule, then number over label, one column each */
          <div className="mt-[70px] flex flex-col gap-[30px] sm:flex-row sm:gap-0">
            {legalExpertise.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08} className="flex-1">
                <div className="flex items-start gap-[30px] pr-2.5 xl:gap-10">
                  <span className="w-px shrink-0 self-stretch bg-white" />
                  <div className="flex flex-col gap-[5px]">
                    <p className="font-display text-[42px] leading-[1.1] font-light tracking-[-2.1px] text-white lg:text-[46px] xl:text-[60px]">
                      <CountUp value={stat.value} suffix={stat.suffix} />
                    </p>
                    <h3 className="font-display text-[16px] leading-[1.5] font-light tracking-[-0.54px] text-white/70 xl:text-[18px]">
                      {stat.label}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-white/45">
                      {stat.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-14">
            {legalExpertise.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08}>
                <div
                  className={`flex flex-col gap-4 border-b py-7 first:pt-0 last:border-0 sm:flex-row sm:gap-10 lg:gap-16 ${t.divider}`}
                >
                  <p
                    className={`font-display text-4xl font-light tracking-tight sm:w-40 sm:shrink-0 md:text-5xl ${t.value}`}
                  >
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </p>
                  <div className="max-w-3xl">
                    <h3
                      className={`text-xs font-medium uppercase tracking-[0.14em] ${t.statLabel}`}
                    >
                      {stat.label}
                    </h3>
                    <p className={`mt-2.5 text-sm leading-relaxed ${t.statBody}`}>
                      {stat.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
