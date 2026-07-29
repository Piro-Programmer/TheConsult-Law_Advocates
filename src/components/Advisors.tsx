import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { advisorsSection } from "@/lib/content";

export default function Advisors() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="container-base">
        <Reveal>
          <SectionLabel>{advisorsSection.label}</SectionLabel>
        </Reveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <h2 className="font-display text-3xl font-light leading-[1.15] tracking-tight text-ink md:text-5xl">
              {advisorsSection.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <p className="text-base leading-relaxed text-grey md:text-lg">
              {advisorsSection.body}
            </p>
          </Reveal>
        </div>

        {/* Advocacy's "Meet the team" banner image */}
        <Reveal>
          <div className="relative mt-14 aspect-21/9 overflow-hidden rounded-3xl bg-white">
            <Image
              src={advisorsSection.image}
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:max-w-3xl">
          {advisorsSection.people.map((person, i) => (
            <Reveal key={person.slug} delay={i * 0.1}>
              <Link href={`/people/${person.slug}`} className="group block">
                {/* Source portraits are ~398x390, so a square frame avoids
                    both heavy upscaling and an awkward crop. */}
                <div className="relative aspect-square overflow-hidden rounded-3xl bg-white">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="(min-width: 640px) 40vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 font-display text-lg text-ink">
                  {person.name}
                </h3>
                <p className="mt-1 text-sm text-grey">{person.role}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
