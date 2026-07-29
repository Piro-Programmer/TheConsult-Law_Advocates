import Link from "next/link";
import Button from "./Button";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { industries } from "@/lib/content";

export default function Industries() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="container-base">
        <Reveal>
          <SectionLabel>Industries</SectionLabel>
        </Reveal>

        <div className="mt-7 flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <h2 className="max-w-2xl font-display text-3xl font-light leading-[1.15] tracking-tight text-ink md:text-5xl">
              Comprehensive legal solutions across every practice.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Button href="/practice-areas" variant="outline">
              View all industries
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {industries.map((industry, i) => (
            <Reveal key={industry.slug} delay={(i % 2) * 0.1}>
              <Link
                href={`/practice-areas/${industry.slug}`}
                className="group flex h-full flex-col rounded-3xl bg-white p-8 transition-shadow duration-300 hover:shadow-xl hover:shadow-brand/5 md:p-10"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-normal text-ink md:text-2xl">
                    {industry.title}
                  </h3>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                    className="mt-1.5 shrink-0 text-brand transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    <path
                      d="M3 11 11 3M11 3H5M11 3v6"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-grey">
                  {industry.description}
                </p>

                <ul className="mt-7 flex flex-wrap gap-2">
                  {industry.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-ink/10 px-3.5 py-1.5 text-xs text-ink/60"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
