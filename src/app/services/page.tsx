import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import HowWeWork from "@/components/HowWeWork";
import Faq from "@/components/Faq";
import BookCta from "@/components/BookCta";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { practiceAreas } from "@/lib/practice-areas";

export const metadata: Metadata = {
  title: "Services | The Consult Law",
  description: "Focused legal services for the challenges that matter most.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Focused legal services for the challenges that matter most."
      />

      <section className="bg-white py-24 md:py-32">
        <div className="container-base">
          <ol className="max-w-4xl">
            {practiceAreas.map((area, i) => (
              <Reveal key={area.slug} delay={i * 0.06}>
                <li className="grid gap-4 border-b border-ink/10 py-9 first:pt-0 last:border-0 md:grid-cols-12 md:gap-10">
                  <span className="font-display text-sm tabular-nums text-brand/50 md:col-span-1">
                    00{i + 1}
                  </span>
                  <div className="md:col-span-11">
                    <Link
                      href={`/practice-areas/${area.slug}`}
                      className="group inline-flex items-center gap-2"
                    >
                      <h2 className="font-display text-xl font-normal text-ink md:text-2xl">
                        {area.title}
                      </h2>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden="true"
                        className="text-brand transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      >
                        <path
                          d="M3 11 11 3M11 3H5M11 3v6"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                    <p className="mt-3 text-base leading-[1.75] text-grey">
                      {area.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-cream py-24 md:py-32">
        <div className="container-base">
          <Reveal>
            <SectionLabel>Every service</SectionLabel>
            <h2 className="mt-7 font-display text-3xl font-light leading-[1.15] tracking-tight text-ink md:text-5xl">
              Every service, one click away.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {practiceAreas.map((area, i) => (
              <Reveal key={area.slug} delay={(i % 2) * 0.1}>
                <div className="flex h-full flex-col rounded-3xl bg-white p-8 md:p-10">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-lg font-normal text-ink md:text-xl">
                      {area.title}
                    </h3>
                    <Link
                      href={`/practice-areas/${area.slug}`}
                      className="shrink-0 text-xs font-medium text-brand hover:underline"
                    >
                      View category →
                    </Link>
                  </div>
                  <ul className="mt-6 space-y-2.5">
                    {area.tags.map((tag) => (
                      <li key={tag}>
                        <Link
                          href={`/practice-areas/${area.slug}`}
                          className="text-sm text-grey transition-colors hover:text-brand"
                        >
                          {tag}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <HowWeWork />
      <Faq />
      <BookCta />
    </>
  );
}
