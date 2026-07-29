import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import BookCta from "@/components/BookCta";
import Reveal from "@/components/Reveal";
import { people } from "@/lib/people";
import { advisorsSection } from "@/lib/content";

export const metadata: Metadata = {
  title: "People | The Consult Law",
  description: advisorsSection.body,
};

export default function PeoplePage() {
  return (
    <>
      <PageHero
        label="Our advisors"
        title={advisorsSection.heading}
        body={advisorsSection.body}
      />

      <section className="bg-cream py-24 md:py-32">
        <div className="container-base">
          <div className="grid gap-6 sm:grid-cols-2 lg:max-w-3xl">
            {people.map((person, i) => (
              <Reveal key={person.slug} delay={i * 0.1}>
                <Link href={`/people/${person.slug}`} className="group block">
                  <div className="relative aspect-square overflow-hidden rounded-3xl bg-white">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      sizes="(min-width: 640px) 40vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h2 className="mt-5 font-display text-lg text-ink">
                    {person.name}
                  </h2>
                  <p className="mt-1 text-sm text-grey">{person.role}</p>
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
