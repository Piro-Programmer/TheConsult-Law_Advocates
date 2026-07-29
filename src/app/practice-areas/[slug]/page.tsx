import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import BookCta from "@/components/BookCta";
import Reveal from "@/components/Reveal";
import { getPracticeArea, practiceAreas } from "@/lib/practice-areas";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return practiceAreas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) return {};
  return {
    title: `${area.title} | The Consult Law`,
    description: area.description,
  };
}

export default async function PracticeAreaPage({ params }: Params) {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) notFound();

  const others = practiceAreas.filter((a) => a.slug !== area.slug);

  return (
    <>
      <PageHero label="Industries" title={area.title} body={area.description} />

      <section className="bg-white py-24 md:py-32">
        <div className="container-base">
          <ol className="max-w-4xl">
            {area.topics.map((topic, i) => (
              <Reveal key={topic.title} delay={i * 0.06}>
                <li className="grid gap-4 border-b border-ink/10 py-9 first:pt-0 last:border-0 md:grid-cols-12 md:gap-10">
                  <span className="font-display text-sm tabular-nums text-brand/50 md:col-span-1">
                    {topic.number}
                  </span>
                  <div className="md:col-span-11">
                    <h2 className="font-display text-xl font-normal text-ink md:text-2xl">
                      {topic.title}
                    </h2>
                    <p className="mt-3.5 text-base leading-[1.75] text-grey">
                      {topic.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-24">
        <div className="container-base">
          <h2 className="font-display text-2xl font-light tracking-tight text-ink md:text-3xl">
            Other practices
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/practice-areas/${other.slug}`}
                className="group rounded-2xl bg-white p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-brand/5"
              >
                <h3 className="font-display text-base text-ink">{other.title}</h3>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-brand">
                  View
                  <svg
                    width="12"
                    height="12"
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BookCta />
    </>
  );
}
