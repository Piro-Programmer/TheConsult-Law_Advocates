import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { industries } from "@/lib/content";

/** Advocacy's service-card treatment: photo with a number badge, text beneath. */
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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, i) => (
            <Reveal key={industry.slug} delay={(i % 4) * 0.08}>
              <Link
                href={`/practice-areas/${industry.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-black/5"
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    sizes="(min-width: 992px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-brand">
                    0{i + 1}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-lg font-normal text-ink">
                    {industry.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-grey">
                    {industry.description}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-1.5">
                    {industry.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-ink/10 px-3 py-1 text-[11px] text-ink/55"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand">
                    Learn more
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M3 11 11 3M11 3H5M11 3v6"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
