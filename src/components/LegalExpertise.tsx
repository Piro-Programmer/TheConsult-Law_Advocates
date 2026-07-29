import Image from "next/image";
import CountUp from "./CountUp";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { legalExpertise } from "@/lib/content";

type Tone = "dark" | "white" | "cream";

/**
 * Reused on the homepage and /about — `tone` keeps the alternating
 * dark → light → cream section rhythm intact wherever it lands.
 */
export default function LegalExpertise({ tone = "dark" }: { tone?: Tone }) {
  const dark = tone === "dark";

  const t = {
    section: dark ? "bg-brand" : tone === "cream" ? "bg-cream" : "bg-white",
    heading: dark ? "text-white" : "text-ink",
    body: dark ? "text-white/70" : "text-grey",
    value: dark ? "text-white" : "text-brand",
    statLabel: dark ? "text-white/50" : "text-ink/50",
    statBody: dark ? "text-white/70" : "text-grey",
    divider: dark ? "border-white/10" : "border-ink/10",
    imageBg: dark ? "bg-white/5" : tone === "cream" ? "bg-white" : "bg-cream",
  };

  return (
    <section className={`${t.section} py-24 md:py-32`}>
      <div className="container-base">
        <Reveal>
          <SectionLabel tone={dark ? "light" : "dark"}>
            {legalExpertise.label}
          </SectionLabel>
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

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            {/* 6/7 matches the source's native 646x754 — no crop. */}
            <div
              className={`relative aspect-6/7 overflow-hidden rounded-3xl ${t.imageBg}`}
            >
              <Image
                src={legalExpertise.image}
                alt=""
                fill
                sizes="(min-width: 992px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            {legalExpertise.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08}>
                <div
                  className={`flex flex-col gap-4 border-b py-7 first:pt-0 last:border-0 sm:flex-row sm:gap-10 ${t.divider}`}
                >
                  <p
                    className={`font-display text-4xl font-light tracking-tight sm:w-32 sm:shrink-0 md:text-5xl ${t.value}`}
                  >
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </p>
                  <div>
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
        </div>
      </div>
    </section>
  );
}
