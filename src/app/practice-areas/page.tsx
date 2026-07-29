import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import BookCta from "@/components/BookCta";
import Reveal from "@/components/Reveal";
import { practiceAreas } from "@/lib/practice-areas";

export const metadata: Metadata = {
  title: "Industries | The Consult Law",
  description: "Comprehensive legal solutions across every practice.",
};

export default function PracticeAreasPage() {
  return (
    <>
      <PageHero
        label="Industries"
        title="Comprehensive legal solutions across every practice."
      />

      <section className="bg-cream py-24 md:py-32">
        <div className="container-base">
          <div className="grid gap-6 md:grid-cols-2">
            {practiceAreas.map((area, i) => (
              <Reveal key={area.slug} delay={(i % 2) * 0.1}>
                <Link
                  href={`/practice-areas/${area.slug}`}
                  className="group flex h-full flex-col rounded-3xl bg-white p-8 transition-shadow duration-300 hover:shadow-xl hover:shadow-brand/5 md:p-10"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="font-display text-xl font-normal text-ink md:text-2xl">
                      {area.title}
                    </h2>
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
                    {area.description}
                  </p>
                  <ul className="mt-7 flex flex-wrap gap-2">
                    {area.tags.map((tag) => (
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

      <BookCta />
    </>
  );
}
