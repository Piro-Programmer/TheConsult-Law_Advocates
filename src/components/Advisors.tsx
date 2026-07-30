import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { advisorsSection } from "@/lib/content";

/**
 * Advocacy's team grid: a bordered card per person holding a square portrait
 * with the name and role beneath it, closing on a link to the full list.
 *
 * The template runs seven across three columns; we have two, so the grid stops
 * at two columns — a three-column track would leave a conspicuous hole rather
 * than reading as deliberate.
 */
export default function Advisors() {
  return (
    <section className="bg-ink-deep py-[100px] xl:py-[150px]">
      <div className="container-wide flex flex-col gap-[70px]">
        <Reveal className="flex flex-col gap-5">
          <Eyebrow>{advisorsSection.label}</Eyebrow>
          <h2 className="max-w-3xl font-display text-[32px] leading-[1.2] font-light tracking-[-1.26px] text-white lg:text-[38px] xl:text-[42px]">
            {advisorsSection.heading}
          </h2>
          <p className="max-w-2xl font-display text-[16px] leading-[1.5] font-light tracking-[-0.54px] text-white/70 xl:text-[18px]">
            {advisorsSection.body}
          </p>
        </Reveal>

        <div className="flex flex-col items-start gap-10">
          <div className="grid w-full gap-5 sm:grid-cols-2 lg:max-w-[836px]">
            {advisorsSection.people.map((person, i) => (
              <Reveal key={person.slug} delay={i * 0.1}>
                <Link
                  href={`/people/${person.slug}`}
                  className="group flex h-full flex-col gap-5 border border-white/10 p-5 transition-colors duration-300 hover:border-white/25"
                >
                  {/* Source portraits are ~398x390, so a square frame avoids
                      both heavy upscaling and an awkward crop. */}
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      sizes="(min-width: 640px) 40vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <h3 className="font-display text-[24px] leading-[1.2] font-light tracking-[-0.9px] text-white xl:text-[30px]">
                      {person.name}
                    </h3>
                    <p className="font-display text-[16px] leading-[1.5] font-light tracking-[-0.54px] text-white xl:text-[18px]">
                      {person.role}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <Button href="/people" variant="light" size="sm">
              View all people
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
