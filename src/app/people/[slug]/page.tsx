import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import BookCta from "@/components/BookCta";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { getPerson, people } from "@/lib/people";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return people.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const person = getPerson(slug);
  if (!person) return {};
  return {
    title: `${person.name} | The Consult Law`,
    description: person.bio[0],
  };
}

export default async function PersonPage({ params }: Params) {
  const { slug } = await params;
  const person = getPerson(slug);
  if (!person) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-brand pt-40 pb-20 md:pt-48 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/60 to-brand/30" />
        <div className="container-base relative grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionLabel tone="light">Our advisors</SectionLabel>
            <h1 className="mt-7 font-display text-4xl font-light leading-[1.08] tracking-tight text-white md:text-6xl">
              {person.name}
            </h1>
            <p className="mt-3 text-sm uppercase tracking-[0.14em] text-white/50">
              {person.role}
            </p>
            {person.strapline && (
              <p className="mt-6 max-w-xl font-display text-xl font-light text-white/80 md:text-2xl">
                {person.strapline}
              </p>
            )}
            <ul className="mt-8 flex flex-wrap gap-2">
              {person.leads.map((lead) => (
                <li
                  key={lead}
                  className="rounded-full border border-white/20 px-4 py-2 text-xs text-white/75"
                >
                  {lead}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-white/5">
              <Image
                src={person.image}
                alt={person.name}
                fill
                priority
                sizes="(min-width: 992px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="container-base">
          <Reveal>
            <blockquote className="max-w-3xl border-l-2 border-brand/30 pl-7">
              <p className="font-display text-xl font-light leading-[1.5] tracking-tight text-ink md:text-2xl">
                “{person.quote}”
              </p>
              <footer className="mt-5 text-sm text-grey">
                — {person.name}, {person.role}
              </footer>
            </blockquote>
          </Reveal>

          <div className="mt-14 max-w-3xl">
            {person.bio.map((para, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="mt-5 text-base leading-[1.75] text-grey first:mt-0">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>

          {person.lists && (
            <div className="mt-16 grid gap-10 md:grid-cols-3">
              {person.lists.map((list, i) => (
                <Reveal key={list.heading} delay={i * 0.08}>
                  <h2 className="font-display text-lg font-normal text-ink">
                    {list.heading}
                  </h2>
                  <ul className="mt-5 space-y-3">
                    {list.items.map((item) => (
                      <li
                        key={item}
                        className="relative pl-5 text-sm leading-relaxed text-grey before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand/40"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          )}

          <div className="mt-16">
            <Link
              href="/people"
              className="text-sm font-medium text-brand hover:underline"
            >
              ← Back to all advisors
            </Link>
          </div>
        </div>
      </section>

      <BookCta />
    </>
  );
}
